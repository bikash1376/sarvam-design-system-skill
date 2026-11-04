"""Generate diwali-flame.html: a 1920x1080 self-contained SVG built from the Sarvam design system.

System references:
  gateway arch path          -> foundations/07-motifs-and-glyphs.md (assets/motifs/gateway-arch.svg)
  concentric gateway echoes  -> foundations/06-gradients-and-light.md section 4
  night field                -> 06 section 6 (--grad-night)
  scalloped horizon          -> 07 "The scalloped horizon"
  sparks                     -> official Sarvam 4-point star bullet path
  colours                    -> tokens.css saffron/orange, yellow, indigo, pink ramps only
"""
import re

CX = 960


def fmt(v):
    return f"{v:.1f}"


ARCH = ("M0 500L0 262C0 222 28 194 64 190C72 154 102 130 138 130C150 98 172 72 190 44C196 32 199 16 200 0"
        "C201 16 204 32 210 44C228 72 250 98 262 130C298 130 328 154 336 190C372 194 400 222 400 262L400 500Z")


def tx(d, f):
    return re.sub(r"(-?\d+\.?\d*) (-?\d+\.?\d*)",
                  lambda m: " ".join(fmt(c) for c in f(float(m.group(1)), float(m.group(2)))), d)


def arch(width, bottom=1080, cx=CX):
    s = width / 400
    return tx(ARCH, lambda x, y: (cx + (x - 200) * s, bottom + (y - 500) * s))


# Flame = the gateway's ogee peak closed into a teardrop. Unit space: tip (0,-1), base (0,0).
RIGHT = [((0.03, -0.84), (0.12, -0.72), (0.20, -0.58)),
         ((0.30, -0.405), (0.335, -0.22), (0.28, -0.11)),
         ((0.225, -0.005), (0.11, 0.0), (0.0, 0.0))]


def flame(h, bx, by, sx=1.0):
    P = lambda x, y: f"{fmt(bx + x * h * sx)} {fmt(by + y * h)}"
    d = f"M{P(0, -1)}"
    for c1, c2, e in RIGHT:
        d += f"C{P(*c1)} {P(*c2)} {P(*e)}"
    pts = [(0, -1)] + [p for seg in RIGHT for p in seg]
    left = [(-x, y) for x, y in pts]
    segs = [left[i:i + 4] for i in range(0, len(left) - 1, 3)]
    for s in reversed(segs):
        d += f"C{P(*s[2])} {P(*s[1])} {P(*s[0])}"
    return d + "Z"


def dome(cx, rx, ry, base=1080, peak=0.0):
    k = 0.5523
    top = base - ry
    if peak:
        return (f"M{fmt(cx-rx)} {base}C{fmt(cx-rx)} {fmt(base-ry*k)} {fmt(cx-rx*k)} {fmt(top)} {fmt(cx-rx*0.18)} {fmt(top)}"
                f"C{fmt(cx-rx*0.06)} {fmt(top)} {fmt(cx-2)} {fmt(top-peak*0.4)} {fmt(cx)} {fmt(top-peak)}"
                f"C{fmt(cx+2)} {fmt(top-peak*0.4)} {fmt(cx+rx*0.06)} {fmt(top)} {fmt(cx+rx*0.18)} {fmt(top)}"
                f"C{fmt(cx+rx*k)} {fmt(top)} {fmt(cx+rx)} {fmt(base-ry*k)} {fmt(cx+rx)} {base}Z")
    return (f"M{fmt(cx-rx)} {base}C{fmt(cx-rx)} {fmt(base-ry*k)} {fmt(cx-rx*k)} {fmt(top)} {fmt(cx)} {fmt(top)}"
            f"C{fmt(cx+rx*k)} {fmt(top)} {fmt(cx+rx)} {fmt(base-ry*k)} {fmt(cx+rx)} {base}Z")


STAR = ("M12.0035 0C13.927 1.92336 14.7378 4.55104 14.4269 7.06239C15.3696 6.39209 16.5224 5.99794 17.7672 5.99791"
        "H17.9981C17.998 7.2792 17.5948 8.4699 16.9085 9.4474C19.3436 9.12122 21.8977 9.89379 23.7691 11.7651L24 11.996"
        "C22.0413 13.9546 19.3522 14.7596 16.7993 14.4011C17.5521 15.4058 17.9984 16.6535 17.9983 18.0015"
        "C16.6523 18.0015 15.4063 17.5566 14.4024 16.8059C14.7587 19.3568 13.9535 22.0429 11.9964 23.9999"
        "C10.0408 22.0444 9.23528 19.3609 9.58954 16.8117C8.58701 17.5588 7.34402 18.0014 6.00159 18.0014V17.7706"
        "C6.00162 16.5237 6.39701 15.3691 7.06934 14.4255C4.55586 14.7387 1.92515 13.9283 0 12.0032L0.230859 11.7723"
        "C2.10358 9.89968 4.65997 9.12739 7.09662 9.45536C6.407 8.47643 6.00174 7.28284 6.00176 5.99816"
        "C7.3476 5.99814 8.5935 6.44286 9.59732 7.19339C9.24126 4.64272 10.0466 1.95683 12.0035 0Z")

