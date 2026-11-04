---
title: "Activity"
slug: activity
group: AI
summary: "A live list of what an agent is doing, step by step."
related: [tool-call, timeline, reasoning]
---

# Activity

A live list of what an agent is doing, step by step.


## Styles
- Vertical steps with 16px status icons: spinner (working, `--sr-indigo-500`), check (`--sr-green-600`), cross (`--sr-red-500`).
- Step label Matter 14px `--tx`; detail 13px `--tx-tertiary`; elapsed time right in Matter Mono 12px.

## Usage
### Use
- Voice agent and workflow runs: Listening → Transcribing → Looking up order → Speaking.
### Not for
- Finished history → **Timeline**.
- One tool's detail → **Tool call**.

## Rules
- **Must** Show exactly one working step at a time.
- **Should** Collapse finished steps into "6 steps · 4.2s" once the run ends.
- **Never** Show steps the person can't understand (internal IDs).

## Accessibility
- `role="log"`; each completed step announces politely.
- Spinners are `aria-hidden`; the step text says the state.

## Edge cases
| Scenario | Fix |
|---|---|
| Step fails | Stop the list there with an error and Retry |
| Very fast steps | Keep each visible at least 300ms |

## API
| Prop | Type | Default |
|---|---|---|
| `steps` | `{ label, detail?, status, elapsedMs? }[]` | required |
| `collapsed` | `boolean` | `false` |

## Tokens
| Token | Value |
|---|---|
| `--sr-indigo-500` | #6a88e2 |
| `--sr-green-600` | #6ea335 |
| `--sr-red-500` | #b81514 |
| `--font-mono` | "Matter Mono", ui-monospace, "SF Mono", Menlo, monospace |

## Related
Tool call · Timeline · Reasoning
