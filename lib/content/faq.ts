export type FaqItem = {
  question: string;
  answer: string;
};

export const faq = {
  headline: "Questions before we begin.",
  intro:
    "A few practical answers about working with Von Newman. If your question is more specific, start a conversation with the team.",
} as const;

export const faqItems: FaqItem[] = [
  {
    question: "Do you only implement Atlas and Sonar?",
    answer:
      "No. We deliver custom software, cloud, network, security, learning and workforce systems. Atlas and Sonar are products we own and can include when they are the right fit.",
  },
  {
    question: "Can you adapt your products to our organisation?",
    answer:
      "Yes. We own the architecture and roadmap of Atlas and Sonar, so features, dashboards, content, branding and policy logic can be shaped around your operating model.",
  },
  {
    question: "Do you work with public and private-sector organisations?",
    answer:
      "Yes. We work with ministries, agencies and local government as well as banks, insurers and enterprises, with delivery experience in Nigeria and the United Kingdom.",
  },
  {
    question: "How can an engagement start?",
    answer:
      "It usually begins with a conversation and discovery. A focused 90-day pilot can then establish agreed measures, test a tailored solution and define a scale plan.",
  },
  {
    question: "What commercial models do you offer?",
    answer:
      "Engagements can be structured as fixed-scope builds, managed services, product licensing or team augmentation, with commercial models shaped around procurement requirements.",
  },
  {
    question: "Where is Von Newman based?",
    answer:
      "Our headquarters is in Lagos, with United Kingdom delivery capability across London and the South East.",
  },
];
