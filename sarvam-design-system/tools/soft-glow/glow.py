#!/usr/bin/env python3
"""Soft-glow gradient generator.

Model (measured from the reference images): each color is a SOLID shape whose top
edge is a gentle curve, put through a Gaussian blur. The fade therefore follows the
curve with a constant width (~2.56 x sigma) -- neither linear nor radial. Richer
looks stack 2-3 such layers (a broad pale one + a deeper, tighter core).

Usage
  python glow.py --list
  python glow.py --preset lilac-hill                         # inline <svg> snippet
  python glow.py --preset horizon --format svg --width 1080 --height 1080 -o post.svg
  python glow.py --layer color=#D7EAC1,contour=valley --mirror
  python glow.py --layer color=#E0A6BF,contour=ramp,lift=5
  python glow.py --layer color=#C9D8FD,points=70/70/70,sigma=11 \
                 --layer color=#5B63C9,points=104/96/93/96/104,sigma=6 --bg "#FAFAFA"

Layer keys (comma-separated key=value; repeat --layer to stack, first = bottom-most):
  color     hex fill (or palette name)                       required
  contour   hill | valley | ramp | dome | whisper | flat     default hill
  points    custom 50%-edge y% values left->right, '/'-separated (2-10 values; >100 = below the bottom edge)
  sigma     blur, % of height (fade width ~ 2.56*sigma)       default per contour
  lift      raise edge by N % of height (negative lowers)     default 0
  amp       waviness multiplier (0 flat, 1.5 bolder)          default 1
  opacity   0-1                                               default 1
  mirror    1 to flip left/right                              default 0

Formats
  inline  markup that fills its container (position:absolute; inset:0). Container needs
          position:relative; overflow:hidden; isolation:isolate; and its own background.
  svg     standalone file at --width x --height, true pixels, with --bg painted.
  css     a background declaration (SVG data URI).
"""
import argparse, sys, urllib.parse

PALETTES = {  # measured from references, then extended in the same lightness band
    "lilac":    ("#BBC3F1", "periwinkle blue"),
    "sage":     ("#D7EAC1", "soft leaf green"),
    "peach":    ("#FDE7DC", "barely-there apricot"),
    "rose":     ("#E0A6BF", "dusty pink, deepest single-layer fill"),
    "honey":    ("#FFE0AA", "warm butter yellow"),
    "ice":      ("#C9D8FD", "icy blue, broad layer of the horizon look"),
    "indigo":   ("#5B63C9", "deep core of the horizon look - only as a low, tight core layer"),
    "mint":     ("#BFE8DA", "cool aqua green"),
    "sky":      ("#BEDCF4", "pale clear blue"),
    "lavender": ("#D8C8F2", "light violet"),
    "coral":    ("#F7C3B5", "warm coral"),
    "sand":     ("#EBDDC7", "neutral beige"),
    # --- Sarvam token aliases (tokens.css). Pastel band for broad layers, deeper steps only as low cores.
    "sr-indigo-100": ("#E8EFFC", "Sarvam indigo-100, faintest broad layer"),
    "sr-indigo-200": ("#D2DFF9", "Sarvam indigo-200, broad layer"),
    "sr-indigo-300": ("#A7C0F1", "Sarvam indigo-300, mid layer"),
    "sr-indigo-500": ("#6A88E2", "Sarvam indigo-500, core only"),
    "sr-orange-100": ("#FEEDE6", "Sarvam orange-100, faint warm broad layer"),
    "sr-orange-200": ("#FDDCCE", "Sarvam orange-200, warm broad layer"),
    "sr-orange-500": ("#F38858", "Sarvam orange-500 (saffron), core only"),
    "sr-green-100":  ("#E3F1D8", "Sarvam green-100, broad layer"),
    "sr-green-400":  ("#90C85B", "Sarvam green-400, core only"),
    "sr-pink-100":   ("#F9D5E1", "Sarvam pink-100, broad layer"),
    "sr-pink-300":   ("#E380A8", "Sarvam pink-300, core only"),
    "sr-yellow-200": ("#FFE8B7", "Sarvam yellow-200, broad layer"),
}

