import Image from "next/image";
import { footer, footerColumns, site } from "@/lib/content";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/ui/Container";
import { ExternalHint, externalLinkProps } from "@/components/ui/ExternalHint";
import { reveal } from "@/lib/utils/reveal";

export function SiteFooter({ subpage = false }: { subpage?: boolean }) {
  const year = new Date().getFullYear();
  const [productsCol, companyCol, signInCol, followCol] = footerColumns;
  const columns = [productsCol, companyCol].filter((column) => column !== undefined);

  const homeHref = (href: string) => (subpage && href.startsWith("#") ? `/${href}` : href);
  const renderLinks = (links: NonNullable<typeof productsCol>["links"]) => (
    <ul className="mt-4 grid list-none gap-2.5">
      {links.map((link) => (
        <li key={link.href + link.label}>
          <a
            href={homeHref(link.href)}
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
    <footer data-ground="dark" className="bg-forest text-paper">
      <Container className="pt-14 pb-8 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr]">
          <div className="md:col-span-2 lg:col-span-1" {...reveal(0)}>
            <a
              href={subpage ? "/" : "#top"}
              aria-label={site.brand.homeLabel}
              className="inline-block"
            >
              <Image
                src={site.wordmarkWhite.src}
                alt=""
                width={site.wordmarkWhite.width}
                height={site.wordmarkWhite.height}
                sizes="240px"
                className="h-auto w-64"
              />
            </a>
            <p className="mt-6 max-w-[40ch] text-body text-paper/70">{footer.descriptor}</p>
          </div>
          {columns.map((column, index) => (
            <div key={column.title} {...reveal(index + 1)}>
              <h2 className="text-label font-semibold text-mint">{column.title}</h2>
              {renderLinks(column.links)}
            </div>
          ))}
          {signInCol ? (
            <div {...reveal(3)}>
              <h2 className="text-label font-semibold text-mint">{signInCol.title}</h2>
              {renderLinks(signInCol.links)}
              {followCol ? (
                <>
                  <h2 className="mt-8 text-label font-semibold text-mint">{followCol.title}</h2>
                  {renderLinks(followCol.links)}
                </>
              ) : null}
            </div>
          ) : null}
          {/* Contact details repeated here at the client's request (7 September 2026). */}
          <div {...reveal(4)}>
            <h2 className="text-label font-semibold text-mint">Contact</h2>
            <ul className="mt-4 grid list-none gap-3 text-body text-paper/80">
              <li className="flex items-start gap-2.5">
                <MailIcon className="mt-1 shrink-0 text-mint" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all underline-offset-4 hover:text-paper hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="mt-1 shrink-0 text-mint" />
                <a
                  href={site.phoneHref}
                  className="tabular underline-offset-4 hover:text-paper hover:underline"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <PinIcon className="mt-1 shrink-0 text-mint" />
                <span>{footer.locationsLine}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-line-dark pt-8 pr-16 text-caption text-paper/70 sm:pr-20 lg:mt-20">
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