FB, FH = 948, 450
FLAMES = [  # height, base y, rim top, rim bottom, core top, core bottom, blur
    (FH, FB, "#ffb94a", "#ee7944", "#e96c2f", "#a5460f", 20),
    (FH * .72, FB - 14, "#ffe8b7", "#feb12b", "#f38858", "#e6651b", 14),
    (FH * .47, FB - 26, "#fff8e6", "#ffe8b7", "#ffcb79", "#f59970", 9),
]
ARCHS = [  # width, rim top, rim bottom, interior top, mid, bottom, blur, opacity
    (1300, "#33c", "#871f4b", "#0b0b2e", "#11115b", "#1e1240", 30, .5),
    (930, "#4250d5", "#d4508e", "#0e0e3c", "#16166a", "#2e1545", 28, .8),
    (640, "#556adc", "#ee7944", "#11115b", "#1c1c7a", "#4d192c", 26, 1),
]
SPARKS = [(742, 575, 30, 1), (1178, 540, 38, 1), (808, 402, 18, .9), (1110, 350, 22, .9), (690, 760, 15, .8),
          (1232, 780, 19, .8), (960, 330, 14, .7), (520, 300, 16, .45), (1405, 250, 20, .45), (380, 620, 12, .35),
          (1560, 600, 14, .35), (250, 190, 10, .3), (1690, 380, 11, .3)]


