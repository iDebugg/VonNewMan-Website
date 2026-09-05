export type Stage = {
  slug: string;
  title: string;
  description: string;
};

export type OwnershipPoint = {
  title: string;
  description: string;
};

export const approach = {
  headline: "Four stages, in this order, on every engagement.",
  lede: "We immerse ourselves in your operating model before a line of configuration is written, and we stay after go-live to keep the platform moving with you.",
  quote:
    "If a feature would make the platform work better for your teams, we don't raise a ticket with a vendor. We build it.",
  quoteCaption: "The advantage of owning the product",
} as const;

export const stages: Stage[] = [
  {
    slug: "discover",
    title: "Discover",
    description:
      "On site with your teams, we learn your operating model, regulatory context and what success has to look like to your board.",
  },
  {
    slug: "adapt",
    title: "Adapt",
    description:
      "Our engineers tailor the product itself: features, dashboards, content, branding and policy logic built around how your institution actually works.",
  },
  {
    slug: "embed",
    title: "Embed",
    description:
      "Integration with identity, HR and core systems, plus change management, champion networks and training, so adoption sticks in every branch and team.",
  },
  {
    slug: "evolve",
    title: "Evolve",
    description:
      "A living roadmap shaped by your KPIs: continuous releases, tested improvements and quarterly reviews with your leadership. Not an annual upgrade bill.",
  },
];

export const ownershipPoints: OwnershipPoint[] = [
  {
    title: "Full product ownership",
    description:
      "We build and evolve Atlas and Sonar in-house. No third-party licence limits what can change for you.",
  },
  {
    title: "Security-first engineering",
    description: "Role-based access, audit trails and DevSecOps pipelines in every release cycle.",
  },
  {
    title: "Nigerian depth, UK discipline",
    description:
      "Designed for the Nigerian market, delivered to UK enterprise and public-sector standards.",
  },
  {
    title: "Measurable outcomes",
    description:
      "Every engagement is anchored to KPIs your board recognises: adoption, competency, cost and compliance.",
  },
];
