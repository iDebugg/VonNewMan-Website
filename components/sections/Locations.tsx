import { locations, mapPins } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { LocalClock } from "./LocalClock";
import { WorldMap } from "@/components/ui/WorldMap";
import { reveal } from "@/lib/utils/reveal";

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
      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12 lg:mt-12">
        <div className="border-t border-line-dark pt-6" {...reveal()}>
          <LocalClock timeZone="Africa/Lagos" zoneLabel="WAT" />
          <h3 className="mt-6 text-title-lg">Nigeria</h3>
          <p className="mt-2 text-label tracking-[0.12em] text-paper/60 uppercase">
            West Africa Time
          </p>
        </div>

        <div className="border-t border-line-dark pt-6" {...reveal(1)}>
          <LocalClock timeZone="Europe/London" />
          <h3 className="mt-6 text-title-lg">London, United Kingdom</h3>
          <p className="mt-2 text-label tracking-[0.12em] text-paper/60 uppercase">
            United Kingdom Time
          </p>
        </div>
      </div>
    </Section>
  );
}
