#!/usr/bin/env python3
"""
color_depth.py - paint "depth glyphs": any closed glyph shape gets
  (1) a CORE gradient whose centre of mass can sit centred / below / beside
      / diagonal from centre, and
  (2) an inner-border RIM colour that follows the silhouette and blends
      softly into the core.

The shape itself is an input (an SVG path from a shape skill, an .svg file,
or one of a few built-in fallback shapes). This script only does colour.

Usage examples
  # 12 random variations of built-in shapes -> SVG + PNG + gallery.html
  python color_depth.py random --count 12 --seed 7 --out ./out

  # paint a shape coming from another skill / file with random colour specs
  python color_depth.py random --count 6 --shape-svg glyph.svg --out ./out

  # exact control: a JSON spec (single object or list) - see SKILL.md
  python color_depth.py spec specs.json --out ./out

  # list built-in shapes, palettes, moods
  python color_depth.py info

Only the Python standard library is needed. PNG export uses a headless
Chromium-family browser (Edge/Chrome/Chromium) found automatically or via
the COLOR_DEPTH_BROWSER env var. Use --no-png to skip PNGs.
"""
import argparse, colorsys, json, math, os, random, re, shutil, subprocess, sys, tempfile
from pathlib import Path

VB = 1000.0             # canonical viewBox for built-in shapes
C = VB / 2

# --------------------------------------------------------------------------
# colour maths (sRGB <-> OKLab / OKLCH) - used to derive rim moods
# --------------------------------------------------------------------------
def hex_to_rgb(h):
    h = h.strip().lstrip('#')
    if len(h) == 3:
        h = ''.join(c * 2 for c in h)
    return tuple(int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))

def rgb_to_hex(rgb):
    return '#' + ''.join(f'{max(0, min(255, round(c * 255))):02x}' for c in rgb)

def _lin(c):   return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
def _delin(c): return 12.92 * c if c <= 0.0031308 else 1.055 * (max(c, 0) ** (1 / 2.4)) - 0.055

def rgb_to_oklch(rgb):
    r, g, b = (_lin(c) for c in rgb)
    l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b
    m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b
    s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b
    l, m, s = (math.copysign(abs(x) ** (1 / 3), x) for x in (l, m, s))
    L = 0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s
    A = 1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s
    B = 0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s
    return L, math.hypot(A, B), math.degrees(math.atan2(B, A)) % 360

def oklch_to_rgb(L, Cc, H):
    A, B = Cc * math.cos(math.radians(H)), Cc * math.sin(math.radians(H))
    l = (L + 0.3963377774 * A + 0.2158037573 * B) ** 3
    m = (L - 0.1055613458 * A - 0.0638541728 * B) ** 3
    s = (L - 0.0894841775 * A - 1.2914855480 * B) ** 3
    r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s
    g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s
    b = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
    return tuple(_delin(c) for c in (r, g, b))

def oklch_hex(L, Cc, H):
    """OKLCH -> hex, reducing chroma until the colour fits in sRGB."""
    L = max(0.0, min(1.0, L))
    for _ in range(60):
        rgb = oklch_to_rgb(L, Cc, H)
        if all(-0.001 <= c <= 1.001 for c in rgb):
            return rgb_to_hex(rgb)
        Cc *= 0.93
    return rgb_to_hex(oklch_to_rgb(L, 0, H))

def lch(hexc):
    return rgb_to_oklch(hex_to_rgb(hexc))

# --------------------------------------------------------------------------
# rim moods - derived from the core colours unless rim colours are given
# --------------------------------------------------------------------------
MOODS = {
    'white':    'pale near-white rim tinted with the core hue -> outer depth / soft lit edge',
    'color':    'a different, harmonious hue -> inner depth (the edge reads as a second layer)',
    'shadow':   'deeper, darker shade of the core -> shadow-like depth, the form sinks inward',
    'luminous': 'brighter, more saturated variant of the core hue -> glowing / luminating edge',
}

