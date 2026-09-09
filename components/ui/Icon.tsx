import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number, props: IconProps) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
  ...props,
});

export function ChevronIcon({ size = 14, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} strokeWidth={2}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeftIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} strokeWidth={2}>
      <path d="M19 12H5m6 6-6-6 6-6" />
    </svg>
  );
}

export function ArrowDownIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} strokeWidth={2}>
      <path d="M12 5v14m6-6-6 6-6-6" />
    </svg>
  );
}

export function ArrowUpRightIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} strokeWidth={2}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function MailIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function PhoneIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
    </svg>
  );
}

export function PinIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M12 21s-7-6.5-7-11.5a7 7 0 0114 0C19 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function BuildingIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
    </svg>
  );
}

export function ExternalIcon({ size = 14, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M14 4h6v6M20 4l-9 9M18 13v6H5V6h6" />
    </svg>
  );
}

export function UserIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20a8 8 0 0116 0" />
    </svg>
  );
}

export function MenuIcon({ size = 22, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} strokeWidth={2}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ size = 22, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} strokeWidth={2}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
