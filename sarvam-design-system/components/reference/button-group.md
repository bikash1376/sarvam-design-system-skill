---
title: "Button group"
slug: button-group
group: Actions
summary: "Two or three related actions set side by side, with one clear primary."
related: [button, segmented-control, dropdown-menu]
---

# Button group

Two or three related actions set side by side, with one clear primary.


## Styles
- Horizontal row, `gap: 12px` (16px md+). Primary sits **last** on desktop, first when stacked on mobile.
- Hero pair: `hero-dark` + `hero-light`, both 52px pills.
- Attached variant (toolbar): buttons share one 1px `--st` outline, inner dividers 1px `--st-secondary`, outer radius pill.

## Usage
### Use
- A primary action with one or two secondary alternatives: Get started + Contact us.
- A compact toolbar of equal actions on one object: Copy · Download · Share.
### Not for
- Choosing one of several views → **Segmented control**.
- Four or more actions → keep two and move the rest into a **Dropdown menu**.

## Rules
- **Must** Hold at most one primary (slate or hero-dark). Because two dark pills split attention and the page loses its one next step.
- **Must** Keep the hero pair auto-width and centred on mobile, never stretched full-width.
- **Should** Order by importance: primary, then secondary, then outline.
- **Never** Mix sizes inside one group. Every button in a group is the same height.
- **Should** Wrap with `flex-wrap: wrap` instead of shrinking labels when space runs out.

## Accessibility
- Wrap a toolbar group in `role="group"` with an `aria-label`.
- Tab order follows visual order; the primary is reachable without passing hidden actions.
- The focus ring is `0 0 0 3px rgba(165,187,252,.6)` on `:focus-visible`, never removed.

## Edge cases
| Scenario | Fix |
|---|---|
| Labels of very different length | Let each button size to its label; don't force equal widths |
| Narrow card | Stack vertically with 12px gap, primary on top |
| One action disabled | Keep it in place at 40% opacity so the layout doesn't jump |

## API
| Prop | Type | Default |
|---|---|---|
| `children` | `Button[]` | required |
| `attached` | `boolean` | `false` |
| `align` | `start | center | end` | `start` |
| `aria-label` | `string` | n/a (required when attached) |

## Tokens
| Token | Value |
|---|---|
| `--slate` | #2a2c33 |
| `--sf-secondary` | #f5f5f5 |
| `--st` | #e6e6e6 |
| `--st-secondary` | #f0f0f0 |
| `--radius-pill` | 9999px |
| `--space-3` | 12px |

## Related
Button · Segmented control · Dropdown menu
