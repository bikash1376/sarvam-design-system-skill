---
title: "Segmented control"
slug: segmented
group: Inputs
summary: "Switches between views of the same content: metrics, code languages, voices."
related: [button, language-select, code-block]
---

# Segmented control

Switches between views of the same content: metrics, code languages, voices.

## Styles
```
track  : bg #f5f5f5 · radius full · padding 4px · gap 4px · no border
item   : padding 8px 16px · Matter 13–15px · radius full · colour #666 · weight 425
active : bg #fff · colour #1f1f1f · weight 525 · shadow 0 1px 3px rgba(0,0,0,.08)
hover  : inactive colour #3d3d3d
```

## Usage
### Use
- 2–5 mutually exclusive views: "olmOCR Overall · Word Accuracy · Character Accuracy", "Python · JavaScript · cURL".
### Not for
- More than 5 options or a long language list → **Language select**.
- Page-level navigation → nav or product tabs.
- Committing an action → **Button**.

## Rules
- **Must** have exactly one active item.
- **Must** keep labels on one line; the track scrolls horizontally on small screens.
- **Never** use icons only. Labels are short words.
- **Should** animate the active pill (200ms `--ease-brand`).

## Accessibility
- Use `role="tablist"` with `role="tab"` + `aria-selected`, or a radio group.
- Arrow keys move between items; Home and End jump to the ends.
- Active vs inactive differs by weight and background, not colour alone.

## Edge cases
| Scenario | Fix |
|---|---|
| Overflows at 375px | `overflow-x: auto`, hidden scrollbar, snap to items |
| Labels of very different lengths | Allow natural widths; don't force equal widths |
| Content loading after a switch | Keep the selection and show a skeleton in the panel |

## API
| Prop | Type | Default |
|---|---|---|
| `items` | `string[]` | n/a |
| `value` | `string` | first item |
| `onChange` | `(value) => void` | n/a |
| `size` | `sm (13px) \| md (15px)` | `sm` |

## Tokens
| Token | Value |
|---|---|
| `--sf-secondary` | #f5f5f5 |
| `--shadow-seg-active` | 0 1px 3px rgba(0,0,0,.08) |
| `--tx-tertiary` | #666666 |
| `--tx` | #1f1f1f |

## Related
Language select · Code block · Button
