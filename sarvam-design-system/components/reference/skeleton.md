---
title: "Skeleton"
slug: skeleton
group: Feedback
summary: "Grey shapes that hold the layout while content loads."
related: [progress, empty-state]
---

# Skeleton

Grey shapes that hold the layout while content loads.


## Styles
- `--sf-tertiary` blocks with the radius of what they replace (text lines radius 4px, avatars pill, cards 16px).
- Shimmer: a soft white gradient sweep, 1.6s, `--ease-standard`; off under reduced motion.

## Usage
### Use
- Content that takes more than 300ms to load and has a known shape: lists, cards, tables.
- First paint of dashboards.
### Not for
- Actions in progress (saving, generating) → **Progress** or a button spinner.
- Unknown layouts → a single spinner.

## Rules
- **Must** Match the real layout so nothing jumps when content arrives. Because layout shift is worse than waiting.
- **Should** Show only after 300ms to avoid a flash on fast loads.
- **Never** Animate more than one shimmer direction or colour.

## Accessibility
- Container has `aria-busy="true"` and a visually hidden "Loading".
- Skeleton blocks are `aria-hidden`.

## Edge cases
| Scenario | Fix |
|---|---|
| Load fails | Replace with an Alert, not an endless skeleton |
| Very slow | After 10s add a line of text |

## API
| Prop | Type | Default |
|---|---|---|
| `shape` | `text | circle | rect` | `text` |
| `lines` | `number` | `1` |
| `width, height` | `string` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--sf-tertiary` | #f0f0f0 |
| `--radius-sm` | 4px |
| `--radius-2xl` | 16px |
| `--ease-standard` | cubic-bezier(.4, 0, .2, 1) |

## Related
Progress · Empty state
