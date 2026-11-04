---
title: "Collapsible"
slug: collapsible
group: Layout
summary: "Shows and hides a section under a heading: FAQs, details, advanced options."
related: [tabs, sheet]
---

# Collapsible

Shows and hides a section under a heading: FAQs, details, advanced options.


## Styles
- Row: Matter 16px 525 question + 16px plus/chevron on the right; 1px `--st-secondary` divider between rows.
- Body 15px `--tx-tertiary`, padding-bottom 20px; height animates 300ms `--ease-brand`.

## Usage
### Use
- FAQs on product pages.
- Advanced settings most people don't need.
### Not for
- Primary content everyone must read.
- Switching between equal views → **Tabs**.

## Rules
- **Must** Make the whole header row the toggle.
- **Should** Allow several open at once in FAQs.
- **Never** Hide pricing or limits behind a collapsible.

## Accessibility
- Header is a `<button>` with `aria-expanded` and `aria-controls`.
- Content is in the DOM so find-in-page works (`hidden=until-found`).

## Edge cases
| Scenario | Fix |
|---|---|
| Deep link to an answer | Open it and scroll to it |
| Reduced motion | No height animation |

## API
| Prop | Type | Default |
|---|---|---|
| `open, defaultOpen` | `boolean` | `false` |
| `onOpenChange` | `(open) => void` | n/a |
| `title` | `ReactNode` | required |

## Tokens
| Token | Value |
|---|---|
| `--st-secondary` | #f0f0f0 |
| `--tx` | #1f1f1f |
| `--tx-tertiary` | #666666 |
| `--ease-brand` | cubic-bezier(.2, 0, 0, 1) |
| `--dur-moderate` | 300ms |

## Related
Tabs · Sheet
