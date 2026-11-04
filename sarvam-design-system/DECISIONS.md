# Decision Guide: which variant to use

Prompts are short ("make a landing page for Voice Agents"). They will not say which badge, icon style or gradient to use. **This file decides.** Read it before building anything, and apply the first row that matches. If two rows match, the more specific one wins.

---

## 1. Icons: flat, solid or depth?
| Context | Style | Size |
|---|---|---|
| Inside a button, nav, menu, tab, input, table row, footer, breadcrumb, code-block header | **Flat stroke** (`assets/icons/`, `currentColor`) | 16–20px |
| Identifies a **product or capability** (TTS, STT, Translation, Parse, Voice Agents) in a tile, feature list, product grid or badge | **Solid**, product hue (`assets/icons-solid/`) | 18–40px |
| Status / verified / done tick in a list | **Solid** check badge (indigo by default; green = success/compliant) | 16–24px |
| A large **illustrative** icon that carries a card or section on its own (use-case card, empty state, "how it works" step, marketing banner) | **Depth**, always periwinkle (`assets/icons-depth/`) | 40px and up |
| Pillar or benefit list ("Sovereign by design…") | **Star bullet** (`assets/motifs/star-bullet-*.svg`), not an icon | 20–24px |
| Hero / emblem / banner focal point | **Gateway glyph** (official or colour-depth), not an icon | 120px and up |

Tie-breakers: **never mix styles in one row or grid**; below 32px never use depth; if the hue would be the only thing telling items apart, use solid.

## 2. Badge, tag or pill?
| You are showing… | Use | Spec |
|---|---|---|
| A **compliance, security or trust claim** (SOC 2, ISO 27001, DPDP, audit trail, data residency, role-based access) | **Compliance badge**: 12px radius, 14px semibold, solid hue icon | `components/content-blocks.md` → Badge |
| The **category** an item belongs to (on an integration, template or blog card) | **Category tag**: pill, 12px, `{hue}-100` bg, `{hue}-800` text, no icon | → Tag |
| A **capability or technology** label (STT, TTS, Python, REST) | **Capability tag**: pill, 12px, grey bg + 1px border, `#666` text | → Tag |
| Date · type meta on a blog or update card ("Oct 27, 2026 · Research") | **Plain text** meta, 13px `--tx-tertiary`, a middle dot. No badge | — |
| A short status ("Live", "New", "Beta") next to a title | **Category tag** in green (live/new) or indigo (beta) | → Tag |
| The hero tagline above an h1 | **Eyebrow** (hairlines + Geist `#666666` text), not a badge | → Eyebrow |

Hue choice for badges and tags follows **meaning**: indigo = security/info/default · green = certified/success/live · orange = data/privacy law · pink = people/access · yellow = audit/logs · red = residency/location.

## 2b. Labels and social proof
| You need… | Use |
|---|---|
| A tag line above the **home** hero h1 | Ornament + hairline **eyebrow** (Geist 400, 13→16px, `#666666`) |
| A label above the logo bar | **Section label** "INDIA BUILDS WITH SARVAM" (Geist 500, 12px caps, #666666) |
| A label above every section | **Nothing.** Section titles stand alone |
| Annotations inside a demo (OUTPUT, CODE SWITCH) | **Micro label** (Semi Mono 10–11px caps, indigo) |
| Customer proof | Real logos from `assets/logos/customers/` + the Tata Capital quote from `FACTS.md`, or drop the section |
| Any number | `FACTS.md`, or rewrite without a number |

## 2c. Page-level decisions
| Question | Answer |
|---|---|
| How many logos in the nav? | **One — Sarvam.** Partner lockups only when explicitly asked, and then in the hero badge or footer (`11-logo-usage.md`) |
| What goes in the hero? | Badge · h1 · sub · 1–2 CTAs. **Nothing else** (`16-copywriting.md` §4) |
| Where do logos, languages, stats and sample cards go? | **Below the first viewport**, never inside the hero |
| How many sections? | 6–8. Every section must have a job; delete repeats |
| Cards unequal in a row? | Bug: use `repeat(n, minmax(0,1fr))` + `align-items:stretch` + `height:100%` |
| Bento or plain grid? | Plain equal grid by default. Bento only for genuinely uneven tiles, max 6 |

## 3. Buttons
| Situation | Button |
|---|---|
| The one main action in a view | **Primary** slate pill + cursor glow |
| The hero's CTA pair | **Hero dark** (Season Mix) + **hero light** |
| Second action beside a primary | **Secondary** (`#f5f5f5`) |
| "Explore X →", "View all", in-section links | **Outline** with arrow |
| Play / record / generate in a demo | Primary + leading solid icon + cursor glow, inside the **audio player pill** if there is audio |
| Inside a dark panel | **On-dark** white pill |
| Copy code | **Copy button** (ghost → grey → "Copied") |
| Switching views of the same data (languages, metrics, code languages) | **Segmented control**, not buttons |
At most **one primary per view**. Every dark button gets the cursor glow.

## 4. Cards
| Content | Card |
|---|---|
| Product or capability with an icon, title and one line | **Feature card** (white, 1px border, solid icon) |
| A set of use cases or benefits that should feel soft and branded | **Glow card** (white + soft-glow surface, one hue per card, rotate contours) |
| Partner, integration, template or connector | **Integration card** (tinted logo well + tags) |
| Mission / "why us" with a visual | **Illustrated card** (scalloped horizon + monogram) + pillar list |
| Customer quote | **Testimonial card** |
| Numbers on a product page | **Stats band** (full-bleed indigo, white numbers) |
| Numbers elsewhere | **Stats row**, not cards |

## 5. Gradients and backgrounds
| Where | Use |
|---|---|
| Page hero | **Hero aura** (06 §1) |
| Card or tile background | **Soft glow** (14) |
| Full-bleed banner | **Spectrum field / gateway frame / glow gateway** per archetype (`formats/social-banners.md`) |
| Colour inside a glyph or emblem | **Colour depth** (15) |
| Pre-footer CTA | **CTA panel** (`--grad-cta-panel`, radius 24px, slate button), once per page |
| Product / API page hero | **Plain `--sf`**, centred, no aura |
| Everything else | **Plain `#fcfcfc`**, no gradient |
At most 2 aura moments and 1 dark section per page.

## 6. Hue by subject
When the prompt names a product, take its hue for solid icons, tag tints, glows and glyphs:
TTS / Voice / Bulbul → **indigo-periwinkle** · STT / Saaras → **coral** · Translation → **saffron** · Parse / Document AI → **pink** · Sovereign / startups / infra → **green** · Community / Champions → **deep indigo** · Events → **full spectrum**. Unnamed or general → **indigo + saffron** (the brand spectrum).

## 7. When something is still ambiguous
Choose the **quieter option** (flat over solid, tag over badge, plain over gradient), and note the assumption in your reply. Sarvam's default register is calm.
