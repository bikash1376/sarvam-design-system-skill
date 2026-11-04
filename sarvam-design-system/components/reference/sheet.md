---
title: "Sheet"
slug: sheet
group: Overlays
summary: "A panel that slides in from the edge for detail or a longer task."
related: [dialog, popover]
---

# Sheet

A panel that slides in from the edge for detail or a longer task.


## Styles
- Right side, width 420px (560 wide); bottom on mobile with radius 24px top corners.
- `--sf-white`, `--shadow-elev-lg`, header 64px with title + close, body padding 24px.

## Usage
### Use
- Viewing or editing a record without leaving the list: a log entry, a conversation.
- Mobile navigation and filters.
### Not for
- A single yes/no decision → **Dialog**.
- Primary page content.

## Rules
- **Must** Keep the underlying page visible and in context.
- **Should** Close with Escape, the close button, and backdrop click.
- **Never** Stack two sheets.

## Accessibility
- Same as Dialog: modal, focus-trapped, labelled.
- Swipe-to-close on mobile also has a visible close button.

## Edge cases
| Scenario | Fix |
|---|---|
| Unsaved changes | Confirm before closing |
| Long content | Header sticks; body scrolls |

## API
| Prop | Type | Default |
|---|---|---|
| `side` | `right | left | bottom` | `right` |
| `open, onOpenChange` | `boolean, fn` | n/a |
| `title` | `ReactNode` | required |

## Tokens
| Token | Value |
|---|---|
| `--sf-white` | #ffffff |
| `--shadow-elev-lg` | 0 12px 40px -8px rgba(0,0,0,.12) |
| `--radius-3xl` | 24px |
| `--nav-h` | 64px |

## Related
Dialog · Popover
