# Format · Banner and post decisions

The decision layer that comes **before** `formats/social-banners.md`. Use it to classify a banner job (ad or post), then pick an archetype family, a hue story, one motif and one atmosphere. It's distilled from ~35 official Sarvam LinkedIn and WhatsApp posts (2025–26). These are **decision rules, not templates**: never copy a post's layout or colour one-to-one. Classify the message, place its hue, and compose fresh.

Token and asset sources (inside this skill): `tokens/tokens.css` · `foundations/02-color.md` · `03-typography.md` · `07-motifs-and-glyphs.md` · `06-gradients-and-light.md` · `14-soft-glow-surfaces.md` · `15-glyph-color-depth.md` · `16-copywriting.md` · `17-mandala-background.md` · `components/reference/cta-panel.md`.

## 0. The one law
**One banner = one archetype family + one hue story + one message.**
Geometry stays fixed for a campaign; **hue rotates per message**. Companion posts in a series may share an identical layout where only the duotone and the glyph-coin hue change (the "Create your Voice Agent in minutes" pair ships in emerald and in saffron with identical structure).

## 1. First question: is there a CTA? (Ad or post)
| | **Ad** (conversion) | **Post** (announcement or brand) |
|---|---|---|
| CTA | Exactly one: a dark slate pill | **None** |
| Proof | A rebuilt UI mockup (phone frame, floating cards, prompt bar) | One hero object (diagram, glyph, photo, 3D render) |
| Special cue | A white cursor-arrow sticker on the control being "used" | No cursor, unless narrating a live flow |
| Structure | Hook (Season Mix) → UI proof → CTA | Wordmark → statement → visual |
| Canvas | 4:5 portrait or square (thumb-stopping) | Square or 4:5 freely; 16:9 for photo and partnership moments |
| Hue story | Matches the product subject | Matches the occasion |

A post with ad cues (a cursor on a fake control) reads as confetti; an ad with a second button splits the eye. The cursor sticker means "this mockup is being operated", so it belongs only where a mockup really is being operated.

**Ad sub-flavours** (pick one):
- **Launch / convert:** headline → floating checklist cards → `Get started →` pill ("Your business has a Voice. Now give it a **Number** too").
- **Interactive demo:** headline → a glassy **prompt-bar pill** with a glyph-coin button ("Create a Voice Agent…").
- **Impact / price:** a short contrast headline → one big gateway medallion, no mock UI ("Scale the calls, Not the cost.").

**Post sub-flavours:** programme diagram, webinar or moment, partnership, research or explainer (gateway frame), editorial statement, teaser.

## 2. Hue story by subject (rotate, don't invent)
About 85% of a Sarvam surface is neutral; spectrum colour appears as **light**, not block fills. Banners may flip to a full-bleed field, but the hue still maps to the subject.

| Subject | Hue story | Seen in |
|---|---|---|
| Voice agents, Indus, product core | Indigo ↔ saffron inside shapes; periwinkle glows | quatrefoil glyph orange → indigo, "A Voice Agent with all the little human things" |
| Telephony, numbers, commerce launch | Crimson ↔ warm rose field, cream highlights | "Now give it a Number too" |
| Photo duotone campaigns | **One** hue + cream highlights, keyed to the promise: emerald for "make it easy", saffron or amber for scale and promises | prompt bar over a gateway photo |
| Cost, scale, enterprise, sovereign | Midnight slate → indigo with a peach core glow | "Scale the calls, Not the cost.", "350M Minutes" |
| Webinar, customer story | A soft pastel glow wash in the **partner's** hue, navy text | Equal (mint), HealthPlix (mint), Supernova (violet) |
| Partnership co-brand | The host's photography or scene + a saffron horizon accent; lockup in a glass pill or plain row | Pixxel × Sarvam, Sarvam \| Meta, aws marketplace ◆ sarvam |
| Programme, community | White canvas + a full-**spectrum** object (indigo, rust, rose and leaf arcs in one piece) | Sarvam Circle rings, Sarvam Campus bars |
| Events, "now arriving", big numbers | Full-bleed blue → orange spectrum field with grain | "India's AI Now Arriving", "35 Million" |