XS = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95]
CONTOURS = {  # 50%-coverage edge y% at XS, default sigma, note
    "hill":    ([72.7, 63.4, 57.3, 55.3, 56.7, 61.1, 66.8, 71.2, 74.4, 76.5], 8.6, "crest ~35% from left, slopes away both sides"),
    "valley":  ([52.5, 57.1, 64.9, 72.9, 79.2, 83.0, 83.4, 82.4, 80.5, 78.6], 6.8, "tall left, white hollow right of center, slight lift right"),
    "ramp":    ([91.0, 89.0, 85.0, 79.9, 75.1, 71.6, 71.3, 73.0, 73.4, 72.2], 8.6, "near-absent left, climbs to a plateau on the right"),
    "dome":    ([78.2, 73.6, 70.1, 68.2, 66.3, 65.1, 65.3, 66.7, 68.8, 70.7], 8.6, "broad low swell just right of center"),
    "whisper": ([80.1, 84.0, 88.0, 88.5, 86.4, 82.4, 78.7, 76.6, 75.1, 75.3], 7.6, "shallow dip then rise; for very light fills"),
    "flat":    ([74.0, 73.5, 73.0, 73.0, 73.2, 73.5, 73.8, 74.0, 74.0, 74.0], 8.6, "level horizon band"),
}

PRESETS = {  # name: (bg, [layer dicts], note)
    "lilac-hill":    ("#FFFFFF", [dict(color="#BBC3F1", contour="hill")], "blue card"),
    "sage-valley":   ("#FFFFFF", [dict(color="#D7EAC1", contour="valley")], "green card"),
    "peach-whisper": ("#FFFFFF", [dict(color="#FDE7DC", contour="whisper")], "peach card"),
    "rose-ramp":     ("#FFFFFF", [dict(color="#E0A6BF", contour="ramp")], "pink card"),
    "honey-dome":    ("#FFFFFF", [dict(color="#FFE0AA", contour="dome")], "yellow card"),
    "horizon":       ("#FAFAFA", [
                        dict(color="#C9D8FD", points="69/69/69/69/69", sigma="11"),
                        dict(color="#5B63C9", points="100/97/94.5/93/92/92/93/94.5/97/100", sigma="6.5")],
                      "ice-to-indigo two-layer horizon (Sarvam x Meta post)"),
    # --- Sarvam presets built from tokens (blue->orange spectrum language)
    "sr-dawn":       ("#FCFCFC", [
                        dict(color="#FDDCCE", points="70/70/70/70/70", sigma="11"),
                        dict(color="#F38858", points="100/97/94.5/93/92/92/93/94.5/97/100", sigma="6.5")],
                      "Sarvam saffron horizon: orange-200 broad + orange-500 core"),
    "sr-spectrum":   ("#FCFCFC", [
                        dict(color="#D2DFF9", points="68/68/68/68/68", sigma="11"),
                        dict(color="#6A88E2", points="92/94/97/101/106", sigma="6.5"),
                        dict(color="#F59970", points="106/101/97/94/92", sigma="6.5")],
                      "Sarvam blue->orange spectrum: indigo core left, saffron core right"),
    "sr-meadow":     ("#FCFCFC", [
                        dict(color="#E3F1D8", points="70/70/70/70/70", sigma="11"),
                        dict(color="#90C85B", points="100/97/94.5/93/92/92/93/94.5/97/100", sigma="6.5")],
                      "Sarvam green horizon (sovereign / startups)"),
}


def resample(raw):
    src = [5 + 90 * i / (len(raw) - 1) for i in range(len(raw))]
    out = []
    for x in XS:
        j = 0
        while j < len(src) - 2 and src[j + 1] < x:
            j += 1
        t = (x - src[j]) / (src[j + 1] - src[j])
        out.append(raw[j] + (raw[j + 1] - raw[j]) * t)
    return out


def smooth_path(pts):
    p = [pts[0]] + pts + [pts[-1]]
    d = f"M{pts[0][0]:.2f},{pts[0][1]:.2f}"
    for i in range(1, len(p) - 2):
        p0, p1, p2, p3 = p[i - 1], p[i], p[i + 1], p[i + 2]
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d += f" C{c1[0]:.2f},{c1[1]:.2f} {c2[0]:.2f},{c2[1]:.2f} {p2[0]:.2f},{p2[1]:.2f}"
    return d


def layer_geometry(spec, mirror_all):
    color = spec.get("color")
    if not color:
        sys.exit("each --layer needs color=")
    color = PALETTES.get(color, (color,))[0]
    ys, sigma, _ = CONTOURS[spec.get("contour", "hill")]
    if "points" in spec:
        raw = [float(v) for v in spec["points"].split("/")]
        if not 2 <= len(raw) <= 10:
            sys.exit("points needs 2-10 values")
        ys = resample(raw)
    sigma = float(spec.get("sigma", sigma))
    amp, lift = float(spec.get("amp", 1)), float(spec.get("lift", 0))
    mean = sum(ys) / len(ys)
    ys = [mean + (y - mean) * amp - lift for y in ys]
    if mirror_all ^ (spec.get("mirror", "0") == "1"):
        ys = ys[::-1]
    # extend flat past both sides so the blur never fades at the left/right edges
    pts = [(-40, ys[0]), (-15, ys[0])] + list(zip(XS, ys)) + [(115, ys[-1]), (140, ys[-1])]
    d = smooth_path(pts) + " L140,240 L-40,240 Z"
    return color, d, sigma, float(spec.get("opacity", 1))