def derive_rim(core_colors, mood, rng):
    Ls = [lch(c) for c in core_colors]
    # the "anchor" core colour is the most chromatic one - it carries the hue
    L0, C0, H0 = max(Ls, key=lambda t: t[1])
    Lmin = min(t[0] for t in Ls)
    Lmax = max(t[0] for t in Ls)
    if mood == 'white':
        return oklch_hex(0.945, min(0.05, C0 * 0.3 + 0.015), H0)
    if mood == 'shadow':
        return oklch_hex(max(0.22, Lmin - rng.uniform(0.18, 0.28)), max(0.06, C0 * 1.1), (H0 + rng.uniform(-12, 12)) % 360)
    if mood == 'luminous':
        return oklch_hex(min(0.93, Lmax + rng.uniform(0.02, 0.08)), max(0.12, C0 * 1.45), (H0 + rng.uniform(-18, 18)) % 360)
    if mood == 'color':
        shift = rng.choice([-1, 1]) * rng.uniform(55, 150)
        return oklch_hex(min(0.88, max(0.55, (L0 + Lmax) / 2 + rng.uniform(-0.05, 0.05))), max(0.09, C0 * rng.uniform(0.8, 1.2)), (H0 + shift) % 360)
    raise ValueError(f'unknown rim mood {mood!r}; choose from {list(MOODS)}')

# --------------------------------------------------------------------------
# built-in fallback shapes (polar).  Real shapes normally come from the
# shape skill; these exist so the colour system can run on its own.
# --------------------------------------------------------------------------
def _angdist(a, b):
    d = (a - b) % (2 * math.pi)
    return min(d, 2 * math.pi - d)

def _lobes(n, depth, roundness):
    return lambda t: 1 - depth * (1 - abs(math.cos(n * t / 2)) ** roundness)

def _petals(n, depth, tip):
    return lambda t: (1 - depth) + depth * (1 - (1 - abs(math.cos(n * t / 2))) ** tip)

def _finials(base, angles, h, w=0.035):
    return lambda t: base(t) + sum(h * math.exp(-_angdist(t, a) / w) for a in angles)

def _superellipse(m):
    return lambda t: (abs(math.cos(t)) ** m + abs(math.sin(t)) ** m) ** (-1 / m)

CARD = [i * math.pi / 2 for i in range(4)]
DIAG = [math.pi / 4 + i * math.pi / 2 for i in range(4)]

def _butterfly(t):
    d = min(_angdist(t, a) for a in CARD)
    return _superellipse(5)(t) * (1 - 0.38 * math.exp(-(d / 0.2) ** 2))

def _cloud(t):
    return _lobes(4, 0.2, 0.55)(t) * (1 - 0.035 * (1 - abs(math.cos(6 * t))))

SHAPES = {
    'quatrefoil':        (_lobes(4, 0.22, 0.6), 45),
    'plump-quatrefoil':  (_lobes(4, 0.12, 0.45), 45),
    'cloud-quatrefoil':  (_cloud, 45),
    'rosette-8':         (_lobes(8, 0.11, 0.6), 0),
    'scallop-14':        (_finials(_lobes(14, 0.05, 0.7), CARD, 0.10), 0),
    'cusped-medallion':  (_finials(_lobes(8, 0.06, 0.9), CARD, 0.16), 22.5),
    'ogee-quatrefoil':   (_finials(_lobes(4, 0.2, 0.6), DIAG, 0.13), 0),
    'lotus-8':           (_petals(8, 0.5, 0.6), 0),
    'lotus-6':           (_petals(6, 0.38, 0.75), 0),
    'star-4':            (_petals(4, 0.55, 0.55), 0),
    'soft-star-8':       (_petals(8, 0.17, 0.8), 0),
    'butterfly':         (_butterfly, 0),
}

def polar_path(fn, rot_deg=0.0, radius=400.0, n=720):
    rot = math.radians(rot_deg)
    pts = []
    for i in range(n):
        t = 2 * math.pi * i / n
        pts.append((t, fn(t - rot)))
    rmax = max(r for _, r in pts)
    out = []
    for i, (t, r) in enumerate(pts):
        rr = r / rmax * radius
        x, y = C + rr * math.sin(t), C - rr * math.cos(t)   # t=0 points up
        out.append(f"{'M' if i == 0 else 'L'}{x:.1f} {y:.1f}")
    return ' '.join(out) + ' Z'

