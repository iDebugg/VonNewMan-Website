export type Practice = {
  slug: string;
  title: string;
  description: string;
};

export type EngagementPanel = {
  title: string;
  description: string;
  items: string[];
};

export const services = {
  kicker: "Technology services",
  headline: "Technology services for day-to-day operations and long-term change.",
  lede: "Build software, connect systems, deliver staff learning and strengthen the infrastructure your organisation relies on.",
} as const;

export const practices: Practice[] = [
  {
    slug: "software-development",
    title: "Software development",
    description: "Build applications, connect existing systems and automate manual workflows.",
  },
  {
    slug: "lms-engineering",
    title: "Learning management systems",
    description:
      "Build and adapt platforms to manage courses, deliver training and track learning.",
  },
  {
    slug: "doc2video",
    title: "Documents to video",
    description:
      "Turn policies and manuals into digital learning that staff can understand and use.",
  },
  {
    slug: "hr-performance",
    title: "HR and performance systems",
    description: "Connect employee performance, skills and learning in workforce management tools.",
  },
  {
    slug: "cloud",
    title: "Cloud services",
    description: "Plan cloud architecture, migrate systems and support operations and recovery.",
  },
  {
    slug: "network-infrastructure",
    title: "Networks and infrastructure",
    description:
      "Design and manage networks, identity systems and the technology staff use every day.",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Strengthen system design, control access and prepare technical evidence for audits.",
  },
  {
    slug: "advanced-technology",
    title: "AI, data and specialist engineering",
    description: "Apply AI and data platforms to defined business problems.",
  },
];

export const engagementPanels: EngagementPanel[] = [
  {
    title: "How we engage",
    description:
      "Fixed-scope builds, managed services, product licensing or team augmentation. Commercial models shaped around your procurement, in naira or sterling.",
    items: ["Fixed scope", "Managed service", "Licensing", "Team augmentation"],
  },
  {
    title: "Delivery standards",
    description:
      "Agile sprint delivery with CI/CD and DevSecOps, WCAG-aligned accessibility, and programmes led by PRINCE2 and Agile-qualified practitioners.",
    items: ["Agile and CI/CD", "DevSecOps", "WCAG", "PRINCE2"],
  },
];
