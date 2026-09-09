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
  objectives: string[];
  image?: ImageAsset;
  carouselImage?: ImageAsset;
  visual?: "compass" | "performance";
};

export const systemsShowcase = {
  headline: "Explore systems our teams have worked on.",
  intro:
    "Examples of our teams’ design, engineering and advisory work across learning, workforce management, election operations and infrastructure.",
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
    objectives: [
      "Give content teams one structured course catalogue.",
      "Keep content operations connected to learning delivery.",
      "Publish approved course material into Atlas LMS.",
    ],
    image: {
      src: "/assets/atlas-cms-selected-work.png",
      alt: "Von Newman Atlas course management system visual",
      width: 1672,
      height: 941,
    },
    carouselImage: {
      src: "/assets/atlas-cms-selected-work.png",
      alt: "Von Newman Atlas course management system visual",
      width: 1672,
      height: 941,
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
    objectives: [
      "Support learning across multiple organisations.",
      "Bring courses and pathways into one learner experience.",
      "Give administrators clearer participation and progress visibility.",
    ],
    image: {
      src: "/assets/atlas-lms-selected-work.png",
      alt: "Von Newman Atlas learning management system visual",
      width: 1672,
      height: 941,
    },
    carouselImage: {
      src: "/assets/atlas-lms-selected-work.png",
      alt: "Von Newman Atlas learning management system visual",
      width: 1672,
      height: 941,
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
    objectives: [
      "Bring election activity into a shared operational environment.",
      "Help authorised teams monitor progress as work unfolds.",
      "Create a clearer view for coordination and decision-making.",
    ],
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
    objectives: [
      "Organise workforce information around each level of responsibility.",
      "Make staff and team statistics easier to interpret.",
      "Support administrative and executive performance decisions.",
    ],
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
    objectives: [
      "Create one view of infrastructure and code-related resources.",
      "Make technology ownership and operating context easier to understand.",
      "Help teams see the estate they are responsible for.",
    ],
    image: {
      src: "/assets/sonar-selected-work.png",
      alt: "Von Newman Sonar infrastructure reconciliation visual",
      width: 1600,
      height: 900,
    },
    carouselImage: {
      src: "/assets/sonar-selected-work.png",
      alt: "Von Newman Sonar infrastructure reconciliation visual",
      width: 1600,
      height: 900,
    },
  },
];
