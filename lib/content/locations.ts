import type { SplitLabel } from "@/types/content";

export type Office = {
  id: "lagos" | "london";
  timeZone: "Africa/Lagos" | "Europe/London";
  /** Fixed zone label, or undefined to derive GMT/BST from Intl. */
  zoneLabel?: string;
  title: SplitLabel;
  description: string;
  address: string;
  /** Map pin: WGS84 longitude and latitude, and which side the label sits on. */
  pin: { lon: number; lat: number; labelSide: "above" | "below" };
};

export const locations = {
  headline: "Based in Lagos. Delivering across the United Kingdom.",
  intro:
    "Our headquarters and product teams are in Lagos. Our UK delivery team works with enterprise and public-sector organisations across London and the South East.",
} as const;

export const offices: Office[] = [
  {
    id: "lagos",
    timeZone: "Africa/Lagos",
    zoneLabel: "WAT",
    title: { primary: "Lagos", secondary: "Headquarters" },
    description: "Product engineering, our learning studio and client delivery for West Africa.",
    address: "No. 3 Jasmine Road, Ikota GRA, Lekki, Lagos, Nigeria",
    pin: { lon: 3.3792, lat: 6.5244, labelSide: "below" },
  },
  {
    id: "london",
    timeZone: "Europe/London",
    title: { primary: "United Kingdom", secondary: "Delivery" },
    description:
      "Programme leadership, infrastructure and security delivery shaped by UK enterprise and public-sector standards.",
    address: "London and the South East",
    pin: { lon: -0.1276, lat: 51.5072, labelSide: "above" },
  },
];

export type MapPinPlace = {
  id: string;
  label: string;
  lon: number;
  lat: number;
  labelSide: "above" | "below" | "left" | "right";
  /** Secondary pins keep their dot on phones but hide the label, so a tight cluster stays legible. */
  minor?: boolean;
};

/** Pins on the world map (client direction, 8 September 2026): Lagos, Abuja, Calabar and London. */
export const mapPins: MapPinPlace[] = [
  { id: "lagos", label: "Lagos", lon: 3.3792, lat: 6.5244, labelSide: "left" },
  { id: "abuja", label: "Abuja", lon: 7.3986, lat: 9.0765, labelSide: "above", minor: true },
  { id: "calabar", label: "Calabar", lon: 8.3417, lat: 4.9757, labelSide: "right", minor: true },
  { id: "london", label: "London", lon: -0.1276, lat: 51.5072, labelSide: "above" },
];
