---
title: "Animations"
slug: animations
group: Animations
summary: "Small looping illustrations that show a product working (scaling, routing, streaming, checking), in the quiet card style of sarvam.ai/token-factory."
related: [card, chart, activity, stat]
---

# Animations

Small looping illustrations that show a product working (scaling, routing, streaming, checking), in the quiet card style of sarvam.ai/token-factory.

> **Use this page whenever someone asks for an animation of something that isn't already a component.** Existing components keep their own motion (`foundations/10-motion.md`). Anything else ("animate how our inference scales", "show data staying in India", "make the hero feel alive") is built from the patterns below, in Motion, in this grammar.

## Styles
**The illustration-card grammar** (measured on sarvam.ai/token-factory):
- **Frame:** a white card (`--sf-white`, 1px `--st-secondary`, radius 16px) with a quiet mock-UI illustration in the top ~60% and a title (Matter 525, 18px) plus a two-line description (`--tx-tertiary`, 14px) below.
- **Ink:** line art in `--sr-grey-300` to `--sr-grey-500` (1–1.5px strokes, radius 6–8px on mock panels), with **one accent hue** per card (usually `--sr-indigo-500/600`). Success is `--sr-green-600`. Never more than two hues.
- **Scale:** illustrations are mock UI (chips, rows, nodes, bars), not pictures. No people, no 3D, no stock icons.
- **Hero exception:** the hero may hold one large generative field (the saffron grain columns on Token Factory), drawn on `<canvas>` in the spectrum hues.

**Pattern library** (pick one per card, recolour with tokens):
| Pattern | What moves | Shows |
|---|---|---|
| `grain-field` | Canvas columns of saffron grain rise and fall like an equaliser (Perlin-ish heights, dithered top edge) | Hero energy: scale, throughput |
| `autoscale` | A demand curve draws in. GPU chips switch on left to right as the curve rises and off as it falls | Capacity following demand |
| `rollout` | A heartbeat line scrolls. Three checkpoints (5% → 50% → 100%) fill in turn, and a check pops at each | Safe staged deploys, monitoring |
| `flow` | Dots travel along paths between nodes; the hub pulses once per arrival | Tool calling, routing, data staying in India |
| `grid-fill` | Cells of a grid light up in sequence in 2–3 brand tints, then clear | Big context windows, batch jobs |
| `bar-race` | Two bars grow from zero to their values, and the headline number counts up | Benchmarks (FACTS.md numbers only) |
| `type-in` | A code line types character by character with a caret, then the tool icons beneath highlight in turn | SDK compatibility, "fits your tools" |
| `badge-orbit` | Dashed rings rotate slowly around a certification badge | Compliance, trust |

## Usage
### Use
- Feature and capability cards on product pages: one pattern per card, in a 3-column grid.
- A hero that needs life without a photo: `grain-field` (one per page).
- Any "animate X" request where X isn't an existing component: map X to the closest pattern; if none fits, compose one from the same grammar (mock UI + one accent + one loop).
### Not for
- Component state changes (open, close, select, press) → the component's own motion in `foundations/10-motion.md`.
- Decoration with no meaning: if the animation doesn't show the product doing something, use a still card.
- Banners and social posts (static PNG) → `formats/social-banners.md`.

## Rules
- **Must** show the product doing one thing per card: scaling, routing, checking, streaming. Because a loop that illustrates nothing is noise, and the eye learns to ignore every card.
- **Must** loop calmly: 3–6s per cycle, `--ease-brand` / `--ease-reveal` easing, a 0.6–1.2s rest at the end of each cycle. Never bounce, flash or shake.
- **Must** start only when the card scrolls into view, and pause when it leaves (Motion `useInView`; canvas loops stop their `requestAnimationFrame`). Because six looping cards off-screen burn battery for nothing.
- **Must** animate only `transform`, `opacity`, `stroke-dashoffset` and canvas pixels. Never animate width or height on a loop. Because composite-only properties stay smooth while the page scrolls (see `vendor/emil-kowalski/animation-performance`).
- **Must** render a meaningful **still frame** under reduced motion: the end state of the loop, with no movement.
- **Should** stagger cards in a grid by ~0.4s, so the grid doesn't pulse in unison.
- **Never** use more than one accent hue per card, or put text inside the animation that the card's title doesn't repeat.
- **Never** use Lottie or GIF for these. Build them in Motion + SVG (or canvas for the grain field) so they stay crisp, themeable and light.

## Accessibility
- The illustration is decorative: `aria-hidden="true"`. The card's title and description carry the meaning.
- `prefers-reduced-motion: reduce` → show the still end frame (`MotionConfig reducedMotion="user"` plus a static branch for canvas).
- No flashing faster than 3 times a second. Contrast for any text inside the illustration ≥ 3:1.

## Edge cases
| Scenario | Fix |
|---|---|
| Six animated cards in one grid | Stagger starts by 0.4s; pause any card out of view |
| Low-power device or a background tab | Loops pause when the tab is hidden (`visibilitychange`) |
| Card narrower than 280px on mobile | Drop to the still end frame, or simplify to one moving element |
| Benchmark numbers in `bar-race` | Use only FACTS.md values, and label the benchmark under the bars |

## API
| Prop | Type | Default |
|---|---|---|
| `pattern` | `grain-field \| autoscale \| rollout \| flow \| grid-fill \| bar-race \| type-in \| badge-orbit` | required |
| `accent` | Sarvam hue token | `--sr-indigo-600` |
| `duration` | `number` (s per cycle) | `4` |
| `delay` | `number` (s, for staggering) | `0` |

## Tokens
| Token | Value |
|---|---|
| `--sr-indigo-500` | #6a88e2 |
| `--sr-indigo-600` | #556adc |
| `--sr-green-600` | #6ea335 |
| `--sr-grey-300` | #e6e6e6 |
| `--sr-grey-500` | #b3b3b3 |
| `--br-orange` | #d5650f |
| `--ease-brand` | cubic-bezier(.2, 0, 0, 1) |
| `--ease-reveal` | cubic-bezier(.25, 1, .5, 1) |

## Related
Card · Chart · Activity · Stat
