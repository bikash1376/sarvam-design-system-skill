---
title: "Popover"
slug: popover
group: Overlays
summary: "A small floating panel anchored to a trigger, for extra controls or detail."
related: [tooltip, dropdown-menu, dialog]
---

# Popover

A small floating panel anchored to a trigger, for extra controls or detail.


## Styles
- `--sf-white`, 1px `--st`, radius 16px, padding 16px, `--shadow-elev-md`, max-width 320px.
- 8px offset from the trigger; flips when there's no room.

## Usage
### Use
- Interactive extra detail: a filter form, a colour picker, a share panel.
- Rich explanations with a link.
### Not for
- Plain text hints → **Tooltip**.
- Lists of actions → **Dropdown menu**.

## Rules
- **Must** Open on click, not hover. Because hover never happens on touch.
- **Should** Close on outside click and Escape, returning focus to the trigger.
- **Never** Put a form longer than 3 fields in a popover.

## Accessibility
- Trigger has `aria-expanded` and `aria-controls`.
- Focus moves into the popover when it contains controls.

## Edge cases
| Scenario | Fix |
|---|---|
| Near the viewport edge | Flip and shift to stay visible |
| Scroll | Stays anchored to the trigger |

## API
| Prop | Type | Default |
|---|---|---|
| `trigger` | `ReactNode` | required |
| `side` | `top | right | bottom | left` | `bottom` |
| `align` | `start | center | end` | `center` |

## Tokens
| Token | Value |
|---|---|
| `--sf-white` | #ffffff |
| `--st` | #e6e6e6 |
| `--shadow-elev-md` | 0 4px 24px rgba(0,0,0,.12) |
| `--radius-2xl` | 16px |

## Related
Tooltip · Dropdown menu · Dialog
