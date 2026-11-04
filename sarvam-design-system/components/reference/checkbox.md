---
title: "Checkbox"
slug: checkbox
group: Selection
summary: "Turns one option on or off, or picks any number from a list."
related: [radio-group, switch, field]
---

# Checkbox

Turns one option on or off, or picks any number from a list.


## Styles
- 18px box, radius 4px, 1.5px `--sr-grey-500` border on `--sf-white`.
- Checked: `--slate` fill with a white 2px check. Indeterminate: `--slate` with a white dash.
- Label Matter 15px `--tx`, 10px to the right; whole row is the target.

## Usage
### Use
- Any number of options may apply: languages to support, notification types.
- A single opt-in: "Send me product updates".
### Not for
- Exactly one choice → **Radio group**.
- A setting that takes effect immediately → **Switch**.

## Rules
- **Must** Make the label clickable, not just the box. Because an 18px box alone is too small a target.
- **Must** Never pre-tick marketing consent. Because consent must be an action, not a default.
- **Should** Use indeterminate only for a parent whose children are mixed.
- **Never** Colour the checked box in a brand hue; it is slate.

## Accessibility
- Native `<input type="checkbox">` or `role="checkbox"` with `aria-checked` (true | false | mixed).
- Space toggles.
- The focus ring is `0 0 0 3px rgba(165,187,252,.6)` on `:focus-visible`, never removed.
- Group several checkboxes in a `fieldset` with a `legend`.

## Edge cases
| Scenario | Fix |
|---|---|
| Long label | Wraps; the box aligns to the first line |
| Disabled and checked | Slate at 40% so the state is still readable |
| Select all with 1,000 rows | Indeterminate parent, count shown beside it |

## API
| Prop | Type | Default |
|---|---|---|
| `checked, defaultChecked` | `boolean | 'indeterminate'` | `false` |
| `onCheckedChange` | `(checked) => void` | n/a |
| `label` | `ReactNode` | n/a |
| `disabled` | `boolean` | `false` |

## Tokens
| Token | Value |
|---|---|
| `--slate` | #2a2c33 |
| `--sf-white` | #ffffff |
| `--sr-grey-500` | #b3b3b3 |
| `--tx` | #1f1f1f |
| `--radius-sm` | 4px |

## Related
Radio group · Switch · Field
