---
title: "Attachment"
slug: attachment
group: Media and charts
summary: "A file added to a message or form: audio, a PDF, an image."
related: [prompt-input, message, progress]
---

# Attachment

A file added to a message or form: audio, a PDF, an image.


## Styles
- Chip-like tile: 40px icon tile (`--sf-secondary`, radius 8px) + name Matter 14px + size 12px `--tx-tertiary`; 1px `--st`, radius 12px.
- Uploading: thin Progress under the name. Images show a 64px thumbnail.

## Usage
### Use
- Files attached to a prompt (Saaras audio, Parse PDFs).
- Uploaded files in forms.
### Not for
- Inline media playback → **Audio player**.
- Gallery images.

## Rules
- **Must** Show name, type and size, and a remove (×) button while editable.
- **Must** State accepted types and limits before upload, not after a failure.
- **Never** Show raw MIME types; say "PDF", "Audio".

## Accessibility
- Remove button is labelled "Remove filename".
- Upload progress uses `role="progressbar"`.

## Edge cases
| Scenario | Fix |
|---|---|
| Upload fails | Red border, "Retry" link, file kept in the list |
| Long file name | Middle-truncate, keep the extension |

## API
| Prop | Type | Default |
|---|---|---|
| `file` | `{ name, size, type, url? }` | required |
| `progress` | `number | null` | `null` |
| `onRemove` | `() => void` | n/a |

## Tokens
| Token | Value |
|---|---|
| `--sf-secondary` | #f5f5f5 |
| `--st` | #e6e6e6 |
| `--tx-tertiary` | #666666 |
| `--radius-xl` | 12px |
| `--radius-lg` | 8px |

## Related
Prompt input · Message · Progress
