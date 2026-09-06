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
      className="group fixed inset-x-0 top-0 z-50 px-gutter-narrow pt-header-inset sm:px-gutter lg:px-gutter-wide"
    >
      {/* Sits straight on the hero at the top of the page. Once scrolled the only change is a
          white ground behind it, with the text turning dark to stay legible (client direction,
          7 September 2026). Size, inset and padding stay the same. */}
      <div className="rounded-bar text-paper transition-colors duration-200 ease-out-quiet group-data-[condensed=true]:bg-paper group-data-[condensed=true]:text-ink">
        <div className="flex h-header items-center justify-between gap-6 px-2 sm:px-4 lg:px-6">
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
