# Design plan: Von Newman Technology Consultants

Written against BUILD.md section 4 and the `frontend-design` skill. Where they disagree, BUILD.md wins.

## The brief in one line

An enterprise technology consultancy that owns two working products, sells to Nigerian bank executives, permanent secretaries and UK public-sector programme leads, and needs a procurement committee to feel safe spending real money.

## What is characteristic about this company

Almost everything about Von Newman comes in matched pairs: two markets, two products, two sectors, two cities, two clocks, two-letter mark. One product is a light learning platform with a purple identity; the other is a dark infrastructure console. The consultancy and the product company are the same people. That pairing, not any single product, is the thing the design should be built around.

## 1. Tokens

Six colours. The brand green is sampled from the mark itself (`vn-mark.png` is 97% white and `#1E763A`). Forest is that green taken down to the depth of an institution's letterhead. Neutrals are honest greys, not green-tinted and not cream.

| Token | Hex | Role |
| --- | --- | --- |
| `ink` | `#141414` | headings, body text, primary buttons on dark, heavy rules, footer ground |
| `slate` | `#5B605E` | secondary text, captions, field labels, ledes |
| `paper` | `#FFFFFF` | page ground |
| `stone` | `#F2F3F1` | alternate section ground, form field ground |
| `brand` | `#1E763A` | the mark's green: links, active tab underline, focus ring, product identifiers, the small markers on the approach track |
| `forest` | `#0F3D22` | primary buttons, and the single dark section (Locations) |

Derived, not separate roles: `line` is `ink` at 14% (about `#DADBD9` on paper), `line-strong` is `ink` at 100% and 2px. On forest, text is `paper` and rules are `paper` at 22%.

**Focus rings are a semantic token with two values, fixed now.**

| Token | Value | Where |
| --- | --- | --- |
| `focus` | `brand` `#1E763A`, 2px solid, 3px offset | every focusable element on paper or stone |
| `focus` on dark grounds | `paper` `#FFFFFF`, 2px solid, 3px offset | every focusable element inside Locations (forest) and the footer (ink), and inside the mobile sheet if it ever sits on a dark ground |

Mechanism: `globals.css` sets `--focus: var(--color-brand)` on `:root` and `--focus: var(--color-paper)` on `[data-ground="dark"]`. The single `:focus-visible` rule reads `var(--focus)`, so a dark section opts in with one attribute and no component carries its own ring colour. Contrast of the ring against its ground: brand on paper 5.7:1, brand on stone 5.2:1, paper on forest 12.3:1, paper on ink 18:1. All clear the 3:1 that WCAG 2.2 focus appearance requires. Brand green is never a focus ring on forest or ink.

Contrast (WCAG AA needs 4.5:1 for text): slate on paper 6.4:1, slate on stone 5.7:1, brand on paper 5.7:1, brand on stone 5.2:1, paper on forest 12.3:1, paper on ink 18:1. Brand green is never used as text on forest.

Atlas purple and Sonar's navy and yellow are not tokens. The screenshots carry the product identities; the site frame stays neutral around them.

## 2. Type

Two clearly distinct families, both self-hosted through `next/font/google` at build time, `display: swap`.

**Source Serif 4** (display). Weights 400 and 500, variable with the optical-size axis so large settings get the true display cut. Why: the register the client asked for, closer to a Big Four or an infrastructure vendor than a startup, is the register of a strategy firm's headline face. A serif at large size says established, considered, accountable, which is what a permanent secretary or a bank's procurement committee is checking for. Source Serif is chosen over the serifs that AI output reaches for (Instrument, Playfair, Fraunces, Newsreader, Cormorant) because it is a working text-and-display family with tabular figures, not a fashion face. Its numerals are the reason it earns a second role: stats, product figures and the two clocks are all set in it.

The serif is rationed to five uses: the h1, the h2s, the two product names, the stat and figure numerals, and the clocks. Nothing else.

