---
title: "Table"
slug: table
group: Data
summary: "Rows of records with the same columns, for reading and comparing."
related: [data-grid, data-list, pagination]
---

# Table

Rows of records with the same columns, for reading and comparing.


## Styles
- Header Geist 12px uppercase `--tx-eyebrow`, `--sf-secondary` band. Rows 48px, Matter 14px, 1px `--st-secondary` lines.
- Numbers right-aligned in tabular figures. Wrapped in a 16px-radius `--st` border on cards.

## Usage
### Use
- Comparing records: model benchmarks, pricing tiers, usage by day.
- Read-only data that fits on a screen.
### Not for
- Editing many cells → **Data grid**.
- One record → **Data list**.

## Rules
- **Must** Right-align numbers and use the same decimals in a column.
- **Must** Use only FACTS.md numbers for Sarvam benchmarks and pricing.
- **Should** Highlight the Sarvam row with `--sr-indigo-50` in comparisons, not bold colours.
- **Never** Zebra-stripe and draw lines at the same time.

## Accessibility
- Real `<table>` with `<th scope>`; a caption names it.
- Sortable headers are buttons with `aria-sort`.

## Edge cases
| Scenario | Fix |
|---|---|
| Mobile | Horizontal scroll with the first column sticky |
| Empty | Empty state row spanning all columns |

## API
| Prop | Type | Default |
|---|---|---|
| `columns` | `{ key, header, align? }[]` | required |
| `rows` | `object[]` | required |
| `caption` | `string` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--sf-secondary` | #f5f5f5 |
| `--st-secondary` | #f0f0f0 |
| `--tx-eyebrow` | #666666 |
| `--font-eyebrow` | "Geist", "Inter", system-ui, -apple-system, sans-serif |
| `--radius-2xl` | 16px |

## Related
Data grid · Data list · Pagination
