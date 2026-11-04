# 14 · Soft-Glow Surfaces (card and section backgrounds)

The pastel haze rising from the bottom of Sarvam's feature cards, use-case tiles and social posts. Tooling: `tools/soft-glow/` (from the *soft-glow-gradients* skill, extended with Sarvam presets).

> **What it is NOT:** a `linear-gradient` (gives straight bands) or a `radial-gradient` (gives rings and a visible centre). Both look cheap next to the real thing.
> **What it IS:** a **solid single-hue shape with a gently curved top edge, put through a Gaussian blur.** The fade runs perpendicular to the curve with a constant width (≈ 2.56 × σ).

## When to use (vs. the other gradient recipes)
| Need | Use |
|---|---|
| Card, tile or section background that stays calm with content on top | **Soft glow** (this file) |
| Hero light from above (orange core, periwinkle wings) | Hero Aura, `06-gradients-and-light.md` §1 |
| Full-bleed banner colour field | Spectrum Field, 06 §2 |
| Colour *inside a shape* (glyph, motif, emblem) | Glyph colour depth, `15-glyph-color-depth.md` |

## Rules
1. **Mass in the bottom 25–45%** of the surface. Its 50% edge sits between 52% and 92% of the height. The top half stays clean for content.
2. **One hue per layer, mixed only with white.** No hue shift inside a layer. Pastel fills: OKLCH L 0.80–0.93, low chroma.
3. **Two-tone horizon** = a broad pale layer (σ ≈ 11) + a deeper, tighter core near the bottom (σ ≈ 6.5, points 92–100). This is Sarvam's signature for social posts.
4. **Too strong? Lighten the fill.** Don't lower opacity, because lower opacity goes grey on `#fcfcfc`.
5. **Sets of cards: one hue per card and a different contour per neighbour** (hill, valley, ramp, dome, whisper). Same lightness band for all, and at most one "whisper" card per set.
6. **Card shell:** `#fff` surface, 16px radius (`--radius-card`; the generator's ~8% radius maps to this), 1px `#ececec`/`--st-secondary` border, on a `#fafafa`/`--sf` page.
7. No grain, no text effects. The glow is the whole effect.

## Sarvam palette (pastel band, mapped to tokens)
| Glow palette | Hex | Nearest Sarvam token | Use |
|---|---|---|---|
| lilac | `#BBC3F1` | indigo-200/300 | TTS, voice, default |
| ice | `#C9D8FD` | indigo-200 | broad horizon layer |
| indigo *(core only)* | `#5B63C9` | indigo-700 | horizon core |
| sage | `#D7EAC1` | green-100/200 | sovereign, startups |
| peach | `#FDE7DC` | orange-100 | warm whisper |
| honey | `#FFE0AA` | yellow-200 | community, events |
| rose | `#E0A6BF` | pink-200 | documents, Parse |
| `sr-*` aliases | exact tokens | `sr-indigo-100…500`, `sr-orange-100/200/500`, `sr-green-100/400`, `sr-pink-100/300`, `sr-yellow-200` | build any new glow from tokens |

## Presets
| Preset | Look | Use |
|---|---|---|
| `lilac-hill`, `sage-valley`, `peach-whisper`, `rose-ramp`, `honey-dome` | single-layer card glows (measured from Sarvam cards) | feature / use-case card sets |
| `horizon` | ice → indigo two-layer (measured from Sarvam × Meta post) | social posts, section bands |
| **`sr-dawn`** [added] | orange-200 broad + saffron-500 core | events, warm announcements |
| **`sr-spectrum`** [added] | indigo-200 broad + indigo core left + saffron core right | brand moments: the blue→orange spectrum as a glow |
| **`sr-meadow`** [added] | green-100 broad + green-400 core | sovereign / startup programme |

Rendered samples: `assets/glows/*.svg`.

## Commands
```bash
python tools/soft-glow/glow.py --list
python tools/soft-glow/glow.py --preset lilac-hill                          # inline <svg> for a card
python tools/soft-glow/glow.py --preset sr-spectrum --format svg --width 1080 --height 1080 -o out/post.svg
python tools/soft-glow/glow.py --layer color=sr-green-100,contour=valley --mirror
python tools/soft-glow/glow.py --preset honey-dome --format css             # background-image data URI
```
**Visual editor:** open `tools/soft-glow/generator.html` in a browser for a live preview, per-layer controls, card-set mode, and PNG/SVG/CSS export. It has the same data as `glow.py`; if you change one, change the other.

### Inline usage
The parent needs `position:relative; overflow:hidden; isolation:isolate;` and its own background. Content then stacks above the glow with no z-index. Give each glow a unique `--id` when several share a page.

## Responsive
The inline SVG uses `preserveAspectRatio="none"` in a 100×100 viewBox, so it stretches with the card. On mobile cards that are wider than tall, lower the glow with a negative `lift` (−4 to −8) so text never sits on the deepest colour.

## QA
- Does the fade follow the curve, with no straight bands and no ring?
- Are there no hard edges and no white gaps at the left, right or bottom?
- Is the top half clean, with the mass in the lower third?
- Do neighbouring cards differ in shape as well as colour?
