import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { slug: string; size?: number };

const common = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
});

/** Outline icons for the four ownership points: layers, shield, two markets, rising chart. */
export function OwnershipIcon({ slug, size = 44, ...props }: Props) {
  const base = { ...common(size), ...props };
  switch (slug) {
    case "ownership":
      return (
        <svg {...base}>
          <path d="M24 8l16 8-16 8-16-8 16-8z" />
          <path d="M8 24l16 8 16-8M8 32l16 8 16-8" />
        </svg>
      );
    case "security":
      return (
        <svg {...base}>
          <path d="M24 6l15 5v11c0 9-6.2 15.6-15 19-8.8-3.4-15-10-15-19V11l15-5z" />
          <path d="M17 24l5 5 9-10" />
        </svg>
      );
    case "markets":
      return (
        <svg {...base}>
          <circle cx="24" cy="26" r="16" />
          <path d="M8 26h32M24 10c-5 4.5-7.5 10-7.5 16s2.5 11.5 7.5 16M24 10c5 4.5 7.5 10 7.5 16s-2.5 11.5-7.5 16" />
        </svg>
      );
    default:
      return (
        <svg {...base}>
          <path d="M8 40h32M8 40V10" />
          <path d="M14 32l8-9 6 5 10-12" />
          <path d="M32 16h6v6" />
        </svg>
      );
  }
}
