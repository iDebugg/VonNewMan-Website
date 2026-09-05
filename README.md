# Von Newman Technology Consultants

Marketing site, rebuilt as a Next.js 16 App Router application with TypeScript (strict) and Tailwind CSS v4. Single page with anchor navigation. Every word, link and image is the content the client signed off on; the design direction and its rationale are in `docs/01-design-plan.md`.

## Run

```bash
npm install
npm run dev
```

Production:

```bash
npm run build && npm start
```

## Checks

| Command | What it does |
| --- | --- |
| `npm run lint` | ESLint (Next core web vitals, TypeScript, no `any`) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run format:check` | Prettier |
| `node scripts/check-content.mjs` | Every string in `lib/content` exists verbatim in the original site |
| `node scripts/walk-inventory.mjs <url>` | Every inventory item appears on the rendered page |
| `node scripts/shot.mjs <url> <dir> [widths]` | Device-emulated screenshots and overflow, heading and label checks |

## Structure

```
app/            layout (fonts, metadata, JSON-LD), page, globals.css (tokens only), OG image
components/     layout (header, menus, footer), sections (one per section), ui (primitives)
lib/content/    typed content modules, one per section, verbatim from the inventory
lib/actions/    enquiry validation and the send abstraction
lib/utils/      cn(), site URL
public/assets/  images
docs/           BUILD.md deliverables: inventory, design plan, final report
docs/source/    the original static site, kept as the content source of record
scripts/        verification tooling
```

## Styling

Design tokens live in `app/globals.css` under `@theme` (colours, type scale, radii, shadows, container). Components use Tailwind utilities only; no hex values appear in components. Dark grounds set `data-ground="dark"` so the focus ring switches to paper.

## Configuration

`NEXT_PUBLIC_SITE_URL` sets the canonical origin for metadata and structured data. Without it the site falls back to `https://vonnewmanconsulting.com.ng`.

## Contact form

Composes a `mailto:` to the company address after client-side validation, exactly as the original site did. `lib/actions/enquiry.ts` exposes an `EnquirySender` interface so a provider-backed Server Action can replace the mailto sender without touching the form component.
