---
title: "Pagination"
slug: pagination
group: Navigation
summary: "Moves through pages of a long list or table."
related: [table, data-grid]
---

# Pagination

Moves through pages of a long list or table.


## Styles
- Previous / Next outline pills with numbers between; current page `--slate` pill with white text; 36px targets.
- Range text left: "1–20 of 248" in 13px `--tx-tertiary`.

## Usage
### Use
- Tables and lists with more than one page of results: logs, usage, changelog.
### Not for
- Feeds people browse casually → infinite scroll with a "Load more" button.
- Fewer than 2 pages.

## Rules
- **Must** Show the total range so people know how much there is.
- **Should** Show first, last and two pages around the current one; ellipsis between.
- **Never** Reset to page 1 when the person changes a sort; keep the position.

## Accessibility
- `<nav aria-label="Pagination">`; current page has `aria-current="page"`.
- Prev/Next are disabled (not hidden) at the ends.

## Edge cases
| Scenario | Fix |
|---|---|
| Mobile | Prev · 3 of 12 · Next |
| Page out of range in URL | Clamp to the last page |

## API
| Prop | Type | Default |
|---|---|---|
| `page` | `number` | `1` |
| `pageCount` | `number` | required |
| `onPageChange` | `(p) => void` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--slate` | #2a2c33 |
| `--st` | #e6e6e6 |
| `--tx-tertiary` | #666666 |
| `--radius-pill` | 9999px |

## Related
Table · Data grid
