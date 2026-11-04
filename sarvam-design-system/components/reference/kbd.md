---
title: "Kbd"
slug: kbd
group: Display
summary: "Shows a keyboard key or shortcut: ⌘K, Esc, Enter."
related: [command, tooltip]
---

# Kbd

Shows a keyboard key or shortcut: ⌘K, Esc, Enter.


## Styles
- Matter Mono 12px `--tx-tertiary` on `--sf-white`, 1px `--st`, radius 4px, padding 2px 6px, `inset 0 -1px 0 --st`.
- Combos are separate keys with 4px gap: `⌘` `K`.

## Usage
### Use
- Shortcut hints in menus, tooltips and the command palette.
- Docs that tell people which key to press.
### Not for
- Inline code → `code`.
- Buttons → **Button**.

## Rules
- **Must** Show the platform's key: ⌘ on macOS, Ctrl elsewhere.
- **Should** Show shortcuts only for actions that have them; never invent decorative ones.
- **Never** Make a Kbd clickable.

## Accessibility
- Use `<kbd>`; symbols get `aria-label` ("Command").
- Hide shortcut hints from touch layouts.

## Edge cases
| Scenario | Fix |
|---|---|
| Unknown platform | Default to Ctrl |
| Long key name | Spell it: `Shift`, not `⇧`, in body text |

## API
| Prop | Type | Default |
|---|---|---|
| `children` | `string` | required |
| `keys` | `string[]` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--font-mono` | "Matter Mono", ui-monospace, "SF Mono", Menlo, monospace |
| `--sf-white` | #ffffff |
| `--st` | #e6e6e6 |
| `--tx-tertiary` | #666666 |
| `--radius-sm` | 4px |

## Related
Command · Tooltip