def build(layers, bg, fmt, width, height, uid, mirror):
    geo = [layer_geometry(s, mirror) for s in layers]
    if fmt == "inline":
        defs, body = "", ""
        for i, (c, d, s, o) in enumerate(geo):
            defs += (f'<filter id="{uid}-{i}" x="-50%" y="-50%" width="200%" height="200%" '
                     f'color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="{s}"/></filter>')
            op = "" if o >= 1 else f' fill-opacity="{o}"'
            body += f'<path d="{d}" fill="{c}"{op} filter="url(#{uid}-{i})"/>'
        style = "position:absolute;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none"
        return (f'<svg class="glow" aria-hidden="true" focusable="false" style="{style}" '
                f'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">'
                f'<defs>{defs}</defs>{body}</svg>')
    # standalone: pixel space so blur is round, not stretched
    sx, sy = width / 100, height / 100
    defs, body = "", ""
    for i, (c, d, s, o) in enumerate(geo):
        defs += (f'<filter id="{uid}-{i}" filterUnits="userSpaceOnUse" x="{-width}" y="{-height}" '
                 f'width="{3*width}" height="{3*height}" color-interpolation-filters="sRGB">'
                 f'<feGaussianBlur stdDeviation="{round(s*sy, 1)}"/></filter>')
        op = "" if o >= 1 else f' fill-opacity="{o}"'
        body += (f'<g filter="url(#{uid}-{i})"><path transform="scale({sx:.4f} {sy:.4f})" '
                 f'd="{d}" fill="{c}"{op}/></g>')
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" '
            f'viewBox="0 0 {width} {height}"><defs>{defs}</defs>'
            f'<rect width="{width}" height="{height}" fill="{bg}"/>{body}</svg>')


def parse_layer(s):
    try:
        return dict(kv.split("=", 1) for kv in s.split(","))
    except ValueError:
        sys.exit(f"bad --layer '{s}': use key=value,key=value")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--preset", choices=PRESETS)
    ap.add_argument("--layer", action="append", default=[], help="see Layer keys above; repeatable")
    ap.add_argument("--mirror", action="store_true", help="flip every layer left/right")
    ap.add_argument("--bg", help="background for svg/css formats (default #FFFFFF)")
    ap.add_argument("--format", default="inline", choices=["inline", "svg", "css"])
    ap.add_argument("--width", type=int, default=480)
    ap.add_argument("--height", type=int, default=524)
    ap.add_argument("--id", default="glow", help="unique id prefix if several glows share a page")
    ap.add_argument("-o", "--out")
    ap.add_argument("--list", action="store_true")
    a = ap.parse_args()

    if a.list:
        print("PRESETS");  [print(f"  {k:14} {v[2]}") for k, v in PRESETS.items()]
        print("PALETTES"); [print(f"  {k:9} {h}  {n}") for k, (h, n) in PALETTES.items()]
        print("CONTOURS"); [print(f"  {k:8} sigma {s:<4} {n}") for k, (_, s, n) in CONTOURS.items()]
        return

    bg, layers = "#FFFFFF", []
    if a.preset:
        bg, layers, _ = PRESETS[a.preset]
        layers = [dict(l) for l in layers]
    if a.layer:
        layers = [parse_layer(s) for s in a.layer]
    if not layers:
        layers = [dict(color="#BBC3F1", contour="hill")]
    bg = a.bg or bg

    fmt = "svg" if a.format == "css" else a.format
    out = build(layers, bg, fmt, a.width, a.height, a.id, a.mirror)
    if a.format == "css":
        enc = urllib.parse.quote(out.replace('"', "'"), safe=" =:/,'()")
        out = (f'background-color:{bg}; background-image:url("data:image/svg+xml,{enc}"); '
               f'background-size:100% 100%; background-repeat:no-repeat;')
    if a.out:
        with open(a.out, "w", encoding="utf-8") as f:
            f.write(out)
        print(f"wrote {a.out}")
    else:
        sys.stdout.write(out + "\n")


if __name__ == "__main__":
    main()
