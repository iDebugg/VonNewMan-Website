# Content inventory: Von Newman Technology Consultants

Source: `index.html` (505 lines), `styles.css`, `script.js`, `assets/` as of 5 September 2026 (commit eb20756).
Order is source order. Every line is a checkbox. At the end of the build every box is walked again and ticked only if the text is character for character identical (punctuation glyphs that are layout, not words, are listed separately at the bottom).

Legend: `→` link target. `(new tab)` = `target="_blank" rel="noopener"`. Bold inside feature bullets is in the source.

---

## 0. Document

- [ ] `<html lang="en-GB">`
- [ ] Title: `Von Newman Technology Consultants`
- [ ] Meta description: `Von Newman Technology Consultants builds custom software, learning platforms and infrastructure intelligence for public and private sector organisations across Nigeria and the UK. Adapted to you, never off the shelf.`
- [ ] Favicon: `assets/vn-mark.png`
- [ ] Fonts (to be replaced, see design plan): Schibsted Grotesk 500/600/700, Public Sans 400/500/600 + 400 italic, from Google Fonts CDN
- [ ] Inline SVG sprite, `aria-hidden`, 20 decorative symbols: chevron, arrow, external, check, book, radar, tools, people, globe, spark, code, layers, film, chart, cloud, network, shield, rocket, menu, user

## 1. Header

- [ ] Brand link → `#top`, `aria-label="Von Newman Technology Consultants, home"`
  - [ ] Image `assets/vn-mark.png`, alt `""`, 36×36
  - [ ] Text `Von Newman` + small `Technology Consultants`
- [ ] Primary navigation (desktop)
  - [ ] **Products** (button, opens menu, `aria-haspopup`)
    - [ ] `Von Newman Atlas` → `#atlas`, description `Learning platform for professional training, localised for Nigeria.`
    - [ ] `Von Newman Sonar` → `#sonar`, description `Hybrid infrastructure management with naira-aware FinOps.`
    - [ ] divider
    - [ ] `Custom builds` → `#services`, description `Software, cloud, networks and security, built for you.`
  - [ ] `Services` → `#services`
  - [ ] `Sectors` → `#sectors`
  - [ ] `How we work` → `#approach`
  - [ ] `Company` → `#company`
