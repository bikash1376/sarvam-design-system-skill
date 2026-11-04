# Format · Hero Layouts

> **What should the first screen look like, and why?** Maps audience (individuals, developers, enterprise, government, researchers, community) and brand relationship (master brand → product → programme → collaboration → sub-brand → subsidiary) to one of 10 named hero layouts.
>
> Read with `tokens/tokens.css`, `DECISIONS.md`, `FACTS.md`, `foundations/12-anti-slop.md`, `foundations/16-copywriting.md` (hero budget) and `foundations/11-logo-usage.md` (lockups). The hero budget wins over any layout here: badge · h1 · sub · 1–2 CTAs, nothing else in the first viewport.
>
> **Source key.** `[skill]` = already a rule in this skill. Everything else is a recommendation built on standard landing-page and brand-architecture practice. If they conflict, `[skill]` wins. Also installed standalone as the `sarvam-hero-layouts` skill; that copy defers to this file.

---

## 1. Decide in three steps

```
STEP 1  Who hosts the page / whose name is the headline about?  → Brand tier (§4)
        Tier decides: whose design system leads, lockup, how loud the gradient is.

STEP 2  Who is it for, and what must they get in 5 seconds?     → Audience (§3)
        Audience decides: which hero layout (§2).

STEP 3  What proves the promise?                                → The "visual" (§2.0)
        Visual's shape decides placement: wide → below · tall/square → side · mood → behind.
```

Then check the layout's mobile stack (§5) and the pitfalls (§7).

---

## 2. The 10 hero layouts

Each layout has a **name** (use the name, never a letter) and a wireframe.
Legend: `━━━` headline · `───` body copy · `[btn]` CTA · `░░░` aura/gradient · `▓▓▓` visual

### 2.0 What "visual" means on a Sarvam page
sarvam.ai uses almost no photography. The visual is one of:

| Visual | Shape | Proves |
|---|---|---|
| **Aura / spectrum field** (`--grad-*`, 06 §1–2) | full-bleed, behind | brand, mood, "two worlds meeting" |
| **Gateway glyph / gateway frame** (`assets/glyphs/`) | square / arch | identity, ceremony |
| **Live demo** (audio pill, dot-matrix, language switch, transcript) | wide | product quality, instantly |
| **Code / playground** | wide | developer ease |
| **Product UI** (agent console, app screen) | wide or phone-tall | real product |
| **Benchmark chart** (FACTS numbers only) | wide | model quality |
| **Real photography** | any | people, events, careers only |

---

### ① Aura Statement — centred text, gradient light behind
```
┌────────────────────────────────────────┐
│ logo                       nav  [btn]  │
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░░░░  ◇ EYEBROW  ░░░░░░░░░░░░░░░░│
│░░░░░░░░  ━━━━━━━━━━━━━━━━━━━  ░░░░░░░░░│
│░░░░░░░░░░░  ─────────────  ░░░░░░░░░░░░│
│░░░░░░░░░░░  [btn]  [btn]  ░░░░░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
└────────────────────────────────────────┘
```
- **Use for:** master-brand home, brand pages, sovereign / government pages, joint launches with government. `[skill]` Home = centred + hero aura + ornament eyebrow (Geist, `#666666`).
- **Why:** sells a belief, not a feature. Calm, formal, few elements; the gradient carries meaning without imagery.
- **Visual:** aura only. Keep text over the cream/light part of the field.
- **Avoid when:** the product needs to be seen to be believed (use Demo Stage).

### ② Demo Stage — centred text, demo / product below
```
┌────────────────────────────────────────┐
│ logo                       nav  [btn]  │
│           ━━━━━━━━━━━━━━━━━            │
│             ─────────────              │
│            [btn]   [btn]               │
│  ┌──────────────────────────────────┐  │
│  │▓▓▓▓▓▓▓ live demo / product ▓▓▓▓▓▓│  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
```
- **Use for:** product & API pages (Bulbul V4, Saaras V4, Sarvam Translate), consumer pages, co-branded launch pages. `[skill]` Product/API = centred, plain `--sf`, ornament only.
- **Why:** short promise → instant proof. Survives mobile best. **The Sarvam default.**
- **Visual:** wide (16:9 or wider) demo or UI. Top edge of it should peek above the fold at 1366×768.
- **Rule:** headline ≤ ~8 words; body ≤ 2 lines centred.

