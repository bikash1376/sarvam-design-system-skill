---
title: "Date picker"
slug: date-picker
group: Inputs
summary: "Picks a date or a range from a calendar that opens under an input."
related: [input, popover, select]
---

# Date picker

Picks a date or a range from a calendar that opens under an input.


## Styles
- Trigger looks like an Input with a 16px calendar icon on the right; value formatted `4 Nov 2026`.
- Calendar in a Popover: `--sf-white`, radius 16px, `--shadow-elev-md`, padding 16px. Day cells 36px, radius pill.
- Selected day: `--slate` fill, white text. Today: 1px `--sr-indigo-400` ring. Range: `--sr-indigo-100` band between ends.

## Usage
### Use
- A specific date: a demo booking, an event, a report start date.
- A date range for analytics or usage.
### Not for
- Birthdays or dates far in the past → three Selects or a typed Input.
- Relative times → **Relative time**.

## Rules
- **Must** Accept typed input as well as clicks. Because keyboard and power users type faster than they click.
- **Must** Show dates as `D Mon YYYY` (Indian/UK order) in UI copy. Because `11/04` is ambiguous.
- **Should** Start weeks on Monday.
- **Never** Allow picking disabled dates; grey them at 40% and skip them with arrows.

## Accessibility
- The calendar is a `grid`; arrows move by day, PageUp/Down by month.
- Escape closes and returns focus to the trigger.
- Each day has a full `aria-label` ("Wednesday, 4 November 2026").

## Edge cases
| Scenario | Fix |
|---|---|
| Range end before start | Swap them automatically |
| Mobile | Use the native date input under 640px |
| Time zones | Store ISO dates; display in the viewer's zone |

## API
| Prop | Type | Default |
|---|---|---|
| `mode` | `single | range` | `single` |
| `value` | `Date | [Date, Date]` | n/a |
| `onChange` | `(value) => void` | n/a |
| `min, max` | `Date` | n/a |
| `disabled` | `(date) => boolean` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--slate` | #2a2c33 |
| `--sr-indigo-100` | #e8effc |
| `--sr-indigo-400` | #81a0e9 |
| `--shadow-elev-md` | 0 4px 24px rgba(0,0,0,.12) |
| `--radius-2xl` | 16px |
| `--radius-pill` | 9999px |

## Related
Input · Popover · Select
