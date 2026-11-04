---
title: "Composer"
slug: composer
group: Inputs
summary: "The prompt box for agents and playgrounds: type, attach and choose sources."
related: [button, icon-button]
---

# Composer

The prompt box for agents and playgrounds: type, attach and choose sources.

## Styles
White, radius 12px, 1px `--st`, `--shadow-card`. Placeholder `--tx-tertiary`. Typing caret is 2px `--sr-indigo-600`, blinking `steps(1)`. Bottom toolbar: a `+` icon button, then "Using" + source chips (Web, Google Drive) in 13px. Send is a 32px round slate button with a white arrow (cursor glow).

## Usage
### Use
- Agent products (Indus, Indus Cowork), playground demos, "Ask anything" entry points.
### Not for
- Single-line search → a search input.
- Forms with several fields → regular inputs.

## Rules
- **Must** auto-grow up to 6 lines, then scroll.
- **Must** send on Enter and add a newline on Shift+Enter.
- **Should** show suggestion chips above it (Research · Data analysis · Presentations).
- **Never** put brand colour on the box; colour lives in the surrounding aura.

## Accessibility
- `<textarea>` with a visible label or `aria-label`.
- The send button is disabled with `aria-disabled` when empty.
- Source chips are toggle buttons (`aria-pressed`).

## Edge cases
| Scenario | Fix |
|---|---|
| Pasted 10k characters | Scroll inside the box; show a character count past the limit |
| Indic IME composition | Don't send on Enter while `isComposing` |
| Mobile keyboard covers it | Stick to the bottom with `env(safe-area-inset-bottom)` |

## API
| Prop | Type | Default |
|---|---|---|
| `placeholder` | `string` | `Ask anything` |
| `sources` | `string[]` | n/a |
| `onSubmit` | `(text) => void` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--radius-xl` | 12px |
| `--shadow-card` | 0 0 40px #0000000f |
| `--sr-indigo-600` | #556adc |

## Related
Button · Icon button
