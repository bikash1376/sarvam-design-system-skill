"""Sarvam embed images: glass glyph tiles and wide pastel embeds (SVG + optional PNG).

Two kinds, both built only from Sarvam assets and tokens:
  tile  rounded-square app/feature tile: deep-to-light gradient, inner glow, a frosted-glass
        OUTLINE of a gateway glyph (assets/glyphs/model-XX.svg) in the centre.
  wide  link/OG/blog embed: soft two-hue pastel gradient + centre haze + film grain, the Sarvam
        mandala as faint huge arcs cropped at the edges, a glass line icon in the centre.

Usage
  python tools/embed/embed.py tile --palette rose --glyph model-03 --out out/tile.svg --png
  python tools/embed/embed.py wide --palette lilac --icon globe --size 1200x520 --out out/wide.svg --png
  python tools/embed/embed.py --list          # palettes, glyphs, icons, size presets

Standard library only. --png renders through scripts/render.js (puppeteer-core + local Chrome/Edge).
"""
import argparse, pathlib, re, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parents[2]
GLYPHS = ROOT / "assets" / "glyphs"
MANDALA = ROOT / "assets" / "mandala" / "sarvam-mandala-mark.svg"

# Palettes: (top/start, bottom/end, haze, glass tint). Hues come from the sr-* ramps and heritage tokens.
PALETTES = {
    "rose":    ("#c32f3a", "#e7a3ab", "#f6d7db", "#ffffff"),   # sindoor → sr-red-100 (the red glyph tile)
    "lilac":   ("#d7a5d6", "#8e9ced", "#e6def6", "#ffffff"),   # sr-pink-200 → sr-indigo-400 (the wide globe embed)
    "indigo":  ("#3d4bb8", "#a7c0f1", "#d2dff9", "#ffffff"),   # spectrum indigo
    "saffron": ("#d5650f", "#f9bb9e", "#fddcce", "#ffffff"),   # br-orange → sr-orange-300
    "dusk":    ("#1c1f4a", "#6a88e2", "#a7c0f1", "#ffffff"),   # night → indigo-500
    "leaf":    ("#496d21", "#c8e4b0", "#e3f1d8", "#ffffff"),   # sr-green-700 → 200
    "marigold":("#c08827", "#ffe8b7", "#fff0cf", "#ffffff"),   # sr-yellow-700 → 200
    "spectrum":("#a7c0f1", "#f9bb9e", "#fdeee6", "#ffffff"),   # blue meets orange, as light
}
SIZES = {"tile": (512, 512), "tile-sm": (164, 164), "wide": (1200, 520), "og": (1200, 630), "square": (1080, 1080), "blog": (1600, 900)}

# Line icons drawn for glass rendering (24×24 grid, stroked). Mirrors the shapes in assets/icons.
ICONS = {
    "globe": '<circle cx="12" cy="12" r="9"/><path d="M12 3c-3.2 2.6-3.2 15.4 0 18M12 3c3.2 2.6 3.2 15.4 0 18M3 12h4.6M16.4 12H21"/>'
             '<path class="star" d="M12 9.4c.3 1.5.9 2.1 2.4 2.6-1.5.5-2.1 1.1-2.4 2.6-.3-1.5-.9-2.1-2.4-2.6 1.5-.5 2.1-1.1 2.4-2.6Z"/>',
    "mic":   '<rect x="8.5" y="3" width="7" height="12" rx="3.5"/><path d="M5 11.5a7 7 0 0 0 14 0M12 18.5V21"/>',
    "wave":  '<path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4"/>',
    "chat":  '<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 3.5V17A2.5 2.5 0 0 1 4 14.5v-8Z"/>',
    "doc":   '<path d="M7 3h7l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v4h4M8.5 12h7M8.5 15.5h5"/>',
    "spark": '<path class="star" d="M12 3c.8 4.4 2.6 6.2 7 7-4.4.8-6.2 2.6-7 7-.8-4.4-2.6-6.2-7-7 4.4-.8 6.2-2.6 7-7Z"/>',
}


def first_path(svg_text):
    m = re.search(r'<path[^>]*\sd="([^"]+)"', svg_text)
    if not m:
        raise SystemExit("no <path d> found")
    return m.group(1)


def viewbox(svg_text):
    m = re.search(r'viewBox="([\d.\s-]+)"', svg_text)
    return [float(x) for x in m.group(1).split()] if m else [0, 0, 100, 100]


def grain_defs(opacity):
    return (f'<filter id="grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="3" stitchTiles="stitch"/>'
            f'<feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 {opacity} 0"/></filter>')


def glass_group(inner, stroke_w, glow_w, tint):
    """Frosted glass outline: soft outer glow, translucent body, bright thin core highlight."""
    return (f'<g fill="none" stroke-linecap="round" stroke-linejoin="round">'
            f'<g stroke="{tint}" stroke-opacity=".22" stroke-width="{glow_w}" filter="url(#glow)">{inner}</g>'
            f'<g stroke="{tint}" stroke-opacity=".38" stroke-width="{stroke_w}">{inner}</g>'
            f'<g stroke="{tint}" stroke-opacity=".7" stroke-width="{stroke_w * .55:.2f}">{inner}</g>'
            f'<g stroke="{tint}" stroke-opacity=".95" stroke-width="{stroke_w * .18:.2f}">{inner}</g>'
            f'</g>')


