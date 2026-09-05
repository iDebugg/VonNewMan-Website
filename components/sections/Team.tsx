import Image from "next/image";
import { people, team } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Team() {
  return (
    <Section id="team" labelledBy="team-heading">
      <SectionHeading
        id="team-heading"
        kicker={team.kicker}
        title={team.headline}
        lede={team.lede}
      />
      <ul className="mt-12 grid list-none gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:mt-16 lg:grid-cols-3">
        {people.map((person) => (
          <li
            key={person.slug}
            className="grid grid-cols-[6rem_1fr] items-center gap-4 sm:grid-cols-1 sm:items-start"
          >
            <Image
              src={person.photo.src}
              alt={person.photo.alt}
              width={person.photo.width}
              height={person.photo.height}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 6rem"
              className="aspect-square w-full object-cover"
            />
            <div>
              <h3 className="text-subtitle">{person.name}</h3>
              <p className="mt-1 text-label text-slate">{person.title}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-12 max-w-[64ch] text-body text-slate">{team.bench}</p>
    </Section>
  );
}
