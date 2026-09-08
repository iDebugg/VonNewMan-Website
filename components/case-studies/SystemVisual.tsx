import Image from "next/image";
import type { SystemShowcaseItem } from "@/lib/content";
import { cn } from "@/lib/utils/cn";

function Diagram({ type }: { type: NonNullable<SystemShowcaseItem["visual"]> }) {
  if (type === "compass") {
    return (
      <svg aria-hidden="true" viewBox="0 0 520 300" className="h-full w-full text-brand">
        <rect x="34" y="36" width="452" height="228" rx="24" fill="white" opacity=".72" />
        <path
          d="M82 205c72-4 81-110 158-104 68 5 86 102 190 61"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="82" cy="205" r="18" fill="currentColor" />
        <circle cx="240" cy="101" r="24" fill="#102a21" />
        <circle cx="430" cy="162" r="18" fill="#baf442" stroke="#102a21" strokeWidth="5" />
        <rect x="92" y="66" width="84" height="10" rx="5" fill="#102a21" opacity=".18" />
        <rect x="92" y="86" width="52" height="10" rx="5" fill="#102a21" opacity=".1" />
        <rect x="344" y="214" width="78" height="10" rx="5" fill="#102a21" opacity=".18" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 620 300" className="h-full w-full">
      <rect x="28" y="34" width="564" height="232" rx="24" fill="white" opacity=".72" />
      <circle cx="94" cy="108" r="26" fill="#16754b" />
      <circle cx="162" cy="108" r="26" fill="#baf442" />
      <circle cx="230" cy="108" r="26" fill="#102a21" />
      <rect x="68" y="173" width="88" height="18" rx="9" fill="#102a21" opacity=".14" />
      <rect x="68" y="201" width="138" height="10" rx="5" fill="#102a21" opacity=".08" />
      <rect x="310" y="162" width="38" height="62" rx="8" fill="#9fd3b0" />
      <rect x="362" y="128" width="38" height="96" rx="8" fill="#16754b" />
      <rect x="414" y="86" width="38" height="138" rx="8" fill="#102a21" />
      <rect x="466" y="54" width="38" height="170" rx="8" fill="#baf442" />
    </svg>
  );
}

export function SystemVisual({
  system,
  className,
  imageClassName,
  priority = false,
}: {
  system: SystemShowcaseItem;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  const surface =
    system.visual === "compass" ? "bg-clay" : system.visual === "performance" ? "bg-sky" : "bg-ink";

  return (
    <div className={cn("relative overflow-hidden", surface, className)}>
      {system.image ? (
        <Image
          src={system.image.src}
          alt={system.image.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 60vw, 92vw"
          className={cn("object-cover object-top", imageClassName)}
        />
      ) : system.visual ? (
        <div className="absolute inset-0 p-5 sm:p-8">
          <Diagram type={system.visual} />
        </div>
      ) : null}
    </div>
  );
}
