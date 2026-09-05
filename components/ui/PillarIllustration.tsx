import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { slug: string; size?: number };

const common = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
});

/**
 * Line illustrations for the four Difference cards, drawn in the brand colour. Each encodes its
 * pillar: tailored controls, two sectors under one roof line, two markets on one globe, and a
 * product built in layers.
 */
export function PillarIllustration({ slug, size = 48, ...props }: Props) {
  const base = { ...common(size), ...props };
  switch (slug) {
    case "custom-built":
      return (
        <svg {...base}>
          <rect x="8" y="10" width="48" height="44" rx="4" />
          <path d="M16 22h32M16 32h32M16 42h32" opacity="0.45" />
          <circle cx="24" cy="22" r="3.5" fill="currentColor" stroke="none" />
          <circle cx="40" cy="32" r="3.5" fill="currentColor" stroke="none" />
          <circle cx="30" cy="42" r="3.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "both-sectors":
      return (
        <svg {...base}>
          <path d="M6 54h52" />
          <path d="M8 30h22M10 30v24M27 30v24M14 34v18M19 34v18M23 34v18" />
          <path d="M8 30l11-8 11 8" />
          <rect x="36" y="14" width="20" height="40" rx="1.5" />
          <path d="M41 21h3M50 21h3M41 28h3M50 28h3M41 35h3M50 35h3M41 42h3M50 42h3" />
          <path d="M44 54v-6h4v6" />
        </svg>
      );
    case "market-experience":
      return (
        <svg {...base}>
          <circle cx="32" cy="34" r="22" />
          <path
            d="M10 34h44M32 12c-7 6-10 14-10 22s3 16 10 22M32 12c7 6 10 14 10 22s-3 16-10 22"
            opacity="0.45"
          />
          <path d="M22 24a4 4 0 118 0c0 3-4 7-4 7s-4-4-4-7z" fill="currentColor" stroke="none" />
          <path d="M37 40a4 4 0 118 0c0 3-4 7-4 7s-4-4-4-7z" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg {...base}>
          <path d="M32 10l20 10-20 10-20-10 20-10z" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 30l20 10 20-10M12 40l20 10 20-10" />
          <path d="M50 8v6M47 11h6" />
        </svg>
      );
  }
}
