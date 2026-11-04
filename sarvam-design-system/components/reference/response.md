---
title: "Response"
slug: response
group: AI
summary: "The assistant's generated answer, with rich formatting and sources."
related: [message, reasoning, code-block]
---

# Response

The assistant's generated answer, with rich formatting and sources.


## Styles
- Markdown: h3 Matter 17px 525, paragraphs 15px/1.6, lists with 6px gaps, code blocks in the Code block skin.
- Sources as numbered superscripts linking to a source row of Chips under the answer.
- Streaming caret: 2px × 1em `--tx` bar blinking 1s.

## Usage
### Use
- Long answers, documents and research results from Sarvam models.
### Not for
- Short chat replies → plain **Message** text.
- Tool output → **Tool call**.

## Rules
- **Must** Cite sources when the answer uses retrieval.
- **Should** Render tables and code as real components, not raw markdown.
- **Never** Animate text word-by-word after it has streamed.

## Accessibility
- Headings keep their levels inside the message.
- The streaming caret is `aria-hidden`; completion is announced once.

## Edge cases
| Scenario | Fix |
|---|---|
| Stopped mid-way | Keep text, show "Stopped" + Continue |
| Mixed scripts | Same font size for Latin and Indic |

## API
| Prop | Type | Default |
|---|---|---|
| `content` | `string (markdown)` | required |
| `sources` | `{ title, url }[]` | n/a |
| `streaming` | `boolean` | `false` |

## Tokens
| Token | Value |
|---|---|
| `--tx` | #1f1f1f |
| `--tx-tertiary` | #666666 |
| `--font-sans` | "Matter", "Inter Tight", "Manrope", system-ui, sans-serif |
| `--lh-body` | 1.55 |

## Related
Message · Reasoning · Code block
