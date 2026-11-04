---
title: "Conversation"
slug: conversation
group: AI
summary: "The scrolling thread of messages with the prompt input pinned below."
related: [message, prompt-input, empty-state]
---

# Conversation

The scrolling thread of messages with the prompt input pinned below.


## Styles
- Column max-width 720px, centred; 24px between turns.
- Prompt input pinned to the bottom with a soft `--sf` fade above it.
- Empty: centred greeting in Season Mix 28px + 3 suggestion chips.

## Usage
### Use
- Any chat surface: assistant, playground, support agent.
### Not for
- One-shot generation forms.
- Logs of agent steps → **Activity**.

## Rules
- **Must** Stick to the bottom while new tokens stream, unless the person scrolled up.
- **Should** Show a "Jump to latest" pill when scrolled up during streaming.
- **Never** Show more than 3 suggestion chips.

## Accessibility
- The thread is `role="log"`; new assistant turns announce politely when complete.
- Focus stays in the prompt input after sending.

## Edge cases
| Scenario | Fix |
|---|---|
| Very long thread | Virtualise older turns |
| Network drop mid-stream | Keep partial text with a Retry action |

## API
| Prop | Type | Default |
|---|---|---|
| `messages` | `Message[]` | required |
| `onSend` | `(text, files) => void` | required |
| `suggestions` | `string[]` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--sf` | #fcfcfc |
| `--font-display` | "Season Mix", "Source Serif 4", Georgia, serif |
| `--space-6` | 24px |

## Related
Message · Prompt input · Empty state
