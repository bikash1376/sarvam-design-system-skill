---
title: "Stat"
slug: stat
group: Display
summary: "Shows a published metric as a large number with a label."
related: [feature-card]
---

# Stat

Shows a published metric as a large number with a label.

## Styles
Number in Season Mix 425, 40 → 48 → 56px, `--tx` or `--sr-indigo-900`, tracking −0.02em. Label in Matter 425 14px `--tx-tertiary`. In a row: 1px `--st` dividers between cells (vertical on desktop; a 2×2 grid with horizontal dividers on mobile).

## Variants
| Variant | Spec |
|---|---|
| `band` (product pages) | Full-bleed, about 350px, `--grad-stats-band`; numbers Season Mix 425 48px **white**; labels Matter 16px white |
| `row` | On `--sf`: numbers `--tx` / indigo-900, 1px dividers |

## Usage
### Use
- Published numbers from `FACTS.md` only: STT <250ms median latency · 100M+ mins transcribed · >99.5% uptime; Voice Agents <500ms · 350M+ conversations; platform 10B+ tokens · <100ms · 99.9% SLA.
### Not for
- Any number not in `FACTS.md`. Drop the stat instead. Never show a placeholder.

## Rules
- **Must** take every figure from `FACTS.md`.
- **Must** use 3–4 stats per row.
- **Never** animate count-ups longer than 800ms.

## Accessibility
- Read the number and label as one phrase, e.g. `aria-label="Under 500 milliseconds real-time latency"` for "<500ms".

## Edge cases
| Scenario | Fix |
|---|---|
| Unit symbols ("<", "+", "%") | Keep them in the same font size; don't superscript |

## API
| Prop | Type | Default |
|---|---|---|
| `value` | `string` | n/a |
| `label` | `string` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--fs-metric` | 40px → 48px (md) → 56px (xl) |

## Related
Feature card
