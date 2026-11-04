---
title: "Footer"
slug: footer
group: Navigation
summary: "Brand column, link columns and the giant image-filled wordmark."
related: [navbar, cta-panel]
---

# Footer

Brand column, link columns and the giant image-filled wordmark.

## Styles
Desktop: a brand column (wordmark 24px, "AI for all from India", ISO and SOC 2 badges in 56px `--sf-tertiary` squares, socials, address box) + 5 link columns. Headings in Matter Semi Mono 12px caps, links in Matter 14px `--tx-tertiary`. Below it, the wordmark filled with photography, cropped by the bottom edge. It **always spans the full footer width at every breakpoint**: use the wordmark SVG as a mask on a `width: 100%; aspect-ratio: 202 / 32` box (never a fixed font-size or pixel width), so it scales with the screen from 375 to 1440+. Tablet: 3 columns. Mobile: 2 columns.

## Rules
- **Must** use the giant image-filled wordmark only here.
- **Should** follow the dark CTA panel.

## Accessibility
- Use `<footer>` with `<nav aria-label="Footer">`. The giant wordmark is decorative (`aria-hidden`).

## Edge cases
| Scenario | Fix |
|---|---|
| Very long column | Split it into two, or link to an index |

## API
| Prop | Type | Default |
|---|---|---|
| `columns` | `{title, links[]}[]` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--font-label` | Matter Semi Mono |

## Related
Navbar · CTA panel
