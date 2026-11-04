---
title: "Command"
slug: command
group: Overlays
summary: "A ⌘K palette to search pages, docs and actions from anywhere."
related: [combobox, dropdown-menu, kbd]
---

# Command

A ⌘K palette to search pages, docs and actions from anywhere.


## Styles
- Dialog 560px wide, radius 16px. Search input 52px, no border, 16px icon; results grouped with Geist 12px uppercase `--tx-eyebrow` headings.
- Rows 40px, active row `--sf-secondary`, Kbd hints right.

## Usage
### Use
- Jumping to any docs page, model or setting.
- Power-user actions: create key, switch language, copy install command.
### Not for
- Filtering one list → **Combobox**.
- The only way to reach something.

## Rules
- **Must** Open with ⌘K / Ctrl K and a visible search button.
- **Should** Show recent items before the person types.
- **Must** Rank exact title matches first.
- **Never** Run destructive actions without a confirm step.

## Accessibility
- Combobox pattern with a listbox of results.
- Group headings are `role="presentation"` labels.
- The focus ring is `0 0 0 3px rgba(165,187,252,.6)` on `:focus-visible`, never removed.

## Edge cases
| Scenario | Fix |
|---|---|
| No results | "No results for …" + link to search docs |
| Huge index | Virtualise past 200 rows |

## API
| Prop | Type | Default |
|---|---|---|
| `open, onOpenChange` | `boolean, fn` | n/a |
| `groups` | `{ heading, items[] }[]` | required |
| `placeholder` | `string` | `Search docs and actions` |

## Tokens
| Token | Value |
|---|---|
| `--sf-white` | #ffffff |
| `--sf-secondary` | #f5f5f5 |
| `--tx-eyebrow` | #666666 |
| `--font-eyebrow` | "Geist", "Inter", system-ui, -apple-system, sans-serif |
| `--radius-2xl` | 16px |

## Related
Combobox · Dropdown menu · Kbd
