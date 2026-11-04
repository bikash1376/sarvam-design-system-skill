---
title: "Tooltip"
slug: tooltip
group: Overlays
summary: "A short label that appears on hover or focus to name an icon or show full text."
related: [popover, kbd, truncate]
---

# Tooltip

A short label that appears on hover or focus to name an icon or show full text.


## Styles
- `--slate` fill, white Matter 13px, radius 8px, padding 6px 10px, max-width 240px.
- Delay 400ms in, 0ms out; fade 150ms.

## Usage
### Use
- Naming icon-only buttons.
- Showing the full text of truncated content or an absolute time.
### Not for
- Anything interactive → **Popover**.
- Essential information → put it on the page.

## Rules
- **Must** Show on keyboard focus as well as hover.
- **Must** Keep to one line of plain text. Because tooltips are unreachable on touch.
- **Never** Put links or buttons in a tooltip.

## Accessibility
- Tied with `aria-describedby` (or `aria-label` for icon buttons).
- Escape dismisses.

## Edge cases
| Scenario | Fix |
|---|---|
| Touch | Long-press shows it; nothing important depends on it |
| Edge of viewport | Flips side |

## API
| Prop | Type | Default |
|---|---|---|
| `content` | `string` | required |
| `side` | `top | right | bottom | left` | `top` |
| `delay` | `number` | `400` |

## Tokens
| Token | Value |
|---|---|
| `--slate` | #2a2c33 |
| `--tx-inverse` | #faf8f5 |
| `--radius-lg` | 8px |
| `--dur-fast` | 150ms |

## Related
Popover · Kbd · Truncate