# --------------------------------------------------------------------------
# shape input from files
# --------------------------------------------------------------------------
def load_shape_svg(path):
    """Return (d, (minx, miny, w, h)) from the first <path> (all paths joined)."""
    txt = Path(path).read_text(encoding='utf-8')
    ds = re.findall(r'<path[^>]*?\sd\s*=\s*"([^"]+)"', txt, re.S) or re.findall(r"<path[^>]*?\sd\s*=\s*'([^']+)'", txt, re.S)
    if not ds:
        raise SystemExit(f'{path}: no <path d="..."> found (convert shapes to paths first)')
    vb = re.search(r'viewBox\s*=\s*["\']([^"\']+)["\']', txt)
    if vb:
        box = tuple(float(v) for v in re.split(r'[\s,]+', vb.group(1).strip()))
    else:
        w = re.search(r'\swidth\s*=\s*["\']([\d.]+)', txt); h = re.search(r'\sheight\s*=\s*["\']([\d.]+)', txt)
        box = (0, 0, float(w.group(1)) if w else VB, float(h.group(1)) if h else VB)
    return ' '.join(ds), box

def resolve_shape(shape):
    """shape: preset name | {'preset','rotate'} | {'path','viewBox'} | {'svg': file}."""
    if isinstance(shape, str):
        shape = {'preset': shape}
    if 'svg' in shape:
        d, box = load_shape_svg(shape['svg'])
        return d, box, Path(shape['svg']).stem
    if 'path' in shape:
        box = shape.get('viewBox', [0, 0, VB, VB])
        if isinstance(box, str):
            box = [float(v) for v in re.split(r'[\s,]+', box.strip())]
        return shape['path'], tuple(box), shape.get('name', 'custom')
    name = shape['preset']
    if name not in SHAPES:
        raise SystemExit(f'unknown shape preset {name!r}; available: {", ".join(SHAPES)}')
    fn, rot = SHAPES[name]
    return polar_path(fn, rot + shape.get('rotate', 0)), (0, 0, VB, VB), name

# --------------------------------------------------------------------------
# focus / direction helpers
# --------------------------------------------------------------------------
FOCUS = {
    'center': (0, 0), 'below': (0, 1), 'above': (0, -1), 'left': (-1, 0), 'right': (1, 0),
    'below-left': (-.7, .7), 'below-right': (.7, .7), 'above-left': (-.7, -.7), 'above-right': (.7, -.7),
}

def focus_vec(f):
    if isinstance(f, (list, tuple)):
        return float(f[0]), float(f[1])
    if f not in FOCUS:
        raise SystemExit(f'unknown focus {f!r}; use one of {list(FOCUS)} or [dx, dy]')
    return FOCUS[f]

