---
title: "Item"
slug: item
group: Display
summary: "One row of a list: an icon or avatar, a title, a line of detail and an optional action."
related: [data-list, card, avatar]
---

# Item

One row of a list: an icon or avatar, a title, a line of detail and an optional action.


## Styles
- Row min-height 56px, padding 12px 16px, gap 12px. Title Matter 15px 525 `--tx`; detail 13px `--tx-tertiary`.
- Leading 32px icon tile (`--sf-secondary`, radius 8px) or avatar. Trailing chevron, value or button.
- Interactive rows: hover `--sf-secondary`, radius 12px.

## Usage
### Use
- Lists of things the person picks or opens: models, API keys, integrations, settings.
- Search and menu results with a title and detail line.
### Not for
- Rich content with an image → **Card**.
- Key–value pairs → **Data list**.

## Rules
- **Must** Make the whole row the target when it opens something. Because a tiny chevron is a poor target.
- **Should** Keep detail to one line; truncate the rest.
- **Never** Put a card border around every item; separate rows with space or 1px `--st-secondary` lines.

## Accessibility
- Clickable rows are a single `<a>` or `<button>`; secondary actions are separate buttons.
- The focus ring is `0 0 0 3px rgba(165,187,252,.6)` on `:focus-visible`, never removed.

## Edge cases
| Scenario | Fix |
|---|---|
| No icon | Title aligns to the left padding |
| Very long title | Truncate with tooltip |

## API
| Prop | Type | Default |
|---|---|---|
| `title` | `ReactNode` | required |
| `description` | `ReactNode` | n/a |
| `leading` | `ReactNode` | n/a |
| `trailing` | `ReactNode` | n/a |
| `href | onClick` | `string | () => void` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--sf-secondary` | #f5f5f5 |
| `--st-secondary` | #f0f0f0 |
| `--tx` | #1f1f1f |
| `--tx-tertiary` | #666666 |
| `--radius-xl` | 12px |
| `--radius-lg` | 8px |

## Related
Data list · Card · Avatar
