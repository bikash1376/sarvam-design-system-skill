# Components · Content Blocks

## Eyebrow (hero tagline)
A centred line of indigo text between two gradient hairlines, often with the **ornament divider** above it.
```html
<div class="eyebrow">
  <img src="assets/motifs/ornament-divider.svg" class="eyebrow-ornament" alt="">  <!-- optional, hero only -->
  <span class="eyebrow-line"></span>
  <p>India's Sovereign AI Platform</p>
  <span class="eyebrow-line"></span>
</div>
```
```css
.eyebrow{display:flex;flex-direction:column;align-items:center;gap:10px;width:fit-content;margin-inline:auto}
.eyebrow-line{display:block;width:100%;height:1px;background:radial-gradient(circle,#6a88e2 0%,transparent 100%)}
.eyebrow p{padding:0 32px;font:400 14px/1.5 var(--font-sans);letter-spacing:.025em;color:var(--sr-indigo-900)}
@media(min-width:768px){.eyebrow p{font-size:16px}}
.eyebrow-ornament{width:208px;opacity:.9;margin-bottom:24px}
```
**Section label** (smaller, for logo bars and product sections): `Matter 500 12px uppercase, letter-spacing 2px, --tx-tertiary` ("INDIA BUILDS WITH SARVAM", "INDUS COWORK").

## Section header
Centred: h2 (Season Mix 500, 28→36px) + optional body-lg sub (Matter, `--tx-tertiary`, max-width 640px), with a gap of 12–16px. 32px (mobile) / 48px (desktop) to the content below.
Split variant (inside product sections): left-aligned label + h2 + sub, with an outline CTA aligned right at desktop. The CTA drops below the text on mobile.

## Feature card
```
┌───────────────────────────────┐  bg #fff · border 1px #e6e6e6 · radius 16px
│ [icon 24px tinted]            │  padding 24px (mobile 20px)
│                               │
│ Text to Speech                │  Matter 500 18–20px --tx
│ Natural voices across 11      │  Matter 400 14–15px --tx-tertiary, lh 1.5
│ Indic languages               │
└───────────────────────────────┘  hover: shadow-card-hover, translateY(-2px)
```
Variants: **Tinted tile** (gradient fill from 06 §5 with a white icon/glyph centred, 16px radius, aspect 4:3) and **Illustrated card** (scalloped horizon, see 07).

## Pillar list (star bullets)
A row is `[star 20px] [Title Matter 500 20px]` with the description below it, indented to align with the title (Matter 400 16px `--tx-tertiary`, lh 1.65). The gap between items is 24–32px. Alternate star hues per item, or use one hue for all.

## Stats / metrics
Desktop: 3–4 cells in a row, separated by 1px `--st` vertical dividers, each with a number (Season Mix 400, 48–56px, `--tx` or `--sr-indigo-900`) and a label (Matter 400 14px `--tx-tertiary`).
Compact table variant: label left (`--tx-tertiary` 14px) and value right (Matter 500 18px), with hairline rows ("tokens served · 10B+").
Mobile: a 2×2 grid with horizontal dividers.

## Badge (compliance / status), measured on sarvam.ai
**Not a pill.** These are soft rounded rectangles with a semibold label and a solid hue icon.
```
radius 12px · padding 8px 14px · gap 8px · height 38px
font Matter 14px, weight 625 (semibold), colour = hue
icon 16-18px, SOLID style, same hue (see 08-iconography, style 2)
background {hue}-50 (indigo #fafcff; others at 50% opacity)
border 1px {hue}-200 at 75% (red/pink use -100)
shadow inset 0 -0.5px 1px 0 {hue}-200   <- the soft bottom "lip"
```
| Badge | Hue | Text | Icon |
|---|---|---|---|
| SOC 2 Type I | indigo | `#556adc` (indigo-600) | certificate document |
| ISO 27001 | green | `#6ea335` (green-600) | shield |
| DPDP compliant | orange | `#ee7944` (orange-600) | database + lock |
| Role-based access | pink | `#d4508e` (pink-400) | user + key |
| Full audit trail | yellow | `#c08827` (yellow-700, 90%) | document + person |
| Data residency controls | red | `#db715c` (red-300) | server |

