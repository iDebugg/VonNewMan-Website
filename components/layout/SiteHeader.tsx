import {
  mobileMenu,
  primaryLinks,
  productsMenu,
  productsMenuDividerBefore,
  talkToUs,
} from "@/lib/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Brand } from "./Brand";
import { HeaderCondense } from "./HeaderCondense";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { reveal } from "@/lib/utils/reveal";
import type { Href } from "@/types/content";

export function SiteHeader({ subpage = false }: { subpage?: boolean }) {
  const homeHref = (href: Href): Href =>
    subpage && href.startsWith("#") ? (`/${href}` as Href) : href;
  const headerProducts = {
    ...productsMenu,
    items: productsMenu.items.map((item) => ({ ...item, href: homeHref(item.href) })),
  };
  const headerPrimaryLinks = primaryLinks.map((item) => ({ ...item, href: homeHref(item.href) }));
  const headerMobileMenu = mobileMenu.map((group) => ({
    ...group,
    items: group.items.map((item) => ({ ...item, href: homeHref(item.href) })),
  }));
  const headerCta = { ...talkToUs, href: homeHref(talkToUs.href) };

  return (
    <header
      data-site-header
      data-condensed={subpage ? "true" : "false"}
      className="group fixed inset-x-0 top-0 z-50"
    >
      {/* The top state sits directly on the hero. On scroll, a full-width translucent surface
          keeps the navigation legible while preserving some continuity with the page beneath. */}
      <div className="border-b border-transparent text-paper transition-[background-color,color,box-shadow,backdrop-filter,border-color] duration-300 ease-out-quiet group-data-[condensed=true]:border-ink/10 group-data-[condensed=true]:bg-paper/88 group-data-[condensed=true]:text-ink group-data-[condensed=true]:shadow-panel group-data-[condensed=true]:backdrop-blur-xl">
        <div className="flex h-header items-center justify-between gap-6 px-gutter-narrow sm:px-gutter lg:px-gutter-wide">
          <div {...reveal(0)}>
            <Brand condensedAware href={subpage ? "/" : "#top"} />
          </div>
          <div className="ml-auto hidden items-center gap-8 lg:flex xl:gap-10">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-7 xl:gap-9">
                <li {...reveal(1)}>
                  <MegaMenu
                    label={productsMenu.label}
                    items={headerProducts.items}
                    dividerBefore={productsMenuDividerBefore}
                  />
                </li>
                {headerPrimaryLinks.map((link, index) => (
                  <li key={link.href} {...reveal(index + 2)}>
                    <a
                      href={link.href}
                      className="inline-flex rounded-control py-2 text-lede font-semibold whitespace-nowrap text-paper/90 transition-colors duration-150 hover:text-paper group-data-[condensed=true]:text-ink group-data-[condensed=true]:hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div {...reveal(6)}>
              <ButtonLink
                item={headerCta}
                variant="primary"
                size="nav"
                className="group-data-[condensed=true]:bg-forest group-data-[condensed=true]:text-paper"
              />
            </div>
          </div>
          <MobileNav groups={headerMobileMenu} cta={headerCta} />
        </div>
      </div>
      {subpage ? null : <HeaderCondense />}
    </header>
  );
}