Rules:
- One headline colour decision per banner: white on dark or photo, navy (`--sr-indigo-950` / `#1e2033`) on light. Never colour individual headline words. The one exception is the launch-ad move of setting the product noun in a heavier weight (not colour): "give it a **Number** too".
- Meta chips (date, time) take a light tint of the subject hue, Matter 525 at the banner's meta size.
- Red, yellow and pink are accents (glyph coins, badges), never fields, except the crimson launch family, whose whole field is rose.
- In a partnership, the **host's** visual dominates. Sarvam reads through the saffron accent and the wordmark. The separator follows the host's convention (`|`, `·`, `◆`, `×`); Sarvam's own default is ✦ (`foundations/11-logo-usage.md`).

## 3. Surface decision tree
```
Emotional register of the message?
├─ confident, costly, enterprise, "scale / cost"     → dark slate / indigo field + glow core
├─ cinematic promise (satellite, festival, launch)   → real photo (16:9 best) + saffron accent
├─ "make it easy / create something"                 → photo duotone, or white + prompt bar
├─ explain / research / feature                      → white, or a gateway-frame gradient field
├─ webinar, story, community, partner                → soft pastel glow wash (foundations/14)
├─ event or drop teaser                              → full-bleed spectrum field, or glyph confetti on white
└─ statement / programme / diagram                   → neutral white canvas, spectrum in the object
```
The default surface is **neutral light**. Dark and full-bleed fields are earned by the message: at most one dark moment per series, mirroring the web's one dark CTA panel.

## 4. Motif logic (`foundations/07-motifs-and-glyphs.md`)
- **Gateway medallion:** the impact *frame*. At most one per banner, framing ONE idea (a glyph, a face, nothing). If the photo is already an arch or doorway, don't add a vector medallion: the photo is the gateway.
- **Prompt-bar pill:** "you could type this right now". For human-in-the-loop product stories; glass (translucent white with blur) on dark or photo, with a glyph coin at the right end.
- **Phone frame:** app demos. Rebuild the screen in Matter with believable Indian demo data (never a screenshot of a marketing page).
- **Floating UI cards:** B2B workflow proof. One or two stacked cards with checklist ticks and fading ghost duplicates behind. Cards carry *reasons*, not slogans.
- **Glyph coins** (small gradient-filled glyph discs) live *inside* UI chrome and prompt bars, never on empty canvas.
- **Glyph confetti:** colour-depth glyphs (some holding Indic letters) scattered or clustered around a short statement. Teasers and waitlists only ("Last Detail", "Join the waitlist").
- **Dot-matrix waveform:** a row of dots shaped like a voice wave, for voice and speech webinars (`assets` dot tokens `--dot-idle` / `--dot-active`, or white on indigo).
- **Spectrum bars / rings:** growth and programme diagrams, with multi-hue segments in one object and the wordmark in the composition's gap (Sarvam Campus, Sarvam Circle).
- **3D render hero:** one glossy object in a single brand hue (the Champions chess piece). Use real renders only, never stock 3D.
- **Speaker cut-outs:** webinars with people; black-and-white cut-outs with small colour-depth glyphs behind their shoulders, and name and role underneath.
- **Mandala:** a background line wash, **thin (~0.7px) and faint (15–25% white, 5–8% ink)**, paired with a soft glow, never behind busy copy (`foundations/17-mandala-background.md`).

Anti-patterns: two frames on one banner; a medallion plus a photo arch; a glyph coin on empty space; ripples or concentric circles (use the mandala if a line texture is needed).

## 5. Gradient logic (`06-gradients-and-light.md`, `15-glyph-color-depth.md`)
- Gradient is either a **fill inside a silhouette** (glyph colour depth: deep stop → pale stop, 2–3 stops, consistent light direction) or **atmosphere** (aura, soft glow, spectrum field). Never on text, never as a flat rectangle behind UI.
- Glyph depth reads light at the top → deep at the bottom (the white-rim mood for outer depth). Keep stop order consistent with the site.
- Add **grain to every full-bleed field and glow** to stop banding.
- Photo duotone maps shadows to the deep hue stop and highlights to cream, the same discipline as gradient depth.

## 6. Copy moves per family (`foundations/16-copywriting.md`)
Budgets: headline + sub ≤ 12 words on LinkedIn, ≤ 16 on Meta.

