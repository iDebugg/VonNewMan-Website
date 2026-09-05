# Final report: Von Newman Technology Consultants rebuild

5 September 2026. Phase 8 of BUILD.md. Repository state: branch `master`, all phases committed.

## Definition of done

| Requirement | Result |
| --- | --- |
| `next build` with zero errors and zero warnings | Pass |
| `eslint .` clean, zero `any` | Pass |
| `tsc --noEmit` strict, `noUncheckedIndexedAccess` | Pass |
| Prettier | Pass |
| Every inventory item accounted for | Pass, see below |
| Every anchor resolves | Pass, 11 of 11 |
| Keyboard-navigable end to end | Pass: skip link, disclosure menus, dialog sheet, tablist, form |
| No green as a full-section background | Pass: forest appears once, on Locations, as the single dark section the plan allowed |

## Lighthouse (production build, `next start`)

| | Performance | Accessibility | Best practices | SEO |
| --- | --- | --- | --- | --- |
| Desktop | 100 | 100 | 100 | 100 |
| Mobile | 95 | 100 | 100 | 100 |

Re-measured on 5 September 2026 after the hero became a looping background video at the client's instruction: desktop unchanged at 100 across the board, mobile 91 / 100 / 100 / 100. The remaining mobile cost is a full-viewport LCP image under throttled CPU. Showing the poster only on phones, without loading the video, would recover the earlier score.

## Content re-walk

`node scripts/walk-inventory.mjs` reads every backticked string in `docs/00-content-inventory.md` sections 1 to 3 and looks for it in the rendered page. `node scripts/check-content.mjs` does the reverse: every string in `lib/content` must exist in the original `index.html` or `script.js`.

- 317 inventory strings checked, 300 present verbatim.
- 11 middle-dot strings: the dot glyph is removed and both halves are present (approved, design plan open decision 2 and 2a).
- 4 eyebrows cut: `Our platforms`, `Who we work with`, `Where we are`, `Next steps` (approved, open decision 1). The other two named tells, `What makes us different` and `How we work`, still appear as footer and navigation links, which is why they are not in the missing list.
- 2 strings live only in the submit behaviour: the mailto subject template `Enquiry from {org | name | website}` and the post-submit note `Your email app should open with the message ready to send.` Both are implemented in `lib/actions/enquiry.ts` and `components/sections/ContactForm.tsx`.
- 391 content-module strings checked against the source: all present verbatim.
- Attributes: every alt text, aria-label, the `tel:` and `mailto:` links and `lang="en-GB"` are present.
- Assets: all 9 used images referenced, plus the approved white wordmark in the footer. `atlas-catalogue.jpg` and `sonar-terraform.jpg` are carried into `public/assets` but not placed, as agreed.
- Nothing was reworded. No typos were found in the source, so none were fixed.
- Removed on 5 September 2026 at the client's instruction: the two hero screenshots, their alt text, the collage label and the two captions `Atlas · 109+ courses` and `Sonar · every asset, one view`. The re-walk reports these as REMOVED rather than missing.

## Anchors

| Target | Resolves | Inbound links |
| --- | --- | --- |
| `#top` | yes | 3 |
| `#difference` | yes | 1 |
| `#products` | yes | 1 |
| `#atlas` | yes | 3 |
| `#sonar` | yes | 3 |
| `#approach` | yes | 3 |
| `#services` | yes | 4 |
| `#sectors` | yes | 3 |
| `#company` | yes | 2 |
| `#team` | yes | 1 |
| `#contact` | yes | 11 |

Every section target carries `scroll-margin-top` equal to the header height. External targets are unchanged from the source: `learn.vonnewmanlearning.com`, `atlas.vonnewmanlearning.com` and its `/catalogue`, `linkedin.com`, `x.com`, `facebook.com`. The two legal links still point at `#`, as in the source.

## Responsive

Checked with `node scripts/shot.mjs` (Chrome DevTools Protocol, device emulation) at 360, 768, 1024 and 1440. No horizontal overflow at any width. The mega-menus, the tablist, the stat rows, the products pair and the pilot timeline were inspected at each width.

## Accessibility

One `h1`; `h2` per section; `h3` and `h4` nested in order. Landmarks: header, primary nav, mobile nav inside a native `dialog`, main, footer. Skip link. Visible focus ring everywhere, brand green on light grounds and paper on the two dark grounds via `data-ground="dark"`. Reduced motion zeroes every transition. Every image has alt text; every form control has a label; errors are tied to inputs with `aria-describedby` and `aria-invalid`. Contrast is AA or better on every text and ground combination in the token table.

## Decisions taken during the build

Recorded in `docs/01-design-plan.md`, section 9a. In short: a lower display cap so the hero's second sentence holds one line; two extra type-scale steps; a 50/50 Difference grid; footer strip stacking below 640px; only the Atlas hero image preloaded at high priority, with synchronous decode; Next 16's `preload` prop in place of the deprecated `priority`.

## Contact form

Option 2 as agreed on 5 September 2026. The form keeps the `mailto:` handoff and the two original strings, character for character. Added: client-side validation with three error strings (`Enter your name`, `Enter your work email address`, `Enter an email address in the correct format, like name@organisation.com`), a honeypot field that drops the submit silently, focus moved to the first invalid field, and an `EnquirySender` interface in `lib/actions/enquiry.ts` so a provider-backed Server Action can replace the mailto sender without touching the component.

## Open items for the client

1. Production domain. `NEXT_PUBLIC_SITE_URL` sets the canonical origin, OpenGraph URL and JSON-LD ids; the fallback is `https://vonnewmanconsulting.com.ng`.
2. Privacy policy and Terms of service pages. Links remain `#` as in the source.
3. Social links point at network home pages, as in the source.
4. Sonar console URL. `Request console access` and the Sign in menu entry point at `#contact`, as in the source.
5. Email provider for the contact form, when one exists.

## Dependencies added

`next`, `react`, `react-dom`, `typescript`, `tailwindcss`, `@tailwindcss/postcss`, `eslint`, `eslint-config-next`, `typescript-eslint`, `prettier`, and the three `@types` packages. All named in BUILD.md. Zod was not needed because no Server Action was built. No component library, no animation library, no class-name utility library.

## Running it

```bash
npm install
npm run dev
```

```bash
npm run build && npm start
```

Checks: `npm run lint`, `npm run typecheck`, `npm run format:check`, `node scripts/check-content.mjs`, and with a server running, `node scripts/walk-inventory.mjs http://localhost:3000/` and `node scripts/shot.mjs http://localhost:3000/ shots`.
