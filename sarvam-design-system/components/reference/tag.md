---
title: "Tag"
slug: tag
group: Display
summary: "A small pill that labels a category or capability on a card."
related: [badge, integration-card]
---

# Tag

A small pill that labels a category or capability on a card.

## Styles
| Variant | Look |
|---|---|
| `category` | Pill, padding 4px 10px, Matter 525 12px, bg `{hue}-100`, text `{hue}-800` |
| `capability` | Pill, padding 4px 10px, Matter 425 12px, bg `--sf-secondary`, 1px `--st`, text `--tx-tertiary` |
| `status` | `category` in green (Live, New) or indigo (Beta) |

## Usage
### Use
- Bottom row of integration, template or blog cards: one category tag first, then capability tags.
### Not for
- Compliance claims → **Badge**.
- Filters the user can toggle → chips (segmented or toggle buttons).

## Rules
- **Must** put the category tag first, with at most one per card.
- **Never** add icons to tags.
- **Should** cap at 4 tags per card.

## Accessibility
- Tags are not interactive unless they link; if they link, they need a focus ring.
- `{hue}-800` on `{hue}-100` passes 4.5:1 at 12px.

## Edge cases
| Scenario | Fix |
|---|---|
| Tags overflow the card | `flex-wrap`, gap 6px; cut to 3 + "+2" |

## API
| Prop | Type | Default |
|---|---|---|
| `variant` | `category \| capability \| status` | `capability` |
| `hue` | indigo, orange, green, pink, yellow | `indigo` |

## Tokens
| Token | Value |
|---|---|
| `--sr-indigo-100` / `-800` | #e8effc / #3333cc |
| `--sf-secondary` | #f5f5f5 |
| `--st` | #e6e6e6 |

## Related
Badge · Integration card
