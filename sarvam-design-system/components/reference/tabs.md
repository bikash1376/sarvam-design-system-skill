---
title: "Tabs"
slug: tabs
group: Navigation
summary: "Switches between sibling panels of content in the same place."
related: [segmented-control, code-block]
---

# Tabs

Switches between sibling panels of content in the same place.


## Styles
- Underline tabs: Matter 15px `--tx-tertiary`, active `--tx` with a 2px `--slate` underline; 1px `--st` baseline.
- Pill tabs (in demos): use the Segmented control skin.
- Gap 24px; scroll horizontally on overflow, no wrapping.

## Usage
### Use
- Sibling sections of one object: Overview · API · Pricing for a model.
- Code samples per language (Python · JavaScript · cURL).
### Not for
- Two or three modes of one control → **Segmented control**.
- Steps in a sequence → a stepper.

## Rules
- **Must** Keep each tab's content independent; nothing should require reading another tab.
- **Should** Use 2–6 tabs with one or two word labels.
- **Never** Use tabs as page navigation; links go in the nav.

## Accessibility
- `tablist` / `tab` / `tabpanel` with `aria-selected` and `aria-controls`.
- Arrows move between tabs; Tab moves into the panel.
- The focus ring is `0 0 0 3px rgba(165,187,252,.6)` on `:focus-visible`, never removed.

## Edge cases
| Scenario | Fix |
|---|---|
| Overflow on mobile | Horizontal scroll with fade edges |
| Deep link | Sync the active tab with the URL hash |

## API
| Prop | Type | Default |
|---|---|---|
| `value, defaultValue` | `string` | first tab |
| `onValueChange` | `(v) => void` | n/a |
| `variant` | `underline | pill` | `underline` |

## Tokens
| Token | Value |
|---|---|
| `--tx` | #1f1f1f |
| `--tx-tertiary` | #666666 |
| `--slate` | #2a2c33 |
| `--st` | #e6e6e6 |

## Related
Segmented control · Code block
