---
title: "Dropdown menu"
slug: dropdown-menu
group: Overlays
summary: "A list of actions that opens from a button."
related: [select, popover, command]
---

# Dropdown menu

A list of actions that opens from a button.


## Styles
- Popover skin, min-width 200px, padding 4px. Items 36px, radius 8px, Matter 14px; hover `--sf-secondary`.
- Optional 16px icon left and Kbd shortcut right. Destructive items `--sr-red-500` at the bottom after a divider.

## Usage
### Use
- Secondary actions on an object: Rename, Duplicate, Delete.
- Overflow (⋯) menus in rows and cards.
### Not for
- Picking a value for a form → **Select**.
- Searching many commands → **Command**.

## Rules
- **Must** Put destructive actions last, separated by a divider.
- **Should** Keep to 7 items or fewer; group with dividers.
- **Never** Hide the only path to an important action in an overflow menu.

## Accessibility
- `role="menu"` with `menuitem`s; arrows move, Enter activates, Escape closes.
- Typeahead jumps to items by first letter.

## Edge cases
| Scenario | Fix |
|---|---|
| Disabled item | Shown at 40% with a tooltip saying why |
| Submenu | Opens on right arrow; avoid more than one level |

## API
| Prop | Type | Default |
|---|---|---|
| `trigger` | `ReactNode` | required |
| `items` | `{ label, icon?, shortcut?, onSelect, danger? }[]` | required |

## Tokens
| Token | Value |
|---|---|
| `--sf-white` | #ffffff |
| `--sf-secondary` | #f5f5f5 |
| `--st` | #e6e6e6 |
| `--sr-red-500` | #b81514 |
| `--shadow-elev-md` | 0 4px 24px rgba(0,0,0,.12) |
| `--radius-lg` | 8px |

## Related
Select · Popover · Command
