import Image from "next/image";
import { people } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { reveal } from "@/lib/utils/reveal";

export function Team() {
  return (
    <Section id="team" labelledBy="team-heading">
      <div className="mx-auto max-w-[44rem] text-center" {...reveal()}>
        <h2 id="team-heading" className="font-display text-display-2">
          Meet our team.
        </h2>
        <p className="mt-4 text-lede text-slate">
          Experienced consultants. Practical engineering. Accountable delivery.
        </p>
      </div>

      <ul className="mt-12 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:[&>li:nth-last-child(2)]:col-start-2">
        {people.map((person, index) => {
          const featured = index === 2;

          return (
            <li
              key={person.slug}
              {...reveal(index, 45)}
              className="group relative aspect-[3/4] min-h-[23rem] overflow-hidden rounded-[1.5rem] bg-ink shadow-[0_18px_45px_-30px_rgba(6,47,36,.7)]"
            >
              <Image
                src={person.photo.src}
                alt={person.photo.alt}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className={`object-cover object-top transition-[transform,filter] duration-700 ease-out-quiet group-hover:scale-[1.025] ${featured ? "saturate-100" : "grayscale saturate-0 group-hover:grayscale-0 group-hover:saturate-100"}`}
              />
              <div
                aria-hidden="true"
                className={`absolute inset-0 ${
                  featured
                    ? "bg-[linear-gradient(180deg,transparent_35%,rgba(186,244,66,.18)_58%,rgba(117,199,16,.94)_100%)]"
                    : "bg-[linear-gradient(180deg,transparent_36%,rgba(6,20,17,.1)_55%,rgba(6,20,17,.94)_100%)]"
                }`}
              />
              <div
                className={`absolute inset-x-0 bottom-0 p-6 ${featured ? "text-ink" : "text-paper"}`}
              >
                <h3 className="text-title font-bold">{person.name}</h3>
                <p className={`mt-1 text-caption ${featured ? "text-ink/75" : "text-paper/72"}`}>
                  {person.title}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
