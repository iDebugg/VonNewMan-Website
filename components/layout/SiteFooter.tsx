import Image from "next/image";
import { footer, footerColumns, site } from "@/lib/content";
import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/ui/Container";
import { ExternalHint, externalLinkProps } from "@/components/ui/ExternalHint";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const [productsCol, companyCol, signInCol, followCol] = footerColumns;
  const columns = [productsCol, companyCol].filter((column) => column !== undefined);

  const renderLinks = (links: NonNullable<typeof productsCol>["links"]) => (
    <ul className="mt-4 grid list-none gap-2.5">
      {links.map((link) => (
        <li key={link.href + link.label}>
          <a
            href={link.href}
            {...(link.external ? externalLinkProps : {})}
            className="text-body text-paper/80 underline-offset-4 hover:text-paper hover:underline [&_svg]:ml-1.5"
          >
            {link.label}
            {link.external ? <ExternalHint /> : null}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <footer data-ground="dark" className="bg-ink text-paper">
      <Container className="pt-14 pb-8 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#top" aria-label={site.brand.homeLabel} className="inline-block">
              <Image
                src={site.wordmarkWhite.src}
                alt=""
                width={site.wordmarkWhite.width}
                height={site.wordmarkWhite.height}
                sizes="240px"
                className="h-auto w-60"
              />
            </a>
            <p className="mt-6 max-w-[40ch] text-body text-paper/70">{footer.descriptor}</p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-label text-paper/70">{column.title}</h2>
              {renderLinks(column.links)}
            </div>
          ))}
          {signInCol ? (
            <div>
              <h2 className="text-label text-paper/70">{signInCol.title}</h2>
              {renderLinks(signInCol.links)}
              {followCol ? (
                <>
                  <h2 className="mt-8 text-label text-paper/70">{followCol.title}</h2>
                  {renderLinks(followCol.links)}
                </>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-line-dark pt-6 text-caption text-paper/70">
          <p className="flex flex-col gap-1 sm:flex-row sm:gap-0">
            <span className="sm:pr-3">
              © {year} {site.legalName}
            </span>
            <span className="sm:border-l sm:border-line-dark sm:px-3">{site.registration}</span>
            {footer.places.map((place) => (
              <span key={place} className="sm:border-l sm:border-line-dark sm:px-3 sm:last:pr-0">
                {place}
              </span>
            ))}
          </p>
          <p className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-0">
            {footer.legalLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "inline-block py-1 text-paper/70 underline-offset-4 hover:text-paper hover:underline",
                  index === 0 ? "sm:pr-3" : "sm:border-l sm:border-line-dark sm:px-3",
                )}
              >
                {link.label}
              </a>
            ))}
            <span className="sm:border-l sm:border-line-dark sm:pl-3">{site.tagline}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
