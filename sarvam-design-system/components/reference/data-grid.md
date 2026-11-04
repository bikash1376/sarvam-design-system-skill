---
title: "Data grid"
slug: data-grid
group: Data
summary: "A dense, interactive table: sort, select, resize and edit cells."
related: [table, filter-bar, pagination]
---

# Data grid

A dense, interactive table: sort, select, resize and edit cells.


## Styles
- Table skin at 40px rows, Matter 13px. Selected rows `--sr-indigo-50`; cell focus 2px `--sr-indigo-400` inset ring.
- Sticky header and first column; column resize handles on hover.

## Usage
### Use
- Console screens with many records people act on: API keys, batch jobs, datasets.
### Not for
- Marketing comparisons → **Table**.
- Under 20 rows → **Table**.

## Rules
- **Must** Virtualise past 200 rows.
- **Must** Show the selection count and bulk actions in a bar when rows are selected.
- **Never** Edit cells without an undo.

## Accessibility
- ARIA `grid` pattern; arrows move between cells, Enter edits, Escape cancels.
- Selection checkboxes are labelled with the row name.

## Edge cases
| Scenario | Fix |
|---|---|
| Mobile | Switch to a list of Items |
| Very wide | Horizontal scroll with sticky first column |

## API
| Prop | Type | Default |
|---|---|---|
| `columns` | `Column[]` | required |
| `rows` | `object[]` | required |
| `selectable` | `boolean` | `false` |
| `onSort` | `(key, dir) => void` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--sr-indigo-50` | #fafcff |
| `--sr-indigo-400` | #81a0e9 |
| `--st-secondary` | #f0f0f0 |
| `--tx-eyebrow` | #666666 |

## Related
Table · Filter bar · Pagination
