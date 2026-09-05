# Claude Code Brief — Von Newman Technology Consultants

Rebuild the existing static HTML/CSS marketing site as a production Next.js App Router application, and redesign it to enterprise-consultancy standard. Every word, number, link and asset on the current site is content the client signed off on — it all survives. What changes is the stack, the structure, and the visual language.

---

## Setup — do this before opening Claude Code

*(This section is for the human. Claude Code can skip to section 0.)*

### Step 1 — Build the project folder

Create the folder you'll work in and put the original template inside it. If the template arrived as a zip, unpack it here — Claude Code has to be able to read every HTML file, the stylesheet and `/assets`, or the content inventory in section 0 is worthless.

```
von-newman/
  ├─ index.html          ← the original template
  ├─ styles.css          ← the original stylesheet
  ├─ assets/             ← all original images
  └─ BUILD.md            ← this file
```

### Step 2 — Install the frontend-design skill

Anthropic publishes an official `frontend-design` skill for producing distinctive interfaces that don't read as generic AI output. Skills in Claude Code are filesystem-based — no upload, no API key. Project skills live in `.claude/skills/`, personal ones in `~/.claude/skills/`. Install it into the project so it travels with the repo:

```bash
# from inside von-newman/
git clone --depth 1 https://github.com/anthropics/skills.git /tmp/anthropic-skills
mkdir -p .claude/skills
cp -r /tmp/anthropic-skills/skills/frontend-design .claude/skills/
rm -rf /tmp/anthropic-skills
```

Verify it landed:

```bash
ls .claude/skills/frontend-design/SKILL.md
```

Avoid installing this via the plugin marketplace. There's a known issue where the Anthropic skills plugin loads all 17 skills in the repo instead of the declared subset, costing roughly 50k tokens of context on definitions this project will never use. On a build this long you want that context spent on code.

Optional second skill: `webapp-testing` from the same repo, if you want Claude Code driving a browser to screenshot and critique its own output during the design passes.

```bash
cp -r /tmp/anthropic-skills/skills/webapp-testing .claude/skills/
```

### Step 3 — Start the session

```bash
cd von-newman
claude
```

Skills are discovered at startup, so install before launching, not after. Confirm with:

```
what skills do I have?
```

You should see `frontend-design` listed.

### Step 4 — Open with this

> Read BUILD.md in full. Follow it exactly. Start with section 0 only — produce the content inventory and the design plan, then stop and wait for my approval. Do not scaffold anything yet.

### Step 5 — Hold the phase gates

The brief defines eight phases with two mandatory stops: after the content inventory and design plan, and again after the header, hero and products are built. Those stops are the point. If you let it run straight through, a wrong design direction gets baked into twelve sections before you see it.

When it hands you the design plan, read it against section 4 yourself. If the palette is a cream background with a terracotta accent, or the type is Inter, send it back — that's the default, not a decision.

### Step 6 — Version control

`git init` and commit at each phase boundary. Long agentic builds are much easier to recover when you can roll back to the last checkpoint rather than the last message.

---

## 0. Before you write any code

Read the entire source template first — every HTML file, the full stylesheet, and the contents of `/assets`. Then produce two artefacts for my approval **before touching the implementation**:

1. **Content inventory** — a checklist of every section, every heading, every stat, every list item, every link (internal anchor and external), every image, and every form field, in source order. This is the contract. At the end of the build you will walk this list again and confirm nothing was lost or reworded.
2. **Design plan** — see section 4. Short, opinionated, with a token table and ASCII wireframes for the hero and two other sections.

Stop after these two and wait. Do not start scaffolding until I've responded.

---

## 1. Target stack

- Next.js (latest stable) — **App Router**, `/app` directory, TypeScript strict mode
- React Server Components by default. `"use client"` only where interactivity genuinely requires it (mobile nav, sector tabs, the two city clocks, the contact form). Every client component should be a leaf, not a wrapper around static content.
- Tailwind CSS v4 with a design-token layer in `@theme`. No inline hex values in components — tokens only.
- `next/font` with `display: "swap"` for self-hosted fonts. No render-blocking font CDN links.
- `next/image` for every image, with real `width`/`height`, `sizes`, and `priority` only on the hero.
- ESLint + Prettier + `typescript-eslint`. Zero errors and zero `any` at the end.
- No component library, no shadcn, no Framer Motion unless a specific interaction genuinely needs it and you justify it. Hand-built components.

