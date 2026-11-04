---
title: "Breadcrumb"
slug: breadcrumb
group: Navigation
summary: "Shows where a page sits in the hierarchy and links back up."
related: [tabs, pagination]
---

# Breadcrumb

Shows where a page sits in the hierarchy and links back up.


## Styles
- Matter 14px `--tx-tertiary` links, current page `--tx`, separated by a 12px chevron in `--sr-grey-500`.
- Sits above the page title with 16px gap.

## Usage
### Use
- Docs and nested product pages three or more levels deep: Docs › API › Speech to text.
### Not for
- Flat sites or landing pages.
- Showing steps in a flow.

## Rules
- **Must** Make every crumb but the last a link.
- **Should** Collapse middle crumbs into ⋯ past 4 levels.
- **Never** Repeat the page title as a link to itself.

## Accessibility
- `<nav aria-label="Breadcrumb">` with an `<ol>`; last item has `aria-current="page"`.
- Separators are `aria-hidden`.

## Edge cases
| Scenario | Fix |
|---|---|
| Mobile | Show only the parent: ‹ API |
| Long titles | Truncate middle crumbs first |

## API
| Prop | Type | Default |
|---|---|---|
| `items` | `{ label, href }[]` | required |
| `maxItems` | `number` | `4` |

## Tokens
| Token | Value |
|---|---|
| `--tx` | #1f1f1f |
| `--tx-tertiary` | #666666 |
| `--sr-grey-500` | #b3b3b3 |
| `--fs-small` | 14px |

## Related
Tabs · Pagination
