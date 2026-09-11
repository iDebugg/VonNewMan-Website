import type { LinkItem, MenuItem } from "@/types/content";
import { site } from "./site";

export type NavGroup = {
  label: string;
  items: MenuItem[];
};

export const productsMenu: NavGroup = {
  label: "Products",
  items: [
    {
      label: "Von Newman Atlas",
      href: "#atlas",
      description: "Manage staff learning, onboarding and compliance training.",
    },
    {
      label: "Von Newman Sonar",
      href: "#sonar",
      description: "See infrastructure resources, ownership and configuration.",
    },
    {
      label: "Custom solutions",
      href: "#services",
      description: "Software, cloud, networks and security for your operations.",
    },
  ],
};

/** Index at which the Products menu draws its divider (before "Custom builds"). */
export const productsMenuDividerBefore = 2;

export const primaryLinks: LinkItem[] = [
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Case studies", href: "/case-studies" },
  { label: "How we work", href: "#approach" },
  { label: "Company", href: "#company" },
];

/**
 * Removed from the header on 5 September 2026 at the client's instruction. Kept for the record;
 * both destinations remain in the footer's Sign in column.
 */
export const signInMenu: NavGroup = {
  label: "Sign in",
  items: [
    {
      label: "Sign in to Atlas",
      href: site.urls.atlasSignIn,
      external: true,
      description: "Learners and administrators.",
    },
    {
      label: "Sonar console",
      href: "#contact",
      description: "Access is issued per organisation. Request yours.",
    },
  ],
};

export const talkToUs: LinkItem = { label: "Discuss your project", href: "#contact" };

export type MobileGroup = {
  label: string;
  items: LinkItem[];
};

export const mobileMenu: MobileGroup[] = [
  {
    label: "Products",
    items: [
      { label: "Von Newman Atlas", href: "#atlas" },
      { label: "Von Newman Sonar", href: "#sonar" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "Services", href: "#services" },
      { label: "Sectors", href: "#sectors" },
      { label: "Case studies", href: "/case-studies" },
      { label: "How we work", href: "#approach" },
      { label: "Team and locations", href: "#company" },
    ],
  },
];

/** Removed from the mobile sheet with the header Sign in button, 5 September 2026 (client). */
export const mobileSignInGroup: MobileGroup = {
  label: "Sign in",
  items: [
    { label: "Sign in to Atlas", href: site.urls.atlasSignIn, external: true },
    { label: "Request Sonar access", href: "#contact" },
  ],
};

export const menuButtonLabels = { open: "Open menu", close: "Close menu" } as const;
