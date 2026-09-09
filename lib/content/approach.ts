export type Stage = {
  slug: string;
  title: string;
  description: string;
};

export type OwnershipPoint = {
  slug: string;
  title: string;
  description: string;
};

export const approach = {
  headline: "A clear process from discovery to ongoing support.",
  lede: "Understand the problem, shape the solution, help your teams adopt it and review progress against agreed measures.",
  quote:
    "If a feature would make the platform work better for your teams, we don't raise a ticket with a vendor. We build it.",
  quoteCaption: "The advantage of owning the product",
} as const;

export const stages: Stage[] = [
  {
    slug: "discover",
    title: "Discover",
    description:
      "Review your workflows, regulatory context and priorities. Agree what success should look like.",
  },
  {
    slug: "adapt",
    title: "Adapt",
    description: "Shape the solution, workflows and policy rules around your organisation.",
  },
  {
    slug: "embed",
    title: "Embed",
    description: "Integrate the system, train your teams and support day-to-day adoption.",
  },
  {
    slug: "evolve",
    title: "Evolve",
    description:
      "Review progress against agreed measures and prioritise improvements after go-live.",
  },
];

export const ownershipPoints: OwnershipPoint[] = [
  {
    slug: "ownership",
    title: "Full product ownership",
    description:
      "We build and evolve Atlas and Sonar in-house. No third-party licence limits what can change for you.",
  },
  {
    slug: "security",
    title: "Security-first engineering",
    description: "Role-based access, audit trails and DevSecOps pipelines in every release cycle.",
  },
  {
    slug: "markets",
    title: "Nigerian depth, UK discipline",
    description:
      "Designed for the Nigerian market, delivered to UK enterprise and public-sector standards.",
  },
  {
    slug: "outcomes",
    title: "Measurable outcomes",
    description:
      "Every engagement is anchored to KPIs your board recognises: adoption, competency, cost and compliance.",
  },
];