Single-page site with anchor navigation is the current architecture — **keep it**, because every nav item, footer link and CTA points at a fragment (`#atlas`, `#sonar`, `#services`, `#sectors`, `#approach`, `#company`, `#contact`, `#difference`, `#products`, `#team`, `#top`). Those anchors must all still resolve. Use `scroll-margin-top` on section targets so the sticky header doesn't cover headings on jump.

---

## 2. Project structure

```
app/
  layout.tsx            root layout, fonts, metadata, JSON-LD
  page.tsx              composes sections in source order
  globals.css           @theme tokens, base layer, nothing else
  opengraph-image.tsx   generated OG card
components/
  layout/               SiteHeader, SiteFooter, MobileNav, MegaMenu
  sections/             Hero, Difference, Products, Atlas, Sonar, Approach,
                        Services, Sectors, FinancialServices, Locations,
                        Team, Contact
  ui/                   primitives only: Button, Stat, Eyebrow, Section, Field…
lib/
  content/              typed content modules (one per section)
  actions/              contact server action
  utils/                cn(), formatters
types/
public/assets/          images carried over, converted and optimised
```

**Content lives in typed data modules, not JSX.** Services, practice areas, team members, sector cards, approach stages, product feature lists, stats, and the form's select options are all arrays with exported types. A section component maps over its data. This is the single biggest maintainability win over the source template and it makes the "nothing was lost" check mechanical.

Example shape:

```ts
export type Practice = {
  slug: string;
  title: string;
  description: string;
};

export const practices: Practice[] = [ /* all eight, verbatim */ ];
```

---

## 3. Content that must survive verbatim

Do not rewrite, shorten, "improve" or regenerate any of this copy. Fix a typo if you find a real one and tell me. Otherwise it moves across character for character.

**Navigation** — Products (with Atlas / Sonar / Custom builds submenu), Services, Sectors, How we work, Company, Sign in (Atlas sign-in + Sonar console request), Talk to us.

**Hero** — "Lagos and London · Public and private sector" locator, the headline "Technology adapted to you. Never off the shelf.", the supporting paragraph, both CTAs, the three trust points (two in-house platforms / eight practice areas / delivered for HP and LexisNexis), and both product screenshots with their captions (Atlas · 109+ courses, Sonar · every asset, one view).

**Difference** — the "We solve problems. We don't paper over them." heading, intro paragraph, four cards (custom-built for every client; public and private sector equally; deep market experience; a consultancy that builds its own products), and the five stats: 2 markets, 8 practice areas, 2 in-house products, 109+ courses, 90 days.

**Atlas** — positioning line, description, the three stats (25 pathways, 109+ courses, NG localised), all six feature bullets with their bold lead-ins, all three links (Visit Atlas, Sign in, Browse the catalogue), the "Live" badge and screenshot.

**Sonar** — positioning line, description, all six feature bullets, both CTAs, the seven-platform list (AWS, Azure, Google Cloud, VMware, Nutanix, Kubernetes, bare metal), the "Cloud inventory" badge and screenshot.

**Approach** — four stages in order (Discover, Adapt, Embed, Evolve) with full descriptions, the pull-quote about not raising a ticket with a vendor, and the four ownership-advantage points.

**Services** — all eight practice areas with full descriptions, plus the two panels: "How we engage" (fixed scope, managed service, licensing, team augmentation) and "Delivery standards" (Agile and CI/CD, DevSecOps, WCAG, PRINCE2).

**Sectors** — the public/private tabbed switcher with both headings, both paragraphs, both CTAs, and all eight cards with their Atlas / Software / Sonar / Delivery tags.

**Financial services** — the four People / Infrastructure / Cost / Trust blocks, the three-phase timeline (weeks 1–4, 5–10, 11–13), and the closing partnership-inclusions line.

**Locations** — Lagos HQ and UK delivery blocks with full addresses, plus the two live local-time clocks (currently rendering as `--:--`; implement properly — see section 6).

