---
title: "Status"
slug: status
group: Display
summary: "A dot and a word that say what state something is in: live, degraded, failed."
related: [badge, chip, alert]
---

# Status

A dot and a word that say what state something is in: live, degraded, failed.


## Styles
- 8px dot + Matter 13px label, gap 8px.
- Live / healthy: `--sr-green-600`. Working: `--sr-indigo-500` dot with a 1.6s pulse. Warning: `--sr-yellow-600`. Failed: `--sr-red-500`. Idle: `--sr-grey-500`.
- Label colour is always `--tx` or `--tx-tertiary`, never the hue.

## Usage
### Use
- System or API health: "All systems normal".
- The state of a job, agent run or deployment in a list.
### Not for
- Categories or tags → **Chip**.
- A message the person must act on → **Alert**.

## Rules
- **Must** Pair every dot with a word. Because colour alone fails for colour-blind people.
- **Must** Use one hue per meaning across the product: green live, indigo working, yellow warn, red failed.
- **Never** Colour the label text in the hue; only the dot carries colour.
- **Should** Pulse only the working state, and stop it under reduced motion.

## Accessibility
- The word carries the meaning; the dot is `aria-hidden`.
- Status changes in a live region announce politely.

## Edge cases
| Scenario | Fix |
|---|---|
| Unknown state | Grey dot, "Unknown" |
| Many statuses in a table | Dot only in narrow columns, word in a tooltip and header legend |

## API
| Prop | Type | Default |
|---|---|---|
| `tone` | `live | working | warn | failed | idle` | `idle` |
| `label` | `string` | required |
| `pulse` | `boolean` | tone === working |

## Tokens
| Token | Value |
|---|---|
| `--sr-green-600` | #6ea335 |
| `--sr-indigo-500` | #6a88e2 |
| `--sr-yellow-600` | #df9c2a |
| `--sr-red-500` | #b81514 |
| `--sr-grey-500` | #b3b3b3 |

## Related
Badge · Chip · Alert
