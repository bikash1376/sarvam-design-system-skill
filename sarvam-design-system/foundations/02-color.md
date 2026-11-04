# 02 · Colour

All hex values live in `tokens/tokens.css`. This file defines **roles, ratios and pairings**.

## The model: neutral canvas + spectrum light
Sarvam is a **light, neutral-first** brand. Brand colour appears as *light*: auras, gradient glyphs and gradient fields. It is not a fill for UI chrome.

### Usage ratio (web)
```
~85%  Neutrals     #fcfcfc canvas · #ffffff cards · #1f1f1f/#3d3d3d/#666 text · #e6e6e6 strokes
~10%  Spectrum     indigo/periwinkle + saffron as glows, gradients, glyphs
 ~4%  Slate/dark   #2a2c33 primary buttons, one dark CTA panel
 ~1%  Accents      indigo-600 links/highlights, green/pink/red/yellow badges
```
Social banners can flip this. A full-bleed spectrum or gateway gradient may cover 100% of the canvas (see `formats/social-banners.md`).

## Neutrals
| Token | Hex | Role |
|---|---|---|
| `--sf` | `#fcfcfc` | Page background. Slightly off-white; use it instead of `#fff` for the page |
| `--sf-white` | `#ffffff` | Cards, nav pills, inputs |
| `--sf-secondary` | `#f5f5f5` | Secondary button, chips, Log In pill |
| `--sf-tertiary` | `#f0f0f0` | Code headers, wells, footer badge boxes |
| `--st` | `#e6e6e6` | 1px borders on cards and outlined buttons |
| `--tx` | `#1f1f1f` | Headlines and primary text (never pure black for text) |
| `--tx-secondary` | `#3d3d3d` | Hero sub-copy, lead paragraphs |
| `--tx-tertiary` | `#666666` | Card body, captions, meta, footer links |
| `--slate` | `#2a2c33` | Primary button, dark chips |
| `--black` | `#141414` | Dark panels, dark banners |

## Brand hues
**Indigo is the primary hue.** It is the "blue" in blue→orange and is used for:
- links and hover (`--sr-indigo-800 #3333cc` hover; `-600 #556adc` inline highlight, e.g. "Add **Text to Speech** to your app")
- the eyebrow text (`-900 #212191`) and eyebrow hairlines (`-500 #6a88e2`)
- periwinkle glows (`-200`…`-400`), focus rings (`#a5bbfc` at 15%)
- the two-tone headline: line 1 `-900 #212191`, line 2 `-400 #81a0e9`

**Saffron/orange is the secondary hue**, the warm end of the spectrum:
- hero glow core (`#f97316` → `#fb923c`), `--br-orange #d5650f`
- gradient glyph fills, event key visuals, "Now arriving" style fields

**Supporting hues** (green, pink, red, yellow) appear only as **glyph gradients, category badges and icon tints**. Never use them as large UI fills on web pages.

## Gradient pairs used in official Gateway glyphs
Glyphs blend from a deep stop to a pale stop, top→bottom or bottom→top:
| Pair | From | To |
|---|---|---|
| Periwinkle | `#8196F8` | `#FBFBFB` |
| Sky | `#81A0E9` | `#E8EFFC` |
| Deep indigo | `#2225A9` | `#A7C0F1` |
| Saffron | `#D5650F` | `#FFCB79` |
| Ember → blush | `#E6651B` | `#EFABC5` |
| Sindoor → marigold | `#B81514` | `#FFCB79` |
| Sindoor → ice | `#B81514` | `#D2DFF9` |
| Leaf | `#6EA335` | `#F9D5E1` |
| Forest | `#293A18` | `#6EA335` |
| Rose | `#EA669F` | `#FCEAF0` |
| Marigold cream | `#FECD7C` | `#E9EAC2` |
| Spectrum | `#A5460F` → `#F9730C` → `#FFB053` → `#BED2FF` → `#F4F7FF` | (multi-stop) |

## Badge / status colour recipe (production)
Soft tinted chip: `bg-{hue}-50` (50–75% opacity), `border-{hue}-200/75`, `text-{hue}-600`, plus `inset 0 -0.5px 1px 0 {hue}-200`.
| Use | Hue |
|---|---|
| Security / SOC2 / info | indigo |
| ISO / success / compliant | green |
| DPDP / data residency | orange / red |
| Role-based / people | pink |
| Audit / logs | yellow |

## Pairings and contrast (WCAG)
| Foreground on background | Ratio | OK for |
|---|---|---|
| `#1f1f1f` on `#fcfcfc` | 16.1:1 | everything |
| `#666666` on `#ffffff` | 5.7:1 | body ≥14px |
| `#212191` on `#fcfcfc` | 12.1:1 | everything |
| `#556adc` on `#ffffff` | 4.7:1 | text ≥16px, links |
| `#ffffff` on `#2a2c33` | 14:1 | buttons |
| `#ffffff` on `#e6651b` | 3.4:1 | **display text ≥32px only** |
| `#ffffff` on `#556adc` | 4.7:1 | headlines and body ≥16px |
| `#3d3d3d` on `#fcfcfc` | 10.6:1 | everything |
| `#81a0e9` on `#ffffff` | 2.6:1 | **only the 2nd line of a two-tone display headline ≥48px**; never body |

**Rule:** white text on mid-spectrum (orange, periwinkle) is only for **large display type** (≥32px web, ≥48px banners). Put small text on neutral, dark or deep stops.

## Don'ts
- ❌ The Indian tricolour (saffron-white-green) as a gradient or stripes
- ❌ Purple-to-pink "AI gradient" clichés (`#8b5cf6 → #ec4899`) or neon cyan
- ❌ Flat `#3333cc` or `#e6651b` rectangles as section backgrounds
- ❌ Pure `#000` text, or a pure `#fff` page background
- ❌ More than 2 hues in a single glyph gradient (except the official spectrum)
