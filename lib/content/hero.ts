import type { ImageAsset, LinkItem, SplitLabel } from "@/types/content";

export type HeroCaption = SplitLabel;

export const hero = {
  locator: {
    primary: "Lagos and London",
    secondary: "Public and private sector",
  } satisfies SplitLabel,
  /** Two sentences. The second is set on its own line; that is the emphasis. */
  headline: ["Technology adapted to you.", "Never off the shelf."] as const,
  lede: "We build software, learning platforms and infrastructure intelligence for banks, ministries, agencies and enterprises. Every engagement starts with your problem, not our product list.",
  primaryCta: { label: "Start a conversation", href: "#contact" } satisfies LinkItem,
  secondaryCta: { label: "Explore our products", href: "#products" } satisfies LinkItem,
  /** Third point changed from "Delivered for HP and LexisNexis" on 5 September 2026 (client). */
  trustPoints: [
    "Two in-house platforms",
    "Eight practice areas",
    "Delivered for NRS and More",
  ] as const,
  /** Background video for the hero (client instruction, 5 September 2026). Decorative, muted, looping. */
  video: {
    src: "/assets/hero-bg.mp4",
    poster: { src: "/assets/hero-poster.jpg", alt: "", width: 800, height: 450 },
  },
  /**
   * The two product screenshots and their captions were removed from the hero on 5 September 2026
   * at the client's instruction. Kept here so the inventory record stays complete.
   */
  collageLabel: "Screens from Von Newman Atlas and Von Newman Sonar",
  screens: [
    {
      image: {
        src: "/assets/atlas-home.jpg",
        alt: "Von Newman Atlas learning platform home page",
        width: 1400,
        height: 875,
      } satisfies ImageAsset,
      caption: { primary: "Atlas", secondary: "109+ courses" } satisfies HeroCaption,
    },
    {
      image: {
        src: "/assets/sonar-inventory.jpg",
        alt: "Von Newman Sonar cloud inventory dashboard",
        width: 1400,
        height: 770,
      } satisfies ImageAsset,
      caption: { primary: "Sonar", secondary: "every asset, one view" } satisfies HeroCaption,
    },
  ],
} as const;
