import Image from "next/image";
import { partners, trust } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { reveal } from "@/lib/utils/reveal";

export function TrustBand() {
  return (
    <section aria-labelledby="trust-heading" className="bg-paper py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div>
            <h2 id="trust-heading" className="text-title-lg font-bold" {...reveal()}>
              {trust.title}
            </h2>
            <p className="mt-4 text-body text-slate">
              Work shown with organisations across public service and technology.
            </p>
          </div>
          <ul className="grid list-none grid-cols-2 items-center gap-8 sm:grid-cols-4">
            {partners.map((partner, index) => (
              <li
                key={partner.slug}
                {...reveal(index)}
                className="group flex min-h-24 items-center justify-center"
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo.src}
                    alt={partner.name}
                    width={partner.logo.width}
                    height={partner.logo.height}
                    sizes="160px"
                    className="max-h-20 w-auto max-w-36 object-contain grayscale opacity-60 transition-[filter,opacity,transform] duration-300 ease-out-quiet group-hover:scale-[1.035] group-hover:grayscale-0 group-hover:opacity-100"
                  />
                ) : (
                  <span className="font-bold">{partner.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <dl className="mt-12 grid gap-4 border-t border-ink/15 pt-7 text-center sm:grid-cols-3">
          <div>
            <dd className="text-title font-bold">Multiple platforms</dd>
            <dt className="mt-1 text-label text-slate">Custom built</dt>
          </div>
          <div>
            <dd className="text-title font-bold">8 practice areas</dd>
            <dt className="mt-1 text-label text-slate">From product design to cloud delivery</dt>
          </div>
          <div>
            <dd className="text-title font-bold">Nigeria and the UK</dd>
            <dt className="mt-1 text-label text-slate">Local depth, international delivery</dt>
          </div>
        </dl>
      </Container>
    </section>
  );
}
