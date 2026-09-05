import Image from "next/image";
import { partners, stats, trust } from "@/lib/content";
import { Section } from "@/components/ui/Section";

/**
 * Dark band after the Difference cards: trust line and partner marks on top, the five stats
 * below separated by vertical rules (client instruction, 5 September 2026).
 */
export function TrustBand() {
  return (
    <Section ground="forest" labelledBy="trust-heading" className="py-[clamp(3rem,6vw,5rem)]">
      <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-center lg:gap-14 lg:text-left">
        <h2 id="trust-heading" className="max-w-[30ch] text-title-lg text-paper">
          {trust.title}
        </h2>
        <ul className="grid list-none grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:gap-x-10">
          {partners.map((partner) => (
            <li key={partner.slug} className="flex flex-col items-center gap-3 text-center">
              {partner.logo ? (
                <span className="grid h-20 w-28 shrink-0 place-items-center overflow-hidden rounded-nav bg-paper p-2.5">
                  <Image
                    src={partner.logo.src}
                    alt=""
                    width={partner.logo.width}
                    height={partner.logo.height}
                    sizes="112px"
                    className="h-full w-full object-contain"
                  />
                </span>
              ) : (
                <span
                  aria-hidden="true"
                  className="grid h-20 w-28 shrink-0 place-items-center rounded-nav border border-paper/25 text-caption text-paper/60"
                >
                  {partner.name.charAt(0)}
                </span>
              )}
              <span className="text-label font-medium text-paper/85">{partner.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <dl className="mt-14 grid grid-cols-2 gap-y-8 lg:mt-16 lg:grid-cols-5 lg:gap-y-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center border-line-dark px-4 text-center even:border-l lg:border-l lg:px-6 lg:first:border-l-0"
          >
            <dd className="order-1 font-display text-figure font-semibold text-paper tabular">
              {stat.value}
            </dd>
            <dt className="order-2 mt-3 max-w-[16ch] text-label text-paper/70">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </Section>
  );
}
