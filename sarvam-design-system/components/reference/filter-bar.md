---
title: "Filter bar"
slug: filter-bar
group: Data
summary: "A row of filters and a search box above a list or table."
related: [table, chip, combobox]
---

# Filter bar

A row of filters and a search box above a list or table.


## Styles
- Search input left (flex 1, max 320px), filter chips right. Active filters show as removable Chips with ×.
- "Clear all" text button appears once any filter is set.

## Usage
### Use
- Narrowing logs, usage and conversations by date, model, language, status.
### Not for
- Fewer than 10 records.
- Site-wide search → **Command**.

## Rules
- **Must** Show the result count after filtering.
- **Should** Keep filters in the URL so views can be shared.
- **Never** Apply filters only on a separate Apply button for simple lists.

## Accessibility
- Each filter is a labelled control; removing a chip announces the new count.
- The focus ring is `0 0 0 3px rgba(165,187,252,.6)` on `:focus-visible`, never removed.

## Edge cases
| Scenario | Fix |
|---|---|
| Many filters on mobile | Collapse into a "Filters (3)" button opening a Sheet |
| No results | Empty state with Clear filters |

## API
| Prop | Type | Default |
|---|---|---|
| `filters` | `Filter[]` | required |
| `value` | `Record<string, unknown>` | n/a |
| `onChange` | `(v) => void` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--sf-secondary` | #f5f5f5 |
| `--st` | #e6e6e6 |
| `--tx-tertiary` | #666666 |
| `--radius-pill` | 9999px |

## Related
Table · Chip · Combobox