### ③ Prompt Bar — headline plus a live input
```
┌────────────────────────────────────────┐
│ logo                       nav  [btn]  │
│           ━━━━━━━━━━━━━━━━━            │
│             ─────────────              │
│   ┌────────────────────────────[→]┐    │
│   │ Ask anything, in any language │    │
│   └───────────────────────────────┘    │
│     chip  chip  chip  chip  (langs)    │
└────────────────────────────────────────┘
```
- **Use for:** individuals / consumer apps (Indus-style), learner pages.
- **Why:** trying it *is* the pitch. Minimal reading, thumb-friendly, mobile-first.
- **Visual:** the input itself, with Indic-script placeholder text and language chips (≤ 6; more is a chip row below the fold).
- **Rule:** input must work or open a real demo; never a fake box. Placeholder cycles through scripts (respect reduced motion).

### ④ Docs Left — left-aligned text, code / playground below
```
┌────────────────────────────────────────┐
│ logo                       nav  [btn]  │
│ ◇ EYEBROW                              │
│ ━━━━━━━━━━━━━━━━━━━━                   │
│ ──────────────────                     │
│ [Get API key] [Read docs]              │
│ ┌──────────────────────────────────┐   │
│ │▓▓ code block / playground ▓▓▓▓▓▓▓│   │
│ └──────────────────────────────────┘   │
└────────────────────────────────────────┘
```
- **Use for:** developer docs, quickstarts, API reference landings, SDK pages.
- **Why:** reads like documentation; developers scan the left edge (F-pattern). Fits longer headlines.
- **Visual:** real, copyable code with copy button (`components/interactive.md`).
- **Rule:** keep section headings left-aligned below it too, or the page feels inconsistent.

### ⑤ Editorial Split — headline left, body + CTAs right, visual below
```
┌────────────────────────────────────────┐
│ logo                       nav  [btn]  │
│ ━━━━━━━━━━━━━━━━         ───────────── │
│ ━━━━━━━━━━━              ───────────── │
│                          [btn]  [btn]  │
│ ┌──────────────────────────────────┐   │
│ │▓▓▓▓ agent console / product UI ▓▓│   │
│ └──────────────────────────────────┘   │
│  logo  logo  logo  logo  logo (bar)    │
└────────────────────────────────────────┘
```
- **Use for:** enterprise solution pages (Sarvam Voice Agents for banks, contact centres), case studies, partner pages hosted by Sarvam.
- **Why:** room for a serious, longer headline + two CTAs (talk to sales / see docs). Reads premium. Logo bar (real logos from `assets/logos/customers/` only) right beneath the split — below the fold, per the hero budget.
- **Rule:** only at ≥1024px. Below that it becomes Docs Left (§5).

### ⑥ Gateway Frame — headline set inside a cusped arch
```
┌────────────────────────────────────────┐
│ logo                       nav  [btn]  │
│            ╭─╮╭──────╮╭─╮              │
│           ╭╯░░░░░░░░░░░░╰╮             │
│           │░ ━━━━━━━━━━ ░│             │
│           │░  ────────  ░│             │
│           │░   [btn]    ░│             │
│           ╰──────────────╯             │
└────────────────────────────────────────┘
```
- **Use for:** campaigns, launches, festive moments, programmes (Champions, Epoch), joint launch microsites.
- **Why:** the most distinctively Sarvam layout; memorable. `[skill]` Campaign = centred or archetype-led, spectrum field; gateway is the core motif.
- **Visual:** gateway glow (archetype E) or spectrum fill inside the arch.
- **Avoid when:** used on every page — it stops feeling special. Never on docs.

### ⑦ Manifesto — very large type, no visual
```
┌────────────────────────────────────────┐
│ logo                       nav  [btn]  │
│                                        │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━            │
│  ━━━━━━━━━━━━━━━━━━━                   │
│  ───────────          [btn]            │
└────────────────────────────────────────┘
```
- **Use for:** sovereign-AI / policy statements, research essays, press announcements, mission pages.
- **Why:** "we mean this." Absence of visuals reads serious, not salesy.
- **Rule:** Season Mix 425 at display size, tight leading, sentence case `[skill]`. One CTA, low key. Optional faint aura in one corner.