**Team** — all six people with exact name, exact title and their photo: Wilfred Babatope Achom (Managing Director, CEO and Founder), Vijay Gadhia (Director, Infrastructure and LMS), Kate Welling (Director, Architecture and AI), Oyinloluwa Bolarinwa (Lead UI/UX Designer), Abdulrasaq Oladapo (Team Lead and Software Developer), Victor Aderibigbe (Lead Frontend Developer). Plus the closing bench paragraph.

**Contact** — email `info@vonnewmanconsulting.com.ng`, phone `+234 902 953 4228` (keep the `tel:` link), the Lekki address, the company line "Von Newman Technology Consultants Ltd · RC 8840592, Nigeria", and the form with all its fields and every option in both selects.

**Footer** — the descriptor paragraph, all four link columns exactly as grouped, the copyright line, RC number, Lagos · London, the two legal links, and the tagline.

---

## 4. Design direction

**A `frontend-design` skill is installed at `.claude/skills/frontend-design`. Load it and apply it when producing the design plan, and keep applying it through every section you build.** Where it and this brief disagree, this brief wins — it is specific to this client.

The brief in one line: **an enterprise technology consultancy that sells to Nigerian bank executives, ministry permanent secretaries and UK public-sector programme leads.** The site's job is to make a procurement committee comfortable spending real money. It should feel closer to a Big Four or a serious infrastructure vendor than to a startup landing page.

### What is wrong with the current design

A single saturated green is used as a full-bleed background field across effectively every section. The result is that nothing has hierarchy — the hero, a stat, a service card and the footer all carry the same visual weight, so the eye has nowhere to rest and the page reads as one long undifferentiated block. That flatness is the main thing making it look generated.

### Hard constraints

- **Green becomes an accent, not a field.** Keep it as the brand signal — it's on the mark and it's theirs — but demote it. Think a deep, desaturated, near-institutional green used for emphasis, active states, rules and one or two deliberate dark sections. Not as the paint on every panel.
- Build a real neutral base with genuine tonal steps, so sections can alternate weight and the page has rhythm.
- Type carries the personality. One family, or two clearly distinct ones. Choose deliberately — not Inter-because-it's-there. Set a real type scale with intentional weights and tracking, and use the display setting as an active part of the design.
- Spend the boldness in one place. Pick the single memorable moment — most likely the hero or the products section — and keep everything around it disciplined and quiet.
- Structural devices must encode information, not decorate. If you draw a rule, a border or a number, it should be because the content has that structure.

### Named tells to remove — these are why it reads as AI-made

1. The italicised final phrase in the hero headline ("*Never off the shelf.*"). Accenting one word or phrase in a headline is the single most common generated-page tell. Find a treatment that carries the emphasis structurally instead.
2. The strikethrough gag in "We don't ~~paper over~~ them."
3. `01 / 02 / 03 / 04` on the approach stages. This one is a genuine sequence so numbering is defensible — but the standard oversized-ghost-numeral treatment is not. Either earn it with a real treatment or express the sequence another way.
4. Tracked-out ALL-CAPS eyebrow labels above every single heading ("WHAT MAKES US DIFFERENT", "OUR PLATFORMS", "HOW WE WORK", "WHO WE WORK WITH", "WHERE WE ARE", "NEXT STEPS"). Six of them is template chrome. Cut most, and give the survivors a treatment that isn't all-caps.
5. Meta strings joined with middle dots — "Lagos and London · Public and private sector", "Learning platform · LMS and CMS", "Hybrid infrastructure management · FinOps", "Lagos · London".
6. Every content block chopped into an identical rounded card with the same border-radius and the same soft grey shadow. Differentiate by hierarchy: a flagship product panel and a small stat do not get the same container.
7. Gradient washes used as decoration with no informational purpose.
8. Fade-and-slide-up entrance animations on every section and a hover-lift on every card. One orchestrated moment beats scattered effects. Motion that responds to a click (tab switch, menu open, form submit) is welcome; ambient motion is not.

Also avoid, as general calibration: the cream-background-plus-serif-plus-terracotta look, the near-black-with-one-acid-accent look, tinted near-blacks standing in for black, monospace for small data labels, and `→` glued onto button text.

### Deliverable for this section

Before building, give me: 4–6 named hex tokens with roles, the typeface choices with their roles and why, a one-paragraph layout concept, ASCII wireframes for the hero plus two other sections, and three principles specific to *this* brief. Then review your own plan — if any part of it is what you'd produce for any consultancy site rather than this one, revise it and tell me what you changed.

