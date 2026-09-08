import { locations, mapPins, offices } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { LocalClock } from "./LocalClock";
import { WorldMap } from "@/components/ui/WorldMap";
import { reveal } from "@/lib/utils/reveal";

const officeDots = {
  lagos: "bg-lime",
  abuja: "bg-coral",
  calabar: "bg-cyan",
  london: "bg-violet",
} as const;

export function Locations() {
  return (
    <Section id="company" ground="forest" labelledBy="company-heading">
      <div className="mx-auto max-w-[46rem] text-center" {...reveal()}>
        <h2 id="company-heading" className="font-display text-display-2">
          {locations.headline}
        </h2>
        <p className="mt-5 text-lede text-paper/80">{locations.intro}</p>
      </div>
      {/* Lagos, Abuja, Calabar and London pinned on a world map, each pin breathing. */}
      <WorldMap {...reveal(1)} className="mt-12 text-paper/15 lg:mt-16" pins={mapPins} />
      <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-7 lg:mt-12">
        {offices.map((office, index) => (
          <div key={office.id} className="border-t border-line-dark pt-6" {...reveal(index)}>
            <LocalClock timeZone={office.timeZone} zoneLabel={office.zoneLabel} />
            <h3 className="mt-6 flex flex-wrap items-center gap-x-3">
              <span
                aria-hidden="true"
                className={`size-2.5 rounded-full ${officeDots[office.id]}`}
              />
              <span className="text-title-lg">{office.title.primary}</span>
              <span className="text-label text-paper/70">{office.title.secondary}</span>
            </h3>
            <p className="mt-3 max-w-[44ch] text-body text-paper/80">{office.description}</p>
            <address className="mt-4 text-caption text-paper/70">{office.address}</address>
          </div>
        ))}
      </div>
    </Section>
  );
}
