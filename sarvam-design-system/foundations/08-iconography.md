# 08 · Iconography

## Style
- **Library: [Hugeicons](https://hugeicons.com)**, confirmed in sarvam.ai's production JS bundles: the `HugeiconsIcon` component from `@hugeicons/react`, with named icons such as `Tick01Icon`, `Copy01Icon`, `SparklesIcon`, `PlayIcon`, `PauseIcon` and `MentoringIcon`. 24×24 grid, rounded caps and joins, 1.5px stroke. Fallback when Hugeicons isn't available: Lucide at `stroke-width:1.5`.
- **Third-party and tech logos** (integrations, SDK tabs) use **Iconify** sets `logos:` and `simple-icons:` (`https://api.iconify.design/logos/python.svg`).
- **Brand-owned graphics are custom, not from a library:** the Gateway glyphs, the 4-point star bullet, the ornament divider and the monogram. Never substitute library icons for these.
- **Two modes:**
  - **Stroke (UI):** 1.5px, `currentColor`, used in nav dropdowns, list rows, buttons and tabs. Colour `--tx-tertiary` at rest, `--tx` on hover.
  - **Solid duotone (product):** filled glyph with a small sparkle or dot accent, used for product tiles (TTS, STT, Translation, Parse). Tinted in the product hue (`#818cf8`, `#f87171`, `#f97316`, `#e879a0`). The inactive state is `--st #e6e6e6`.
- **Indic glyph icons:** Translation uses the Devanagari letter **अ** as its icon. Language features can use a native-script letter in place of a pictogram.

## Sizes
| Context | Size | Stroke |
|---|---|---|
| Inline in text / buttons | 16–18px | 1.5 |
| List rows, nav menu | 20px | 1.5 (2 in footer socials) |
| Product tiles | 24px | solid |
| Feature cards | 32–40px in a 48–56px tinted square (`radius 12px`, `bg {hue}-50`) | solid |

## Rules
- **Don't force-fit the existing set.** The icons in `assets/icons/` are the ones sarvam.ai happens to ship — they are not the limit of what you may use. If the concept needs something else (schedule, documents, sub-agents, handoff, retention), pull the matching **Hugeicons** icon and render it in the same style, stroke weight and 24px grid. Never substitute an emoji, a text glyph, or an icon from another family.
- Icon + label gap is 6–8px. Icons are vertically centred with the cap-height.
- Never mix outline and solid icons in the same row.
- Arrows: use a chevron or `→` after link-style CTAs ("Explore Indus Cowork →"). The arrow nudges 2px right on hover.
- Social icons in the footer: 18px, monochrome `--tx-tertiary`, brand colour on hover.
- Checklists use a **solid indigo check-badge** (`assets/icons/check-badge.svg`, `--sr-indigo-600`) at 18px.

Available in `assets/icons/`: `tts`, `stt`, `translation`, `parse`, `voice`, `doc-ai`, `database`, `check-badge`, and UI icons (`ui-*`: plus, mic, send, attach, chevron, dots, calendar, side-panel…).

## The three icon styles
sarvam.ai uses three treatments of the same Hugeicons geometry. Pick by context, and **never mix styles in one row or grid**.

| Style | Look | Where (on sarvam.ai) | Size |
|---|---|---|---|
| **1. Flat stroke** | 1.5px stroke, `currentColor` (`--tx-tertiary` → `--tx` on hover) | nav menus, list rows, buttons, tabs, footer | 16–20px |
| **2. Solid (product hue)** | One flat fill in the product's hue, with inner details knocked out to white | product tiles (TTS / STT / Translation / Parse), feature lists, compliance badges, verified ticks | 18–40px |
| **3. Depth (periwinkle)** | One periwinkle gradient, white top sheen, subtle inner rim, white knock-outs | feature illustrations, use-case cards, empty states, marketing | 40px and up |

### 2 · Solid icons (`assets/icons-solid/`)
Flat fill, no gradient, no outline, no shadow. Knock-outs (the sparkle gap, chat dots, check mark) stay white or transparent. The hue identifies the product. These values were sampled from sarvam.ai:

| Icon / meaning | Hex | Token / note |
|---|---|---|
| Text to Speech, voice | `#818cf8` | periwinkle (site tile colour) |
| Speech to Text | `#f87171` | coral (site tile colour) |
| Translation (अ) | `#f97316` | orange (site tile colour) |
| Parse, Document AI | `#e879a0` | pink (site tile colour) |
| Verified / check badge, translate-globe, generic UI | `#556adc` | `--sr-indigo-600` |
| Mic (voice input) | `#e96c2f` | `--sr-orange-700` |
| Chat / conversation | `#496d21` | `--sr-green-700` |
| Data / DPDP | `#ee7944` | `--sr-orange-600` |
| Check badge colourways | green `#83c040` · pink `#d9a0d0` · orange `#d0542a` · indigo `#556adc` | status variety in lists |

Build or rebuild: `python scripts/solid_icons.py` (the hue map is at the top of the script).

### 3 · Depth icons (`assets/icons-depth/`)
**Always periwinkle. The depth style is NOT tinted per product.** On sarvam.ai the person, chat, drum and translate depth icons all share one gradient (sampled):
- Gradient at 172°: light `#a8b6ef` at the top, mid `#859ae7`, deep `#627ddf` at the bottom. It runs across the whole icon box, so upper parts read lighter.
- A soft radial white sheen at about (46%, 24%), and an inner rim that is light along the top edge and deeper `#4352c4` along the bottom edge.
- Inner details are white knock-outs. Secondary or back layers use the same gradient at about 45% opacity (the back card of the translate icon).
- No outline and no drop shadow.

Rebuild: `python -I ~/.claude/skills/depth-icons/scripts/depth_icons.py assets/icons -o assets/icons-depth --light "#a8b6ef" --deep "#627ddf" --png 128`
To colour-code by product, use the **solid** style, not a tinted depth icon.
