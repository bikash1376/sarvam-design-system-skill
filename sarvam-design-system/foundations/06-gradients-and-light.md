# 06 · Gradients and Light

> "The visual system uses a blue-to-orange spectrum as a foundational language. Instead of relying on fixed colour blocks, it operates through continuous transitions in light and tone… These transitions are not decorative. They function as signals of flow." (sarvam.ai/brand)

Light is the main way Sarvam shows colour. Two companion systems sit beside these recipes: **card and section glows** in `14-soft-glow-surfaces.md` (blurred curved masses, not CSS gradients), and **colour inside glyphs** in `15-glyph-color-depth.md`. Below are the **six recipes** to reuse. Each one is copy-paste CSS.

## 1. Hero Aura (web hero, light banners)
An orange core glows from the top centre, with periwinkle wings on either side, fading to the `#fcfcfc` canvas by about 60% height.
```css
.aura-hero {
  position:absolute; inset:0 0 auto 0; height: 720px; z-index:-1; pointer-events:none;
  background:
    radial-gradient(30% 32% at 50% 4%,  rgba(249,115,22,1) 0%, rgba(251,146,60,.85) 35%, rgba(253,186,116,0) 75%),
    radial-gradient(40% 55% at 18% 10%, rgba(165,187,252,.9) 0%, rgba(210,223,249,.4) 50%, transparent 80%),
    radial-gradient(40% 55% at 82% 10%, rgba(165,187,252,.9) 0%, rgba(210,223,249,.4) 50%, transparent 80%),
    linear-gradient(180deg, #ffe9d6 0%, #fcfcfc 70%);
  filter: blur(24px);
}
```
Mobile: reduce height to 520px and widen the ellipses (`45% 30%`) so the glow still frames a narrow column.

## 2. Spectrum Field (full-bleed banners, brand moments)
A vertical or diagonal blue→orange continuum. Variants:
```css
/* Night → dawn (brand page monogram card) */
background: linear-gradient(180deg, #0e1230 0%, #1d2a6b 30%, #6f86d8 55%, #c9b9d8 70%, #f6a15c 88%, #f08a35 100%);
/* Sunrise (wordmark card): saffron top → periwinkle mist bottom */
background: linear-gradient(180deg, #a5460f 0%, #e6651b 30%, #f9a25a 60%, #e9e3f3 85%, #d2dff9 100%);
/* Motion field ("India's AI Now Arriving"): blurred blobs */
background:
  radial-gradient(35% 60% at 20% 40%, #f38858 0%, transparent 70%),
  radial-gradient(30% 50% at 75% 55%, #a7c0f1 0%, transparent 70%),
  radial-gradient(40% 70% at 55% 20%, #e6651b 0%, transparent 70%),
  #ee7944;
filter: blur(40px);   /* put the blur on a pseudo-element under the text, not on the text */
```

## 3. Gateway Glow (a soft arch-shaped light)
A white or cream gateway silhouette, blurred 30–60px, glowing out of a coloured field ("Supernova" post). Make it with an SVG gateway path plus `feGaussianBlur stdDeviation 30`, or a CSS `mask` with `filter: blur()`.
```
Field: linear-gradient(180deg, #f6f3e8 0%, #e9e3f3 45%, #8c86e0 80%, #5b4fd6 100%)
Glow:  gateway path filled #fffaf2, blur 40px, opacity .95, centred, ~70% of canvas width
Text:  Season Mix 425, #1f1f1f, centred inside the glow
```

## 4. Gateway Frame (concentric silhouettes)
Several nested gateway outlines, each step a tone darker/lighter, like ripples in an arch ("Knowledge Fabric" post). 4–6 rings, offset 6–8% of canvas, gradient within each ring (e.g. forest `#4f7a1f` outer → marigold `#e0b23a` inner rim → leaf `#7aa83a` centre). Text sits in the innermost arch.

## 5. Card gradients (web feature tiles)
For feature/infra tiles that hold a white icon or glyph:
`--grad-blue-light`, `--grad-orange-medium`, `--grad-green-light`, `--grad-pink-light` (all 180deg). Add a radial highlight `radial-gradient(circle at 30% 30%, rgba(255,255,255,.15), transparent 70%)` and the Sarvam mandala (`assets/mandala/`, see `17-mandala-background.md`) at 8–12% white instead of generic concentric circles.

## 6. Night panel (dark CTA)
```css
background: radial-gradient(60% 90% at 50% 100%, #3d32ab 0%, transparent 70%), linear-gradient(180deg,#14142b,#1e2033);
```
Add a centred white 4-point star glyph and the Sarvam mandala outline (white, ~8–15%) rising from the bottom centre, instead of generic concentric arcs (see `17-mandala-background.md`).

## Grain
Banner gradients get **subtle film grain** (3–6% opacity monochrome noise). It removes banding and gives the printed, tactile feel visible in Sarvam's LinkedIn posts. Use the SVG `feTurbulence` snippet in `templates/_partials.md`.

## Rules
- Gradients sit **behind** content. Text never gets a gradient fill.
- Use **≤3 hues** per composition. Blue + orange (+ a neutral) is the default.
- Keep a calm zone: text sits on the quietest part of the gradient (top of an aura, centre of a glow).
- No hard colour stops and no visible banding. Always blur or add grain.
- Avoid diagonal "Instagram" gradients (pink→purple→orange at 45°). Sarvam gradients are **vertical or radial**.
