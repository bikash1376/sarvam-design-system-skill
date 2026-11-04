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
Number in Season Mix 400, 40 → 48 → 56px, `--tx` or `--sr-indigo-900`, tracking −0.02em. Label in Matter 400 14px `--tx-tertiary`. In a row: 1px `--st` dividers between cells (vertical on desktop; a 2×2 grid with horizontal dividers on mobile).

## Usage
### Use
- Published proof points: <500ms latency, 350M+ conversations, 10B+ tokens, 99.9% uptime SLA.
### Not for
- Invented or unverified numbers. Use `[metric]` and flag it instead.

## Rules
- **Must** use only figures published on sarvam.ai.
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
