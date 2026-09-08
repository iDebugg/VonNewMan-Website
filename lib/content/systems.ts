import type { ImageAsset } from "@/types/content";

export type SystemShowcaseItem = {
  slug: "atlas-cms" | "atlas-lms" | "compass" | "hr-performance" | "sonar";
  title: string;
  category: string;
  product: string;
  description: string;
  overview: string;
  role: string;
  capabilities: string[];
  image?: ImageAsset;
  visual?: "compass" | "performance";
};

export const systemsShowcase = {
  headline: "Systems our teams have worked on.",
  intro:
    "A view of platforms we have designed, built, evolved or advised on — across learning, people, election operations and infrastructure visibility.",
} as const;

export const systems: SystemShowcaseItem[] = [
  {
    slug: "atlas-cms",
    title: "Atlas CMS",
    category: "Content operations",
    product: "Atlas",
    description:
      "The content management system that holds courses for public- and private-sector programmes and publishes them into Atlas LMS.",
    overview:
      "Atlas CMS gives content teams a structured place to organise courses before they reach learners. It supports the publishing relationship between course operations and the Atlas learning environment.",
    role: "Content-system design, product engineering and integration with Atlas LMS.",
    capabilities: ["Course catalogue management", "Content publishing", "LMS integration"],
    image: {
      src: "/assets/atlas-catalogue.jpg",
      alt: "Atlas course catalogue and content management interface",
      width: 1400,
      height: 525,
    },
  },
  {
    slug: "atlas-lms",
    title: "Atlas LMS",
    category: "Learning delivery",
    product: "Atlas",
    description:
      "A multi-organisation learning management system where institutions deliver, manage and measure learning for their teams.",
    overview:
      "Atlas LMS is built for organisations that need one learning platform while preserving the structure of their individual teams and programmes. Learners access courses while administrators coordinate delivery and track participation.",
    role: "Learning-platform strategy, product design, engineering and ongoing development.",
    capabilities: ["Multi-organisation delivery", "Learning pathways", "Progress visibility"],
    image: {
      src: "/assets/atlas-home.jpg",
      alt: "Atlas multi-organisation learning management dashboard",
      width: 1400,
      height: 875,
    },
  },
  {
    slug: "compass",
    title: "Von Newman Compass",
    category: "Election operations",
    product: "Compass",
    description:
      "An election management and monitoring application that gives operational teams a shared view of activity and progress.",
    overview:
      "Von Newman Compass brings election operations and monitoring into a shared digital environment. It is intended to help authorised teams coordinate activity and maintain a clearer operational picture.",
    role: "Application consulting, workflow design and system delivery.",
    capabilities: ["Election operations", "Activity monitoring", "Shared operational visibility"],
    visual: "compass",
  },
  {
    slug: "hr-performance",
    title: "HR performance systems",
    category: "People intelligence",
    product: "Consulting systems",
    description:
      "Workforce platforms that surface staff and team statistics for administrators, managers and executive leadership.",
    overview:
      "These performance systems organise workforce information for different levels of an organisation. Staff, administrators and executives can work from views suited to their responsibilities and decisions.",
    role: "Performance-workflow consulting, interface design and application engineering.",
    capabilities: ["Staff-level views", "Administrative reporting", "Executive visibility"],
    visual: "performance",
  },
  {
    slug: "sonar",
    title: "Von Newman Sonar",
    category: "Technology estate",
    product: "Sonar",
    description:
      "Asset visibility across an organisation’s infrastructure and code resources, giving technology teams one place to understand what they operate.",
    overview:
      "Von Newman Sonar is designed to make an organisation’s technology estate easier to understand. It brings infrastructure, ownership and code-related resources into a clearer operational view.",
    role: "Technology-estate modelling, product engineering and infrastructure consulting.",
    capabilities: ["Asset discovery", "Ownership visibility", "Infrastructure and code context"],
    image: {
      src: "/assets/sonar-inventory.jpg",
      alt: "Sonar inventory interface showing technology assets across an organisation",
      width: 1400,
      height: 770,
    },
  },
];
