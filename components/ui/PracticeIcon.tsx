import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { slug: string; size?: number };

const common = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 48 48",
  fill: "currentColor",
  "aria-hidden": true,
  focusable: false,
});

/** Solid symbols for the eight practice areas, one per slug. */
export function PracticeIcon({ slug, size = 40, ...props }: Props) {
  const base = { ...common(size), ...props };

  switch (slug) {
    case "software-development":
      return (
        <svg {...base}>
          <path d="M17.2 12 5 24l12.2 12 4.4-4.5-7.7-7.5 7.7-7.5L17.2 12ZM30.8 12l-4.4 4.5 7.7 7.5-7.7 7.5 4.4 4.5L43 24 30.8 12Z" />
          <path d="m27.7 7-9.5 34h6.1l9.5-34h-6.1Z" />
        </svg>
      );
    case "lms-engineering":
      return (
        <svg {...base}>
          <path d="M6 9.5C6 7.6 7.6 6 9.5 6H22c4 0 7.3 1.4 10 4.1V40c-2.7-2.7-6-4-10-4H9.5A3.5 3.5 0 0 1 6 32.5v-23Z" />
          <path d="M34 10.1A13.9 13.9 0 0 1 42 7v29h-5c-1 0-2 .1-3 .4V10.1Z" opacity=".62" />
        </svg>
      );
    case "doc2video":
      return (
        <svg {...base}>
          <path
            fillRule="evenodd"
            d="M5 9a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v30a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Zm15 8.2v13.6L31.5 24 20 17.2Z"
            clipRule="evenodd"
          />
          <path d="M9 10h5v4H9v-4Zm25 0h5v4h-5v-4ZM9 34h5v4H9v-4Zm25 0h5v4h-5v-4Z" opacity=".55" />
        </svg>
      );
    case "hr-performance":
      return (
        <svg {...base}>
          <circle cx="17" cy="15" r="8" />
          <path d="M3 42c0-10 5.8-16 14-16s14 6 14 16H3Z" />
          <path d="m29 27 5.2 5.1L44 20.5l-4.4-3.7-5.8 7-4.8-4.4v7.6Z" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...base}>
          <path d="M13 39a10 10 0 0 1-1.4-19.9A14.5 14.5 0 0 1 39 19.7 9.8 9.8 0 0 1 38 39H13Z" />
        </svg>
      );
    case "network-infrastructure":
      return (
        <svg {...base}>
          <path d="M21 14h6v13h-6zM12.2 32l3.5 4.9L27 29l-3.5-4.9L12.2 32Zm12.8-3 11.3 7.9 3.5-4.9-11.3-7.9L25 29Z" />
          <circle cx="24" cy="9" r="7" />
          <circle cx="9" cy="39" r="7" />
          <circle cx="39" cy="39" r="7" />
        </svg>
      );
    case "cybersecurity":
      return (
        <svg {...base}>
          <path
            fillRule="evenodd"
            d="M24 4 42 10v13c0 10.7-7.2 17.7-18 22C13.2 40.7 6 33.7 6 23V10l18-6Zm-5 18v-3a5 5 0 0 1 10 0v3h3v11H16V22h3Zm4 0h2v-3a1 1 0 0 0-2 0v3Z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return (
        <svg {...base}>
          <path d="M29 4c7 0 15 8 15 15-4.8 10.2-12.2 18-22 23l-9-9C18 23.2 25.8 15.8 29 4Z" />
          <circle cx="32" cy="16" r="4" opacity=".45" />
          <path d="M13.5 30.5 4 44l13.5-9.5-4-4Z" />
        </svg>
      );
  }
}
