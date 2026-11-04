---
title: "Dialog"
slug: dialog
group: Overlays
summary: "A focused window over the page for one decision or a short form."
related: [sheet, popover, alert]
---

# Dialog

A focused window over the page for one decision or a short form.


## Styles
- Width 480px (sm 400, lg 640), `--sf-white`, radius 24px, padding 24px, `--shadow-elev-lg`.
- Backdrop `rgba(20,20,20,.4)` with 4px blur. Title Season Mix 22px; actions bottom-right, primary last.
- Enter: fade + 0.98→1 scale, 200ms `--ease-brand`.

## Usage
### Use
- Confirming a destructive or costly action: delete key, rotate secret.
- A short form that belongs to the current page: rename, invite.
### Not for
- Long forms or detail views → **Sheet** or a page.
- Hints → **Tooltip** or **Popover**.

## Rules
- **Must** Trap focus inside and return it to the trigger on close.
- **Must** Name the button with the action ("Delete key"), not "OK". Because people skim buttons, not body text.
- **Should** Close on Escape and backdrop click unless data would be lost.
- **Never** Open a dialog from a dialog.

## Accessibility
- `role="dialog"` `aria-modal="true"`, labelled by its title.
- Initial focus on the first field or the least destructive action.

## Edge cases
| Scenario | Fix |
|---|---|
| Content taller than the viewport | Body scrolls; header and actions stay fixed |
| Mobile | Becomes a bottom sheet under 640px |

## API
| Prop | Type | Default |
|---|---|---|
| `open, onOpenChange` | `boolean, (open) => void` | n/a |
| `title` | `ReactNode` | required |
| `size` | `sm | md | lg` | `md` |
| `dismissible` | `boolean` | `true` |

## Tokens
| Token | Value |
|---|---|
| `--sf-white` | #ffffff |
| `--shadow-elev-lg` | 0 12px 40px -8px rgba(0,0,0,.12) |
| `--radius-3xl` | 24px |
| `--font-display` | "Season Mix", "Source Serif 4", Georgia, serif |
| `--ease-brand` | cubic-bezier(.2, 0, 0, 1) |

## Related
Sheet · Popover · Alert
