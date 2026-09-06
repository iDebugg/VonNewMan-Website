import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { label: string; size?: number };

const common = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
});

/** Outline icons for the four financial services blocks: People, Infrastructure, Cost, Trust. */
export function FinancialIcon({ label, size = 30, ...props }: Props) {
  const base = { ...common(size), ...props };
  switch (label) {
    case "People":
      return (
        <svg {...base}>
          <circle cx="18" cy="16" r="6" />
          <path d="M6 38a12 12 0 0124 0M30 11a5 5 0 010 10M42 38a10 10 0 00-8-10" />
        </svg>
      );
    case "Infrastructure":
      return (
        <svg {...base}>
          <rect x="8" y="8" width="32" height="10" rx="2" />
          <rect x="8" y="22" width="32" height="10" rx="2" />
          <path d="M14 13h.01M14 27h.01M16 38h16M24 32v6" />
        </svg>
      );
    case "Cost":
      return (
        <svg {...base}>
          <path d="M14 40V8l20 32V8" />
          <path d="M8 20h32M8 28h32" />
        </svg>
      );
    default:
      return (
        <svg {...base}>
          <path d="M24 6l15 5v11c0 9-6.2 15.6-15 19-8.8-3.4-15-10-15-19V11l15-5z" />
          <path d="M17 24l5 5 9-10" />
        </svg>
      );
  }
}
