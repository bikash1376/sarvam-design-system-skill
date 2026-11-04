---
title: "Navbar"
slug: navbar
group: Navigation
summary: "The fixed top navigation, frosted on scroll."
related: [footer, button]
---

# Navbar

The fixed top navigation, frosted on scroll.

## Styles
| | <1024 | ≥1024 |
|---|---|---|
| Height | 64px | 68px |
| Left | Wordmark 16px tall | Wordmark 18px tall |
| Centre | n/a | Products · Developers · Resources · Company (Matter 425 15px, gap 32px) |
| Right | "Log In" secondary pill + hamburger | "Log In" primary + "Contact Us" secondary |
Transparent over the hero; on scroll it becomes `rgba(252,252,252,.8)` + `backdrop-filter: blur(12px)` + a bottom hairline.

**Responsive behaviour (must):**
- Breakpoint at **1024px**. Below it, the centre links and the "Contact Us" pill are hidden, and the hamburger opens a menu sheet: full-width links (16px, hairline between rows) plus a full-width "Contact Us" button. The sheet opens like a dropdown (height auto, 300ms `--ease-brand`, links stagger 40ms), and the hamburger morphs into an × with Motion.
- The wordmark never shrinks below 16px tall (`flex-shrink: 0`). Links never wrap or overflow; if they don't fit, switch to the hamburger.
- The nav aligns with the page container (88% width below 768px, 10/12 above, max 1400px).
- Inside a frame narrower than the viewport (a demo, an embed), use **container queries** (`@container`) instead of viewport media queries, so the nav responds to its own width.

## Rules
- **Must** align the wordmark with the content container edge.
- **Must** show **exactly one logo**: the Sarvam wordmark. No partner mark, sub-brand, "in collaboration with" or model logo — even when the page is about a partner. A co-branded lockup appears only when explicitly requested, and in the hero badge or footer, not the nav.
- **Must** use only the wordmark, never the logomark next to it.
- **Should** open mega-menus as white 16px cards with `--shadow-elev-md`.

## Accessibility
- Use `<nav aria-label="Main">`. The hamburger has `aria-expanded`. The mobile sheet traps focus and Esc closes it.

## Edge cases
| Scenario | Fix |
|---|---|
| Secondary nav (use-case tabs) | A sticky 45/57px bar under the nav |

## API
| Prop | Type | Default |
|---|---|---|
| `links` | `{label, href, menu?}[]` | n/a |
| `cta` | buttons | n/a |

## Tokens
| Token | Value |
|---|---|
| `--nav-h` / `--nav-h-lg` | 64px / 68px |

## Related
Footer · Button