```css
.badge{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:12px;font:625 14px/1 var(--font-sans);border:1px solid}
.badge-indigo{background:var(--sr-indigo-50);border-color:rgb(210 223 249/.75);color:var(--sr-indigo-600);box-shadow:inset 0 -.5px 1px var(--sr-indigo-200)}
.badge-red{background:rgb(253 231 226/.5);border-color:var(--sr-red-100);color:var(--sr-red-300);box-shadow:inset 0 -.5px 1px var(--sr-red-100)}
```
Responsive: wraps with a 10px gap. On mobile, keep 14px.

## Tag (small, on cards)
A pill at 12px Matter.
- **Category tag:** `bg {hue}-100`, `text {hue}-800`, weight 525, padding 4px 10px (e.g. "Voice Infra" in indigo, "Agent Framework" in orange).
- **Capability tag:** `bg --sf-secondary`, `1px --st` border, `--tx-tertiary`, weight 425 ("STT", "TTS").

## Integration card (sarvam.ai/integrations), measured
```
card  : bg #fff · 1px #f0f0f0 (--st-secondary) · radius 16px · padding 24px · flex column, space-between
        hover -> shadow 0 8px 40px -4px rgb(0 0 0/.12) + border #e6e6e6 · active scale(.99)
well  : full width, h 144px (mobile) / 176px (md+) · radius 16px · 1px #f0f0f0
        bg linear-gradient(to bottom right, {hue}-100, #fff)   <- tint matches the category
        partner logo centred, about 40% of well width, original colours
title : Matter 525 18px / 1.3, --tx, 2-line clamp, 16px below the well
desc  : Matter 425 13px / 1.6, --tx-secondary #3d3d3d, 3-line clamp, 6px below the title
tags  : row pinned to the bottom, gap 6px (category tag + capability tags)
```
Grid: 3-up at >=1024 (gap 24), 2-up at 768, 1-up on mobile. Card widths are equal, and the tags line up because the card is a flex column.

## Testimonial
White card, 16px radius, 1px border, padding 32px (desktop 40px). Partner logo centred at top (≤32px tall). Quote in **Matter 400 20–22px `--tx-secondary`, lh 1.5**, clamped to 3–4 lines. Footer row: 40px round avatar + name (Matter 500 15px) + role (13px `--tx-tertiary`), with a secondary "Read full story" pill on the right (it drops below on mobile).
Inline compact variant: `"Quote…"` in Season Mix 22px between logo rows.

## Logo marquee
Grayscale, brightness .8, opacity .5, height 30–45px, gap 60px, linear auto-scroll, edge fade mask `linear-gradient(to right,transparent,#000 8%,#000 92%,transparent)`. Label above: "INDIA BUILDS WITH SARVAM".

## Code block
Background `#fafafa`, border 1px `--st`, 16px radius. Header tabs (Python · JavaScript · cURL) on `#f0f0f0`, with a "Copy" ghost button on the right. Matter Mono 13px. Tokens: keyword `#3333cc`, string `#496d21`, function `#212191`, constant `#a5460f`, comment `#666`. Indic strings are shown in native script (`"नमस्ते, कैसे हो आप?"`).

## Composer / input
White, 12px radius, 1px `--st`, `--shadow-card`. Placeholder in `--tx-tertiary`, typing caret `--sr-indigo-600`. A bottom toolbar holds a `+` button and "Using [Web] [Google Drive]" chips. Send button: 32px round slate.

## Media frame
Radius 16px (mobile) / 24px (desktop), `overflow:hidden`, optional 1px `rgba(0,0,0,.06)` inner border. Video gets a centred 56px white-blur play button.
