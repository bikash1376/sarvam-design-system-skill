---
title: "Audio player"
slug: audio-player
group: Media
summary: "A compound control: a play button, a dot-matrix visualiser and a language select."
related: [button, language-select]
---

# Audio player

A compound control: a play button, a dot-matrix visualiser and a language select.

## Styles
```
track : inline-flex · #fff · 1px #e8e8e8 · radius full · padding 4px · gap 8–10px · shadow 0 4px 20px rgba(0,0,0,.05)
play  : primary button + solid play icon + cursor glow · 40px · 15px label
dots  : grid of 2.5px dots, gap 1.5px, 32×10 desktop / 14×10 mobile · idle #e5e5e5 · active #a3a3a3, lit bottom-up by level
lang  : language select (हिन्दी Hindi ⌄)
```

## Usage
### Use
- TTS and STT demos, voice samples, any listenable output.
### Not for
- Long-form audio with seeking → a full media player.

## Rules
- **Must** keep the visualiser grey; colour never comes from the dots.
- **Must** shorten "Play Audio" to "Play" below 768px.
- **Should** toggle the label to "Pause" while playing.

## Accessibility
- The play button has `aria-pressed`, or switches its label between Play and Pause.
- The visualiser is `aria-hidden`.
- Offer a transcript beside every sample.

## Edge cases
| Scenario | Fix |
|---|---|
| Audio fails to load | Disable play and show "Sample unavailable" |
| Language changed while playing | Stop, swap the source, keep the paused state |

## API
| Prop | Type | Default |
|---|---|---|
| `src` | per-language audio map | n/a |
| `language` | code | `hi-IN` |

## Tokens
| Token | Value |
|---|---|
| `--stroke-track` | #e8e8e8 |
| `--shadow-track` | 0 4px 20px 0 rgba(0,0,0,.05) |
| `--dot-idle` / `--dot-active` | #e5e5e5 / #a3a3a3 |

## Related
Button · Language select