---

## 5. Section-by-section implementation notes

**Header** — sticky, condenses on scroll. Desktop: a real mega-menu for Products and Sign in (they have descriptions per item, so a plain dropdown wastes them). Mobile: full-screen sheet, focus-trapped, `Escape` closes, body scroll locked, restores focus to the trigger on close.

**Hero** — two product screenshots. Don't just float them side by side with a shadow. Decide what the most characteristic thing in this company's world is and lead with that.

**Products** — Atlas and Sonar are the commercial centre of the page and currently look like everything else. Give them the most structural weight on the site. They're a pair, so consider treating them as a matched set rather than two identical stacked blocks.

**Sectors** — public/private is a tab switcher. Build it as a proper ARIA tablist: roving tabindex, arrow-key navigation, `aria-selected`, panels with `role="tabpanel"` and `aria-labelledby`. Both panels must exist in the DOM for SEO and no-JS.

**Financial services timeline** — a three-phase sequence with week ranges. Real sequential content, so a timeline treatment is earned here.

**Locations** — the `--:--` placeholders are live local times for Lagos and London. Implement with `Intl.DateTimeFormat` and the IANA zones `Africa/Lagos` and `Europe/London`. Render a sensible server value, hydrate on the client, and guard against a hydration mismatch (`suppressHydrationWarning` on the time node, or mount-gated rendering).

**Contact form** — currently a `mailto:` handoff, which is fragile and looks unprofessional to exactly the buyer this page is for. Rebuild as a Server Action with Zod validation, a honeypot field, `useFormStatus` pending state, real per-field error messages tied to inputs via `aria-describedby`, `aria-invalid` on failure, and a genuine success state. Keep the direct email and phone visible as an alternative. Abstract the send behind a small interface with a stub implementation so a provider (Resend or similar) can be dropped in later without touching the component.

**Footer** — four link columns, legal links, tagline. Keep the grouping.

---

## 6. Quality floor

- **Accessibility:** semantic landmarks, one `h1`, correct heading order, skip-to-content link, visible keyboard focus everywhere (never `outline: none` without a replacement), meaningful `alt` text on every image, form labels properly associated, `prefers-reduced-motion` respected, AA contrast on all text including on any dark or green surface.
- **Responsive:** design at 360px first, then 768, 1024, 1440. No horizontal scroll at any width. Test the mega-menu, the tab switcher and the stat rows specifically.
- **Performance:** target Lighthouse 95+ on all four categories. Convert the JPEG assets to AVIF/WebP with fallbacks. `priority` on the hero image only, lazy everything else. Keep client JS minimal — if the bundle is large, find out which component is dragging it in.
- **SEO:** Metadata API in the root layout — title, description (carry the existing meta description over), canonical, OpenGraph and Twitter cards, generated OG image. Add `Organization` and `LocalBusiness` JSON-LD using the real Lagos address, phone, email and RC number.
- **Dark mode:** not required. Do not add it unless you can do it without compromising the primary design.

---

## 7. How to work

Work in phases and check in at each boundary. Don't do the whole thing in one pass.

1. Read source → content inventory + design plan → **stop for approval**
2. Scaffold: Next.js, TypeScript, Tailwind tokens, fonts, layout shell, asset migration
3. Content layer: every typed content module, populated verbatim from the inventory
4. Sections in source order — header/hero first, then down the page → **checkpoint after the header, hero and products** so I can react to the design direction before you build the remaining nine sections
5. Contact form and server action
6. Accessibility and responsive pass
7. Performance and metadata pass
8. Final: re-walk the content inventory item by item and report anything missing or altered; run lint and build clean; list every anchor link and confirm each resolves

Take screenshots as you go and critique your own output against the design plan — if the `webapp-testing` skill is installed at `.claude/skills/webapp-testing`, use it to drive the browser and capture them. If a section starts drifting toward the generic card grid, say so and fix it rather than shipping it.

**Ask me before:** adding any dependency, changing any copy, dropping any content, or changing the single-page anchor architecture.

**Definition of done:** `next build` passes with zero errors and zero warnings, `next lint` is clean, every item on the content inventory is accounted for, every anchor resolves, the site is keyboard-navigable end to end, and nothing on the page uses green as a full-section background.
