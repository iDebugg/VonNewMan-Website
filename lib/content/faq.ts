export type FaqItem = {
  question: string;
  answer: string;
};

export const faq = {
  headline: "Before you start.",
  intro: "Answers about our services, product adaptations and engagement options.",
} as const;

export const faqItems: FaqItem[] = [
  {
    question: "Do you offer services beyond Atlas and Sonar?",
    answer:
      "Yes. We provide custom software, cloud, network, security, learning and workforce systems. Atlas and Sonar can form part of an engagement when they fit your needs.",
  },
  {
    question: "Can you adapt Atlas and Sonar to our organisation?",
    answer:
      "Yes. We develop both products and can adapt features, dashboards, content, branding and policy rules to your operating model. The scope of those changes is agreed for the engagement.",
  },
  {
    question: "Do you work with public institutions and private enterprises?",
    answer:
      "Yes. We work with ministries, agencies and local government, as well as banks, insurers and other enterprises, in Nigeria and the UK.",
  },
  {
    question: "How do we get started?",
    answer:
      "Start with a conversation about the problem and the improvement you need. Discovery helps define the scope and measures of success. A focused 90-day pilot can then test a tailored solution and inform a wider rollout plan.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "We offer fixed-scope projects, managed services, product licensing and team augmentation. The model can reflect your procurement requirements, whether you need a defined build, ongoing support, product access or additional delivery capacity.",
  },
  {
    question: "Where is Von Newman based?",
    answer:
      "Our headquarters is in Lagos, with teams working from Abuja and Calabar and UK delivery capability across London and the South East.",
  },
];
