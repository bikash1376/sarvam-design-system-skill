---
title: "Field"
slug: field
group: Inputs
summary: "Wraps one control with its label, help text and error, so they always travel together."
related: [input, textarea, select]
---

# Field

Wraps one control with its label, help text and error, so they always travel together.


## Styles
- Stack: label (Matter 14px 525 `--tx`) → 8px → control → 6px → help (13px `--tx-tertiary`) or error (13px `--sr-red-500`).
- Optional mark sits after the label as "(optional)" in `--tx-tertiary`. Required fields get no asterisk.
- Fields in a form are spaced 20px apart (24px md+).

## Usage
### Use
- Every form control that needs a label: inputs, textareas, selects, date pickers.
- Grouping a control with one line of help text.
### Not for
- Checkbox and Switch: they carry their own inline label.
- Search bars in a nav: use a visually hidden label instead.

## Rules
- **Must** Show a visible label above every control. Because placeholder text is not a label and vanishes on input.
- **Should** Mark the few optional fields, not the many required ones.
- **Must** Replace help text with the error when invalid, in the same spot. Because the layout must not jump.
- **Should** Write labels as nouns in sentence case: "Work email", not "Enter your work email:".
- **Never** Put labels to the left of controls on mobile.

## Accessibility
- `<label for>` points at the control's `id`.
- Help and error ids go into the control's `aria-describedby`.
- Errors are announced with `role="alert"` after submit.

## Edge cases
| Scenario | Fix |
|---|---|
| Long label | Wraps to two lines; the control stays full width |
| Two fields side by side | Only at md+; stack on mobile |
| Error and help both present | Show the error, hide the help |

## API
| Prop | Type | Default |
|---|---|---|
| `label` | `ReactNode` | required |
| `description` | `ReactNode` | n/a |
| `error` | `ReactNode` | n/a |
| `optional` | `boolean` | `false` |
| `children` | `control` | required |

## Tokens
| Token | Value |
|---|---|
| `--tx` | #1f1f1f |
| `--tx-tertiary` | #666666 |
| `--sr-red-500` | #b81514 |
| `--fs-small` | 14px |
| `--space-2` | 8px |
| `--space-5` | 20px |

## Related
Input · Textarea · Select
