---
title: "Truncate"
slug: truncate
group: Display
summary: "Shortens text that doesn't fit and keeps the full text one hover or tap away."
related: [tooltip, code-block]
---

# Truncate

Shortens text that doesn't fit and keeps the full text one hover or tap away.


## Styles
- Single line: `text-overflow: ellipsis`. Multi-line: `line-clamp` 2–3.
- Middle truncation for IDs and keys: `sk_live_…a9f2`.

## Usage
### Use
- Long names, file names, IDs and URLs inside fixed-width cells or cards.
- Card descriptions clamped to keep a grid even.
### Not for
- Body copy and headlines: write shorter instead.
- Error messages: always show them in full.

## Rules
- **Must** Make the full text reachable via tooltip or expand. Because hidden text is lost text.
- **Should** Truncate keys and hashes in the middle so both ends stay recognisable.
- **Never** Truncate headlines or CTAs; rewrite them.

## Accessibility
- The full text is in the DOM (or `aria-label`) so screen readers read all of it.
- Truncated elements that get a tooltip are focusable.

## Edge cases
| Scenario | Fix |
|---|---|
| Indic text | Clamp by lines, never by character count |
| Text fits | No tooltip |

## API
| Prop | Type | Default |
|---|---|---|
| `lines` | `number` | `1` |
| `position` | `end | middle` | `end` |
| `children` | `string` | required |

## Tokens
| Token | Value |
|---|---|
| `--tx` | #1f1f1f |
| `--tx-tertiary` | #666666 |

## Related
Tooltip · Code block
