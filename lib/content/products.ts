import type { ImageAsset, LinkItem, SplitLabel } from "@/types/content";
import { site } from "./site";

export type Feature = {
  lead: string;
  text: string;
};

export type Figure = {
  value: string;
  label: string;
};

export type Product = {
  id: "atlas" | "sonar";
  name: string;
  subline: SplitLabel;
  badge: string;
  /** The first sentence of the lede, the positioning line, then the rest. */
  positioning: string;
  description: string;
  figures?: Figure[];
  platforms?: string[];
  platformsLabel?: string;
  features: Feature[];
  actions: LinkItem[];
  image: ImageAsset;
};

export const productsIntro = {
  headline: "Two products. Practical tools for your organisation.",
  lede: "We develop Atlas for workforce learning and Sonar for infrastructure visibility, with adaptations to suit your operations.",
} as const;

export const atlas: Product = {
  id: "atlas",
  name: "Von Newman Atlas",
  subline: { primary: "Learning platform", secondary: "LMS and CMS" },
  badge: "Live",
  positioning: "Manage staff learning in one place.",
  description:
    "Deliver onboarding, skills development, compliance and certification training. Track learning in one platform, with content localised for Nigerian organisations.",
  figures: [
    { value: "25", label: "learning pathways" },
    { value: "209", label: "courses" },
    { value: "NG", label: "Localised content" },
  ],
  features: [
    {
      lead: "Guided pathways.",
      text: "Role-relevant programmes with prerequisites and visible progress.",
    },
    { lead: "Verified outcomes.", text: "Lesson checks, module gates and trusted certificates." },
    { lead: "Workforce analytics.", text: "Track departments, overdue learning and credentials." },
    { lead: "Content studio.", text: "Doc2Video, SCORM and xAPI, microlearning, localisation." },
    { lead: "Intelligent.", text: "Recommendations, skill-gap insight and gamification." },
    {
      lead: "Atlas, or your LMS.",
      text: "License our content securely into your existing platform.",
    },
  ],
  /** "Sign in" and "Browse the catalogue" removed 5 September 2026 (client); both remain in the footer. */
  actions: [{ label: "Explore Atlas", href: site.urls.atlas, external: true }],
  image: {
    src: "/assets/atlas-lms-selected-work.png",
    alt: "Von Newman Atlas learning management system visual",
    width: 1672,
    height: 941,
  },
};

export const sonar: Product = {
  id: "sonar",
  name: "Von Newman Sonar",
  subline: { primary: "Hybrid infrastructure management", secondary: "FinOps" },
  /** Was "Cloud inventory"; changed to "Live" on 5 September 2026 (client) with the new screenshot. */
  badge: "Live",
  positioning: "Know what infrastructure you run and who owns it.",
  description:
    "Map infrastructure resources, connect them to responsible teams and review unmanaged configurations. Give your team a clearer basis for governance and cost decisions.",
  platformsLabel: "Works with",
  platforms: ["AWS", "Azure", "Google Cloud", "VMware", "Nutanix", "Kubernetes", "Bare metal"],
  features: [
    {
      lead: "Discover resources",
      text: "Map infrastructure across supported accounts and regions.",
    },
    {
      lead: "Assign ownership",
      text: "Link resources to teams, services and policies.",
    },
    {
      lead: "Review configuration",
      text: "Bring unmanaged resources into a reviewed Terraform configuration.",
    },
    { lead: "Resilience.", text: "Restore whole environments to last-known-good in minutes." },
    {
      lead: "Cloud FinOps.",
      text: "Dual-currency ₦/$ visibility, budgets, rightsizing, chargeback.",
    },
    { lead: "Safe self-service.", text: "Reusable provisioning patterns inside your guardrails." },
  ],
  /** "Request console access" removed 5 September 2026 (client); "Request Sonar access" remains in the footer. */
  actions: [{ label: "Request a Sonar demo", href: "#contact" }],
  /** Screenshot replaced 5 September 2026 (client): the Sonar product homepage. */
  image: {
    src: "/assets/sonar-selected-work.png",
    alt: "Von Newman Sonar infrastructure reconciliation visual",
    width: 1600,
    height: 900,
  },
};

export const products: Product[] = [atlas, sonar];
