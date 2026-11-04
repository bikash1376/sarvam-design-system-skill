---
title: "Toast"
slug: toast
group: Feedback
summary: "A short message that confirms an action and disappears on its own."
related: [alert, copy-button]
---

# Toast

A short message that confirms an action and disappears on its own.


## Styles
- Bottom-centre on mobile, bottom-right on desktop. `--slate` fill, white Matter 14px, radius 12px, padding 12px 16px, `--shadow-elev-lg`.
- Optional action as an underlined text button; enter 300ms `--ease-reveal`, auto-dismiss 4s.

## Usage
### Use
- Confirming an action: "API key copied", "Settings saved".
- An undo window after a destructive action.
### Not for
- Errors the person must fix → **Alert** inline.
- Anything they need to read twice.

## Rules
- **Must** Keep to one line, 6 words or fewer.
- **Must** Pause the timer on hover and focus. Because people need time to reach the Undo button.
- **Should** Stack at most 3; newer on top.
- **Never** Use a toast as the only place an error is shown.

## Accessibility
- Container is `role="status"` `aria-live="polite"`; errors `assertive`.
- Action reachable by keyboard (F6 or a shortcut).

## Edge cases
| Scenario | Fix |
|---|---|
| Same toast twice | Replace instead of stacking |
| Reduced motion | Fade only, no slide |

## API
| Prop | Type | Default |
|---|---|---|
| `message` | `string` | required |
| `action` | `{ label, onClick }` | n/a |
| `duration` | `number (ms)` | `4000` |

## Tokens
| Token | Value |
|---|---|
| `--slate` | #2a2c33 |
| `--tx-inverse` | #faf8f5 |
| `--shadow-elev-lg` | 0 12px 40px -8px rgba(0,0,0,.12) |
| `--radius-xl` | 12px |
| `--ease-reveal` | cubic-bezier(.25, 1, .5, 1) |
| `--dur-moderate` | 300ms |

## Related
Alert · Copy button