def tile(w, h, pal, glyph):
    top, bottom, haze, tint = PALETTES[pal]
    src = (GLYPHS / f"{glyph}.svg").read_text(encoding="utf8")
    d, vb = first_path(src), viewbox(src)
    side = min(w, h)
    g = side * .54
    sc = g / max(vb[2], vb[3])
    tx, ty = (w - vb[2] * sc) / 2 - vb[0] * sc, (h - vb[3] * sc) / 2 - vb[1] * sc
    sw = 4.2 / sc * (side / 164)      # ~2.2px at 164px, scales with the tile
    r = side * .22
    path = f'<path d="{d}"/>'
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{top}"/><stop offset="1" stop-color="{bottom}"/></linearGradient>
  <radialGradient id="inner" cx=".5" cy=".55" r=".6"><stop offset="0" stop-color="{haze}" stop-opacity=".55"/><stop offset=".7" stop-color="{haze}" stop-opacity="0"/></radialGradient>
  <radialGradient id="edge" cx=".5" cy=".5" r=".72"><stop offset=".72" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".38"/></radialGradient>
  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="{3.2 / sc * (side / 164):.2f}"/></filter>
  {grain_defs(.05)}
  <clipPath id="clip"><rect width="{w}" height="{h}" rx="{r:.1f}"/></clipPath>
</defs>
<g clip-path="url(#clip)">
  <rect width="{w}" height="{h}" fill="url(#bg)"/>
  <rect width="{w}" height="{h}" fill="url(#inner)"/>
  <rect width="{w}" height="{h}" fill="url(#edge)"/>
  <rect width="{w}" height="{h}" filter="url(#grain)"/>
  <g transform="translate({tx:.2f} {ty:.2f}) scale({sc:.4f})">{glass_group(path, sw, sw * 2.6, tint)}</g>
</g>
</svg>
'''


def wide(w, h, pal, icon):
    a, b, haze, tint = PALETTES[pal]
    msrc = MANDALA.read_text(encoding="utf8")
    md, mvb = first_path(msrc), viewbox(msrc)
    # mandala: huge (≈2.3× the height), centred, so only its outer arcs show at the edges
    ms = (h * 3.6) / mvb[3]
    mx, my = (w - mvb[2] * ms) / 2 - mvb[0] * ms, (h - mvb[3] * ms) / 2 - mvb[1] * ms
    # centre icon: ≈ 46% of the height
    isz = h * .46
    isc = isz / 24
    ix, iy = (w - isz) / 2, (h - isz) / 2
    icon_svg = ICONS[icon].replace('class="star"', 'class="star" fill="#fff" fill-opacity=".85" stroke-width=".6"')
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{a}"/><stop offset="1" stop-color="{b}"/></linearGradient>
  <radialGradient id="haze" cx=".5" cy=".42" r=".55"><stop offset="0" stop-color="{haze}" stop-opacity=".85"/><stop offset="1" stop-color="{haze}" stop-opacity="0"/></radialGradient>
  <filter id="glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.2"/></filter>
  {grain_defs(.07)}
  <radialGradient id="fadeC" cx=".5" cy=".5" r=".5"><stop offset=".38" stop-color="#000"/><stop offset=".8" stop-color="#fff"/></radialGradient>
  <mask id="edges"><rect width="{w}" height="{h}" fill="url(#fadeC)"/></mask>
</defs>
<rect width="{w}" height="{h}" fill="url(#bg)"/>
<rect width="{w}" height="{h}" fill="url(#haze)"/>
<g mask="url(#edges)"><g transform="translate({mx:.2f} {my:.2f}) scale({ms:.4f})" fill="none" stroke="#fff" stroke-opacity=".18" stroke-width="{2.2 / ms:.2f}"><path d="{md}"/></g></g>
<rect width="{w}" height="{h}" filter="url(#grain)"/>
<g transform="translate({ix:.2f} {iy:.2f}) scale({isc:.4f})">{glass_group(icon_svg, 2.6, 4.6, tint)}</g>
</svg>
'''


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("kind", nargs="?", choices=["tile", "wide"])
    ap.add_argument("--palette", default=None)
    ap.add_argument("--glyph", default="model-07", help="tile: assets/glyphs/<name>.svg")
    ap.add_argument("--icon", default="globe", help="wide: " + ", ".join(ICONS))
    ap.add_argument("--size", default=None, help="WxH or a preset: " + ", ".join(SIZES))
    ap.add_argument("--out", default=None)
    ap.add_argument("--png", action="store_true", help="also render a PNG next to the SVG")
    ap.add_argument("--list", action="store_true")
    a = ap.parse_args()
    if a.list or not a.kind:
        print("palettes:", ", ".join(PALETTES)); print("sizes:", ", ".join(f"{k} {v[0]}x{v[1]}" for k, v in SIZES.items()))
        print("icons:", ", ".join(ICONS)); print("glyphs:", ", ".join(p.stem for p in sorted(GLYPHS.glob("*.svg")))); return
    pal = a.palette or ("rose" if a.kind == "tile" else "lilac")
    if pal not in PALETTES: sys.exit(f"unknown palette {pal}")
    size = a.size or ("tile" if a.kind == "tile" else "wide")
    w, h = SIZES[size] if size in SIZES else map(int, size.lower().split("x"))
    svg = tile(w, h, pal, a.glyph) if a.kind == "tile" else wide(w, h, pal, a.icon)
    out = pathlib.Path(a.out or f"embed-{a.kind}-{pal}.svg")
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(svg, encoding="utf8")
    print("wrote", out)
    if a.png:
        png = out.with_suffix(".png")
        subprocess.run(["node", str(ROOT / "scripts" / "render.js"), str(out), str(png), str(w), str(h)], check=True)


if __name__ == "__main__":
    main()
