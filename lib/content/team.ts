import type { ImageAsset } from "@/types/content";

export type Person = {
  slug: string;
  name: string;
  title: string;
  photo: ImageAsset;
};

export const team = {
  kicker: "Leadership team",
  headline: "Meet the people you will work with.",
  lede: "Consultants, engineers and delivery leaders based in Lagos and the United Kingdom. Our senior team stays close to every engagement.",
  bench:
    "A multi-disciplinary bench across product strategy, software engineering, AI, learning design, cloud, networks and security, with a proven record delivering enterprise solutions in Nigeria and the UK.",
} as const;

const portrait = (file: string, name: string): ImageAsset => ({
  src: `/assets/${file}`,
  alt: name,
  width: 520,
  height: 520,
});

export const people: Person[] = [
  {
    slug: "wilfred-babatope-achom",
    name: "Wilfred Babatope Achom",
    title: "Managing Director, CEO and Founder",
    photo: portrait("team-wilfred.jpg", "Wilfred Babatope Achom"),
  },
  {
    slug: "vijay-gadhia",
    name: "Vijay Gadhia",
    title: "Director, Infrastructure and LMS",
    photo: portrait("team-vijay.jpg", "Vijay Gadhia"),
  },
  {
    slug: "kate-welling",
    name: "Kate Welling",
    title: "Director, Architecture and AI",
    photo: portrait("team-kate.jpg", "Kate Welling"),
  },
  {
    slug: "oyinloluwa-bolarinwa",
    name: "Oyinloluwa Bolarinwa",
    title: "Lead UI/UX Designer",
    /** New portrait supplied by the client, 7 September 2026. */
    photo: {
      src: "/assets/team-oyin-2026.jpg",
      alt: "Oyinloluwa Bolarinwa",
      width: 780,
      height: 1040,
    },
  },
  {
    /** Spelling corrected from "Abdulrasaq" at the client's instruction, 7 September 2026. */
    slug: "abdulrazaq-oladapo",
    name: "Abdulrazaq Oladapo",
    title: "Team Lead and Software Developer",
    photo: portrait("team-abdulrasaq.jpg", "Abdulrazaq Oladapo"),
  },
  {
    slug: "victor-aderibigbe",
    name: "Victor Aderibigbe",
    title: "Lead Frontend Developer",
    /** Re-cropped from the original portrait for headroom, 7 September 2026. */
    photo: {
      src: "/assets/team-victor-3x4.jpg",
      alt: "Victor Aderibigbe",
      width: 780,
      height: 1040,
    },
  },
  {
    slug: "anthonia-osekhale",
    name: "Anthonia Osekhale",
    title: "Project Manager",
    photo: {
      src: "/assets/team-anthonia-2.jpg",
      alt: "Anthonia Osekhale",
      width: 780,
      height: 1040,
    },
  },
];
