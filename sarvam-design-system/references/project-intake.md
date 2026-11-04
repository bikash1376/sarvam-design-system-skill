# Reference · Project intake (ask before you build a website)

Before you write any code for a **website, landing page, microsite or web UI**, ask the user a few multiple-choice questions. The answers decide the stack, how many pages to build, which sections to include and which hero layout to use. Ask once, up front, then build without asking again.

Banners, SVGs and single illustrations skip this. They have no stack or sections to choose, and they stay as HTML rendered with `scripts/render.js`.

Web pages are **always** built in one of the three framework stacks below. No vanilla single-file HTML pages.

## How to ask
- **Claude Code:** use the `AskUserQuestion` tool. Send one call with up to **4 questions** and **2–4 options** each. Put the recommended option first and add "(Recommended)" to its label. The tool adds an "Other" choice automatically, so don't add one. Use `multiSelect: true` for sections.
- **Other agents or chat:** post the same questions as a numbered list with lettered options, for example `1a 2c 3b 4a,c`, and say "reply `defaults` to accept the recommended picks."
- **Skip any question the prompt already answers.** For example, "build a Next.js page for Bulbul" already decides the stack, and the product hints at the audience. If every question is answered, don't ask at all.
- **If the user says "just build it", or the run is non-interactive,** use the defaults below and list them in one line at the top of your reply.
- Don't ask about things the skill already decides: colours, fonts, buttons, cards, gradients. `DECISIONS.md` covers those.

## Round 1: always (one call, 4 questions)

**Q1 · Stack:** "Which stack should I build this in?" (header: `Stack`)
| Option | When |
|---|---|
| **React + Vite + Tailwind + Lenis + Motion (Recommended)** | Default. Marketing or landing pages and microsites. Fast, client-rendered, with smooth scrolling. |
| Next.js + Tailwind + Motion | Needs SEO-heavy routing, many pages, server data or an API route. Add Lenis if smooth scrolling is wanted. |
| Astro + Tailwind + Motion | Mostly static content or docs-like pages that should ship near-zero JS. React islands handle Motion. |

**Q2 · Pages:** "What should I build?" (header: `Pages`)
| Option | Builds |
|---|---|
| **Single landing page (Recommended)** | One page with 6–8 sections. |
| Landing + 1 product page | Home plus one product, for example Bulbul or Saaras. |
| Multi-page site | Home, Product, Pricing/API and About. Prefer Next.js or Astro for this. |
| Developer / docs page | Docs Left hero, code blocks and quickstart. |

**Q3 · Audience:** "Who is this mainly for?" (header: `Audience`). This picks the hero via `formats/hero-layouts.md`.
| Option | Leads to |
|---|---|
| **Developers (Recommended for API/model products)** | Prompt Bar, Demo Stage or Docs Left hero |
| Enterprise / business buyers | Aura Statement, Benchmark or Editorial Split |
| Individuals / consumers | Visual Top or Aura Statement |
| Government / researchers / community | Manifesto or Gateway Frame |

**Q4 · Sections:** "Which sections should the page include? The nav, hero and footer are always there." (header: `Sections`, `multiSelect: true`)
| Option | Sections |
|---|---|
| Product demo / playground | Live demo frame, composer and language switch |
| Features + how it works | Feature cards or a numbered stepper |
| Proof | Customer logos, stats row, testimonial |
| Developer + CTA | Code block, integrations, pricing/API, dark CTA panel |

If the user picks nothing, use **Features + Proof + Developer/CTA**. Keep the page to 6–8 sections. This is a menu, not a checklist (`formats/web-pages.md`).

## Round 2: only if needed (max 1 more call)
Ask only the questions that Round 1 and the prompt left open and that actually change the build:
- **Co-branding:** "Is this a partner or co-branded page?" Options: No, Sarvam only (Recommended) / Yes, Sarvam hosts / Yes, Sarvam is the guest. See `foundations/11-logo-usage.md`.
- **Languages:** "Show Indic scripts in the page?" Options: Yes, in the hero or demo (Recommended) / Only in the language section / English only.
- **Delivery:** "How should I deliver it?" Options: Local project + screenshots at 375/768/1440 (Recommended) / Also deploy (Netlify/Vercel) / Code only.
- **Real content:** "Do you have copy, logos or photos to use?" Options: Use FACTS.md + skill assets (Recommended) / I'll provide them. **Never invent facts.** See `FACTS.md`.

## After the answers
1. Write one line confirming the plan: stack · pages · audience → hero layout · sections.
2. Set up the stack with `references/stack-setup.md`.
3. Continue the normal workflow: copy first (`foundations/16-copywriting.md`), then layout, render and QA.
