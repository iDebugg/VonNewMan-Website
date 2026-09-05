import type { ImageAsset } from "@/types/content";

export type Partner = {
  slug: string;
  name: string;
  /** Logo supplied by the client. Until it arrives the slot shows the name only. */
  logo?: ImageAsset;
};

/**
 * Trust band under the Difference cards. Client-provided content, 5 September 2026; not from
 * the original site. Partner names and logos supplied by the client on 5 September 2026.
 */
export const trust = {
  /** Client wording of 5 September 2026, with grammar corrected and British spelling. */
  title: "Trusted by organisations that value technology and innovation",
} as const;

export const partners: Partner[] = [
  {
    slug: "nrs",
    name: "NRS",
    logo: { src: "/assets/partners/nrs.png", alt: "", width: 270, height: 148 },
  },
  {
    slug: "nitda",
    name: "NITDA",
    logo: { src: "/assets/partners/nitda.jpg", alt: "", width: 659, height: 465 },
  },
  {
    slug: "nugi-tech",
    name: "Nugi Tech",
    logo: { src: "/assets/partners/nugi-tech.png", alt: "", width: 204, height: 192 },
  },
  {
    slug: "cross-river-state",
    name: "Cross River State",
    logo: { src: "/assets/partners/cross-river-state.jpeg", alt: "", width: 180, height: 148 },
  },
];
