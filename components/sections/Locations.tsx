import { locations, offices } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { LocalClock } from "./LocalClock";
import { WorldMap } from "@/components/ui/WorldMap";

export function Locations() {
  return (
    <Section id="company" ground="forest" labelledBy="company-heading">
      <div className="mx-auto max-w-[46rem] text-center">
        <h2 id="company-heading" className="font-display text-display-2">
          {locations.headline}
        </h2>
        <p className="mt-5 text-lede text-paper/80">{locations.intro}</p>
      </div>
      {/* The two offices pinned on a world map, each pin breathing (client direction, 6 Sep 2026). */}
      <WorldMap
        className="mt-12 text-paper/15 lg:mt-16"
        pins={offices.map((office) => ({
          id: office.id,
          label: office.title.primary,
          lon: office.pin.lon,
          lat: office.pin.lat,
          labelSide: office.pin.labelSide,
        }))}
      />
      <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16 lg:mt-12">
        {offices.map((office) => (
          <div key={office.id} className="border-t border-line-dark pt-6">
            <LocalClock timeZone={office.timeZone} zoneLabel={office.zoneLabel} />
            <h3 className="mt-6 flex flex-wrap items-baseline gap-x-4">
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
