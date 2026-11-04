---
title: "Textarea"
slug: textarea
group: Inputs
summary: "Several lines of free text: a message, a prompt, feedback."
related: [input, field, prompt-input]
---

# Textarea

Several lines of free text: a message, a prompt, feedback.


## Styles
- Same skin as Input: `--sf-white`, 1px `--st`, radius 12px, padding 12px 16px, Matter 15px, line-height 1.55.
- Min height 96px (4 lines). Grows with content up to 240px, then scrolls.
- Optional character count bottom-right in 12px `--tx-tertiary`.

## Usage
### Use
- Free text longer than one line: contact-form message, feedback, a long prompt.
- Text that should keep its line breaks.
### Not for
- A chat or AI prompt with send and attach → **Prompt input**.
- One short answer → **Input**.

## Rules
- **Must** Sit inside a Field with a visible label.
- **Should** Auto-grow with the content instead of showing a scrollbar at 4 lines.
- **Must** Show a counter only when there is a real limit, and only past 80% of it. Because a counter on every box adds noise.
- **Never** Disable manual resize without auto-grow. Because people then can't see what they wrote.

## Accessibility
- Label and help/error text tied with `for` and `aria-describedby`.
- A counter announces via `aria-live="polite"` only when the limit is near.
- The focus ring is `0 0 0 3px rgba(165,187,252,.6)` on `:focus-visible`, never removed.

## Edge cases
| Scenario | Fix |
|---|---|
| Pasted 10,000 characters | Accept, cap at the limit, show the counter in red |
| Indic text | Line-height stays 1.55 so matras don't clip |
| Mobile keyboard covers it | Scroll the field into view on focus |

## API
| Prop | Type | Default |
|---|---|---|
| `rows` | `number` | `4` |
| `maxRows` | `number` | `10` |
| `maxLength` | `number` | n/a |
| `showCount` | `boolean` | `false` |
| `invalid` | `boolean` | `false` |

## Tokens
| Token | Value |
|---|---|
| `--sf-white` | #ffffff |
| `--st` | #e6e6e6 |
| `--tx` | #1f1f1f |
| `--tx-tertiary` | #666666 |
| `--radius-xl` | 12px |
| `--lh-body` | 1.55 |

## Related
Input · Field · Prompt input
