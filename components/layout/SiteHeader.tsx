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

export function SiteHeader() {
  return (
    <header
      data-site-header
      data-condensed="false"
      className="group fixed inset-x-0 top-0 z-50 px-gutter-narrow pt-header-inset transition-[padding] duration-200 ease-out-quiet data-[condensed=true]:px-0 data-[condensed=true]:pt-0 sm:px-gutter lg:px-gutter-wide"
    >
      {/* Sits straight on the hero at the top of the page; once scrolled it becomes a full-width
          white bar with dark text (client direction, 7 September 2026). */}
      <div className="rounded-bar text-paper transition-[background-color,box-shadow,border-radius] duration-200 ease-out-quiet group-data-[condensed=true]:rounded-none group-data-[condensed=true]:bg-paper group-data-[condensed=true]:text-ink group-data-[condensed=true]:shadow-header">
        <div className="flex h-header items-center justify-between gap-6 px-2 transition-[height,padding] duration-200 ease-out-quiet group-data-[condensed=true]:h-header-condensed group-data-[condensed=true]:px-gutter-narrow sm:px-4 sm:group-data-[condensed=true]:px-gutter lg:px-6 lg:group-data-[condensed=true]:px-gutter-wide">
          <Brand condensedAware />
          <div className="ml-auto hidden items-center gap-8 lg:flex xl:gap-10">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-7 xl:gap-9">
                <li>
                  <MegaMenu
                    label={productsMenu.label}
                    items={productsMenu.items}
                    dividerBefore={productsMenuDividerBefore}
                  />
                </li>
                {primaryLinks.map((link) => (
                  <li key={link.href}>
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
            <ButtonLink
              item={talkToUs}
              variant="paper-brand"
              size="nav"
              className="group-data-[condensed=true]:bg-brand group-data-[condensed=true]:text-paper group-data-[condensed=true]:hover:bg-forest"
            />
          </div>
          <MobileNav groups={mobileMenu} cta={talkToUs} />
        </div>
      </div>
      <HeaderCondense />
    </header>
  );
}
