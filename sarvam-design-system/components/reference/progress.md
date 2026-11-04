---
title: "Progress"
slug: progress
group: Feedback
summary: "Shows how far a task has got: an upload, a batch job, a transcription."
related: [skeleton, status]
---

# Progress

Shows how far a task has got: an upload, a batch job, a transcription.


## Styles
- Bar: 4px track `--sr-grey-200`, fill `--slate`, radius pill. Label above: task left, percent right in Matter Mono 13px.
- Indeterminate: a 30% segment sliding, 1.4s. Circular variant 20px for inline use.

## Usage
### Use
- Tasks longer than 2 seconds with a measurable end: uploads, batch transcription.
- Usage against a quota (credits used).
### Not for
- Unknown shape loading → **Skeleton**.
- Short actions → a spinner in the button.

## Rules
- **Must** Show a number with the bar for tasks over 10s.
- **Should** Never move backwards; jump to complete on finish.
- **Never** Use brand gradient fills; the bar is slate.

## Accessibility
- `role="progressbar"` with `aria-valuenow/min/max`; indeterminate omits `aria-valuenow`.
- Label with `aria-label` or `aria-labelledby`.

## Edge cases
| Scenario | Fix |
|---|---|
| Stalls | Keep the bar, add "Still working…" after 15s |
| Fails | Bar turns `--sr-red-500` with a retry action |

## API
| Prop | Type | Default |
|---|---|---|
| `value` | `number | null` | `null` (indeterminate) |
| `max` | `number` | `100` |
| `label` | `string` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--slate` | #2a2c33 |
| `--sr-grey-200` | #f0f0f0 |
| `--sr-red-500` | #b81514 |
| `--font-mono` | "Matter Mono", ui-monospace, "SF Mono", Menlo, monospace |
| `--radius-pill` | 9999px |

## Related
Skeleton · Status