- [ ] Right cluster (desktop)
  - [ ] **Sign in** (button with user icon, opens menu) **(removed from the header on 5 September 2026 at the client's instruction; both links remain in the footer)**
    - [ ] `Sign in to Atlas` → `https://learn.vonnewmanlearning.com` (new tab), description `Learners and administrators.`
    - [ ] `Sonar console` → `#contact`, description `Access is issued per organisation. Request yours.`
  - [ ] `Talk to us` → `#contact` (primary button)
- [ ] Burger button, `aria-label="Open menu"`, `aria-controls="mobile-menu"`
- [ ] Mobile menu (`<nav aria-label="Mobile">`)
  - [ ] Group label `Products`
    - [ ] `Von Newman Atlas` → `#atlas`
    - [ ] `Von Newman Sonar` → `#sonar`
  - [ ] Group label `Company`
    - [ ] `Services` → `#services`
    - [ ] `Sectors` → `#sectors`
    - [ ] `How we work` → `#approach`
    - [ ] `Team and offices` → `#company`
  - [ ] Group label `Sign in` **(removed from the mobile sheet with the header button, 5 September 2026)**
    - [ ] `Sign in to Atlas` → `https://learn.vonnewmanlearning.com` (new tab)
    - [ ] `Request Sonar access` → `#contact`
  - [ ] `Talk to us` → `#contact` (primary button)

## 2. `<main id="top">`

### 2.1 Hero (no id)

- [ ] Locator: `Lagos and London · Public and private sector`
- [ ] h1: `Technology adapted to you. Never off the shelf.` (source wraps the second sentence in `<em>`; treatment changes, words do not)
- [ ] Lede: `We build software, learning platforms and infrastructure intelligence for banks, ministries, agencies and enterprises. Every engagement starts with your problem, not our product list.`
- [ ] CTA primary `Start a conversation` → `#contact`
- [ ] CTA secondary `Explore our products` → `#products`
- [ ] Trust points
  - [ ] `Two in-house platforms`
  - [ ] `Eight practice areas`
  - [ ] `Delivered for HP and LexisNexis` **(reworded to `Delivered for NRS and More` on 5 September 2026 at the client's instruction)**
- [ ] Collage, `aria-label="Screens from Von Newman Atlas and Von Newman Sonar"` **(removed from the page on 5 September 2026 at the client's instruction, together with the two images and two captions below; replaced by a looping background video)**
  - [ ] Image `assets/atlas-home.jpg`, alt `Von Newman Atlas learning platform home page`, 1400×875, eager
  - [ ] Image `assets/sonar-inventory.jpg`, alt `Von Newman Sonar cloud inventory dashboard`, 1400×770
  - [ ] Caption `Atlas · 109+ courses` (with `A` monogram)
  - [ ] Caption `Sonar · every asset, one view` (with `S` monogram)

### 2.2 `#difference`

- [ ] Eyebrow `What makes us different`
- [ ] h2: `We solve problems. We don't paper over them.` (source strikes through `paper over`; treatment changes, words do not)
- [ ] Lede: `Most vendors hand you a licence and a manual. We own the architecture and roadmap of everything we build, so we reshape it around your workflows, your policies, your brand and your regulators.`
- [ ] Pillar 1 h3 `Custom-built for every client`
  - [ ] `Nothing we deliver is a generic install. Features, dashboards, content and policy logic are engineered around how your organisation actually works.`
- [ ] Pillar 2 h3 `Public sector and private sector, equally`
  - [ ] `Ministries, agencies and local government on one side. Banks, insurers and enterprises on the other. We have delivered for both, in Nigeria and the UK, and we speak both languages.`
- [ ] Pillar 3 h3 `Deep market experience`
  - [ ] `Our consultants have delivered for global enterprises including HP and LexisNexis. We bring that discipline to every engagement, with content, pricing and support designed for the Nigerian market.`
- [ ] Pillar 4 h3 `A consultancy that builds its own products`
  - [ ] `Atlas and Sonar are ours, end to end. If a feature would make the platform work better for your teams, we don't raise a ticket with a vendor. We build it.`
- [ ] Stats (5)
  - [ ] `2` / `Markets: Nigeria and the UK`
  - [ ] `8` / `Practice areas`
  - [ ] `2` / `In-house products`
  - [ ] `109+` / `Courses live on Atlas`
  - [ ] `90` / `Days to a measurable first result`

### 2.3 `#products`

- [ ] Eyebrow `Our platforms`
- [ ] h2 `Two products we own outright, and shape around you.`
- [ ] Lede `Adopt them in full, license the content into your own systems, or let us adapt them until they feel like they were built in-house. Because for you, they were.`

#### `#atlas` (article)

- [ ] Monogram tile `A` (aria-hidden, decorative)
- [ ] h3 `Von Newman Atlas`
- [ ] Subline `Learning platform · LMS and CMS`
- [ ] Lede `Learning, beautifully connected. Onboarding, upskilling, compliance and certification for public and private sector teams, measured in one place and localised for Nigerian organisations.`
- [ ] Figures (3)
  - [ ] `25` / `Structured pathways`
  - [ ] `109+` / `Courses, growing quarterly`
  - [ ] `NG` / `Localised content`
- [ ] Features (6)
  - [ ] **Guided pathways.** `Role-relevant programmes with prerequisites and visible progress.`
  - [ ] **Verified outcomes.** `Lesson checks, module gates and trusted certificates.`
  - [ ] **Workforce analytics.** `Track departments, overdue learning and credentials.`
  - [ ] **Content studio.** `Doc2Video, SCORM and xAPI, microlearning, localisation.`
  - [ ] **Intelligent.** `Recommendations, skill-gap insight and gamification.`
  - [ ] **Atlas, or your LMS.** `License our content securely into your existing platform.`
- [ ] Actions
  - [ ] `Visit Atlas` → `https://atlas.vonnewmanlearning.com` (new tab, external icon)
  - [ ] `Sign in` → `https://learn.vonnewmanlearning.com` (new tab) **(removed from the Atlas actions on 5 September 2026 at the client's instruction; the footer keeps the link)**
  - [ ] `Browse the catalogue` → `https://atlas.vonnewmanlearning.com/catalogue` (new tab) **(removed from the Atlas actions on 5 September 2026 at the client's instruction; the footer keeps `Atlas catalogue`)**
- [ ] Badge `Live`
- [ ] Image `assets/atlas-home.jpg`, alt `Atlas home page showing pathways, progress and a request-a-demo button`, 1400×875, lazy

#### `#sonar` (article)

- [ ] Monogram tile `S` (aria-hidden, decorative)
- [ ] h3 `Von Newman Sonar`
- [ ] Subline `Hybrid infrastructure management · FinOps`
- [ ] Lede `See your entire estate, control every naira. Sonar continuously maps every asset you run, across every cloud and every data centre, then keeps it governed, resilient and cost-optimised.`
- [ ] Features (6)
  - [ ] **One view of everything.** `Continuous discovery and dependency mapping.`
  - [ ] **Drift and codification.** `Unmanaged resources become clean, reviewed Terraform.`
  - [ ] **Guardrails and evidence.** `Audit-ready, aligned to ISO 27001, SOC 2 and CBN IT guidance.`
  - [ ] **Resilience.** `Restore whole environments to last-known-good in minutes.`
  - [ ] **Cloud FinOps.** `Dual-currency ₦/$ visibility, budgets, rightsizing, chargeback.`
  - [ ] **Safe self-service.** `Reusable provisioning patterns inside your guardrails.`
- [ ] Actions
  - [ ] `Request a Sonar demo` → `#contact`
  - [ ] `Request console access` → `#contact` **(removed from the Sonar actions on 5 September 2026 at the client's instruction; the footer keeps `Request Sonar access`)**
- [ ] Platform list, `aria-label="Works with"` (7): `AWS`, `Azure`, `Google Cloud`, `VMware`, `Nutanix`, `Kubernetes`, `Bare metal`
- [ ] Badge `Cloud inventory`
- [ ] Image `assets/sonar-inventory.jpg`, alt `Sonar cloud inventory listing managed and unmanaged resources across AWS accounts`, 1400×770, lazy **(replaced on 5 September 2026 at the client's instruction with `assets/sonar-home.png`, the Sonar product homepage)**

### 2.4 `#approach`

- [ ] Eyebrow `How we work`
- [ ] h2 `Four stages, in this order, on every engagement.`
- [ ] Lede `We immerse ourselves in your operating model before a line of configuration is written, and we stay after go-live to keep the platform moving with you.`
- [ ] Stage 1 (`01`) h3 `Discover`
  - [ ] `On site with your teams, we learn your operating model, regulatory context and what success has to look like to your board.`
- [ ] Stage 2 (`02`) h3 `Adapt`
  - [ ] `Our engineers tailor the product itself: features, dashboards, content, branding and policy logic built around how your institution actually works.`
- [ ] Stage 3 (`03`) h3 `Embed`
  - [ ] `Integration with identity, HR and core systems, plus change management, champion networks and training, so adoption sticks in every branch and team.`
- [ ] Stage 4 (`04`) h3 `Evolve`
  - [ ] `A living roadmap shaped by your KPIs: continuous releases, tested improvements and quarterly reviews with your leadership. Not an annual upgrade bill.`
- [ ] Pull quote `If a feature would make the platform work better for your teams, we don't raise a ticket with a vendor. We build it.`
  - [ ] Caption `The advantage of owning the product`
- [ ] Ownership points (4)
  - [ ] `Full product ownership` / `We build and evolve Atlas and Sonar in-house. No third-party licence limits what can change for you.`
  - [ ] `Security-first engineering` / `Role-based access, audit trails and DevSecOps pipelines in every release cycle.`
  - [ ] `Nigerian depth, UK discipline` / `Designed for the Nigerian market, delivered to UK enterprise and public-sector standards.`
  - [ ] `Measurable outcomes` / `Every engagement is anchored to KPIs your board recognises: adoption, competency, cost and compliance.`

### 2.5 `#services`

- [ ] Eyebrow `Consulting and engineering`
- [ ] h2 `Beyond the products: end-to-end capability.`
- [ ] Lede `From in-house software engineering to zero-trust networks, we deliver across every layer of your digital estate. As a full build, a managed service, or an extension of your own teams.`
- [ ] Practice 1 h3 `Software development`
  - [ ] `Custom web, mobile, AI and enterprise applications. API and systems integration. Automation and workflow tooling aligned to your strategic goals.`
- [ ] Practice 2 h3 `LMS engineering`
  - [ ] `We don't just implement learning platforms, we build and evolve them: microservices, API-first, cloud-native, with DevSecOps in every release.`
- [ ] Practice 3 h3 `Doc2Video digitisation`
  - [ ] `Our studio converts manuals, policies and legacy materials into engaging video, interactive eLearning and microlearning. Accessible and localised.`
- [ ] Practice 4 h3 `HR and performance systems`
  - [ ] `Smart workforce tools for reviews, competency mapping and performance data that connect directly to learning outcomes.`
- [ ] Practice 5 h3 `Cloud services`
  - [ ] `Scalable architecture, migration and ongoing management across Azure, AWS and Google Cloud, with auto-scaling and disaster recovery built in.`
- [ ] Practice 6 h3 `Network and infrastructure`
  - [ ] `Reliable enterprise networks, identity and access management, and end-user computing for organisations that cannot afford downtime.`
- [ ] Practice 7 h3 `Cybersecurity`
  - [ ] `Secure architectures, role-based access, full audit trails and hardened delivery pipelines that protect your digital assets from modern threats.`
- [ ] Practice 8 h3 `Advanced technology`
  - [ ] `Applied AI, data-driven platforms and advanced engineering, including defence and space technology innovation.`
- [ ] Panel h4 `How we engage`
  - [ ] `Fixed-scope builds, managed services, product licensing or team augmentation. Commercial models shaped around your procurement, in naira or sterling.`
  - [ ] Chips: `Fixed scope`, `Managed service`, `Licensing`, `Team augmentation`
- [ ] Panel h4 `Delivery standards`
  - [ ] `Agile sprint delivery with CI/CD and DevSecOps, WCAG-aligned accessibility, and programmes led by PRINCE2 and Agile-qualified practitioners.`
  - [ ] Chips: `Agile and CI/CD`, `DevSecOps`, `WCAG`, `PRINCE2`

### 2.6 `#sectors`

- [ ] Eyebrow `Who we work with`
- [ ] h2 `Built for the realities of both sectors.`
- [ ] Lede `We understand Nigeria's regulators, its infrastructure realities and its people, and we adapt our platforms to each institution rather than asking the institution to adapt to us.`
- [ ] Tablist `aria-label="Choose a sector"`
  - [ ] Tab `Public sector` (selected by default) controls `panel-public`
  - [ ] Tab `Private sector` controls `panel-private`

#### `#panel-public`

- [ ] h3 `Ministries, agencies and local government.`
- [ ] Lede `Public institutions need platforms that respect procurement, policy and accountability, and that work for staff in every office, not just headquarters. We design for all of that from the start.`
- [ ] CTA `Discuss a public sector programme` → `#contact`
- [ ] `Workforce learning at scale` [tag `Atlas`] `Induction, conditions of service, governance, ethics and revenue administration pathways, delivered to every department with completion evidence.`
- [ ] `Custom digital services` [tag `Software`] `Citizen-facing portals, case management, records and workflow systems built around your mandates and your existing processes.`
- [ ] `Estate visibility and cost control` [tag `Sonar`] `One view across data centres, cloud and regional sites, with budgets and evidence your auditors and the public accounts committee will accept.`
- [ ] `Standards you can point to` [tag `Delivery`] `UK public-sector delivery discipline, WCAG accessibility and NDPA-conscious data handling as standard.`

#### `#panel-private`

- [ ] h3 `Banks, insurers and growing enterprises.`
- [ ] Lede `Private organisations need speed without losing control: compliance that holds up to examiners, cloud spend that makes sense in naira, and software that gives them an edge rather than a template.`
- [ ] CTA `Discuss an enterprise engagement` → `#contact`
- [ ] `Compliance and conduct learning` [tag `Atlas`] `AML/CFT awareness, conduct, cyber hygiene, service excellence and leadership programmes co-designed with your L&D and compliance teams.`
- [ ] `Bespoke applications` [tag `Software`] `Customer platforms, integrations and automation aligned to strategy, not off-the-shelf modules you have to work around.`
- [ ] `Naira-aware FinOps` [tag `Sonar`] `Dollar-billed cloud against naira budgets: dual-currency reporting, FX exposure views and cost narratives your CFO will actually use.`
- [ ] `Resilience and evidence` [tag `Sonar`] `Capacity planning for month-end and salary-day peaks, recovery drills for critical services and audit-ready evidence packs for examiners.`

#### Financial services (inside `#sectors`, class `fin`)

- [ ] Eyebrow `Sector focus · Financial services`
- [ ] h2 `Built for the realities of Nigerian banking.`
- [ ] Block `People` / `Compliance learning at scale` / `Induction, conduct, AML/CFT awareness and cyber hygiene delivered through Atlas to every branch, with completion evidence your compliance team can stand behind.`
- [ ] Block `Infrastructure` / `Hybrid estates, one view` / `Branches, data centres and cloud in a single Sonar console. Discovered, governed and recoverable, whatever mix of stacks you run today.`
- [ ] Block `Cost` / `Naira-aware FinOps` / `Dual-currency reporting, FX exposure views and board-ready cost narratives for dollar-billed cloud against naira budgets.`
- [ ] Block `Trust` / `Data protection and audit` / `NDPA-conscious data handling, role-based access and full audit trails, with evidence mapped to the frameworks your examiners ask about.`
- [ ] Timeline phase 1: `Weeks 1 to 4` / `Discovery` / `With your L&D, IT and compliance leads. Success measures agreed.`
- [ ] Timeline phase 2: `Weeks 5 to 10` / `Tailored pilot, live` / `One Atlas learning cohort, one Sonar estate view, your branding.`
- [ ] Timeline phase 3: `Weeks 11 to 13` / `Results review` / `Against agreed KPIs. Scale plan and commercial model for full rollout.`
- [ ] Closing line `Every partnership includes a dedicated delivery lead, quarterly roadmap reviews, local support in Lagos, training and change management, and SLA-backed operations.`

### 2.7 `#company` (Locations)

- [ ] Eyebrow `Where we are`
- [ ] h2 `Engineered between Lagos and London.`
- [ ] Intro `A consultancy with its own products, and a product team that consults. We operate across Nigeria and the United Kingdom, with delivery experience in both public and private sectors in each market.`
- [ ] Lagos
  - [ ] Live clock, `Africa/Lagos`, zone label `WAT` (source: `--:--` placeholder filled by JS every 15 s)
  - [ ] h3 `Lagos · Headquarters`
  - [ ] `Product engineering, our learning studio and client delivery for West Africa.`
  - [ ] Address `No. 3 Jasmine Road, Ikota GRA, Lekki, Lagos, Nigeria`
- [ ] United Kingdom
  - [ ] Live clock, `Europe/London`, zone label from Intl short name (`GMT` or `BST`)
  - [ ] h3 `United Kingdom · Delivery`
  - [ ] `Programme leadership, infrastructure and security delivery shaped by UK enterprise and public-sector standards.`
  - [ ] Address `London and the South East`

### 2.8 `#team`

- [ ] Eyebrow `Leadership team`
- [ ] h2 `The people behind the platforms.`
- [ ] Lede `Engineers, architects and delivery leaders working between Lagos and London. The same people who build our products sit across the table on your engagement.`
- [ ] `Wilfred Babatope Achom` / `Managing Director, CEO and Founder` / `assets/team-wilfred.jpg` 520×520
- [ ] `Vijay Gadhia` / `Director, Infrastructure and LMS` / `assets/team-vijay.jpg` 520×520
- [ ] `Kate Welling` / `Director, Architecture and AI` / `assets/team-kate.jpg` 520×520
- [ ] `Oyinloluwa Bolarinwa` / `Lead UI/UX Designer` / `assets/team-oyin.jpg` 520×520
- [ ] `Abdulrasaq Oladapo` / `Team Lead and Software Developer` / `assets/team-abdulrasaq.jpg` 520×520
- [ ] `Victor Aderibigbe` / `Lead Frontend Developer` / `assets/team-victor.jpg` 520×520
- [ ] Bench paragraph `A multi-disciplinary bench across product strategy, software engineering, AI, learning design, cloud, networks and security, with a proven record delivering enterprise solutions in Nigeria and the UK.`

### 2.9 `#contact`

- [ ] Eyebrow `Next steps`
- [ ] h2 `Let's build something bespoke.`
- [ ] Lede `A conversation, a demonstration of Atlas and Sonar with your context in mind, and a 90-day pilot shaped around your goals. That's all it takes to see the difference a product partner makes.`
- [ ] Detail `Email` → `mailto:info@vonnewmanconsulting.com.ng`, text `info@vonnewmanconsulting.com.ng`
- [ ] Detail `Phone` → `tel:+2349029534228`, text `+234 902 953 4228`
- [ ] Detail `Visit`: `No. 3 Jasmine Road, Ikota GRA, Lekki, Lagos · United Kingdom`
- [ ] Detail `Company`: `Von Newman Technology Consultants Ltd · RC 8840592, Nigeria`
- [ ] Form `#contact-form`
  - [ ] `Your name` (text, `name`, autocomplete `name`, required)
  - [ ] `Organisation` (text, `org`, autocomplete `organization`)
  - [ ] `Work email` (email, `email`, autocomplete `email`, required)
  - [ ] `Sector` (select, `sector`): `Public sector`, `Financial services`, `Private sector, other`, `Not sure yet`
  - [ ] `What are you interested in?` (select, `interest`): `A conversation about a problem we could solve`, `A demonstration of Atlas`, `A demonstration of Sonar`, `A custom software build`, `Cloud, network or security services`, `A 90-day pilot`
  - [ ] `Tell us a little about it` (textarea, `message`, placeholder `What's the problem, who does it affect, and what would good look like?`)
  - [ ] Note `Sending opens your email app with the message ready to go. Or write to us directly.` (kept verbatim unless a real send provider is wired at phase 5, design plan open decision 4)
  - [ ] Submit `Send enquiry`
  - [ ] Current behaviour: composes `mailto:` with subject `Enquiry from {org | name | website}` and a body of the fields; then sets the note to `Your email app should open with the message ready to send.`

## 3. Footer

- [ ] Brand → `#top`: `assets/vn-mark.png` 36×36 + `Von Newman` / `Technology Consultants`
- [ ] Descriptor `Enterprise technology built around your organisation. Learning platforms, infrastructure intelligence and consulting, engineered between Lagos and London and adapted to each client we serve.`
- [ ] Column `Products`
  - [ ] `Von Newman Atlas` → `#atlas`
  - [ ] `Atlas catalogue` → `https://atlas.vonnewmanlearning.com/catalogue` (new tab)
  - [ ] `Von Newman Sonar` → `#sonar`
  - [ ] `Custom builds` → `#services`
- [ ] Column `Company`
  - [ ] `What makes us different` → `#difference`
  - [ ] `How we work` → `#approach`
  - [ ] `Sectors` → `#sectors`
  - [ ] `Leadership team` → `#team`
  - [ ] `Contact` → `#contact`
- [ ] Column `Sign in`
  - [ ] `Atlas learners and admins` → `https://learn.vonnewmanlearning.com` (new tab)
  - [ ] `Request Sonar access` → `#contact`
- [ ] Column `Follow` (same grid cell as Sign in)
  - [ ] `LinkedIn` → `https://www.linkedin.com` (new tab)
  - [ ] `X (Twitter)` → `https://x.com` (new tab)
  - [ ] `Facebook` → `https://www.facebook.com` (new tab)
- [ ] Bottom left: `© 2026 Von Newman Technology Consultants Limited` (year set by JS), `RC 8840592`, `Lagos · London`
- [ ] Bottom right: `Privacy policy` → `#`, `Terms of service` → `#`, tagline `Adapted to you. Never off the shelf.`

## 4. Assets

| File | Size | Used by |
| --- | --- | --- |
| `vn-mark.png` | 252×251 | favicon, header brand, footer brand |
| `atlas-home.jpg` | 1400×875 | hero collage, `#atlas` |
| `sonar-inventory.jpg` | 1400×770 | hero collage, `#sonar` |
| `team-wilfred.jpg` | 520×520 | `#team` |
| `team-vijay.jpg` | 520×520 | `#team` |
| `team-kate.jpg` | 520×520 | `#team` |
| `team-oyin.jpg` | 520×520 | `#team` |
| `team-abdulrasaq.jpg` | 520×520 | `#team` |
| `team-victor.jpg` | 520×520 | `#team` |
| `atlas-catalogue.jpg` | 1400×525 | **not referenced anywhere** |
| `sonar-terraform.jpg` | 1400×1131 | **not referenced anywhere** |
| `vn-logo-white.png` | 1135×252 | **not referenced anywhere** (white wordmark for dark grounds) |

## 5. Anchors

Fragment targets referenced by at least one `href`: `#top`, `#difference`, `#products`, `#atlas`, `#sonar`, `#approach`, `#services`, `#sectors`, `#company`, `#team`, `#contact`, and the placeholder `#` on the two legal links. All eleven named targets exist in the source and must exist in the rebuild.

## 6. Behaviours (script.js)

- [ ] Sticky header gains a bottom rule and shadow after 8 px of scroll
- [ ] Products and Sign in menus: click toggles, outside click closes, Escape closes
- [ ] Mobile menu: burger toggles, any link click closes, Escape closes
- [ ] Sector tabs: click switches `aria-selected` and the active panel
- [ ] Clocks: `Intl.DateTimeFormat('en-GB', {hour: '2-digit', minute: '2-digit', hour12: false})` per zone, tick every 15 s, Lagos label hard-coded `WAT`, London label from Intl short zone name
- [ ] Scroll reveal on `.reveal` elements (to be removed, design plan tell 8)
- [ ] Contact form `mailto:` compose (to be replaced by a Server Action)
- [ ] Footer year from `Date`

## 7. Counts (for the final re-walk)

| Item | Count |
| --- | --- |
| Sections in `<main>` | 9 (hero, difference, products, approach, services, sectors incl. financial services, company, team, contact) |
| h1 / h2 / h3 / h4 | 1 / 9 / 22 / 10 |
| Stats and figures | 5 in difference, 3 in Atlas |
| Links (`<a>`) | 48 (header 11, mobile menu 9, hero 2, Atlas 3, Sonar 2, sectors 2, contact 2, footer 17) |
| Distinct external targets | 8 (learn.vonnewmanlearning.com, atlas.vonnewmanlearning.com, its /catalogue, linkedin.com, x.com, facebook.com, mailto, tel) |
| `<img>` elements / files | 12 / 9 |
| Form fields / select options | 6 + submit / 4 + 6 |
| Eyebrow labels | 10 |
| Middle-dot strings | 11 |

## 8. Middle-dot strings (punctuation treated as layout, see design plan)

1. `Lagos and London · Public and private sector`
2. `Atlas · 109+ courses`
3. `Sonar · every asset, one view`
4. `Learning platform · LMS and CMS`
5. `Hybrid infrastructure management · FinOps`
6. `Sector focus · Financial services`
7. `Lagos · Headquarters`
8. `United Kingdom · Delivery`
9. `No. 3 Jasmine Road, Ikota GRA, Lekki, Lagos · United Kingdom` (exception: two locations, rendered as two labelled rows, design plan open decision 2a)
10. `Von Newman Technology Consultants Ltd · RC 8840592, Nigeria`
11. `Lagos · London`

## 9. Observations (no action taken)

- No spelling errors found. Names, titles, addresses, RC number, phone and email were checked character by character.
- `Ltd` (contact) and `Limited` (footer) both appear in the source; both kept as written.
- Two h2s begin `Built for the realities of` (sectors and financial services). Kept as written.
- Legal links point at `#`; social links point at network home pages. Kept as written; README lists them as unfinished.
- The source ships a dark theme in CSS. BUILD.md section 6 says not to add one, so it is not carried over.