# --------------------------------------------------------------------------
# the renderer
# --------------------------------------------------------------------------
def build_svg(spec, size=512, uid='g'):
    d, (bx, by, bw, bh), shape_name = resolve_shape(spec['shape'])
    cx, cy = bx + bw / 2, by + bh / 2
    R = min(bw, bh) * 0.42                    # nominal glyph radius in shape units

    core = spec['core']
    rim = spec['rim']
    cols = core['colors']
    fx, fy = focus_vec(core.get('focus', 'center'))
    ctype = core.get('type', 'linear')

    # rim colour(s): explicit, or derived from mood
    rim_cols = rim.get('colors') or [derive_rim(cols, rim.get('mood', 'color'), random.Random(spec.get('seed', 0)))]
    if isinstance(rim_cols, str):
        rim_cols = [rim_cols]
    # echo: the far end of the core gradient takes the rim colour, so core and
    # rim merge on that side (the "same as the inner border" off-centre end)
    if core.get('echo_rim'):
        cols = list(cols[:-1]) + [rim_cols[-1]] if len(cols) > 2 else list(cols) + [rim_cols[-1]]

    width = float(rim.get('width', 0.2))     # fraction of R taken by the rim band
    soft = float(rim.get('softness', 0.6))   # 0 = crisp band, 1 = very diffuse
    erode = R * width * (1 - 0.6 * soft)
    blur = R * width * (0.25 + 0.75 * soft)
    shift = float(core.get('shift', 0.07))   # how far the core's mass moves with focus
    mdx, mdy = fx * R * shift, fy * R * shift

    stops = lambda cs, ofs=None: ''.join(
        f'<stop offset="{(ofs[i] if ofs else i / (len(cs) - 1)):.3f}" stop-color="{c}"/>' for i, c in enumerate(cs))

    if ctype == 'radial':
        gcx, gcy = cx + fx * R * 0.35, cy + fy * R * 0.35
        r = R * float(core.get('spread', 1.1))
        grad = (f'<radialGradient id="{uid}-core" gradientUnits="userSpaceOnUse" cx="{gcx:.1f}" cy="{gcy:.1f}" '
                f'r="{r:.1f}" fx="{gcx:.1f}" fy="{gcy:.1f}">{stops(cols)}</radialGradient>')
    else:
        ang = math.radians(float(core.get('angle', 180)))      # CSS-style: 180 = top -> bottom
        ux, uy = math.sin(ang), -math.cos(ang)
        span = R * float(core.get('spread', 1.0))
        ox, oy = cx + fx * R * 0.25, cy + fy * R * 0.25
        grad = (f'<linearGradient id="{uid}-core" gradientUnits="userSpaceOnUse" x1="{ox - ux * span:.1f}" '
                f'y1="{oy - uy * span:.1f}" x2="{ox + ux * span:.1f}" y2="{oy + uy * span:.1f}">{stops(cols)}</linearGradient>')

    if len(rim_cols) > 1:
        rang = math.radians(float(rim.get('angle', 180)))
        ux, uy = math.sin(rang), -math.cos(rang)
        rim_def = (f'<linearGradient id="{uid}-rim" gradientUnits="userSpaceOnUse" x1="{cx - ux * R:.1f}" y1="{cy - uy * R:.1f}" '
                   f'x2="{cx + ux * R:.1f}" y2="{cy + uy * R:.1f}">{stops(rim_cols)}</linearGradient>')
        rim_fill = f'url(#{uid}-rim)'
    else:
        rim_def, rim_fill = '', rim_cols[0]

    # optional edge accent: a hairline just inside the silhouette, so pale rims
    # (white mood) still read against a white page. Default on for white.
    edge = rim.get('edge', rim.get('mood') == 'white')
    edge_svg = ''
    if edge:
        ecol = edge if isinstance(edge, str) else oklch_hex(min(0.82, lch(rim_cols[0])[0] - 0.14), max(0.05, max(lch(c)[1] for c in cols) * 0.8), max((lch(c) for c in cols), key=lambda t: t[1])[2])
        edge_svg = f'<path d="{d}" fill="none" stroke="{ecol}" stroke-opacity="{float(rim.get("edge_opacity", 0.55)):.2f}" stroke-width="{R * 0.03:.1f}"/>'
    pad = R * 0.6
    vbx, vby, vbw, vbh = bx, by, bw, bh
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vbx:g} {vby:g} {vbw:g} {vbh:g}" width="{size}" height="{size * vbh / vbw:.0f}">
  <defs>
    {grad}
    {rim_def}
    <clipPath id="{uid}-clip"><path d="{d}"/></clipPath>
    <filter id="{uid}-soft" filterUnits="userSpaceOnUse" x="{bx - pad:.0f}" y="{by - pad:.0f}" width="{bw + 2 * pad:.0f}" height="{bh + 2 * pad:.0f}" color-interpolation-filters="sRGB">
      <feMorphology operator="erode" radius="{erode:.1f}"/>
      <feGaussianBlur stdDeviation="{blur:.1f}"/>
    </filter>
    <mask id="{uid}-coremask" maskUnits="userSpaceOnUse" x="{bx - pad:.0f}" y="{by - pad:.0f}" width="{bw + 2 * pad:.0f}" height="{bh + 2 * pad:.0f}">
      <path d="{d}" fill="#fff" filter="url(#{uid}-soft)" transform="translate({mdx:.1f} {mdy:.1f})"/>
    </mask>
  </defs>
  <g clip-path="url(#{uid}-clip)">
    <rect x="{bx:g}" y="{by:g}" width="{bw:g}" height="{bh:g}" fill="{rim_fill}"/>
    <rect x="{bx:g}" y="{by:g}" width="{bw:g}" height="{bh:g}" fill="url(#{uid}-core)" mask="url(#{uid}-coremask)"/>
    {edge_svg}
  </g>
