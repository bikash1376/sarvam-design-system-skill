---
title: "Data list"
slug: data-list
group: Display
summary: "Pairs of labels and values: a model's specs, an API key's details."
related: [table, stat, item]
---

# Data list

Pairs of labels and values: a model's specs, an API key's details.


## Styles
- Two columns: label Matter 14px `--tx-tertiary` (min 140px), value Matter 14px `--tx`.
- Rows 12px apart, hairline `--st-secondary` between rows. Values that are code use Matter Mono 13px.

## Usage
### Use
- Specs and metadata: context length, languages, latency, created date.
- A summary before confirming an action.
### Not for
- Many records with the same fields → **Table**.
- Big headline numbers → **Stat**.

## Rules
- **Must** Use only numbers from FACTS.md for Sarvam product specs. Because invented specs are worse than none.
- **Should** Stack label above value under 640px.
- **Never** Hide empty values; show an em dash.

## Accessibility
- Use `<dl>`, `<dt>`, `<dd>`.
- Copyable values have a copy button with an `aria-label`.

## Edge cases
| Scenario | Fix |
|---|---|
| Long value | Wraps under itself, label stays top-aligned |
| Missing value | Show — |

## API
| Prop | Type | Default |
|---|---|---|
| `items` | `{ label, value }[]` | required |
| `layout` | `horizontal | stacked` | `horizontal` |

## Tokens
| Token | Value |
|---|---|
| `--tx` | #1f1f1f |
| `--tx-tertiary` | #666666 |
| `--st-secondary` | #f0f0f0 |
| `--font-mono` | "Matter Mono", ui-monospace, "SF Mono", Menlo, monospace |

## Related
Table · Stat · Item
