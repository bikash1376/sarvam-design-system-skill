---
title: "Switch"
slug: switch
group: Selection
summary: "Turns a setting on or off, and the change applies at once."
related: [checkbox, segmented-control]
---

# Switch

Turns a setting on or off, and the change applies at once.


## Styles
- Track 36×20px, radius pill. Off: `--sr-grey-300`. On: `--slate`.
- Thumb 16px white circle with `--shadow-elev-sm`, slides 16px in 200ms `--ease-brand`.
- Label sits to the left in settings lists, to the right in inline use.

## Usage
### Use
- A setting that takes effect immediately: dark code theme, autoplay audio, email alerts.
- Settings lists where each row is one on/off preference.
### Not for
- A choice submitted with a form → **Checkbox**.
- Two named modes (Human / Agent) → **Segmented control**.

## Rules
- **Must** Apply the change immediately; no Save button. Because a switch promises instant effect.
- **Must** Label the setting, not the state: "Autoplay audio", not "On".
- **Never** Use brand colours for the on state. On is slate.
- **Should** Show a toast only if the change affects something off-screen.

## Accessibility
- `role="switch"` with `aria-checked`; Space and Enter toggle.
- The focus ring is `0 0 0 3px rgba(165,187,252,.6)` on `:focus-visible`, never removed.
- Hit area is at least 44px tall including the label row.

## Edge cases
| Scenario | Fix |
|---|---|
| Change fails on the server | Revert the thumb and show an error toast |
| Pending | Thumb shows a 10px spinner; the switch is disabled |
| Reduced motion | Thumb jumps without sliding |

## API
| Prop | Type | Default |
|---|---|---|
| `checked, defaultChecked` | `boolean` | `false` |
| `onCheckedChange` | `(checked) => void` | n/a |
| `label` | `ReactNode` | n/a |
| `disabled` | `boolean` | `false` |

## Tokens
| Token | Value |
|---|---|
| `--slate` | #2a2c33 |
| `--sr-grey-300` | #e6e6e6 |
| `--shadow-elev-sm` | 0 1px 3px rgba(0,0,0,.08) |
| `--ease-brand` | cubic-bezier(.2, 0, 0, 1) |
| `--dur-normal` | 200ms |
| `--radius-pill` | 9999px |

## Related
Checkbox · Segmented control