### ⑧ Benchmark — left text, evidence chart below
```
┌────────────────────────────────────────┐
│ logo                       nav  [btn]  │
│ MODEL LAUNCH                           │
│ ━━━━━━━━━━━━━━━━━━━━                   │
│ ──────────────  [Try] [Model card]     │
│ ┌──────────────────────────────────┐   │
│ │ ▇▇▇▇▇▇▇▇  ▇▇▇▇▇  ▇▇▇▇▇▇▇   chart │   │
│ └──────────────────────────────────┘   │
└────────────────────────────────────────┘
```
- **Use for:** model launches (Sarvam 105B etc.), research results.
- **Why:** researchers want evidence first.
- **Rule:** every number from `FACTS.md`, with source/eval named. No number → use Manifesto instead.

### ⑨ Visual Top — full-width visual, text below
```
┌────────────────────────────────────────┐
│ logo                       nav  [btn]  │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓ key visual / team photo ▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│           ━━━━━━━━━━━━━━━━━            │
│             ─────────────              │
│            [btn]   [btn]               │
└────────────────────────────────────────┘
```
- **Use for:** events, careers, community stories. The only place real photography leads.
- **Why:** the visual is the hook; conversion is secondary.
- **Avoid when:** the page must convert — CTA falls below the fold.

### ⑩ Side Visual — text left, visual right  ⚠ restricted
```
┌────────────────────────────────────────┐
│ logo                       nav  [btn]  │
│ ━━━━━━━━━━━━━━        ┌────────────┐   │
│ ─────────────         │▓▓▓▓▓▓▓▓▓▓▓▓│   │
│ ─────────────         │▓▓ glyph ▓▓▓│   │
│ [btn]  [btn]          │▓▓▓▓▓▓▓▓▓▓▓▓│   │
│                       └────────────┘   │
└────────────────────────────────────────┘
```
- `[skill]` **Never** with a demo card beside the headline on Sarvam pages.
- **Allowed only:** tier 4c / 5 / 6 pages (partner-hosted, sub-brand, subsidiary) where the host's system uses it, or with gateway-glyph art (not a demo) on partner/campaign pages.
- **Why restricted:** crowds the hero, generic SaaS look, not a Sarvam pattern.

---

## 3. Audience → layout

| Audience | Needs in 5 seconds | First choice | Second choice | Never |
|---|---|---|---|---|
| **Individuals** (consumers, learners) | "It speaks my language", try it | Prompt Bar | Demo Stage | Manifesto, Benchmark |
| **Developers** | "I can call it in minutes, and it's good" | Docs Left | Demo Stage | Visual Top |
| **Enterprise** (BFSI, telecom, support) | Outcomes, deployment (Cloud/VPC/On-prem), credibility | Editorial Split | Demo Stage | Prompt Bar |
| **Government / public sector** | Sovereignty, population scale, trust, inclusion | Aura Statement | Manifesto | Side Visual, loud Gateway Frame |
| **Researchers / press** | What's new, the evidence | Benchmark | Manifesto | Prompt Bar |
| **Community / events / careers** | Belonging, energy, people | Gateway Frame | Visual Top | Docs Left |

**Mixed audience?** Choose for the *primary* buyer of that page; serve the others in section 2–3 (e.g. enterprise page → developer bento lower down).

### Message type shortcut
- Selling a **belief** → Aura Statement / Manifesto
- Selling something you can **try** → Prompt Bar / Demo Stage / Docs Left
- Selling an **outcome** → Editorial Split
- Celebrating a **moment** → Gateway Frame / Benchmark / Visual Top

### Formality rule
The more formal the audience, the **fewer** elements in the hero.
Government ≤ 4 elements — and it stays inside the hero budget: badge, headline, one line, one CTA `[skill 16-copywriting §4]`. Developers may have the busiest hero.

---

## 4. Brand tier → whose system leads

