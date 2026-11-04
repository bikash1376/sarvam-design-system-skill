---
title: "Radio group"
slug: radio-group
group: Selection
summary: "The person picks exactly one of 2 to 6 options that are worth seeing together."
related: [select, checkbox, segmented-control]
---

# Radio group

The person picks exactly one of 2 to 6 options that are worth seeing together.


## Styles
- 18px circle, 1.5px `--sr-grey-500` ring. Chosen: `--slate` ring with an 8px `--slate` dot.
- Option row: label Matter 15px `--tx`; optional description 13px `--tx-tertiary` below.
- Card variant: each option is a row with 1px `--st` border, radius 12px, padding 16px; chosen row border `--slate`.

## Usage
### Use
- The person picks exactly one of 2 to 6 options that are worth seeing together.
- Options differ in what they cost or do, and each needs a line of description (e.g. Starter · Pro · Enterprise).
### Not for
- More than 6 options → **Select**.
- Any number of options may apply → **Checkbox**.
- Switching between views of the same data → **Segmented control**.

## Rules
- **Must** Name the group with `aria-labelledby` pointing at its visible question. Because a radiogroup without a name reads options with no question.
- **Should** Pass `defaultValue` when one option is right for most people; leave it empty only when a wrong default costs money or data.
- **Must** Put the difference between options in `description`, not in a tooltip. Because tooltips never open on touch.
- **Should** Use the same grammatical form and 1–3 word labels for every option.
- **Never** Build plan cards with a radio in the corner. Because only the 18px circle is the target, so the card looks clickable but isn't. Use the card variant, where the whole row is the target.
- **Should** Switch to Select past 6 options.

## Accessibility
- `role="radiogroup"`, named by `aria-labelledby`, with one tab stop.
- Arrows move focus and the choice to the next enabled option, wrapping.
- The description is read through `aria-describedby`; the whole row is the target.
- The focus ring is `0 0 0 3px rgba(165,187,252,.6)` on `:focus-visible`, never removed.

## Edge cases
| Scenario | Fix |
|---|---|
| Long label and description | Both wrap; the circle aligns to the first line |
| Required and invalid | Error sits under the group, only after submit |
| One option | Use a Checkbox instead; a single radio can't be cleared |
| Inside a form | Submits through `name` |

## API
| Prop | Type | Default |
|---|---|---|
| `value, defaultValue` | `string` | n/a |
| `onValueChange` | `(value) => void` | n/a |
| `variant` | `default | card` | `default` |
| `option.label` | `ReactNode` | required |
| `option.description` | `ReactNode` | n/a |
| `disabled, required, name` | `boolean / string` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--slate` | #2a2c33 |
| `--sr-grey-500` | #b3b3b3 |
| `--st` | #e6e6e6 |
| `--tx` | #1f1f1f |
| `--tx-tertiary` | #666666 |
| `--radius-pill` | 9999px |
| `--radius-xl` | 12px |

## Related
Select · Checkbox · Segmented control
