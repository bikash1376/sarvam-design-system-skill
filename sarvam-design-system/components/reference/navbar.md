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