| Tier | Relationship | Example | System that leads | Lockup | Allowed layouts | Gradient level |
|---|---|---|---|---|---|---|
| **1** | Master brand | sarvam.ai home, brand, sovereign | Sarvam, fully | Wordmark alone | Aura Statement, Manifesto | Full indigo→saffron aura |
| **2** | Product | Bulbul V4, Saaras V4, Indus, Sarvam Voice Agents | Sarvam, fully | `sarvam │ [glyph] VOICE AGENTS` `[skill]` | Demo Stage, Prompt Bar, Docs Left, Editorial Split | Plain `--sf` hero `[skill]`; product hue only inside the demo |
| **3** | Programme / initiative | Sarvam Champions, Startup Program, Epoch | Sarvam, campaign variant | Wordmark + programme name (Champions may use deep-indigo wordmark `[skill]`) | Gateway Frame, Visual Top | Programme hue: deep indigo (community), green (startups) `[skill]` |
| **4a** | Collaboration, on Sarvam's site | Case study, integration page | Sarvam | Partner logo in integration card `[skill]` | Editorial Split | Neutral |
| **4b** | Joint launch, neutral ground | Co-branded microsite (e.g. Unacademy × Sarvam) | Agreed owner; default Sarvam tokens | `Partner × sarvam` / `sarvam · PARTNER`, both logos untouched `[skill]` | Demo Stage, Gateway Frame, Prompt Bar | One spectrum moment; partner colour only in its logo |
| **4c** | Partner's site, "powered by Sarvam" | Partner feature page | **Partner** | Small "Powered by Sarvam AI" + wordmark near the feature `[skill phrasing]` | Partner's own hero (Side Visual allowed) | Partner palette; Sarvam spectrum only inside the AI feature, if at all |
| **4d** | Government collaboration | Public-sector programme | Formal; approval needed | Emblem **above** Sarvam wordmark, vertical `[skill]` | Aura Statement, Manifesto | Soft aura, high contrast, bilingual |
| **5** | Sub-brand (endorsed) | "X by Sarvam" | Shared core + own personality | Sub-brand name, "by sarvam" endorsement | One signature layout, chosen once, kept forever | Own accent hue on Sarvam base; own gateway-glyph variant |
| **6** | Subsidiary | Separate company / market arm | **Its own identity** | Own logo; "A Sarvam company" in footer only | Any — follows its audience, not Sarvam's centred rule | Own palette; shared DNA = typeface or gateway geometry at most |

### What is fixed vs flexible down the tiers
- **Always fixed (all tiers):** Sarvam wordmark never recoloured, gradient-filled, effected or fused with the logomark; partner logos never redrawn or recoloured; no invented numbers, quotes, customers.
- **Fixed for tiers 1–3:** Season Mix + Matter, centred heroes, 16px cards, pill buttons, indigo→saffron as lead colour, `[skill]` anti-slop rules.
- **Flexes from tier 4:** hue, hero layout (audience-led), gradient loudness.
- **Tier 6:** only DNA travels — someone who knows Sarvam senses the family; a newcomer sees a separate brand.

**One logo in the nav at every tier** `[skill]`: the nav carries exactly one brand mark. At tier 1–3 that is the Sarvam wordmark; at 4b the master logo (the co-branded lockup `Partner × sarvam` lives in the hero badge, not the nav); at 4c/5/6 it is the host's own mark. A second logo never appears beside the first.

### Three-question test for any new page
1. Who owns the domain? → their system leads.
2. Whose name is the headline about? Sarvam's → tiers 1–3. Partner's / sub-brand's → 4c–6, they lead, Sarvam endorses.
3. Then pick the layout from the audience (§3).

---

## 5. Responsive behaviour (360 · 768 · 1024 · 1440)

Every layout becomes a vertical stack on phones. The decision is the **order** and what gets dropped.

| Layout | 360 (phone) | 768 (tablet) | 1024 | 1440 |
|---|---|---|---|---|
| Aura Statement | Centred stack; aura shrinks to top 60%; CTAs full-width stacked | CTAs inline | as desktop | h1 64–72px, 1–2 lines |
| Demo Stage | Text → demo; demo simplified (fewer controls, 1:1 stage) | Demo 16:9 | Demo peeks above fold | Floating accent cards allowed ≥1280 only if no overlap `[skill]` — none inside the hero; proof below the fold |
| Prompt Bar | Input full-width, sticky-ish; chips scroll horizontally | Chips wrap | as desktop | Input max ~720px |
| Docs Left | Text → code; code scrolls horizontally inside its box (never the page) | as phone | Code beside tabs | as 1024 |
| Editorial Split | **= Docs Left** (headline, body, CTAs, visual) | **= Docs Left** | Split appears | Split, 7/5 columns |
| Gateway Frame | Arch becomes tall/narrow or drops to a top-arch only; text never clipped by arch | Arch scales | as desktop | as desktop |
| Manifesto | h1 44px, 3–4 lines max; trim copy rather than shrink further | 56–64px | as desktop | up to 88px |
| Benchmark | Text → chart; chart becomes horizontal bars | Chart 2-col | as desktop | as desktop |
| Visual Top | Visual 4:3 crop with safe focal point → text | 16:9 | as desktop | Max height ~60vh |
| Side Visual | **Text first → visual**, unless the visual *is* the product | Stack or 60/40 | 50/50 | 50/50 |

