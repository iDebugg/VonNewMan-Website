import Image from "next/image";
import type { SystemShowcaseItem } from "@/lib/content";
import { systems, systemsShowcase } from "@/lib/content";
import { reveal } from "@/lib/utils/reveal";

function SystemGraphic({ type }: { type: NonNullable<SystemShowcaseItem["visual"]> }) {
  if (type === "compass") {
    return (
      <svg aria-hidden="true" viewBox="0 0 520 230" className="h-full w-full text-brand">
        <rect x="34" y="25" width="452" height="180" rx="24" fill="white" opacity=".72" />
        <path
          d="M82 156c72-4 81-88 158-82 68 5 86 81 190 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="82" cy="156" r="18" fill="currentColor" />
        <circle cx="240" cy="74" r="24" fill="#102a21" />
        <circle cx="430" cy="122" r="18" fill="#baf442" stroke="#102a21" strokeWidth="5" />
        <rect x="92" y="58" width="84" height="10" rx="5" fill="#102a21" opacity=".18" />
        <rect x="92" y="78" width="52" height="10" rx="5" fill="#102a21" opacity=".1" />
        <rect x="344" y="158" width="78" height="10" rx="5" fill="#102a21" opacity=".18" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 620 230" className="h-full w-full">
      <rect x="28" y="22" width="564" height="186" rx="24" fill="white" opacity=".72" />
      <circle cx="94" cy="88" r="26" fill="#16754b" />
      <circle cx="162" cy="88" r="26" fill="#baf442" />
      <circle cx="230" cy="88" r="26" fill="#102a21" />
      <rect x="68" y="145" width="88" height="18" rx="9" fill="#102a21" opacity=".14" />
      <rect x="68" y="173" width="138" height="10" rx="5" fill="#102a21" opacity=".08" />
      <rect x="310" y="134" width="38" height="48" rx="8" fill="#9fd3b0" />
      <rect x="362" y="104" width="38" height="78" rx="8" fill="#16754b" />
      <rect x="414" y="70" width="38" height="112" rx="8" fill="#102a21" />
      <rect x="466" y="44" width="38" height="138" rx="8" fill="#baf442" />
    </svg>
  );
}

function TextBlock({ system, dark = false }: { system: SystemShowcaseItem; dark?: boolean }) {
  return (
    <div className="p-7 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className={`text-caption font-bold ${dark ? "text-mint" : "text-brand"}`}>
          {system.category}
        </p>
        <span
          className={`rounded-full border px-3 py-1 text-caption font-bold ${dark ? "border-paper/25 text-lime" : "border-ink/15 text-brand"}`}
        >
          {system.product}
        </span>
      </div>
      <h4 className="mt-5 text-title-lg font-bold">{system.title}</h4>
      <p className={`mt-3 max-w-[58ch] text-body ${dark ? "text-paper/72" : "text-slate"}`}>
        {system.description}
      </p>
    </div>
  );
}

export function SystemsShowcase() {
  return (
    <div className="mt-20 border-t border-ink pt-12" aria-labelledby="systems-heading">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <h3
          id="systems-heading"
          className="font-display text-[clamp(2.25rem,3.5vw,3.75rem)] leading-[1.02] font-bold tracking-[-.032em] lg:col-span-7"
          {...reveal()}
        >
          {systemsShowcase.headline}
        </h3>
        <p
          className="max-w-[46ch] text-lede text-slate lg:col-span-4 lg:col-start-9"
          {...reveal(1)}
        >
          {systemsShowcase.intro}
        </p>
      </div>

      <ul className="mt-12 grid list-none gap-5 lg:grid-cols-12">
        {systems.map((system, index) => {
          if (system.slug === "sonar" && system.image) {
            return (
              <li key={system.slug} className="lg:col-span-12" {...reveal(index, 55)}>
                <article className="overflow-hidden rounded-bar bg-forest text-paper md:grid md:grid-cols-12 md:items-center">
                  <div className="md:col-span-5">
                    <TextBlock system={system} dark />
                  </div>
                  <div className="relative aspect-[16/10] bg-ink md:col-span-7">
                    <Image
                      src={system.image.src}
                      alt={system.image.alt}
                      fill
                      sizes="(min-width: 768px) 58vw, 100vw"
                      className="object-cover object-left"
                    />
                  </div>
                </article>
              </li>
            );
          }

          const wide = system.slug === "atlas-cms" || system.slug === "hr-performance";
          const surface =
            system.visual === "compass"
              ? "bg-clay"
              : system.visual === "performance"
                ? "bg-sky"
                : "bg-paper";

          return (
            <li
              key={system.slug}
              className={wide ? "lg:col-span-7" : "lg:col-span-5"}
              {...reveal(index, 55)}
            >
              <article
                className={`h-full overflow-hidden rounded-bar border border-ink/10 ${surface}`}
              >
                {system.image ? (
                  <div className={`relative bg-ink ${wide ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
                    <Image
                      src={system.image.src}
                      alt={system.image.alt}
                      fill
                      sizes={
                        wide ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"
                      }
                      className="object-cover object-top"
                    />
                  </div>
                ) : system.visual ? (
                  <div className="h-56 p-4 sm:p-5">
                    <SystemGraphic type={system.visual} />
                  </div>
                ) : null}
                <TextBlock system={system} />
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
