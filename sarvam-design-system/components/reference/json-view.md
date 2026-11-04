---
title: "JSON view"
slug: json-view
group: Code
summary: "A readable, collapsible view of a JSON response."
related: [code-block, log-viewer]
---

# JSON view

A readable, collapsible view of a JSON response.


## Styles
- Code-block skin: `#fafafa`, 1px `--st`, radius 16px, Matter Mono 13px, line-height 1.8.
- Keys `#3333cc`, strings `#496d21`, numbers `#a5460f`, null/bool `#212191`. Objects collapse with a ▸ toggle and show `{…} 4 keys`.

## Usage
### Use
- API responses in docs and the playground.
- Inspecting a tool call's input and output.
### Not for
- Code people copy and run → **Code block**.
- Streaming text logs → **Log viewer**.

## Rules
- **Must** Pretty-print with 2-space indent and show Indic strings as text, not escapes.
- **Should** Collapse objects deeper than 2 levels by default.
- **Must** Offer Copy for the whole document.

## Accessibility
- Tree pattern: arrows expand/collapse; each node announces key and type.
- Colours are not the only cue; types also differ by quotes.

## Edge cases
| Scenario | Fix |
|---|---|
| Huge payload | Collapse all by default past 500 lines |
| Invalid JSON | Fall back to plain text with an Alert |

## API
| Prop | Type | Default |
|---|---|---|
| `data` | `unknown` | required |
| `collapsedDepth` | `number` | `2` |
| `copyable` | `boolean` | `true` |

## Tokens
| Token | Value |
|---|---|
| `--font-mono` | "Matter Mono", ui-monospace, "SF Mono", Menlo, monospace |
| `--st` | #e6e6e6 |
| `--sr-indigo-800` | #3333cc |
| `--sr-green-700` | #496d21 |
| `--sr-orange-900` | #a5460f |
| `--radius-2xl` | 16px |

## Related
Code block · Log viewer
