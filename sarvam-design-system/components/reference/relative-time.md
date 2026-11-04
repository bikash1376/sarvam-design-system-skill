---
title: "Relative time"
slug: relative-time
group: Display
summary: "Shows when something happened in words: 2 min ago, yesterday."
related: [timeline, data-list]
---

# Relative time

Shows when something happened in words: 2 min ago, yesterday.


## Styles
- Matter 13px `--tx-tertiary`, tabular numerals.
- Absolute date and time on hover in a Tooltip.

## Usage
### Use
- Recent events where age matters more than the exact time: activity feeds, logs, updated-at.
- Anything under 7 days old.
### Not for
- Dates older than 7 days → show `4 Nov 2026`.
- Scheduled future events → absolute date.

## Rules
- **Must** Wrap in `<time datetime>` with the ISO value.
- **Must** Switch to an absolute date after 7 days.
- **Should** Update every minute for the first hour, then every hour.
- **Never** Show "0 seconds ago"; under 45s it is "just now".

## Accessibility
- The tooltip's absolute time is also in `title` for screen readers.
- Updates are not announced.

## Edge cases
| Scenario | Fix |
|---|---|
| Clock skew (future time) | Show "just now" |
| Hindi UI | Use `Intl.RelativeTimeFormat('hi')` |

## API
| Prop | Type | Default |
|---|---|---|
| `date` | `Date | string` | required |
| `locale` | `string` | `en-IN` |
| `cutoffDays` | `number` | `7` |

## Tokens
| Token | Value |
|---|---|
| `--tx-tertiary` | #666666 |
| `--fs-small` | 14px |

## Related
Timeline · Data list