**Public Sans** (text and interface). Weights 400, 500, 600. Why: it is already the client's body face on the current site and in the brochure, so there is continuity for anyone who has seen either. It is also the typeface of the US Web Design System, drawn for government legibility, which is the right pedigree for a company selling to ministries. Every operational word on the page (paragraphs, list items, labels, navigation, buttons, form) is Public Sans, so a reader learns in one scroll that serif means the firm is speaking and sans means specification.

No monospace anywhere. No tracked caps anywhere. Small labels are sentence case, Public Sans 500, slate.

| Style | Face | Size | Weight | Leading | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display 1 (h1) | Source Serif 4 | clamp(2.75rem, 1.5rem + 4.5vw, 4.75rem) | 500 | 1.02 | -0.015em |
| Display 2 (h2) | Source Serif 4 | clamp(2rem, 1.25rem + 2.4vw, 3rem) | 500 | 1.08 | -0.01em |
| Product name | Source Serif 4 | 2rem | 500 | 1.1 | -0.01em |
| Figure (stats) | Source Serif 4 | 2.75rem | 400 | 1 | 0, tabular |
| Clock | Source Serif 4 | clamp(3.5rem, 8vw, 6.5rem) | 400 | 1 | -0.02em, tabular |
| Title (h3) | Public Sans | 1.25rem | 600 | 1.3 | 0 |
| Subtitle (h4, block labels) | Public Sans | 1rem | 600 | 1.4 | 0 |
| Lede | Public Sans | 1.1875rem | 400 | 1.55 | 0 |
| Body | Public Sans | 1.0625rem | 400 | 1.6 | 0 |
| Label | Public Sans | 0.875rem | 500 | 1.45 | 0 |
| Caption | Public Sans | 0.8125rem | 400 | 1.45 | 0 |

## 3. Layout concept

A white page with a firm grid, 1200px container, 24px gutters (20px at 360), alternating paper and stone grounds so sections have weight relative to each other, and one dark forest section where the company's two offices and two clocks sit. Structure comes from rules, and a rule is drawn only where content lines up across a boundary: the shared rows of the Atlas and Sonar pair, the five stats in a row, the four approach stages on one track, the three pilot phases on one week scale. Everything else is spacing. Corners are 3px on controls and 0 on images and frames. No shadows except on the open mega-menu and the mobile sheet, where they encode layering. Green is an accent, and it appears only on things Von Newman owns or things you can act on.

## 4. Section rhythm

| Section | Ground | Weight | Treatment |
| --- | --- | --- | --- |
| Header | paper | light | 72px, condenses to 56px, bottom rule appears on scroll |
| Hero | paper | medium | serif headline left, product diptych right, ruled trust row |
| Difference | stone | medium | statement left, four ruled rows right, five serif stats in a ruled row |
| Products | paper | **heaviest** | the one bold moment: Atlas and Sonar as a matched pair on a shared-row grid |
| Approach | stone | medium | four stages on one track, pull quote in serif, four ownership points |
| Services | paper | medium | eight practice areas in two columns, two panels below |
| Sectors and financial services | stone | medium | underlined tablist, ruled lists, four definition blocks, proportional week timeline |
| Locations | **forest** | dark | two serif clocks, addresses; the only dark section |
| Team | paper | light | six square portraits, three across |
| Contact | stone | medium | details as a definition list, form in a 1px frame |
| Footer | ink | dark | four columns, legal strip |

## 5. Wireframes

