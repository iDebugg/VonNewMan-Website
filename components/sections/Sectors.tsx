import Image from "next/image";
import { sectorPanels, sectors } from "@/lib/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";
import { reveal } from "@/lib/utils/reveal";
import { SystemsShowcase } from "./SystemsShowcase";

export function Sectors() {
  return (
    <Section id="sectors" ground="stone" labelledBy="sectors-heading">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <h2
          id="sectors-heading"
          className="font-display text-display-2 lg:col-span-7"
          {...reveal()}
        >
          {sectors.headline}
        </h2>
        <p
          className="max-w-[42ch] text-lede text-slate lg:col-span-4 lg:col-start-9"
          {...reveal(1)}
        >
          {sectors.lede}
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {sectorPanels.map((panel, index) => (
          <article
            key={panel.id}
            className="overflow-hidden rounded-bar border border-ink/10 bg-paper"
            {...reveal(index)}
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-ink">
              <Image
                src={panel.image.src}
                alt={panel.image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out-quiet hover:scale-[1.015]"
              />
            </div>
            <div className="p-7 sm:p-9">
              <p className="text-label font-bold text-brand">{panel.tab}</p>
              <h3 className="mt-3 max-w-[16ch] text-title-lg font-bold">{panel.heading}</h3>
              <ul className="mt-7 grid list-none gap-3 border-t border-ink/15 pt-6 sm:grid-cols-2">
                {panel.items.map((item) => (
                  <li key={item.title} className="text-label font-semibold text-ink">
                    {item.title}
                  </li>
                ))}
              </ul>
              <ButtonLink item={panel.cta} className="mt-7" />
            </div>
          </article>
        ))}
      </div>

      <SystemsShowcase />
    </Section>
  );
}
