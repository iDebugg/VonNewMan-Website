import Image from "next/image";
import type { Person } from "@/lib/content";
import { people, team } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reveal } from "@/lib/utils/reveal";

/** The titles state the hierarchy: directors lead, the leads follow. */
const isDirector = (person: Person) => /\bDirector\b/.test(person.title);

export function Team() {
  const directors = people.filter(isDirector);
  const leads = people.filter((person) => !isDirector(person));

  return (
    <Section id="team" ground="stone" labelledBy="team-heading">
      <SectionHeading
        id="team-heading"
        kicker={team.kicker}
        title={team.headline}
        lede={team.lede}
      />

      {/* Directors: large portraits in a row of three. */}
      <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {directors.map((person, index) => (
          <li
            key={person.slug}
            {...reveal(index)}
            className="group rounded-nav border border-line bg-paper p-3 transition-colors duration-200 ease-out-quiet hover:border-brand"
          >
            <Image
              src={person.photo.src}
              alt={person.photo.alt}
              width={person.photo.width}
              height={person.photo.height}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              className="aspect-square w-full rounded-control object-cover"
            />
            <div className="px-3 pt-5 pb-3">
              <h3 className="text-title">{person.name}</h3>
              <p className="mt-1 text-label font-medium text-brand">{person.title}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Leads: compact cards, portrait beside the name. */}
      <ul className="mt-6 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {leads.map((person, index) => (
          <li
            key={person.slug}
            {...reveal(index)}
            className="group flex items-center gap-4 rounded-nav border border-line bg-paper p-3 transition-colors duration-200 ease-out-quiet hover:border-brand"
          >
            <Image
              src={person.photo.src}
              alt={person.photo.alt}
              width={person.photo.width}
              height={person.photo.height}
              sizes="96px"
              className="size-24 shrink-0 rounded-control object-cover"
            />
            <div className="pr-2">
              <h3 className="text-subtitle">{person.name}</h3>
              <p className="mt-1 text-label font-medium text-brand">{person.title}</p>
            </div>
          </li>
        ))}
      </ul>

      <p
        className="mx-auto mt-14 max-w-[46rem] text-center text-lede text-slate lg:mt-16"
        {...reveal()}
      >
        {team.bench}
      </p>
    </Section>
  );
}
