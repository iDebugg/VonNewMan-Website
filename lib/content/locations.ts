import type { SplitLabel } from "@/types/content";

export type Office = {
  id: "lagos" | "abuja" | "calabar" | "london";
  timeZone: "Africa/Lagos" | "Europe/London";
  /** Fixed zone label, or undefined to derive GMT/BST from Intl. */
  zoneLabel?: string;
  title: SplitLabel;
  description: string;
  address: string;
  /** Map pin: WGS84 longitude and latitude, and which side the label sits on. */
  pin: { lon: number; lat: number; labelSide: "above" | "below" | "left" | "right" };
};

export const locations = {
  headline: "Working from Lagos, Abuja, Calabar and London.",
  intro:
    "Our Nigerian teams work across three cities, with UK delivery based in London. Together, they support public- and private-sector organisations across both markets.",
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
    id: "abuja",
    timeZone: "Africa/Lagos",
    zoneLabel: "WAT",
    title: { primary: "Abuja", secondary: "Nigeria" },
    description: "Client engagement and programme delivery in Nigeria’s capital.",
    address: "Abuja, Nigeria",
    pin: { lon: 7.3986, lat: 9.0765, labelSide: "above" },
  },
  {
    id: "calabar",
    timeZone: "Africa/Lagos",
    zoneLabel: "WAT",
    title: { primary: "Calabar", secondary: "Cross River State" },
    description: "Regional delivery and partnerships in Cross River State.",
    address: "Calabar, Cross River State, Nigeria",
    pin: { lon: 8.3417, lat: 4.9757, labelSide: "right" },
  },
  {
    id: "london",
    timeZone: "Europe/London",
    title: { primary: "London", secondary: "United Kingdom" },
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
  {
    id: "abuja",
    label: "Abuja",
    lon: 7.3986,
    lat: 9.0765,
    labelSide: "above",
    minor: true,
  },
  {
    id: "calabar",
    label: "Calabar",
    lon: 8.3417,
    lat: 4.9757,
    labelSide: "right",
    minor: true,
  },
  { id: "london", label: "London", lon: -0.1276, lat: 51.5072, labelSide: "above" },
];
