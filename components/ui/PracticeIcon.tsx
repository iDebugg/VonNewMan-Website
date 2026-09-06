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

/** Outline icons for the eight practice areas, one per slug. */
export function PracticeIcon({ slug, size = 40, ...props }: Props) {
  const base = { ...common(size), ...props };
  switch (slug) {
    case "software-development":
      return (
        <svg {...base}>
          <path d="M16 14l-10 10 10 10M32 14l10 10-10 10M28 8l-8 32" />
        </svg>
      );
    case "lms-engineering":
      return (
        <svg {...base}>
          <path d="M8 11a3 3 0 013-3h29v30H11a3 3 0 00-3 3V11z" />
          <path d="M8 41a3 3 0 013-3h29v4" />
          <path d="M16 16h16M16 22h10" />
        </svg>
      );
    case "doc2video":
      return (
        <svg {...base}>
          <rect x="6" y="10" width="36" height="28" rx="2.5" />
          <path d="M14 10v28M34 10v28M6 19h8M6 29h8M34 19h8M34 29h8M21 18v12l9-6z" />
        </svg>
      );
    case "hr-performance":
      return (
        <svg {...base}>
          <circle cx="19" cy="15" r="6" />
          <path d="M7 38a12 12 0 0124 0" />
          <path d="M30 26l5 5 8-10" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...base}>
          <path d="M14 36a8 8 0 01-1-16A12 12 0 0136 18a9 9 0 01-1 18H14z" />
        </svg>
      );
    case "network-infrastructure":
      return (
        <svg {...base}>
          <circle cx="24" cy="10" r="5" />
          <circle cx="10" cy="38" r="5" />
          <circle cx="38" cy="38" r="5" />
          <path d="M24 15v10M24 25l-11 9M24 25l11 9" />
        </svg>
      );
    case "cybersecurity":
      return (
        <svg {...base}>
          <path d="M24 6l15 5v11c0 9-6.2 15.6-15 19-8.8-3.4-15-10-15-19V11l15-5z" />
          <rect x="18" y="21" width="12" height="10" rx="1.5" />
          <path d="M21 21v-3a3 3 0 016 0v3" />
        </svg>
      );
    default:
      return (
        <svg {...base}>
          <path d="M28 8c6 0 12 6 12 12-4 8-10 14-18 18l-6-6c4-8 10-14 12-24z" />
          <path d="M16 32l-6 10 10-6M30 18a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      );
  }
}
