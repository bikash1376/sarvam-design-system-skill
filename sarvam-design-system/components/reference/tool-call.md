---
title: "Tool call"
slug: tool-call
group: AI
summary: "Shows a tool the agent used: what it called, with what, and what came back."
related: [activity, json-view, status]
---

# Tool call

Shows a tool the agent used: what it called, with what, and what came back.


## Styles
- Card: 1px `--st`, radius 12px, header 44px with 16px tool icon, name in Matter Mono 13px and a Status on the right.
- Expands to Input and Output sections in JSON view skin.

## Usage
### Use
- Agent runs in the playground and voice agent consoles: search, database lookup, CRM update.
### Not for
- Plain answer text → **Response**.
- A run's overall progress → **Activity**.

## Rules
- **Must** Show status: running, done, failed — with duration when done.
- **Must** Redact secrets in inputs (`sk_…a9f2`).
- **Should** Collapse by default; expand on failure.

## Accessibility
- Header is a disclosure button; status is text, not colour only.

## Edge cases
| Scenario | Fix |
|---|---|
| Huge output | Truncate to 50 lines with View all |
| Failed | Show the error message in the header |

## API
| Prop | Type | Default |
|---|---|---|
| `name` | `string` | required |
| `status` | `running | done | failed` | required |
| `input, output` | `unknown` | n/a |
| `durationMs` | `number` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--st` | #e6e6e6 |
| `--font-mono` | "Matter Mono", ui-monospace, "SF Mono", Menlo, monospace |
| `--sr-green-600` | #6ea335 |
| `--sr-red-500` | #b81514 |
| `--radius-xl` | 12px |

## Related
Activity · JSON view · Status
