export type Pillar = {
  slug: string;
  title: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};

export const difference = {
  /** Two sentences, set on two lines. */
  headline: ["We solve problems.", "We don't paper over them."] as const,
  lede: "Most vendors hand you a licence and a manual. We own the architecture and roadmap of everything we build, so we reshape it around your workflows, your policies, your brand and your regulators.",
} as const;

export const pillars: Pillar[] = [
  {
    slug: "custom-built",
    title: "Custom-built for every client",
    description:
      "Nothing we deliver is a generic install. Features, dashboards, content and policy logic are engineered around how your organisation actually works.",
  },
  {
    slug: "both-sectors",
    title: "Public sector and private sector, equally",
    description:
      "Ministries, agencies and local government on one side. Banks, insurers and enterprises on the other. We have delivered for both, in Nigeria and the UK, and we speak both languages.",
  },
  {
    slug: "market-experience",
    title: "Deep market experience",
    description:
      "Our consultants have delivered for global enterprises including HP and LexisNexis. We bring that discipline to every engagement, with content, pricing and support designed for the Nigerian market.",
  },
  {
    slug: "own-products",
    title: "A consultancy that builds its own products",
    description:
      "Atlas and Sonar are ours, end to end. If a feature would make the platform work better for your teams, we don't raise a ticket with a vendor. We build it.",
  },
];

export const stats: Stat[] = [
  { value: "2", label: "Markets: Nigeria and the UK" },
  { value: "8", label: "Practice areas" },
  { value: "2", label: "In-house products" },
  { value: String(atlasStats.courses), label: "Courses live on Atlas" },
  { value: "90", label: "Days to a measurable first result" },
];
import { atlasStats } from "./atlas";
