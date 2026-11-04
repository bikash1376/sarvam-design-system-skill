---
title: "Log viewer"
slug: log-viewer
group: Code
summary: "A scrolling, searchable stream of log lines."
related: [json-view, code-block, filter-bar]
---

# Log viewer

A scrolling, searchable stream of log lines.


## Styles
- Dark surface `--black`, Matter Mono 12px `#d4d4d4`, line-height 1.7, radius 16px.
- Columns: time `--sr-grey-600`, level (INFO `--sr-indigo-300`, WARN `--sr-yellow-400`, ERROR `--sr-red-300`), message.
- Toolbar: search, level filter, Follow toggle, Download.

## Usage
### Use
- Batch jobs, deployments and agent runs where people debug line by line.
### Not for
- Structured responses → **JSON view**.
- Docs examples → **Code block**.

## Rules
- **Must** Auto-follow new lines only while scrolled to the bottom. Because jumping while someone reads loses their place.
- **Should** Wrap long lines with a toggle; keep timestamps aligned.
- **Never** Colour whole lines; colour only the level.

## Accessibility
- `role="log"` with `aria-live="polite"` (off while the person scrolls up).
- Search highlights are also outlined, not colour-only.

## Edge cases
| Scenario | Fix |
|---|---|
| 100k lines | Virtualise and cap the buffer |
| Disconnected stream | Banner with Retry |

## API
| Prop | Type | Default |
|---|---|---|
| `lines` | `{ time, level, message }[]` | required |
| `follow` | `boolean` | `true` |
| `onDownload` | `() => void` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--black` | #141414 |
| `--sr-grey-600` | #999999 |
| `--sr-indigo-300` | #a7c0f1 |
| `--sr-yellow-400` | #ffb94a |
| `--sr-red-300` | #db715c |
| `--font-mono` | "Matter Mono", ui-monospace, "SF Mono", Menlo, monospace |

## Related
JSON view · Code block · Filter bar
