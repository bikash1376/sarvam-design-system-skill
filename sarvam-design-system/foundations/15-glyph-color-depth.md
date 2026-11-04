# 15 · Glyph Colour Depth (colouring gateway glyphs and motifs)

How to fill a closed Sarvam shape (gateway glyph, arch, medallion, lotus, star) with depth **using colour alone**: no strokes, bevels or drop shadows. Tooling: `tools/color-depth/` (from the *color-depth* skill, extended with Sarvam palettes).

This formalises what the official glyphs in `assets/glyphs/` already do: a gradient core plus a soft inner edge. Use it to make **new** glyph colourways, product emblems, banner hero motifs and glyph clusters that sit naturally beside the official set.

## The model: two layers clipped to the silhouette
1. **Core:** a 2–3 stop gradient (linear or radial) filling the middle. Its centre of mass can move (`focus`): `below` is the default, light from above with weight settling down.
2. **Rim:** an inner-border colour that **follows every lobe, cusp and finial** and melts softly into the core. The edge is never a hard line.

## The four rim moods
| Mood | Rim | Reads as | Sarvam recipe |
|---|---|---|---|
| `white` | pale tint of the core | **outer depth**: soft, lit from outside | sky core `#a7c0f1→#556adc` + white rim |
| `color` | a different harmonious hue | **inner depth**: the edge reads as a second layer | periwinkle core `#fff→#8196f8` + pink rim `#efabc5` *(the reference recipe)* |
| `shadow` | darker shade of the core | form curves away | rose core `#fceaf0→#ea669f` + deep pink rim `#871f4b` |
| `luminous` | brighter, saturated variant | the edge emits light | forest core `#293a18→#496d21` + gold rim `#df9c2a`; saffron core + marigold rim `#ffcb79` |

**Echo** (`echo_rim: true`): the far end of the core becomes the rim colour. This gives "dusk inside a gateway": indigo `#11115b→#4250d5` crown melting into a peach `#f9bb9e` base. Use it for hero arches.

## Sarvam palettes (built in as `sr-*`, taken from the official glyph gradients)
`sr-periwinkle` `#fbfbfb→#8196f8` · `sr-sky` `#e8effc→#81a0e9` · `sr-deep-indigo` `#a7c0f1→#2225a9` · `sr-saffron` `#ffcb79→#d5650f` · `sr-ember-blush` `#efabc5→#e6651b` · `sr-sindoor-marigold` `#ffcb79→#b81514` · `sr-leaf-blush` `#f9d5e1→#6ea335` · `sr-forest` `#6ea335→#293a18` · `sr-rose` `#fceaf0→#ea669f` · `sr-marigold-cream` `#e9eac2→#fecd7c` · `sr-indigo-night` `#212191→#81a0e9`

## Rules (Sarvam)
1. **Shapes come from the system only:** `assets/glyphs/*.svg`, `assets/motifs/gateway-arch.svg`, or the built-in ornamental shapes (quatrefoil, cusped medallion, lotus-8, star-4, ogee-quatrefoil). Never use letters, logos or the monogram.
2. **Hues come from tokens.** Core and rim use the `sr-*` palettes above or token hex values. At most 3 hues per glyph. The blue↔orange pairing is the signature.
3. **Match rim width to the shape:** pointed lotus and star shapes need 0.10–0.17. Plump gateways and medallions carry 0.22–0.30.
4. **In a set, vary on purpose:** mix moods and focus positions, alternate warm and cool neighbours, and add one or two deep anchors (forest-gold, deep indigo) without putting them next to each other.
5. Same composition rules as `07-motifs-and-glyphs.md`: gateways stay upright, no text inside, clusters of 2–3 overlapping 15–30%.
6. The rim must visibly differ from the core (the script warns below OKLab distance ≈ 0.09). A melted rim flattens the glyph.

## Commands
```bash
python tools/color-depth/color_depth.py info                                   # shapes, palettes, moods
python tools/color-depth/color_depth.py spec tools/color-depth/sarvam-glyphs.json --out assets/glyphs-depth --size 384
python tools/color-depth/color_depth.py random --count 12 --seed 7 --palette sr-saffron --shape-svg assets/glyphs/voice-motif-01.svg --out out/
```
`sarvam-glyphs.json` is the curated 12-glyph Sarvam set (rendered in `assets/glyphs-depth/` with `gallery.html` and `manifest.json`). Copy an entry and edit it for new colourways.

## Without the script (CSS / Figma)
Fill the shape with the rim colour. On top, place the core gradient masked by a copy of the shape eroded by about the rim width and blurred by the same amount, offset toward `focus`. Clip everything to the original shape. Never use `stroke` or `box-shadow` for the rim.

## QA
- Is the silhouette readable at 64px on white?
- Does the rim differ from the core and blend with no hard ring?
- Does the rim follow every lobe and point, not just a circle?
- Is there a clear direction or centre of light matching `focus`?
- Do the PNGs have transparent backgrounds?
