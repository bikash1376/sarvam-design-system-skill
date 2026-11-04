---
title: "Slider"
slug: slider
group: Selection
summary: "Sets a value along a range by dragging: speed, pitch, temperature."
related: [input, segmented-control]
---

# Slider

Sets a value along a range by dragging: speed, pitch, temperature.


## Styles
- Track 4px, radius pill, `--sr-grey-300`; filled part `--slate`.
- Thumb 18px white circle, 1px `--st`, `--shadow-elev-sm`; grows to 20px on drag.
- Value shown at the right of the label in Matter Mono 13px `--tx-tertiary`.

## Usage
### Use
- Approximate values where feel matters more than the exact number: Bulbul pace, pitch, loudness.
- A range with a sensible default the person nudges.
### Not for
- Exact numbers (tokens, price) → **Input** with `type="number"`.
- Fewer than 5 steps → **Segmented control**.

## Rules
- **Must** Show the current value as a number next to the label. Because a thumb position alone is not readable.
- **Should** Mark the default with a 2px tick on the track and allow double-click to reset.
- **Must** Use steps that make sense (0.1 for pace, 1 for percentages).
- **Never** Put a slider inside a horizontally scrolling area.

## Accessibility
- `role="slider"` with `aria-valuemin/max/now` and `aria-valuetext` for units ("1.2×").
- Arrows step; PageUp/Down step ×10; Home/End jump to ends.
- The focus ring is `0 0 0 3px rgba(165,187,252,.6)` on `:focus-visible`, never removed.

## Edge cases
| Scenario | Fix |
|---|---|
| Touch | Thumb hit area is 44px even though it draws at 18px |
| Range slider | Two thumbs can't cross; the active one is on top |
| RTL | Min is on the right |

## API
| Prop | Type | Default |
|---|---|---|
| `value, defaultValue` | `number | [number, number]` | n/a |
| `min, max, step` | `number` | `0, 100, 1` |
| `onValueChange` | `(v) => void` | n/a |
| `format` | `(v) => string` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--slate` | #2a2c33 |
| `--sr-grey-300` | #e6e6e6 |
| `--st` | #e6e6e6 |
| `--shadow-elev-sm` | 0 1px 3px rgba(0,0,0,.08) |
| `--font-mono` | "Matter Mono", ui-monospace, "SF Mono", Menlo, monospace |
| `--radius-pill` | 9999px |

## Related
Input · Segmented control
