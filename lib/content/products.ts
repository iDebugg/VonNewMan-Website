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
  headline: "Two products we own outright, and shape around you.",
  lede: "Adopt them in full, license the content into your own systems, or let us adapt them until they feel like they were built in-house. Because for you, they were.",
} as const;

export const atlas: Product = {
  id: "atlas",
  name: "Von Newman Atlas",
  subline: { primary: "Learning platform", secondary: "LMS and CMS" },
  badge: "Live",
  positioning: "Learning, beautifully connected.",
  description:
    "Onboarding, upskilling, compliance and certification for public and private sector teams, measured in one place and localised for Nigerian organisations.",
  figures: [
    { value: "25", label: "Structured pathways" },
    { value: "109+", label: "Courses, growing quarterly" },
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
  actions: [
    { label: "Visit Atlas", href: site.urls.atlas, external: true },
    { label: "Sign in", href: site.urls.atlasSignIn, external: true },
    { label: "Browse the catalogue", href: site.urls.atlasCatalogue, external: true },
  ],
  image: {
    src: "/assets/atlas-home.jpg",
    alt: "Atlas home page showing pathways, progress and a request-a-demo button",
    width: 1400,
    height: 875,
  },
};

export const sonar: Product = {
  id: "sonar",
  name: "Von Newman Sonar",
  subline: { primary: "Hybrid infrastructure management", secondary: "FinOps" },
  badge: "Cloud inventory",
  positioning: "See your entire estate, control every naira.",
  description:
    "Sonar continuously maps every asset you run, across every cloud and every data centre, then keeps it governed, resilient and cost-optimised.",
  platformsLabel: "Works with",
  platforms: ["AWS", "Azure", "Google Cloud", "VMware", "Nutanix", "Kubernetes", "Bare metal"],
  features: [
    { lead: "One view of everything.", text: "Continuous discovery and dependency mapping." },
    {
      lead: "Drift and codification.",
      text: "Unmanaged resources become clean, reviewed Terraform.",
    },
    {
      lead: "Guardrails and evidence.",
      text: "Audit-ready, aligned to ISO 27001, SOC 2 and CBN IT guidance.",
    },
    { lead: "Resilience.", text: "Restore whole environments to last-known-good in minutes." },
    {
      lead: "Cloud FinOps.",
      text: "Dual-currency ₦/$ visibility, budgets, rightsizing, chargeback.",
    },
    { lead: "Safe self-service.", text: "Reusable provisioning patterns inside your guardrails." },
  ],
  actions: [
    { label: "Request a Sonar demo", href: "#contact" },
    { label: "Request console access", href: "#contact" },
  ],
  image: {
    src: "/assets/sonar-inventory.jpg",
    alt: "Sonar cloud inventory listing managed and unmanaged resources across AWS accounts",
    width: 1400,
    height: 770,
  },
};

export const products: Product[] = [atlas, sonar];
