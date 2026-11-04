"""Unacademy x Sarvam partnership banners, built from the Sarvam skill's banner template.

Archetype E (Glow Gateway) per formats/social-banners.md: partner / customer stories.
Lockup per foundations/11-logo-usage.md: `sarvam · PARTNER` (wordmark only, partner in Semi Mono caps).
Run: python build.py   ->   linkedin.html (1200x627), meta.html (1080x1350)
"""
import pathlib

HERE = pathlib.Path(__file__).resolve().parent
SKILL = HERE.parent.parent / "sarvam-design-system"
tpl = (SKILL / "templates" / "banner.html").read_text(encoding="utf8")
head = tpl.split("<!-- ======== EDIT BELOW")[0]
rel = "../../sarvam-design-system/"
head = head.replace('href="../tokens/', f'href="{rel}tokens/')

EXTRA = """<style>
  .arch-e .lockup{gap:calc(var(--wm)*.45)}
  .arch-e .lockup .dot{font:400 calc(var(--wm)*.8)/1 var(--font-sans);color:var(--tx-tertiary)}
  .arch-e .lockup .partner{font:400 calc(var(--wm)*.62)/1 var(--font-label);letter-spacing:.16em;text-transform:uppercase;color:var(--sr-indigo-900)}
  .arch-e .headline{color:var(--tx)}
  .arch-e .sub{color:var(--tx-secondary);max-width:22em;margin:0 auto}
  .arch-e .copy{z-index:3}
  /* field: lavender reaches higher so the whole gateway silhouette separates (Supernova reference) */
  .arch-e{background:linear-gradient(180deg,#efeaf3 0%,#d9d2f0 22%,#a9a0e8 52%,#7a70dc 80%,#5b4fd6 100%)}
  .size-li.arch-e .copy{padding:0 calc(var(--pad)*3);padding-top:9%}
  .size-pt.arch-e .copy{padding:0 calc(var(--pad)*1.1);padding-top:22%}
  .size-pt.arch-e .headline{font-size:86px}
  .indic{font-family:"Noto Sans Devanagari","Nirmala UI",var(--font-sans);font-weight:500;color:var(--sr-indigo-700)}
  .scripts{display:flex;gap:calc(var(--sub)*.9);justify-content:center;flex-wrap:wrap;font:500 calc(var(--sub)*.78)/1.4 "Nirmala UI","Noto Sans",var(--font-sans);color:var(--sr-indigo-600);opacity:.75}
</style>
"""

ARCH = ("M0 680V262C0 222 28 194 64 190C72 154 102 130 138 130C150 98 172 72 190 44C196 32 199 16 200 0"
        "C201 16 204 32 210 44C228 72 250 98 262 130C298 130 328 154 336 190C372 194 400 222 400 262V680Z")

def glow(size):
    # gateway glow, two layers (skill 06 §3 + 07 drawing rules):
    #   halo  = wide soft light around the arch
    #   core  = the arch itself, lightly blurred so lobes, cusps and the ogee peak stay legible
    w, top = {"size-li": (760, -40), "size-pt": (1120, 170)}[size]
    return (f'<svg class="gglow" aria-hidden="true" viewBox="-80 -80 560 760" '
            f'style="position:absolute;left:50%;top:{top}px;width:{w}px;transform:translateX(-50%);z-index:1">'
            f'<defs><filter id="halo" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="26"/></filter>'
            f'<filter id="core" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="2.6"/></filter></defs>'
            f'<path d="{ARCH}" fill="#fff3e6" opacity=".75" filter="url(#halo)" transform="translate(200 340) scale(1.06) translate(-200 -340)"/>'
            f'<path d="{ARCH}" fill="#fffaf2" filter="url(#core)"/></svg>')

def body(size, title_html, sub, show_scripts):
    scripts = ('<div class="scripts" aria-hidden="true"><span lang="hi">सीखें</span><span lang="ta">கற்க</span>'
               '<span lang="bn">শিখুন</span><span lang="te">నేర్చుకోండి</span><span lang="kn">ಕಲಿಯಿರಿ</span></div>') if show_scripts else ""
    return f"""<body class="{size} arch-e">
  {glow(size)}
  <div class="copy">
    <div class="lockup"><img src="{rel}assets/logos/sarvam-wordmark-black.svg" alt="sarvam"><span class="dot">·</span><span class="partner">Unacademy</span></div>
    <h1 class="headline">{title_html}</h1>
    <p class="sub">{sub}</p>
    {scripts}
  </div>
  <div class="grain"></div>
</body>
</html>
"""

TITLE = "Every learner,<br>in their own language"
SUB = "Unacademy brings Sarvam&rsquo;s Indic voice and translation to lessons across India."
(HERE / "linkedin.html").write_text(head + EXTRA + body("size-li", TITLE, SUB, False), encoding="utf8")
(HERE / "meta.html").write_text(head + EXTRA + body("size-pt", TITLE, SUB, True), encoding="utf8")
print("built linkedin.html, meta.html")
