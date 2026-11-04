---
title: "Input"
slug: input
group: Inputs
summary: "A single line of text the person types: an email, a name, an API key."
related: [field, textarea, combobox]
---

# Input

A single line of text the person types: an email, a name, an API key.


## Styles
- Height 44px, padding 0 16px, `--sf-white` fill, 1px `--st` border, radius 12px. Matter 15px `--tx`; placeholder `--tx-tertiary`.
- Hover: border `--sr-grey-400`. Focus: border `--sr-indigo-400` + indigo focus ring.
- Invalid: border `--sr-red-400`, message below in 13px `--sr-red-500`.
- Optional leading 16px solid icon in `--tx-tertiary`, 12px from the left edge.

## Usage
### Use
- Short free text with no fixed set of answers: email, name, company, API key.
- Search, with a leading search icon and `type="search"`.
### Not for
- More than one line → **Textarea**.
- Choosing from known options → **Select** or **Combobox**.
- Dates → **Date picker**.

## Rules
- **Must** Always sit inside a **Field** with a visible label. Because a placeholder disappears on typing and is not a label.
- **Must** Use the right `type` and `autocomplete` (`email`, `name`, `organization`). Because mobile keyboards and autofill depend on it.
- **Should** Size the width to the expected answer: a PIN is short, an email is long.
- **Never** Use a pill radius on inputs. Pills are for buttons and chips; inputs are 12px.
- **Must** Show errors only after blur or submit, never while the person is still typing.

## Accessibility
- Label tied with `for`/`id`; help and error text tied with `aria-describedby`.
- Invalid inputs set `aria-invalid="true"`.
- The focus ring is `0 0 0 3px rgba(165,187,252,.6)` on `:focus-visible`, never removed.
- Text is 15px minimum so iOS does not zoom on focus (16px on mobile).

## Edge cases
| Scenario | Fix |
|---|---|
| Very long value | Scrolls horizontally inside the input; never wraps |
| Pasted value with spaces | Trim on blur for emails and keys |
| Read-only | `--sf-secondary` fill, no hover, text stays selectable |
| Disabled | 40% opacity, `cursor: not-allowed`, skipped by Tab |

## API
| Prop | Type | Default |
|---|---|---|
| `type` | `text | email | search | password | url` | `text` |
| `value, defaultValue` | `string` | n/a |
| `onChange` | `(e) => void` | n/a |
| `invalid` | `boolean` | `false` |
| `leadingIcon` | `ReactNode` | n/a |
| `size` | `md (44px) | lg (52px)` | `md` |

## Tokens
| Token | Value |
|---|---|
| `--sf-white` | #ffffff |
| `--st` | #e6e6e6 |
| `--tx` | #1f1f1f |
| `--tx-tertiary` | #666666 |
| `--sr-indigo-400` | #81a0e9 |
| `--sr-red-400` | #c43d2b |
| `--radius-xl` | 12px |

## Related
Field · Textarea · Combobox
