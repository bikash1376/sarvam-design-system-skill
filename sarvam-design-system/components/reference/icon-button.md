---
title: "Icon button"
slug: icon-button
group: Actions
summary: "A round utility action with no label: reset, download, copy, close."
related: [button, copy-button]
---

# Icon button

A round utility action with no label: reset, download, copy, close.

## Styles
| Variant | Look |
|---|---|
| `default` | 40px circle, `--sf` → hover `--sf-secondary`, 1px `--st-secondary`, `shadow-sm`, 18px stroke icon in `--tx-tertiary` |
| `ghost` | No border or background; hover `--sf-secondary` |
| `dark` | `--slate` fill, white icon, cursor glow (counts as a primary) |

## Usage
### Use
- Utilities around a player or playground: reset, download, mute.
- Close buttons on sheets and dialogs.
### Not for
- The main action of a view → **Button**.
- Anything a user might not recognise from the icon alone → **Button** with a label.

## Rules
- **Must** have an `aria-label` and a tooltip on desktop.
- **Must** use a flat stroke icon (style 1), 18–20px.
- **Never** place more than 4 icon buttons in one row.
- **Should** stay 40px (44px on touch).

## Accessibility
- The hit area is at least 44×44px on mobile.
- The focus ring matches Button.
- Toggle buttons (mute) use `aria-pressed`.

## Edge cases
| Scenario | Fix |
|---|---|
| Icon meaning unclear | Switch to a labelled button |
| Destructive action | Confirm in a dialog; never one-tap delete |

## API
| Prop | Type | Default |
|---|---|---|
| `icon` | flat stroke icon | n/a |
| `label` | `string` (aria-label + tooltip) | required |
| `variant` | `default \| ghost \| dark` | `default` |
| `pressed` | `boolean` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--sf` | #fcfcfc |
| `--sf-secondary` | #f5f5f5 |
| `--st-secondary` | #f0f0f0 |
| `--shadow-elev-sm` | 0 1px 3px #00000014 |

## Related
Button · Copy button
