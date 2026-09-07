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
  /** Client wording, 8 September 2026. */
  kicker: "From product design to cloud delivery",
  headline: "Beyond the products: end-to-end capability.",
  lede: "From in-house software engineering to zero-trust networks, we deliver across every layer of your digital estate. As a full build, a managed service, or an extension of your own teams.",
} as const;

export const practices: Practice[] = [
  {
    slug: "software-development",
    title: "Software development",
    description:
      "Custom web, mobile, AI and enterprise applications. API and systems integration. Automation and workflow tooling aligned to your strategic goals.",
  },
  {
    slug: "lms-engineering",
    title: "LMS engineering",
    description:
      "We don't just implement learning platforms, we build and evolve them: microservices, API-first, cloud-native, with DevSecOps in every release.",
  },
  {
    slug: "doc2video",
    title: "Doc2Video digitisation",
    description:
      "Our studio converts manuals, policies and legacy materials into engaging video, interactive eLearning and microlearning. Accessible and localised.",
  },
  {
    slug: "hr-performance",
    title: "HR and performance systems",
    description:
      "Smart workforce tools for reviews, competency mapping and performance data that connect directly to learning outcomes.",
  },
  {
    slug: "cloud",
    title: "Cloud services",
    description:
      "Scalable architecture, migration and ongoing management across Azure, AWS and Google Cloud, with auto-scaling and disaster recovery built in.",
  },
  {
    slug: "network-infrastructure",
    title: "Network and infrastructure",
    description:
      "Reliable enterprise networks, identity and access management, and end-user computing for organisations that cannot afford downtime.",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Secure architectures, role-based access, full audit trails and hardened delivery pipelines that protect your digital assets from modern threats.",
  },
  {
    slug: "advanced-technology",
    title: "Advanced technology",
    description:
      "Applied AI, data-driven platforms and advanced engineering, including defence and space technology innovation.",
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
