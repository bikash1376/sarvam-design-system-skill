---
title: "Timeline"
slug: timeline
group: Data
summary: "Events in order, newest first: a changelog, a run's history."
related: [activity, relative-time]
---

# Timeline

Events in order, newest first: a changelog, a run's history.


## Styles
- Left rail: 1px `--st` line with 8px dots (`--slate` for milestones, `--sr-grey-400` for minor).
- Each entry: date in Matter Mono 12px `--tx-tertiary`, title Matter 15px 525, body 14px.

## Usage
### Use
- Changelogs and release history.
- The steps of a job or deployment.
### Not for
- Live agent steps → **Activity**.
- Unordered lists.

## Rules
- **Must** Order newest first, with absolute dates for anything older than 7 days.
- **Should** Group by month past 20 entries.
- **Never** Use colourful icons per entry; dots only.

## Accessibility
- An `<ol>` with `<time>` elements.
- The rail is decorative.

## Edge cases
| Scenario | Fix |
|---|---|
| Same-day entries | One date heading, several entries |
| Very long body | Clamp with Show more |

## API
| Prop | Type | Default |
|---|---|---|
| `items` | `{ date, title, body?, milestone? }[]` | required |

## Tokens
| Token | Value |
|---|---|
| `--st` | #e6e6e6 |
| `--slate` | #2a2c33 |
| `--sr-grey-400` | #cccccc |
| `--font-mono` | "Matter Mono", ui-monospace, "SF Mono", Menlo, monospace |

## Related
Activity · Relative time
