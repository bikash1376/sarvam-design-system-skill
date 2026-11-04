---
title: "Alert"
slug: alert
group: Feedback
summary: "A message inside the page about something the person should know or fix."
related: [toast, status, empty-state]
---

# Alert

A message inside the page about something the person should know or fix.


## Styles
- Radius 12px, padding 16px, 16px solid icon left, title Matter 15px 525, body 14px.
- Info: `--sr-indigo-50` fill, `--sr-indigo-200` border, icon `--sr-indigo-700`. Warning: yellow 50/200/800. Error: red 50/200/500. Success: green 50/200/700.
- Text stays `--tx` / `--tx-tertiary`; only the icon and border carry the hue.

## Usage
### Use
- A problem the person must fix before continuing: a failed payment, an invalid key.
- Important context at the top of a page: deprecation, maintenance window.
### Not for
- Confirming an action just taken → **Toast**.
- Marketing announcements → a Badge in the hero.

## Rules
- **Must** Say what happened and what to do, in two sentences at most.
- **Must** Use error tone only for real errors. Because red that isn't urgent teaches people to ignore red.
- **Should** Offer one action (link or small button) when there is a fix.
- **Never** Stack more than one alert in a view; combine them.

## Accessibility
- Errors use `role="alert"`; info uses `role="status"`.
- The icon is `aria-hidden`; the title says the tone.

## Edge cases
| Scenario | Fix |
|---|---|
| Dismissible | Close button top-right, remembers dismissal per session |
| Long body | Clamp to 3 lines with "Show more" |

## API
| Prop | Type | Default |
|---|---|---|
| `tone` | `info | success | warning | error` | `info` |
| `title` | `ReactNode` | required |
| `children` | `ReactNode` | n/a |
| `action` | `ReactNode` | n/a |
| `onDismiss` | `() => void` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--sr-indigo-50` | #fafcff |
| `--sr-indigo-200` | #d2dff9 |
| `--sr-red-50` | #fde7e2 |
| `--sr-red-500` | #b81514 |
| `--sr-yellow-50` | #fff8e6 |
| `--sr-green-50` | #f2f8eb |
| `--radius-xl` | 12px |

## Related
Toast · Status · Empty state
