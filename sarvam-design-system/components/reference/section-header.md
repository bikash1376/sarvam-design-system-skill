---
title: "Section header"
slug: section-header
group: Layout
summary: "A centred section title with an optional subtitle."
related: [eyebrow]
---

# Section header

A centred section title with an optional subtitle.

## Styles
h2 in Season Mix 525, 28 → 36px, lh 1.2, tracking −0.02em. Optional subtitle in Matter 425 16 → 18px `--tx-tertiary`, max-width 640px, 12–16px below. Content follows 32px (mobile) / 48px (desktop) below. Split variant: left-aligned label + h2 + sub, with an outline CTA at the right.

## Rules
- **Must** be centred, except in split layouts.
- **Must** be sentence case, 2–7 words.
- **Never** put a section label above the title. The title stands alone (sarvam.ai product pages have no labels above h2s).
- **Should** split long titles over 2 balanced lines ("Flexible output / Same audio, multiple formats").

## Accessibility
- One `h1` per page. Section titles are `h2`, in order.

## Edge cases
| Scenario | Fix |
|---|---|
| Orphan word on the last line | `text-wrap: balance` |

## API
| Prop | Type | Default |
|---|---|---|
| `title`, `subtitle` | n/a | n/a |
| `align` | `center \| split` | `center` |

## Tokens
| Token | Value |
|---|---|
| `--fs-h2` | 28px → 36px |
| `--section-inner` | 32px → 48px |

## Related
Eyebrow
