import type { LinkItem } from "@/types/content";
import { site } from "./site";

export type FooterColumn = {
  title: string;
  links: LinkItem[];
};

export const footer = {
  descriptor:
    "Enterprise technology built around your organisation. Learning platforms, infrastructure intelligence and consulting, engineered between Lagos and London and adapted to each client we serve.",
  /** Rendered as separate items, not a dot-joined string. */
  places: ["Lagos", "London"] as const,
  legalLinks: [
    { label: "Privacy policy", href: "#" },
    { label: "Terms of service", href: "#" },
  ] satisfies LinkItem[],
} as const;

export const footerColumns: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Von Newman Atlas", href: "#atlas" },
      { label: "Atlas catalogue", href: site.urls.atlasCatalogue, external: true },
      { label: "Von Newman Sonar", href: "#sonar" },
      { label: "Custom builds", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "What makes us different", href: "#difference" },
      { label: "How we work", href: "#approach" },
      { label: "Sectors", href: "#sectors" },
      { label: "Leadership team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Sign in",
    links: [
      { label: "Atlas learners and admins", href: site.urls.atlasSignIn, external: true },
      { label: "Request Sonar access", href: "#contact" },
    ],
  },
  {
    title: "Follow",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com", external: true },
      { label: "X (Twitter)", href: "https://x.com", external: true },
      { label: "Facebook", href: "https://www.facebook.com", external: true },
    ],
  },
];
