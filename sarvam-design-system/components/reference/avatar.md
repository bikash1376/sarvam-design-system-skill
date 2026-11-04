---
title: "Avatar"
slug: avatar
group: Display
summary: "A person or organisation shown as a photo, logo or initials."
related: [item, message, testimonial]
---

# Avatar

A person or organisation shown as a photo, logo or initials.


## Styles
- Sizes 24 / 32 / 40 / 56px, radius pill (organisations: radius 8px).
- Photo: `object-fit: cover`, 1px inner ring `rgba(0,0,0,.06)`.
- Fallback initials: Matter 525, `--sr-indigo-100` fill, `--sr-indigo-900` text.

## Usage
### Use
- People in testimonials, speaker cards, conversation messages and team lists.
- Customer or partner organisations in compact lists.
### Not for
- Customer logos in a proof bar → **Logo marquee** (no circles).
- The Sarvam assistant → its glyph, not a face.

## Rules
- **Must** Use real photos only. Because stock-AI faces are banned (anti-slop).
- **Must** Fall back to initials, never a generic silhouette icon.
- **Should** Stack at most 4 overlapping avatars, then "+12".
- **Never** Add coloured status rings unless they mean presence.

## Accessibility
- Photos get `alt` with the person's name; decorative repeats get `alt=""`.
- Initials have `aria-label` with the full name.

## Edge cases
| Scenario | Fix |
|---|---|
| Broken image | Swap to initials without layout shift |
| Single-word name | One initial |
| Devanagari name | First grapheme, not first code unit |

## API
| Prop | Type | Default |
|---|---|---|
| `src` | `string` | n/a |
| `name` | `string` | required |
| `size` | `24 | 32 | 40 | 56` | `32` |
| `shape` | `circle | square` | `circle` |

## Tokens
| Token | Value |
|---|---|
| `--sr-indigo-100` | #e8effc |
| `--sr-indigo-900` | #212191 |
| `--radius-pill` | 9999px |
| `--radius-lg` | 8px |

## Related
Item · Message · Testimonial
