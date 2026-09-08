import type { ImageAsset } from "@/types/content";

export type SystemShowcaseItem = {
  slug: "atlas-cms" | "atlas-lms" | "compass" | "hr-performance" | "sonar";
  title: string;
  category: string;
  product: string;
  description: string;
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
    visual: "compass",
  },
  {
    slug: "hr-performance",
    title: "HR performance systems",
    category: "People intelligence",
    product: "Consulting systems",
    description:
      "Workforce platforms that surface staff and team statistics for administrators, managers and executive leadership.",
    visual: "performance",
  },
  {
    slug: "sonar",
    title: "Von Newman Sonar",
    category: "Technology estate",
    product: "Sonar",
    description:
      "Asset visibility across an organisation’s infrastructure and code resources, giving technology teams one place to understand what they operate.",
    image: {
      src: "/assets/sonar-inventory.jpg",
      alt: "Sonar inventory interface showing technology assets across an organisation",
      width: 1400,
      height: 770,
    },
  },
];
