# 07 · Motifs and Glyphs

Sarvam's graphic vocabulary is small, and every element comes from the **Gateway** and **mandala** ideas. Use only these elements. Do not invent new ornaments.

| Motif | File(s) | What it is | Where it's used |
|---|---|---|---|
| **Monogram / Logomark** | `assets/logos/sarvam-logo-{black,white}.svg` | Lotus-like mandala of repeated interlocking circles with a centre diamond | App icon, avatars, centred hero emblem in white over gradient. **Never next to the wordmark.** |
| **Gateway glyphs** (official, 19) | `assets/glyphs/model-01…16.svg`, `voice-motif-01…03.svg` | Cusped multifoil gateway shapes, each filled with a 2-stop vertical gradient and an inner shadow | Product/model icons, feature cards, banner clusters, section accents |
| **Gateway arch** | `assets/motifs/gateway-arch*.svg` [added, derived] | Torana silhouette: ogee peak, two stepped lobes per side, straight jambs | Frames for headlines and media, masks, background silhouettes |
| **Concentric gateway** | `assets/motifs/gateway-concentric-{indigo,saffron,leaf}.svg` [added] | 6 nested arches, deep → pale | Full-bleed banner backgrounds ("Knowledge Fabric" style) |
| **Gateway glow** | `assets/motifs/gateway-glow.svg` [added] | Blurred cream arch | Light-through-a-doorway backgrounds ("Supernova" style) |
| **Star bullet** | `assets/motifs/star-bullet-{green,indigo,orange,pink}.svg` | 4-point lotus star, gradient, inner shadow (from sarvam.ai "Why Sarvam") | List bullets for pillars and features, 18–24px |
| **Ornament divider** | `assets/motifs/ornament-divider.svg` | Symmetric scroll flourish over a hairline (two mirrored paisley curls) | **Above the hero eyebrow only**, in white or `#f0f0f0` over the aura |
| **Eyebrow hairlines** | CSS (`--hairline-indigo`) | 1px lines that fade at both ends | Above and below the hero eyebrow text |
| **Sarvam mandala** | `assets/mandala/sarvam-mandala-{mark,outline}.svg` | 9-petal interlocking mandala + centre diamond | **Preferred background line texture**: banners, CTA panel, one hero. See `17-mandala-background.md` |
| **Concentric arcs / hairline circles** | CSS / SVG | Thin 1px circles radiating from one point | Legacy. Prefer the Sarvam mandala (`17-mandala-background.md`) over generic ripples |

## Gateway glyph catalogue (official)
| File | Shape | Gradient |
|---|---|---|
| model-01 | 4-lobe cusped (quatrefoil with points) | ember `#E6651B` → blush `#EFABC5` |
| model-02 | multifoil | periwinkle `#8196F8` → `#FBFBFB` |
| model-03 | 8-petal cloud | sky `#81A0E9` → `#E8EFFC` (+ saffron edge) |
| model-04 | gateway | forest `#293A18` → `#6EA335` |
| model-05 | gateway | leaf 4-stop `#496D21`→`#E3F1D8` |
| model-06 / 07 | pointed lotus | sindoor `#B81514` → marigold / ice |
| model-08 | gateway | leaf `#6EA335` → pink `#F9D5E1` |
| model-09 / 14 | gateway | marigold cream `#FECD7C` → `#E9EAC2` |
| model-10 | gateway | deep indigo `#2225A9` → `#A7C0F1` |
| model-11 | 4-point diamond lotus | rose `#EA669F` → `#FCEAF0` (+ indigo tips) |
| model-12 | gateway | saffron `#D5650F` → `#FFCB79` |
| model-13 | gateway | `#A5BBFC` → `#E9EAC2` |
| model-15 | gateway | sky |
| model-16 | gateway | full spectrum (5 stops) |
| voice-motif-01/02/03 | 8-cusp gateway medallion | periwinkle / saffron / leaf→pink |

See `assets/reference/glyphs-and-icons.png` for a rendered contact sheet.

## New colourways
To colour new or existing glyph shapes, use `15-glyph-color-depth.md` (core + rim, four moods, `sr-*` palettes). A curated set is in `assets/glyphs-depth/`.

## Composition rules
1. **Clusters of 2–3 glyphs, overlapping by 15–30%**, with different sizes (1 : 0.6 : 0.45) and different hues (e.g. pink→blue hero glyph + green cloud behind + indigo 4-petal in front). This is the "Startup Program" pattern.
2. **A single hero glyph** can be very large (40–60% of canvas height), centred or bleeding off an edge.
3. Glyphs keep their **inner-shadow** (top highlight). Never add drop shadows or outlines.
4. Don't rotate a gateway glyph. Gateways always stand upright (the peak points up). 4-point lotus/diamond glyphs may sit at 0° or 45°.
5. Glyphs never contain text. Text sits beside or below them, or inside a **gateway arch frame**.
6. On dark backgrounds, glyphs can glow: add a same-hue radial blur behind at 30% opacity.

## Drawing new gateway shapes (for SVG generation)
If a new glyph or frame is needed, follow this construction (mandala logic):
1. **Bilateral symmetry** about the vertical axis. Gateways can also be 4-fold or 8-fold radial for medallions.
2. **Build from circles.** Each lobe is a circular arc. Neighbouring lobes meet in a sharp **cusp** (inward point). Lobe radii step down toward the top (e.g. shoulder r=36, upper r=30).
3. **Ogee peak:** two S-curves meeting at a fine point at the top centre (like a dome finial).
4. **Straight jambs** drop vertically from the lowest lobe. Frames are open at the bottom edge (they "stand on the ground").
5. Proportions: width : height ≈ 4 : 5 for arches. Peak height ≈ 26% of total. 2 lobes per side.
6. Fill with **one vertical 2-stop gradient** from the catalogue above, deep at the top or bottom. Add the inner shadow: `feOffset dy=1–2, blur 2–4, colour = palest stop`.
7. Optional **concentric layering**: repeat the path scaled about the bottom-centre at 86%, 72%, 58%… stepping through a ramp (`gateway-concentric-*.svg`). For a smooth ripple, blur each ring 2–4px.

Reference path (viewBox 0 0 400 500), the base of `gateway-arch.svg`:
```
M0 500V262C0 222 28 194 64 190C72 154 102 130 138 130C150 98 172 72 190 44
C196 32 199 16 200 0C201 16 204 32 210 44C228 72 250 98 262 130C298 130 328 154
336 190C372 194 400 222 400 262V500Z
```

## The scalloped horizon (from "Powering India's AI-first future")
A row of large, soft cusped domes along the bottom edge of a card (periwinkle gradient), with the white monogram floating above the central peak. Use it for feature or "why us" cards. Recipe: 3 overlapping domes (centre one tallest with an ogee tip), fill `linear-gradient(180deg,#8ca0f0,#a7b8f5)`, card background `linear-gradient(180deg,#a9b6f4 0%,#e3e8fb 60%)`, card radius 16px.

## Don'ts
- ❌ Mandalas drawn as dense rangoli or henna patterns
- ❌ Peacocks, elephants, lotus clip-art, diyas, Taj Mahal, Ashoka chakra, tricolour
- ❌ Gateway shapes with drop shadows, outlines or 3D bevels
- ❌ Text inside glyphs
- ❌ More than 3 glyphs in one composition (except tiled systems like "Gateway / Under Load / In Context")