`[skill]` Containers: 88% <768 → 83.33% ≥768 → max 1400. Hero h1: 44 / 64 / 64–72px. Section gap 96 → 128px.
CTA rule: primary CTA visible without scrolling at 1366×768 and 360×740.

---

## 6. Gradient by audience

| Context | Gradient |
|---|---|
| Government, master brand | One soft aura, full spectrum, dignified |
| Product / API | None in hero `[skill]`; product hue inside the demo only |
| Enterprise | Mostly neutral; save the one dark moment for the CTA panel `[skill]` |
| Consumer / learner | Light aura or spectrum chips around the prompt; warmer saffron side |
| Campaigns, events, programmes | Full spectrum field or gateway glow — the brand at its loudest |
| Partner-hosted (4c) | Partner palette; Sarvam spectrum only as an accent in the AI feature |

`[skill]` Max two aura moments per page; colour comes as light, never flat brand-colour blocks.

---

## 7. Pitfalls checklist

- [ ] Layout named and justified by **tier + audience**, not taste.
- [ ] Centred headline ≤ ~8 words; longer → left-aligned layout.
- [ ] Wide visual → below; tall/square → side (only where allowed); mood → behind.
- [ ] Text over gradient passes WCAG AA (check the darkest/most saturated point under the text).
- [ ] No demo card beside the headline on tiers 1–3 `[skill]`.
- [ ] Hero holds four things: badge · h1 · sub · 1–2 CTAs — no floating cards, chip clouds, logo bars or disclaimers in the first viewport `[skill]`.
- [ ] Alignment of the hero carries through section headings (left hero → left headings).
- [ ] Primary CTA above the fold at 1366×768 and 360×740.
- [ ] Mobile order is deliberate (§5), no horizontal page scroll.
- [ ] Logos: correct lockup for the tier; **one logo in the nav**; partner logos untouched; wordmark black/white only.
- [ ] Numbers only from `FACTS.md` (Benchmark layout especially); no `[VERIFY]` chips, no meta-annotations `[skill]`.
- [ ] Gateway Frame / Visual Top not reused on every page of a site.

---

## 8. Mapping from generic wireframe names

| Generic name | This format |
|---|---|
| Image on the right | Side Visual ⚠ |
| Image in the background | Aura Statement (gradient, not photo) |
| Image at the bottom, text centred | Demo Stage |
| Image on top | Visual Top |
| Text left-aligned, image bottom | Docs Left (or Benchmark) |
| Text distributed, image bottom | Editorial Split |
| — (new) | Prompt Bar · Gateway Frame · Manifesto |

---

## 9. Worked examples

| Page | Tier | Audience | Layout | Why |
|---|---|---|---|---|
| sarvam.ai home | 1 | Mixed, led by enterprise + govt | Aura Statement | Belief first: sovereign AI platform |
| Bulbul V4 product page | 2 | Developers + product teams | Demo Stage | Hearing the voice is the proof |
| API quickstart | 2 | Developers | Docs Left | Code is the proof |
| Voice Agents for banking | 2 | Enterprise | Editorial Split | Outcome + two CTAs + logos |
| Sovereign AI statement | 1 | Govt, press | Manifesto | Serious, no sales feel |
| Model launch | 2 | Researchers | Benchmark | Evidence first (FACTS only) |
| Sarvam Champions | 3 | Community | Gateway Frame | Moment + belonging |
| Unacademy × Sarvam microsite | 4b | Learners | Demo Stage → Prompt Bar upgrade | Learners must *see/hear* their language |
| Same feature on unacademy.com | 4c | Learners | Unacademy's own hero | Partner domain leads; "Powered by Sarvam" |
| Public-sector programme | 4d | Govt + citizens | Aura Statement | Formal, emblem above wordmark, bilingual |
| "X by Sarvam" sub-brand | 5 | Its audience | One signature layout | Consistency builds the sub-brand |
| Subsidiary site | 6 | Its market | Audience-led | Own identity; Sarvam in footer only |
