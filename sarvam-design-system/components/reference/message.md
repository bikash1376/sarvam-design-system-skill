---
title: "Message"
slug: message
group: AI
summary: "One turn in a conversation, from the person or from Sarvam."
related: [conversation, response, avatar]
---

# Message

One turn in a conversation, from the person or from Sarvam.


## Styles
- Person: right-aligned bubble, `--sf-secondary`, radius 20px (bottom-right 6px), padding 12px 16px, max-width 80%.
- Assistant: no bubble, full width, left-aligned with a 24px Sarvam glyph; Matter 15px, line-height 1.6.
- Hover actions under assistant turns: Copy, Listen (Bulbul), Retry, as 28px icon buttons.

## Usage
### Use
- Chat interfaces: Sarvam app, playground, voice agent transcripts.
### Not for
- System notices → a centred 13px `--tx-tertiary` line.
- Long generated documents → **Response**.

## Rules
- **Must** Render Indic scripts at the same size with line-height ≥ 1.6. Because matras clip at tighter leading.
- **Should** Show actions on hover and always on the latest turn.
- **Never** Give the assistant a human face or name it as a person.

## Accessibility
- Each message is an `<article>` labelled "You said" / "Sarvam said".
- Action buttons have labels; Listen announces playback state.

## Edge cases
| Scenario | Fix |
|---|---|
| Very long person message | Collapse past 12 lines with Show more |
| Failed send | Red retry icon beside the bubble |

## API
| Prop | Type | Default |
|---|---|---|
| `role` | `user | assistant | system` | required |
| `children` | `ReactNode` | required |
| `actions` | `ReactNode` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--sf-secondary` | #f5f5f5 |
| `--tx` | #1f1f1f |
| `--tx-tertiary` | #666666 |
| `--radius-3xl` | 24px |

## Related
Conversation · Response · Avatar