def build():
    defs, body = [], []
    defs.append(
        '<linearGradient id="field" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#08081f"/>'
        '<stop offset=".45" stop-color="#0e0e3a"/><stop offset="1" stop-color="#22103a"/></linearGradient>'
        '<radialGradient id="floor" cx="960" cy="1080" r="900" gradientUnits="userSpaceOnUse">'
        '<stop offset="0" stop-color="#e6651b" stop-opacity=".55"/><stop offset=".35" stop-color="#a5460f" stop-opacity=".25"/>'
        '<stop offset="1" stop-color="#a5460f" stop-opacity="0"/></radialGradient>'
        '<radialGradient id="halo" cx="960" cy="760" r="560" gradientUnits="userSpaceOnUse">'
        '<stop offset="0" stop-color="#ffb94a" stop-opacity=".55"/><stop offset=".3" stop-color="#ee7944" stop-opacity=".28"/>'
        '<stop offset=".7" stop-color="#a5460f" stop-opacity=".08"/><stop offset="1" stop-color="#a5460f" stop-opacity="0"/></radialGradient>')
    body.append('<rect width="1920" height="1080" fill="url(#field)"/><rect width="1920" height="1080" fill="url(#floor)"/>')

    for i, (w, rt, rb, it, im, ib, bl, op) in enumerate(ARCHS):
        d = arch(w)
        top = 1080 - w * 1.25
        defs.append(
            f'<linearGradient id="ar{i}" x1="0" y1="{fmt(top)}" x2="0" y2="1080" gradientUnits="userSpaceOnUse">'
            f'<stop offset="0" stop-color="{rt}"/><stop offset="1" stop-color="{rb}"/></linearGradient>'
            f'<linearGradient id="ai{i}" x1="0" y1="{fmt(top)}" x2="0" y2="1080" gradientUnits="userSpaceOnUse">'
            f'<stop offset="0" stop-color="{it}"/><stop offset=".55" stop-color="{im}"/><stop offset="1" stop-color="{ib}"/></linearGradient>'
            f'<clipPath id="ac{i}"><path d="{d}"/></clipPath>'
            f'<filter id="ab{i}" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="3"/></filter>')
        steps = ""
        N = 90
        for k in range(N):
            t = (k + 1) / N
            sc = 1 - 0.13 * t ** 0.85
            steps += f'<path d="{arch(w * sc, bottom=1080 + w * 0.02 * t)}" fill="url(#ai{i})" opacity="{0.042 + 0.015 * t:.4f}"/>'
        body.append(f'<g opacity="{op}"><path d="{d}" fill="url(#ar{i})"/>'
                    f'<g clip-path="url(#ac{i})">{steps}</g></g>')
    body.append('<rect width="1920" height="1080" fill="url(#halo)"/>')

    defs.append(
        '<linearGradient id="dome" x1="0" y1="0" x2="0" y2="1">'
        '<stop offset="0" stop-color="#ffcb79"/><stop offset=".14" stop-color="#ee7944"/>'
        '<stop offset=".55" stop-color="#9d2055"/><stop offset="1" stop-color="#4d192c"/></linearGradient>'
        '<linearGradient id="domeIn" x1="0" y1="0" x2="0" y2="1">'
        '<stop offset="0" stop-color="#9d2055"/><stop offset=".6" stop-color="#611c35"/><stop offset="1" stop-color="#3e140b"/></linearGradient>'
        '<filter id="db" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="3"/></filter>'
        f'<clipPath id="innerArch"><path d="{arch(640)}"/></clipPath>')
    domes = [dome(CX - 250, 200, 88), dome(CX + 250, 200, 88), dome(CX, 240, 128, peak=22)]
    g = '<g clip-path="url(#innerArch)">'
    for i, d in enumerate(domes):
        defs.append(f'<clipPath id="dc{i}"><path d="{d}"/></clipPath>')
        steps = ""
        for k in range(60):
            t = (k + 1) / 60
            steps += re.sub(r"(-?\d+\.?\d*) (-?\d+\.?\d*)", lambda m: f"{m.group(1)} {fmt(float(m.group(2)) + 26 * t ** 0.9)}",
                            f'<path d="{d}" fill="url(#domeIn)" opacity="{0.05 + 0.015 * t:.4f}"/>')
        g += (f'<path d="{d}" fill="url(#dome)"/><g clip-path="url(#dc{i})">{steps}</g>')
    defs.append('<radialGradient id="domeHot" cx="960" cy="952" r="230" gradientTransform="translate(960 952) scale(1 .45) translate(-960 -952)" gradientUnits="userSpaceOnUse">'
                '<stop offset="0" stop-color="#ffcb79" stop-opacity=".85"/><stop offset=".45" stop-color="#ee7944" stop-opacity=".35"/><stop offset="1" stop-color="#ee7944" stop-opacity="0"/></radialGradient>')
    g += f'<g clip-path="url(#dc2)"><rect x="700" y="900" width="520" height="180" fill="url(#domeHot)"/></g>'
    body.append(g + '</g>')

    defs.append('<filter id="fg" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="46"/></filter>'
                '<filter id="soft" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1.6"/></filter>'
                '<filter id="fg2" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="16"/></filter>')
    body.append(f'<path d="{flame(FH * 1.22, CX, FB + 30)}" fill="#ee7944" opacity=".55" filter="url(#fg)"/>')
    body.append(f'<path d="{flame(FH * 1.04, CX, FB + 6)}" fill="#ffb94a" opacity=".5" filter="url(#fg2)"/>')
    for i, (h, by, rt, rb, ct, cb, bl) in enumerate(FLAMES):
        d = flame(h, CX, by)
        top = by - h
        defs.append(
            f'<linearGradient id="fr{i}" x1="0" y1="{fmt(top)}" x2="0" y2="{by}" gradientUnits="userSpaceOnUse">'
            f'<stop offset="0" stop-color="{rt}"/><stop offset="1" stop-color="{rb}"/></linearGradient>'
            f'<linearGradient id="fc{i}" x1="0" y1="{fmt(top)}" x2="0" y2="{by}" gradientUnits="userSpaceOnUse">'
            f'<stop offset="0" stop-color="{ct}"/><stop offset="1" stop-color="{cb}"/></linearGradient>'
            f'<clipPath id="fcl{i}"><path d="{d}"/></clipPath>'
            f'<filter id="fb{i}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="{bl}"/></filter>')
        inset = flame(h * 0.84, CX, by - h * 0.02, sx=0.86)
        body.append(f'<g filter="url(#soft)"><path d="{d}" fill="url(#fr{i})"/><g clip-path="url(#fcl{i})">'
                    f'<path d="{inset}" fill="url(#fc{i})" filter="url(#fb{i})" opacity=".9"/></g></g>')

    defs.append('<radialGradient id="core" cx=".5" cy=".62" r=".55"><stop offset="0" stop-color="#ffffff"/>'
                '<stop offset=".6" stop-color="#fffaf0"/><stop offset="1" stop-color="#fff0cf" stop-opacity="0"/></radialGradient>'
                '<filter id="cb" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5"/></filter>')
    body.append(f'<path d="{flame(FH * .26, CX, FB - 36)}" fill="url(#core)" filter="url(#cb)"/>')

    defs.append('<linearGradient id="sp" x1="12" y1="24" x2="12" y2="0" gradientUnits="userSpaceOnUse">'
                '<stop offset="0" stop-color="#ee7944"/><stop offset=".5" stop-color="#feb12b"/><stop offset="1" stop-color="#fff8e6"/></linearGradient>'
                '<filter id="sg" x="-150%" y="-150%" width="400%" height="400%"><feGaussianBlur stdDeviation="3"/></filter>')
    for x, y, s, o in SPARKS:
        body.append(f'<g transform="translate({x - s / 2} {y - s / 2}) scale({s / 24:.3f})" opacity="{o}">'
                    f'<path d="{STAR}" fill="#ffb94a" filter="url(#sg)" opacity=".8"/><path d="{STAR}" fill="url(#sp)"/></g>')

    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">'
           f'<defs>{"".join(defs)}</defs>{"".join(body)}</svg>')
    return ('<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><title>Sarvam Diwali Flame</title>\n'
            '<style>html,body{margin:0;background:#08081f}body{width:1920px;height:1080px;overflow:hidden}svg{display:block}</style>'
            '</head>\n<body>\n<!-- Built from sarvam-design-system: gateway arch + concentric echoes, ogee flame, '
            'scalloped horizon, Sarvam star sparks, token colours only. No text, no logo. -->\n' + svg + '\n</body></html>\n')


if __name__ == "__main__":
    import pathlib
    out = pathlib.Path(__file__).with_name("diwali-flame.html")
    out.write_text(build(), encoding="utf8")
    print("wrote", out, out.stat().st_size, "bytes")