### Hero (1440)

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ [VN] Von Newman          Products ▾   Services   Sectors   How we work   Company│
│      Technology Consultants                              Sign in ▾  [Talk to us]│
├────────────────────────────────────────────────────────────────────────────────┤
│                                                                                │
│  Lagos and London                          ┌────────────────────────────────┐  │
│  Public and private sector                 │░░ Atlas home                   │  │
│                                            │░░ light UI, purple headline    │  │
│  Technology adapted                        │░░ cropped hard, top-left       │  │
│  to you.                                   ├────────────────────────────────┤  │
│  Never off the shelf.                      │▓▓ Sonar cloud inventory        │  │
│                                            │▓▓ dark UI, metric row visible  │  │
│  We build software, learning platforms     │▓▓                              │  │
│  and infrastructure intelligence for       └────────────────────────────────┘  │
│  banks, ministries, agencies and            Atlas   109+ courses               │
│  enterprises. Every engagement starts       Sonar   every asset, one view      │
│  with your problem, not our product list.                                      │
│                                                                                │
│  [Start a conversation]   Explore our products                                 │
│                                                                                │
│  ────────────────────────────────────────────────────────────────────────────  │
│  Two in-house platforms    │    Eight practice areas    │    Delivered for HP  │
│                            │                            │    and LexisNexis    │
└────────────────────────────────────────────────────────────────────────────────┘
```

Decisions in this wireframe:

- The headline's emphasis is structural. "Never off the shelf." sits alone on its own line, same size, same weight, same colour. The full stop and the line break carry it; no italic, no colour.
- The locator is two lines of label text, not one string with a dot.
- The two screenshots share one 1px ink frame, split by a single rule: a diptych, light over dark. No shadow, no tilt, no floating pills. The captions are figure captions beneath the frame, product name in 600, description in 400, separated by a gap rather than a dot.
- The trust row is a ruled table of three facts, sentence case.
- At 360 the diptych stacks under the copy at full width; the trust row becomes three stacked rows with rules between.

### Products (1440)

```
│  Two products we own outright, and shape around you.                           │
│  Adopt them in full, license the content into your own systems, or let us     │
│  adapt them until they feel like they were built in-house. Because for you,   │
│  they were.                                                                    │
│                                                                                │
│  ┌──────────────────────────────────┐   ┌──────────────────────────────────┐   │
│  │░░ atlas-home.jpg                 │   │▓▓ sonar-inventory.jpg            │   │
│  │░░                                │   │▓▓                                │   │
│  └──────────────────────────────────┘   └──────────────────────────────────┘   │
│  Live                                   Cloud inventory                         │
│  ════════════════════════════════════   ════════════════════════════════════   │
│  Von Newman Atlas                       Von Newman Sonar                        │
│  Learning platform   LMS and CMS        Hybrid infrastructure management  FinOps│
│  ────────────────────────────────────   ────────────────────────────────────   │
│  Learning, beautifully connected.       See your entire estate, control every  │
│  Onboarding, upskilling, compliance     naira. Sonar continuously maps every   │
│  and certification ...                  asset you run ...                      │
│  ────────────────────────────────────   ────────────────────────────────────   │
│  25            109+          NG         AWS   Azure   Google Cloud   VMware    │
│  Structured    Courses,      Localised  Nutanix   Kubernetes   Bare metal      │
│  pathways      growing q.    content                                            │
│  ────────────────────────────────────   ────────────────────────────────────   │
│  Guided pathways. Role-relevant ...     One view of everything. Continuous ... │
│  Verified outcomes. Lesson checks ...   Drift and codification. Unmanaged ...  │
│  Workforce analytics. Track ...         Guardrails and evidence. Audit- ...    │
│  Content studio. Doc2Video, SCORM ...   Resilience. Restore whole ...          │
│  Intelligent. Recommendations, ...      Cloud FinOps. Dual-currency ₦/$ ...    │
│  Atlas, or your LMS. License our ...    Safe self-service. Reusable ...        │
│  ────────────────────────────────────   ────────────────────────────────────   │
│  [Visit Atlas ↗]  [Sign in]             [Request a Sonar demo]                 │
│  Browse the catalogue ↗                 [Request console access]               │
```

Decisions in this wireframe:

- This is where the boldness is spent. The two products are one CSS grid with explicit rows, so every horizontal rule runs at the same height in both columns: same row, same kind of information. It reads as a product sheet a procurement officer can compare across, which is what they will actually do.
- The heavy 2px rule under the badge row marks the head of the sheet. The 1px rules below separate attribute rows.
- The screenshots are large and sit above the sheet, in 1px frames, no shadow. The badges (`Live`, `Cloud inventory`) become the first row of the sheet instead of pills floating on the image.
- Product names are the only serif in the section. The gradient monogram tiles (`A`, `S`) go; the name does the identifying.
- Atlas's three figures and Sonar's seven platforms occupy the same row: each product's hard facts. The figures are serif numerals; the platforms are a plain inline list separated by space.
- Feature lists are single column, bold lead-in then text, no check icons.
- The external-link icon stays on the three links that leave the site, because it encodes something true. Arrows glued to button text go.
- At 360 the pair stacks, Atlas first, each keeping its own rules. At 768 it is still a pair, with the screenshots at reduced height.

### Approach (1440)

```
│  Four stages, in this order, on every engagement.                              │
│  We immerse ourselves in your operating model before a line of configuration  │
│  is written, and we stay after go-live to keep the platform moving with you.  │
│                                                                                │
│  ■━━━━━━━━━━━━━━━━━━━■━━━━━━━━━━━━━━━━━━━■━━━━━━━━━━━━━━━━━━━■━━━━━━━━━━━━━━━━━│
│  Discover             Adapt               Embed               Evolve           │
│  On site with your    Our engineers       Integration with    A living roadmap │
│  teams, we learn      tailor the          identity, HR and    shaped by your   │
│  your operating       product itself:     core systems, ...   KPIs: ...        │
│  model, ...           ...                                                      │
│                                                                                │
│  ┌──────────────────────────────────────────┐   Full product ownership         │
│  │ If a feature would make the platform     │   We build and evolve Atlas and  │
│  │ work better for your teams, we don't     │   Sonar in-house. ...            │
│  │ raise a ticket with a vendor. We         │   Security-first engineering     │
│  │ build it.                                │   Role-based access, ...         │
│  │                                          │   Nigerian depth, UK discipline  │
│  │ The advantage of owning the product      │   Designed for the Nigerian ...  │
│  └──────────────────────────────────────────┘   Measurable outcomes            │
│                                                  Every engagement is ...       │
```

Decisions in this wireframe:

- The sequence is real, so it is expressed as a sequence: an `<ol>` rendered as one continuous track with a small brand-green square at the start of each stage. Left to right is the order. No `01 / 02 / 03 / 04` numerals at all; screen readers get the list position, sighted readers get the track.
- At 360 the track turns vertical down the left edge with the same four markers, stages stacked.
- The pull quote is serif at Display 2 size inside a 1px frame. It is the one quotation on the page, so the frame is earned.
- The four ownership points are a plain stacked list, title in 600, text in slate, no bullet dots.

### Financial services pilot (1440)

```
│  Weeks 1 to 4        Weeks 5 to 10                    Weeks 11 to 13           │
│  ├──────────────────┼────────────────────────────────┼──────────────────┤      │
│  Discovery           Tailored pilot, live              Results review          │
│  With your L&D, IT   One Atlas learning cohort, one    Against agreed KPIs.    │
│  and compliance      Sonar estate view, your           Scale plan and ...      │
│  leads. ...          branding.                                                 │
```

- Column widths are proportional to the weeks (4 : 6 : 3), with faint week ticks along the scale. The layout encodes duration, which is the information the week ranges carry. This is the one place a timeline treatment is earned, and it is visually distinct from the approach track (equal stages, markers) because it is a scale (unequal phases, ticks).
- At 360 the phases stack with the week range as a left column and a vertical scale.

## 6. Component decisions, section by section

- **Header.** Sticky, 72px to 56px on scroll, bottom rule appears once scrolled. Products and Sign in open mega-menu panels: paper ground, 1px line border, 3px radius, functional shadow, each item title in 600 with its description in slate. No icon tiles. Mobile: full-screen sheet from the right, focus trapped, Escape closes, scroll locked, focus returns to the burger. `Talk to us` is the only filled button in the header.
- **Difference.** Statement set as two sentences on two lines, no strikethrough. Four pillars as ruled rows with title and text, icon tiles removed. Five stats as one ruled row of serif numerals with sentence-case labels beneath.
- **Services.** Eight practice areas in two columns of ruled rows, icon tiles removed. The two panels (`How we engage`, `Delivery standards`) sit side by side as 1px-framed boxes on paper, their chips as a plain inline list with hairline separators, not pills.
- **Sectors.** Two tabs as text with a 2px brand-green underline on the selected one, full ARIA tablist with roving tabindex and arrow keys, both panels in the DOM. Each panel's list is ruled rows with the tag (`Atlas`, `Software`, `Sonar`, `Delivery`) right-aligned in brand green, sentence case. The four financial-services blocks are a four-column definition list with a top rule each.
- **Locations.** Forest ground. Each office: clock in serif numerals with the zone label small beside it, then place name with its role as a label on the same line, then text and address. Clocks render a server value for the request time, hydrate on the client, tick each minute, and carry `suppressHydrationWarning`.
- **Team.** Six square portraits, three across, 0 radius, name in 600, title in slate sentence case. Two across at 768, one at 360 with the portrait at a fixed 96px beside the text.
- **Contact.** Left: heading, lede, then a definition list (Email, Phone, Visit, Company). The Visit entry is two locations, not a label and a value, so it renders as two rows with their own location labels (see open decision 2a). Right: the form in a 1px frame on paper, fields with 1px ink borders on stone, 3px radius, labels above, client-side validation with error text beneath each field in a red reserved for errors only. **Sending:** no success state is shipped over a stub. If a real provider is wired at phase 5, the form posts to a Server Action and shows a confirmation; if not, the form keeps the source `mailto:` behaviour and its original two strings unchanged. Which of the two applies is a question put to you at the start of phase 5, not decided here.
- **Footer.** Ink ground, paper text. Brand block, descriptor, four link columns as grouped in the source, legal strip with copyright, RC number, `Lagos` and `London` as separate items, the two legal links and the tagline.

## 7. Motion

Only motion that answers an action: header condense (200ms), menu open (150ms fade and 2px rise), mobile sheet (200ms slide), tab panel change (150ms fade in), form pending and success states, focus rings. The clocks tick because they are clocks. No scroll reveals, no hover lifts, no ambient movement. `prefers-reduced-motion` zeroes every duration.

## 8. The named tells, and what replaces each

| Tell | Replacement |
| --- | --- |
| 1. Italic "Never off the shelf." | Own line, same weight, same colour |
| 2. Strikethrough on "paper over" | Plain text, two sentences on two lines |
| 3. Ghost numerals 01 to 04 | Ordered list rendered as one track with four markers |
| 4. Ten tracked-caps eyebrows | Six cut (open decision 1), three kept as sentence-case labels, one (the hero locator) set as two lines |
| 5. Eleven middle-dot strings | Ten split into two typographic units (weight, gap or line break); the Visit address is the exception and gets two labelled location rows; words unchanged (open decisions 2 and 2a) |
| 6. Identical rounded cards | Rules where rows align, 1px frames only for the product sheet, quote, panels and form; images at 0 radius |
| 7. Gradient washes | None; the hero radial glow, product monogram gradients and tinted shadows go |
| 8. Scroll reveals and hover lifts | Removed; motion only on interaction |

Also out: pill buttons (3px now), arrows glued to button text, green-tinted neutrals, dark mode.

## 9. Three principles for this brief

1. **Two of everything, set as a pair.** Whenever the content comes in twos (products, sectors, cities, clocks, markets) it is laid out as a matched pair with shared rows, so the pairing is the visual rhythm of the page. Content that is not a pair never gets the pair treatment.
2. **Serif speaks for the firm; sans does the work.** Source Serif appears in exactly five places: h1, h2, product names, numerals, clocks. If a new element wants the serif, it has to be the firm making a claim, not a specification.
3. **Green marks what is theirs or what you can act on.** Brand green appears on the mark, the product identifiers, links, the active tab, focus rings and the approach markers; forest on primary buttons and the section about their own offices. Green never sits behind copy as a field. A green element that is neither Von Newman's nor interactive is a mistake.

## 9a. Changes made while building (5 September 2026)

- Display 1 cap lowered from 4.75rem to 4.25rem so "Never off the shelf." holds one line at 1440 in the 7/12 column. The second sentence is `white-space: nowrap` from 640px up and wraps freely below that.
- Two scale steps added: `statement` (clamp 1.75rem to 2.5rem, serif) for the Difference h2 and the pull quote, and `title-lg` (1.5rem, sans 600) for the sector panel headings and office names. The Difference columns became 50/50 so both sentences of the statement fit on their own lines.
- The footer legal strip stacks without separators below 640px; the hairline separators appear from 640px up.
- Both hero images load eagerly, but only the Atlas image is preloaded at high priority with synchronous decode. Preloading both split bandwidth on throttled mobile and pushed LCP past three seconds.
- Next's deprecated `priority` prop is replaced by `preload`, which is what Next 16 documents.
- Footer column titles are h2 (the footer is its own landmark); the source used h4.

- Container widened from 1200px to 1440px with a 40px gutter from 1024px up, at the client's request; the page felt crowded at 1200. At 1440 the content runs to 40px from each edge; above that it centres.
- Header restyled to the client's reference: 88px bar with a soft shadow, 24px wordmark, 17px nav with slate chevrons that turn green when open, Sign in as a tinted green button and Talk to us filled, both with 8px corners. A compact setting applies between 1024 and 1279px.

- Hero rebuilt on 5 September 2026 at the client's instruction: the two product screenshots and their captions are gone, replaced by a client-supplied 10-second looping video (800 by 450, muted, no audio track) behind a 65% ink wash and a 3px blur, with the copy centred and set in paper. A blurred poster frame is the LCP image; the video source attaches after window load, holds on the poster under prefers-reduced-motion, and pauses out of view. Buttons on the hero use inverse (paper fill, paper outline) variants. Mobile Lighthouse performance moved from 95 to 91 with the video; desktop stays at 100.

- Header became a floating glass bar on 5 September 2026 at the client's instruction: fixed at the top with a 12px inset, 16px corners, a 45% ink ground with a blurred backdrop over the hero video (85% once scrolled, so white text keeps contrast over light sections), white text, a translucent Sign in and a brand-green Talk to us. The mega-menu panels match in dark glass. Section scroll margins and the hero's top padding account for the bar plus its inset.

- Scroll reveal added on 7 September 2026 at the client's instruction, overriding the plan's no-ambient-motion rule: headings, cards and rows fade and rise into place as they enter the viewport, staggered left to right within a row (90ms per item). One observer handles the whole page; the hidden state exists only after JavaScript mounts, so crawlers and no-JS readers see everything; reduced motion disables it entirely.

- Headings switched from Source Serif 4 to Helvetica on 7 September 2026 at the client's instruction: the display stack is "Helvetica Neue", Helvetica, Arial, weight 700, with tighter tracking. Nothing is self-hosted for it; Apple devices render Helvetica Neue and everything else renders Arial. The hero wash is forest at 92%.

## 10. Self-review

I asked what I would have produced for any consultancy site and compared.

- **The serif-plus-grotesque-plus-rules pattern is a known editorial default.** I kept it, because the strategy-firm register is what the client asked for, but tightened it in three ways so it is a choice rather than a fall-back: the serif is rationed to five uses instead of every heading; rules appear only where rows align across columns, so most of the page is spacing, not hairlines; and radius is 3px on controls rather than the zero-radius broadsheet look.
- **Changed: where the dark section goes.** The first draft put Products on a forest ground as the bold moment. Two problems: Sonar's navy console muddies on dark green, and a dark product band is the generic "feature showcase" move. Products moved to paper and gets its weight from scale and the shared-row sheet instead. Forest went to Locations, where it is consistent with principle 3 (their own offices) and lets the serif clocks carry the section.
- **Changed: dropped a page-long left "spine" rule.** The white wordmark uses a vertical green bar between the mark and the name, and I planned to run that bar down the page's left gutter as a signature. It decorated rather than encoded anything, so it is gone. The device survives only where two paired items sit side by side.
- **Kept, deliberately: Public Sans.** Keeping the client's existing body face could look like inertia. It is a choice because of its public-sector pedigree and because it gives continuity with the brochure the buyers may already have seen.
- **Palette check against the brief's calibration list.** Not cream, not terracotta, not near-black with an acid accent, no tinted blacks, no monospace. Brand green is sampled from the mark, so it is theirs, not a designer's green.

## 11. Open decisions (need a yes before phase 2)

1. **Cut six eyebrows:** `What makes us different`, `Our platforms`, `How we work`, `Who we work with`, `Where we are`, `Next steps`. Each duplicates a nav or footer label or adds nothing to the h2 beneath it. Keep three as sentence-case labels because they carry information the heading does not: `Consulting and engineering`, `Sector focus: Financial services` (colon replacing the dot), `Leadership team`. BUILD.md says ask before dropping content, so this needs your yes.
2. **Middle dots become layout.** Ten of the eleven strings in inventory section 8 keep every word and lose the dot glyph; each becomes two units separated by weight, a gap or a line break. Example: `Lagos · Headquarters` renders as `Lagos` at title size with `Headquarters` as a label beside it. I am treating the dot as punctuation rather than copy, and listing every instance so you can veto any.

   2a. **Exception, amended 5 September 2026: the Visit line.** `No. 3 Jasmine Road, Ikota GRA, Lekki, Lagos · United Kingdom` is two locations. Splitting it by weight or gap would read as a Lagos address that is in the UK. It renders as two rows under the `Visit` label, each with its own location label in slate, on separate lines. Treatment for approval before build:

   ```
   Visit
   Lagos             No. 3 Jasmine Road, Ikota GRA, Lekki, Lagos
   United Kingdom
   ```

   Recommended (A): the rows are a two-column list, label in slate 500, value in ink. The United Kingdom row has no street address in the source, so its label stands alone in the label column and the value column is empty. No new words beyond the `Lagos` label you asked for. At 360 the label sits above its value.

   Alternative (B): fill the United Kingdom value with `London and the South East`, which is the UK address already approved in the Locations section. Every row is then complete, but a line of copy is duplicated into a second place. Not recommended unless you prefer complete rows.
3. **Unused assets.** `sonar-terraform.jpg` (the Import to Terraform screen) is direct evidence for the `Drift and codification` claim, and `atlas-catalogue.jpg` is evidence for `Browse the catalogue`. Proposal: do not add them to the page. They are not in the signed-off content and the product sheet is tighter without a second image per column. Say if you want either used.
4. **Contact form sending, amended 5 September 2026.** No success state over a stub. A confirmation that nothing was sent fails silently, which is worse than the current site. Rule for phase 5: if a real provider (Resend or similar) and its credentials are available, build the Server Action with Zod validation, honeypot, pending state and a confirmation, and propose replacement copy for the two mailto strings at that point. If not, keep the `mailto:` handoff and both original strings (`Sending opens your email app with the message ready to go. Or write to us directly.` and `Your email app should open with the message ready to send.`) character for character, still with per-field validation and the honeypot. The send interface is abstracted either way so a provider can be dropped in later. I will put the provider question to you at the start of phase 5 rather than decide it.
5. **White wordmark in the footer.** `vn-logo-white.png` is an existing brand asset drawn for dark grounds and is unused. Proposal: use it as the footer brand on the ink ground instead of mark plus text. Say no and the footer keeps mark plus text.
6. **New accessibility strings.** `Skip to content` link, `Close menu` label state, tab and menu announcements. Adding, not changing; noting for completeness.
7. **Fonts.** Source Serif 4 replaces Schibsted Grotesk; Public Sans stays. Both come through `next/font/google`, which downloads at build and self-hosts, so no runtime CDN. This is a dependency-free choice but it changes the brand's display face, so confirm.
