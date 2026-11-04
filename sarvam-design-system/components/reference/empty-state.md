---
title: "Empty state"
slug: empty-state
group: Feedback
summary: "What a list, table or page shows before it has any content."
related: [alert, skeleton, button]
---

# Empty state

What a list, table or page shows before it has any content.


## Styles
- Centred in the container, max-width 360px. A 48px gateway glyph or depth icon, title Season Mix 20px, body 14px `--tx-tertiary`, one Button.
- Padding 48px; no border unless the container already has one.

## Usage
### Use
- First use: no API keys yet, no conversations yet.
- A filter or search with no results.
### Not for
- Loading → **Skeleton**.
- Errors → **Alert**.

## Rules
- **Must** Say what will appear here and give one action to make it appear.
- **Should** Use a Sarvam glyph or depth icon, never a stock illustration.
- **Must** Distinguish "nothing yet" from "nothing matches"; the second offers Clear filters.
- **Never** Write jokes or "Oops".

## Accessibility
- The glyph is `aria-hidden`.
- Focus moves to the action when the empty state replaces content.

## Edge cases
| Scenario | Fix |
|---|---|
| Tiny container | Drop the glyph, keep title and action |
| No permission | Explain who can add content |

## API
| Prop | Type | Default |
|---|---|---|
| `icon` | `ReactNode` | n/a |
| `title` | `string` | required |
| `description` | `string` | n/a |
| `action` | `ReactNode` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--font-display` | "Season Mix", "Source Serif 4", Georgia, serif |
| `--tx` | #1f1f1f |
| `--tx-tertiary` | #666666 |
| `--space-12` | 48px |

## Related
Alert · Skeleton · Button