</svg>
'''
    meta = {'shape': shape_name, 'core_input': list(core['colors']), 'core_colors': cols, 'rim_colors': rim_cols}
    return svg, meta

# --------------------------------------------------------------------------
# random variation
# --------------------------------------------------------------------------
PALETTES = {   # core gradients, first stop = start of gradient direction
    'periwinkle-ice':  ['#ffffff', '#8fa0f7'],
    'blush-coral':     ['#f4b6cf', '#ee8f8a'],
    'butter':          ['#fff3c4', '#f6cf7e'],
    'sky-ice':         ['#dfe6ff', '#a9b8f6'],
    'leaf-mist':       ['#7fb544', '#d6e6c4'],
    'moss-blush':      ['#86ad4a', '#f6dfe4'],
    'tangerine':       ['#f6a24a', '#e8762a'],
    'deep-olive':      ['#3f5d22', '#5b7a2c'],
    'indigo':          ['#5466e0', '#3a3fc4'],
    'rose-violet':     ['#f7a6cf', '#b39bea'],
    'crimson-blush':   ['#c23a42', '#f2c6d0'],
    'apricot-glow':    ['#ffe2b8', '#f08a3a'],
    'split-dusk':      ['#c9d3ff', '#f07a1e'],
    'lavender-sky':    ['#c9a0dc', '#a8b6ff'],
    'indigo-dusk':     ['#3433d0', '#8f82d0'],
    # --- Sarvam: gradient pairs from the official gateway glyphs on sarvam.ai (assets/glyphs)
    'sr-periwinkle':       ['#fbfbfb', '#8196f8'],
    'sr-sky':              ['#e8effc', '#81a0e9'],
    'sr-deep-indigo':      ['#a7c0f1', '#2225a9'],
    'sr-saffron':          ['#ffcb79', '#d5650f'],
    'sr-ember-blush':      ['#efabc5', '#e6651b'],
    'sr-sindoor-marigold': ['#ffcb79', '#b81514'],
    'sr-leaf-blush':       ['#f9d5e1', '#6ea335'],
    'sr-forest':           ['#6ea335', '#293a18'],
    'sr-rose':             ['#fceaf0', '#ea669f'],
    'sr-marigold-cream':   ['#e9eac2', '#fecd7c'],
    'sr-indigo-night':     ['#212191', '#81a0e9'],
}

def oklab_dist(a, b):
    def lab(h):
        L, Cc, H = lch(h)
        return L, Cc * math.cos(math.radians(H)), Cc * math.sin(math.radians(H))
    return math.dist(lab(a), lab(b))

def rim_contrast(core_colors, rim_color):
    """Smallest OKLab distance between the rim and any core stop. Below ~0.09
    the rim melts into the core and the glyph loses its edge / depth."""
    return min(oklab_dist(c, rim_color) for c in core_colors)

def random_spec(rng, shape=None, palette=None, mood=None):
    pal_name = palette or rng.choice(list(PALETTES))
    cols = PALETTES[pal_name] if pal_name in PALETTES else [c.strip() for c in pal_name.split(',')]
    m = mood
    if not m:   # pick a mood whose rim actually separates from this core
        order = list(MOODS); rng.shuffle(order)
        m = next((mm for mm in order if rim_contrast(cols, derive_rim(cols, mm, random.Random(1))) >= 0.09), 'color')
    focus = rng.choices(list(FOCUS), weights=[3, 3, 1, 1, 1, 1, 1, 1, 1])[0]
    if rng.random() < 0.6:
        core = {'colors': cols, 'type': 'linear', 'angle': rng.choice([180, 180, 160, 200, 135, 225, 90, 0]), 'focus': focus}
    else:
        core = {'colors': cols, 'type': 'radial', 'focus': focus, 'spread': round(rng.uniform(0.9, 1.3), 2)}
    if m == 'color' and rng.random() < 0.4:
        core['echo_rim'] = True
    shp = shape or rng.choice(list(SHAPES))
    thin = isinstance(shp, str) and shp in ('star-4', 'lotus-8', 'lotus-6', 'soft-star-8')
    rim_col = derive_rim(cols, m, rng)
    for _ in range(8):           # re-roll hue-shifted / random rims that melt into the core
        if rim_contrast(cols, rim_col) >= 0.09:
            break
        rim_col = derive_rim(cols, m, rng)
    rim = {'mood': m, 'colors': [rim_col], 'width': round(rng.uniform(0.1, 0.17) if thin else rng.uniform(0.12, 0.32), 2),
           'softness': round(rng.uniform(0.35, 0.85), 2)}
    return {'shape': shp, 'core': core, 'rim': rim, 'palette': pal_name, 'seed': rng.randrange(1 << 30)}

# --------------------------------------------------------------------------
# output: SVG, PNG (headless browser), gallery
# --------------------------------------------------------------------------
def find_browser():
    env = os.environ.get('COLOR_DEPTH_BROWSER')
    if env and Path(env).exists():
        return env
    cands = [r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
             r'C:\Program Files\Microsoft\Edge\Application\msedge.exe',
             r'C:\Program Files\Google\Chrome\Application\chrome.exe',
             '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
             '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge']
    for c in cands:
        if Path(c).exists():
            return c
    for n in ('msedge', 'google-chrome', 'chromium', 'chromium-browser', 'chrome'):
        p = shutil.which(n)
        if p:
            return p
    return None

def svg_to_png(svg_path, png_path, size, browser):
    html = (f'<!doctype html><html><head><style>html,body{{margin:0;background:transparent}}'
            f'img{{display:block;width:{size}px;height:{size}px}}</style></head>'
            f'<body><img src="{Path(svg_path).resolve().as_uri()}"></body></html>')
    with tempfile.TemporaryDirectory() as td:
        hp = Path(td) / 'r.html'
        hp.write_text(html, encoding='utf-8')
        cmd = [browser, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
               f'--user-data-dir={td}/prof', '--default-background-color=00000000', '--force-device-scale-factor=1',
               f'--window-size={size},{size}', f'--screenshot={Path(png_path).resolve()}', hp.as_uri()]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=60)
    return Path(png_path).exists()

def gallery(out, items):
    cards = '\n'.join(
        f'<figure><div class="tile"><img src="{i["file"]}.svg" alt=""></div><figcaption><b>{i["name"]}</b>'
        f'<span>{i["desc"]}</span></figcaption></figure>' for i in items)
    (out / 'gallery.html').write_text(f'''<!doctype html><html><head><meta charset="utf-8"><title>Color depth glyphs</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>body{{margin:0;padding:24px 16px;background:#fafafa;font:12px ui-monospace,Menlo,Consolas,monospace;color:#555}}
main{{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:14px;max-width:1200px;margin:auto}}
figure{{margin:0;background:#fff;border:1px solid #eee;border-radius:16px;padding:16px 10px 10px;text-align:center}}
.tile img{{width:96px;height:96px}} figcaption{{margin-top:8px;display:flex;flex-direction:column;gap:3px}}
figcaption span{{font-size:10px;color:#999;line-height:1.35}}</style></head>
<body><main>{cards}</main></body></html>''', encoding='utf-8')

def describe(spec, meta):
    c = spec['core']
    kind = c.get('type', 'linear') + ('' if c.get('type') == 'radial' else f" {c.get('angle', 180)}deg")
    echo = ' +echo' if c.get('echo_rim') else ''
    return f"{meta['shape']} | core {kind} @{c.get('focus', 'center')}{echo} | rim {spec['rim'].get('mood', 'custom')}"

def render_all(specs, out, size, png, prefix):
    out.mkdir(parents=True, exist_ok=True)
    browser = find_browser() if png else None
    if png and not browser:
        print('! no Edge/Chrome found - skipping PNG (set COLOR_DEPTH_BROWSER)', file=sys.stderr)
    items, manifest = [], []
    for i, spec in enumerate(specs, 1):
        name = spec.get('name') or f'{prefix}-{i:02d}'
        svg, meta = build_svg(spec, size=size, uid=re.sub(r'[^a-zA-Z0-9]', '', name) or f'g{i}')
        (out / f'{name}.svg').write_text(svg, encoding='utf-8')
        ok = svg_to_png(out / f'{name}.svg', out / f'{name}.png', size, browser) if browser else False
        items.append({'name': name, 'file': name, 'desc': describe(spec, meta)})
        manifest.append({'name': name, 'spec': spec, 'resolved': meta, 'png': ok})
        warn = ''
        if rim_contrast(meta['core_input'], meta['rim_colors'][0]) < 0.09:
            warn = '  ! low rim/core contrast - edge may vanish'
        print(f'{name}: {describe(spec, meta)}' + (' [png]' if ok else '') + warn)
    (out / 'manifest.json').write_text(json.dumps(manifest, indent=2), encoding='utf-8')
    gallery(out, items)
    print(f'-> {out.resolve()}  (gallery.html, manifest.json)')

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest='cmd', required=True)
    for name in ('random', 'spec'):
        p = sub.add_parser(name)
        if name == 'spec':
            p.add_argument('spec_file')
        p.add_argument('--out', default='color-depth-out')
        p.add_argument('--size', type=int, default=512)
        p.add_argument('--no-png', action='store_true')
        p.add_argument('--prefix', default='glyph')
        if name == 'random':
            p.add_argument('--count', type=int, default=12)
            p.add_argument('--seed', type=int, default=None)
            p.add_argument('--shape', help='built-in preset name (default: vary)')
            p.add_argument('--shape-svg', nargs='+', help='one or more SVG files whose <path> is the glyph shape')
            p.add_argument('--palette', help='palette name or comma-separated core hexes')
            p.add_argument('--mood', choices=list(MOODS))
    sub.add_parser('info')
    a = ap.parse_args()

    if a.cmd == 'info':
        print('shapes  :', ', '.join(SHAPES)); print('palettes:', ', '.join(PALETTES))
        print('focus   :', ', '.join(FOCUS))
        for k, v in MOODS.items(): print(f'mood {k:9s}: {v}')
        return
    if a.cmd == 'spec':
        data = json.loads(Path(a.spec_file).read_text(encoding='utf-8'))
        specs = data if isinstance(data, list) else [data]
    else:
        rng = random.Random(a.seed)
        shapes = [{'svg': s} for s in a.shape_svg] if a.shape_svg else None
        pool_shapes = list(SHAPES); rng.shuffle(pool_shapes)
        pool_pals = list(PALETTES); rng.shuffle(pool_pals)
        moods = list(MOODS)
        specs = []
        for i in range(a.count):
            shp = shapes[i % len(shapes)] if shapes else (a.shape or pool_shapes[i % len(pool_shapes)])
            pal = a.palette or pool_pals[i % len(pool_pals)]
            mood = a.mood
            if not mood:   # rotate moods for variety, but skip ones that melt into this core
                pc = PALETTES.get(pal) or [c.strip() for c in pal.split(',')]
                order = moods[i % 4:] + moods[:i % 4]
                mood = next((mm for mm in order if rim_contrast(pc, derive_rim(pc, mm, random.Random(1))) >= 0.09), 'color')
            specs.append(random_spec(rng, shape=shp, palette=pal, mood=mood))
    render_all(specs, Path(a.out), a.size, not a.no_png, a.prefix)

if __name__ == '__main__':
    main()
