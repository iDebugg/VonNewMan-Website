import type { SplitLabel } from "@/types/content";

export type Office = {
  id: "lagos" | "london";
  timeZone: "Africa/Lagos" | "Europe/London";
  /** Fixed zone label, or undefined to derive GMT/BST from Intl. */
  zoneLabel?: string;
  title: SplitLabel;
  description: string;
  address: string;
};

export const locations = {
  headline: "Engineered between Lagos and London.",
  intro:
    "A consultancy with its own products, and a product team that consults. We operate across Nigeria and the United Kingdom, with delivery experience in both public and private sectors in each market.",
} as const;

export const offices: Office[] = [
  {
    id: "lagos",
    timeZone: "Africa/Lagos",
    zoneLabel: "WAT",
    title: { primary: "Lagos", secondary: "Headquarters" },
    description: "Product engineering, our learning studio and client delivery for West Africa.",
    address: "No. 3 Jasmine Road, Ikota GRA, Lekki, Lagos, Nigeria",
  },
  {
    id: "london",
    timeZone: "Europe/London",
    title: { primary: "United Kingdom", secondary: "Delivery" },
    description:
      "Programme leadership, infrastructure and security delivery shaped by UK enterprise and public-sector standards.",
    address: "London and the South East",
  },
];
