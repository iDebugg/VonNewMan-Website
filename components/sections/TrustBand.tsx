import Image from "next/image";
import { partners, stats, trust } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CountUp } from "./CountUp";

/**
 * Dark band after the Difference cards: trust line and partner marks on top, the five stats
 * below separated by vertical rules (client instruction, 5 September 2026).
 */
export function TrustBand() {
  return (
    <>
      <Section ground="stone" labelledBy="trust-heading" className="py-[clamp(3rem,6vw,5rem)]">
        {/* Trust line on the left, partner marks in a ruled grid on the right, greyscale until
          hovered, names beneath (client reference, 6 September 2026). */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center lg:gap-16">
          <h2 id="trust-heading" className="max-w-[24ch] text-title-lg text-ink">
            {trust.title}
          </h2>
          <ul className="grid list-none grid-cols-2 divide-x divide-line border-l border-line sm:grid-cols-4 [&>li:nth-child(n+3)]:border-t [&>li:nth-child(n+3)]:border-line sm:[&>li:nth-child(n+3)]:border-t-0">
            {partners.map((partner) => (
              <li
                key={partner.slug}
                className="flex flex-col items-center gap-4 px-4 py-10 text-center lg:py-12"
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo.src}
                    alt=""
                    width={partner.logo.width}
                    height={partner.logo.height}
                    sizes="160px"
                    className="h-20 w-auto max-w-[9rem] object-contain grayscale transition-[filter] duration-200 hover:grayscale-0 lg:h-24"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid h-20 w-28 place-items-center border border-line text-caption text-slate"
                  >
                    {partner.name.charAt(0)}
                  </span>
                )}
                <span className="text-label font-medium text-ink">{partner.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      {/* The stats alone sit on the green, edge to edge across the viewport. */}
      <div data-ground="dark" className="bg-forest py-10 text-paper lg:py-12">
        <Container>
          <dl className="grid grid-cols-2 gap-y-8 lg:grid-cols-5 lg:gap-y-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center border-line-dark px-4 text-center even:border-l lg:border-l lg:px-6 lg:first:border-l-0"
              >
                <dd className="order-1 font-display text-figure font-bold text-paper tabular">
                  <CountUp value={stat.value} />
                </dd>
                <dt className="order-2 mt-3 max-w-[16ch] text-label text-paper/70">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </>
  );
}
