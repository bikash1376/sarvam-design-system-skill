---
title: "Reasoning"
slug: reasoning
group: AI
summary: "A collapsible block that shows how the model thought before answering."
related: [response, activity, collapsible]
---

# Reasoning

A collapsible block that shows how the model thought before answering.


## Styles
- Header: "Thought for 6s" Matter 14px `--tx-tertiary` + chevron. While thinking: "Thinking…" with a shimmer.
- Body: 14px `--tx-tertiary`, 2px `--st` left rule, padding-left 16px.

## Usage
### Use
- Reasoning models (Sarvam-M, 105B) where people may want to check the steps.
### Not for
- Tool and agent steps → **Activity** or **Tool call**.
- The answer itself.

## Rules
- **Must** Collapse by default once the answer starts.
- **Should** Show the duration in the header.
- **Never** Style reasoning like the final answer; it is secondary.

## Accessibility
- Collapsible pattern with `aria-expanded`.
- Live thinking text is not announced token by token.

## Edge cases
| Scenario | Fix |
|---|---|
| Very long reasoning | Scroll inside, max-height 320px |
| No reasoning | Don't render the block |

## API
| Prop | Type | Default |
|---|---|---|
| `content` | `string` | required |
| `durationMs` | `number` | n/a |
| `streaming` | `boolean` | `false` |

## Tokens
| Token | Value |
|---|---|
| `--tx-tertiary` | #666666 |
| `--st` | #e6e6e6 |
| `--fs-small` | 14px |

## Related
Response · Activity · Collapsible
