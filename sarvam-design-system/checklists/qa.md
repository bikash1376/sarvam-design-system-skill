# QA Checklist (run before shipping anything)

## Brand
- [ ] Wordmark is an original file, black or white only, with clear space respected, never beside the logomark
- [ ] Headline is Season Mix 400–500, sentence case, tracking −0.02em, no orphan word
- [ ] UI and body text are Matter; labels are Semi Mono caps; no other fonts
- [ ] Colour = neutrals + one blue/orange light story (+ max 1 supporting hue via glyphs)
- [ ] Exactly one gateway-derived element or one 2–3 glyph cluster
- [ ] Passes every item in `foundations/12-anti-slop.md`
- [ ] Copy follows `foundations/13-voice-and-tone.md`; product names exact; no invented stats

## Craft
- [ ] Spacing values are on the 4px scale; section gaps 96/128
- [ ] Radii: pills for buttons, 16px cards, 24–32px panels
- [ ] Contrast: body ≥4.5:1, display ≥3:1
- [ ] Optical alignment: headline left edge aligns with the wordmark left edge
- [ ] Gradients have grain or blur, with no banding

## Web responsive
- [ ] Screenshots at 375 / 768 / 1440 (plus a check at 1024 / 1280)
- [ ] No horizontal scroll at 375; touch targets ≥44px
- [ ] Layout reflows (stack, reorder, collapse) and doesn't just shrink
- [ ] Type steps: h1 44→64(→72), h2 28→36
- [ ] Reveals off on mobile and under reduced motion

## Banners
- [ ] Exact pixel size, PNG, sRGB
- [ ] Nothing within the safe margin (80px Meta / 64px LinkedIn sides)
- [ ] Headline legible at 300px thumbnail
- [ ] The series shares archetype logic, wordmark position and type scale
