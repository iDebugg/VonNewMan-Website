import type { ImageAsset, LinkItem, SplitLabel } from "@/types/content";

export type SectorTag = "Atlas" | "Software" | "Sonar" | "Delivery";

export type SectorItem = {
  title: string;
  tag: SectorTag;
  description: string;
};

export type SectorPanel = {
  id: "public" | "private";
  tab: string;
  heading: string;
  lede: string;
  cta: LinkItem;
  /** Human-centred editorial image representing the sector. */
  image: ImageAsset;
  items: SectorItem[];
};

export type FinancialBlock = {
  label: string;
  title: string;
  description: string;
};

export type PilotPhase = {
  weeks: string;
  /** Duration in weeks, used for proportional column widths. */
  duration: number;
  title: string;
  description: string;
};

export const sectors = {
  headline: "Built for the realities of both sectors.",
  lede: "We understand Nigeria's regulators, its infrastructure realities and its people, and we adapt our platforms to each institution rather than asking the institution to adapt to us.",
  tablistLabel: "Choose a sector",
} as const;

export const sectorPanels: SectorPanel[] = [
  {
    id: "public",
    tab: "Public sector",
    heading: "Ministries, agencies and local government.",
    lede: "Public institutions need platforms that respect procurement, policy and accountability, and that work for staff in every office, not just headquarters. We design for all of that from the start.",
    cta: { label: "Discuss a public sector programme", href: "#contact" },
    image: {
      src: "/assets/public-sector-consulting.jpg",
      alt: "Public-sector leaders and technology consultants reviewing a service workflow together",
      width: 1672,
      height: 941,
    },
    items: [
      {
        title: "Workforce learning at scale",
        tag: "Atlas",
        description:
          "Induction, conditions of service, governance, ethics and revenue administration pathways, delivered to every department with completion evidence.",
      },
      {
        title: "Custom digital services",
        tag: "Software",
        description:
          "Citizen-facing portals, case management, records and workflow systems built around your mandates and your existing processes.",
      },
      {
        title: "Estate visibility and cost control",
        tag: "Sonar",
        description:
          "One view across data centres, cloud and regional sites, with budgets and evidence your auditors and the public accounts committee will accept.",
      },
      {
        title: "Standards you can point to",
        tag: "Delivery",
        description:
          "UK public-sector delivery discipline, WCAG accessibility and NDPA-conscious data handling as standard.",
      },
    ],
  },
  {
    id: "private",
    tab: "Private sector",
    heading: "Banks, insurers and growing enterprises.",
    lede: "Private organisations need speed without losing control: compliance that holds up to examiners, cloud spend that makes sense in naira, and software that gives them an edge rather than a template.",
    cta: { label: "Discuss an enterprise engagement", href: "#contact" },
    image: {
      src: "/assets/private-sector-consulting.jpg",
      alt: "Banking and enterprise leaders reviewing operational data with a technology consultant",
      width: 1672,
      height: 941,
    },
    items: [
      {
        title: "Compliance and conduct learning",
        tag: "Atlas",
        description:
          "AML/CFT awareness, conduct, cyber hygiene, service excellence and leadership programmes co-designed with your L&D and compliance teams.",
      },
      {
        title: "Bespoke applications",
        tag: "Software",
        description:
          "Customer platforms, integrations and automation aligned to strategy, not off-the-shelf modules you have to work around.",
      },
      {
        title: "Naira-aware FinOps",
        tag: "Sonar",
        description:
          "Dollar-billed cloud against naira budgets: dual-currency reporting, FX exposure views and cost narratives your CFO will actually use.",
      },
      {
        title: "Resilience and evidence",
        tag: "Sonar",
        description:
          "Capacity planning for month-end and salary-day peaks, recovery drills for critical services and audit-ready evidence packs for examiners.",
      },
    ],
  },
];

export const financialServices = {
  kicker: { primary: "Sector focus", secondary: "Financial services" } satisfies SplitLabel,
  headline: "Built for the realities of Nigerian banking.",
  closing:
    "Every partnership includes a dedicated delivery lead, quarterly roadmap reviews, local support in Lagos, training and change management, and SLA-backed operations.",
} as const;

export const financialBlocks: FinancialBlock[] = [
  {
    label: "People",
    title: "Compliance learning at scale",
    description:
      "Induction, conduct, AML/CFT awareness and cyber hygiene delivered through Atlas to every branch, with completion evidence your compliance team can stand behind.",
  },
  {
    label: "Infrastructure",
    title: "Hybrid estates, one view",
    description:
      "Branches, data centres and cloud in a single Sonar console. Discovered, governed and recoverable, whatever mix of stacks you run today.",
  },
  {
    label: "Cost",
    title: "Naira-aware FinOps",
    description:
      "Dual-currency reporting, FX exposure views and board-ready cost narratives for dollar-billed cloud against naira budgets.",
  },
  {
    label: "Trust",
    title: "Data protection and audit",
    description:
      "NDPA-conscious data handling, role-based access and full audit trails, with evidence mapped to the frameworks your examiners ask about.",
  },
];

export const pilotPhases: PilotPhase[] = [
  {
    weeks: "Weeks 1 to 4",
    duration: 4,
    title: "Discovery",
    description: "With your L&D, IT and compliance leads. Success measures agreed.",
  },
  {
    weeks: "Weeks 5 to 10",
    duration: 6,
    title: "Tailored pilot, live",
    description: "One Atlas learning cohort, one Sonar estate view, your branding.",
  },
  {
    weeks: "Weeks 11 to 13",
    duration: 3,
    title: "Results review",
    description: "Against agreed KPIs. Scale plan and commercial model for full rollout.",
  },
];
