---
title: "Chart"
slug: chart
group: Media and charts
summary: "Plots numbers so people can see a trend or compare values."
related: [stat, table]
---

# Chart

Plots numbers so people can see a trend or compare values.


## Styles
- Bars and lines in `--sr-indigo-500`; comparison series `--sr-grey-400`; highlight Sarvam in indigo, others grey.
- Axis labels Matter 12px `--tx-tertiary`, gridlines 1px `--st-secondary`, no chart border.
- Tooltip: Popover skin with value in tabular figures.

## Usage
### Use
- Usage over time in the console.
- Benchmarks comparing Sarvam models with others (FACTS.md numbers only).
### Not for
- A single number → **Stat**.
- Exact values people need to copy → **Table**.

## Rules
- **Must** Start bar axes at zero. Because cut axes exaggerate differences.
- **Must** Use FACTS.md numbers and cite the benchmark name.
- **Should** Label series directly instead of a legend when there are 3 or fewer.
- **Never** Use the blue→orange spectrum as a data scale; it is light, not data.

## Accessibility
- Provide the data as a table (visually hidden or toggle).
- Series differ by more than colour (pattern or label).

## Edge cases
| Scenario | Fix |
|---|---|
| No data | Empty state inside the chart frame |
| Mobile | Fewer ticks; horizontal bars for long labels |

## API
| Prop | Type | Default |
|---|---|---|
| `data` | `object[]` | required |
| `type` | `bar | line | area` | `bar` |
| `x, y` | `string` | required |

## Tokens
| Token | Value |
|---|---|
| `--sr-indigo-500` | #6a88e2 |
| `--sr-grey-400` | #cccccc |
| `--st-secondary` | #f0f0f0 |
| `--tx-tertiary` | #666666 |

## Related
Stat · Table