| Family | Move | Example |
|---|---|---|
| Impact ad | A contrast pair: what happens when | "Scale the calls, / Not the cost." |
| Product intro ad | A noun triple: one product, many dimensions | "One Voice Agent. / Hindi. English. / Hinglish." |
| Launch ad | Statement + the product noun in a heavier weight | "Your business has a Voice / Now give it a **Number** too" |
| Demo ad | Verb first, with a time promise | "Create your Voice Agent in minutes" |
| Big number | The number, then what it counts | "35 Million / Pages are being digitised on Sarvam Vision" |
| Webinar post | A customer-outcome sentence + date and time chips | "How Equal processes 34 Million Minutes of audio every month with Saaras" |
| Partnership | A lockup, optionally one plain sentence | "In collaboration with Sarvam, Meta is introducing Hindi to Ray-Ban Meta glasses" |
| Programme | The name + one quiet subline | "Sarvam Circle / Our partner programme for companies building" |

Headlines are Season Mix 425/525 in sentence case (the noun-triple and launch moves may use a heavier weight). The saturated archetype may use Matter 600 white ("Knowledge Fabric for Agents"). Wordmark placement is fixed per series: **top-left on landscape and editorial posts, top-centre on statement posts**, bottom-centre on full-bleed field posts. Black on light, white on dark, no colour, and no lockups except sanctioned co-brands.

## 7. Build loop: compose from decisions, not memory
1. **Classify:** ad or post → sub-flavour.
2. **Canvas:** pick it from `formats/social-banners.md` (square, 4:5, 9:16, 1.91:1, 16:9) and adapt with the `--u` scale. Never resize by eye.
3. **Hue story** from §2; **surface** from §3.
4. **One motif hero** from §4, plus **one atmosphere** from §5.
5. **Copy** within the §6 budgets. A CTA only on an ad (plus a cursor where a control is being used).
6. **Check the family:** the build should sit plausibly among the official posts without copying any of them (archetypes A–F in `social-banners.md`).
7. **QA:** text contrast (4.5:1 body, 3:1 headline), readable at a 300px thumbnail, grain on fields, wordmark clear space, nothing in the safe zone, mandala thin and faint.

## 8. Evidence
Distilled from the official posts kept with the project (light demo post, midnight cost and impact ads, the emerald and saffron gateway prompt-bar pair, the crimson telephony launch, Sarvam Circle, Sarvam Campus, Champions Program, the Pixxel, Meta, AWS and HealthPlix partnerships, the Equal, Supernova and HealthPlix webinars, "India's AI Now Arriving", "35 Million", "Happy New Year 2026", "Last Detail", and the Kaze waitlist). Re-derive from the rules; don't trace a post.

## 9. Lessons from review (earlier skill-made banners)
These come from reviewing six banners the skill produced earlier (Diwali model launch in three directions, Unacademy × Sarvam in two, a Diwali greeting). Apply them as rules.

- **No mono micro-labels or kicker lines.** Small Semi Mono caps like "DIWALI 2026", "SARVAM · NEW MODEL", "COLLABORATION · 2026" or a "sarvam.ai" footer made every banner look worse, and none of the official posts use them. A banner is wordmark + headline + sub (+ one CTA on an ad, + a meta line only for a real date or venue). If the context matters, put it in the headline or sub in the banner's own type.
- **One type system per banner.** Every text element is Season Mix (headline) or Matter (sub, meta, CTA). A third voice (mono caps, a different size step that doesn't belong to the `--u` scale) reads as a mismatch.
- **The CTA on an ad must read as the action at thumbnail size:** pill height ≈ 6u (64px at 1080), label ≈ 2.4u. A small 40px pill on a 1080 canvas looks like a UI chip, not an ask.
- **Partner logos are the partner's official artwork,** taken from their site or brand kit (SVG), never their name typeset in Geist or Semi Mono caps. Size the partner mark **optically** against the Sarvam wordmark: same cap-height or visual weight, with the host's separator. A typeset "UNACADEMY" at a smaller size breaks both the lockup and the hierarchy.
- **A gateway frame holds the whole message.** Place the gateway (arch or glow window) so the full text block (lockup, headline, sub) sits inside its white window, with comfortable space above the first line. Text spilling below or beside the window means the gateway is too low; move it up rather than shrinking the copy.
- **Ornament comes from official geometry.** A bottom illustration (the arch tracery on the dark launch banner) should be the official Sarvam mandala, thin and faint, not a newly drawn line ornament.
- **Festive greeting posts get the mandala as the centrepiece.** Use the official mandala centred behind the motif with a **radial** spectrum glow (saffron core into periwinkle or cream), instead of a flat white field around a single glow.
- **Indic script and emoji:** don't add a second-language line with an emoji (for example "शुभ दीपावली! 🪔") as an afterthought. If the post is bilingual, the Indic line gets the same hierarchy as the headline, in a matching Devanagari face, with no emoji. Otherwise leave it out.
