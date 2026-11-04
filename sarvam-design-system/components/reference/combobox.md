---
title: "Combobox"
slug: combobox
group: Inputs
summary: "An input that filters a list as the person types, then picks one value."
related: [select, command, input]
---

# Combobox

An input that filters a list as the person types, then picks one value.


## Styles
- Input skin with a chevron on the right. The list opens in a Popover: max-height 280px, rows 36px, radius 8px.
- Matched characters are 525 weight. Active row `--sf-secondary`; selected row shows a check on the right.

## Usage
### Use
- Choosing one of many (10+) known options: a language from 22, a model, a country.
- When people know what they want and typing is faster than scrolling.
### Not for
- Fewer than 7 options → **Select** or **Radio group**.
- Global actions and navigation → **Command**.

## Rules
- **Must** Filter on every keystroke and highlight the first match.
- **Should** Show Indic language names in both scripts: "हिन्दी · Hindi".
- **Must** Show an empty row ("No language matches") instead of an empty popover.
- **Never** Accept free text that isn't in the list unless `allowCustom` is set.

## Accessibility
- `role="combobox"` with `aria-expanded`, `aria-controls` and `aria-activedescendant`.
- Arrows move through results; Enter picks; Escape clears then closes.
- The focus ring is `0 0 0 3px rgba(165,187,252,.6)` on `:focus-visible`, never removed.

## Edge cases
| Scenario | Fix |
|---|---|
| No matches | Show "No results" row, keep the typed text |
| Slow remote search | Show a 3-row skeleton after 300ms |
| Very long option | Truncate with ellipsis and show the full value in a tooltip |

## API
| Prop | Type | Default |
|---|---|---|
| `options` | `{ value, label }[]` | required |
| `value` | `string` | n/a |
| `onValueChange` | `(v) => void` | n/a |
| `placeholder` | `string` | `Search…` |
| `allowCustom` | `boolean` | `false` |

## Tokens
| Token | Value |
|---|---|
| `--sf-white` | #ffffff |
| `--sf-secondary` | #f5f5f5 |
| `--st` | #e6e6e6 |
| `--tx` | #1f1f1f |
| `--shadow-elev-md` | 0 4px 24px rgba(0,0,0,.12) |
| `--radius-lg` | 8px |

## Related
Select · Command · Input
