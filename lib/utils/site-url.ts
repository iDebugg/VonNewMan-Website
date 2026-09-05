/**
 * Canonical origin for metadata and structured data. Set NEXT_PUBLIC_SITE_URL in the deployment
 * environment; the fallback is the company's existing domain.
 */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vonnewmanconsulting.com.ng",
);
