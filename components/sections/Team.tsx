import Image from "next/image";
import { people, team } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { reveal } from "@/lib/utils/reveal";

const surfaces = ["bg-sage", "bg-sky", "bg-lilac", "bg-clay", "bg-sky", "bg-sage"];

export function Team() {
  return (
    <Section id="team" labelledBy="team-heading">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <h2 id="team-heading" className="font-display text-display-2 lg:col-span-7" {...reveal()}>
          {team.headline}
        </h2>
        <p
          className="max-w-[42ch] text-lede text-slate lg:col-span-4 lg:col-start-9"
          {...reveal(1)}
        >
          {team.lede}
        </p>
      </div>
      <ul className="mt-14 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person, index) => (
          <li
            key={person.slug}
            {...reveal(index, 45)}
            className={`group overflow-hidden rounded-bar border border-ink/10 ${surfaces[index]} transition-[transform,box-shadow] duration-300 ease-out-quiet hover:-translate-y-1 hover:shadow-panel`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-stone">
              <Image
                src={person.photo.src}
                alt={person.photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top saturate-[.88] transition-[transform,filter] duration-500 ease-out-quiet group-hover:scale-[1.02] group-hover:saturate-100"
              />
            </div>
            <div className="min-h-32 p-6">
              <h3 className="text-title font-bold">{person.name}</h3>
              <p className="mt-2 max-w-[28ch] text-label font-semibold text-brand">
                {person.title}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-12 max-w-[65ch] border-t border-ink/15 pt-7 text-body text-slate">
        {team.bench}
      </p>
    </Section>
  );
}
