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
      data-ground="dark"
      className="group fixed inset-x-0 top-0 z-50 px-gutter-narrow pt-header-inset sm:px-gutter lg:px-gutter-wide"
    >
      {/* Floating glass bar: dark translucent ground, blurred backdrop, rounded edges. */}
      <div className="mx-auto max-w-site rounded-bar border border-paper/10 bg-ink/45 text-paper shadow-header backdrop-blur-xl transition-colors duration-200 ease-out-quiet group-data-[condensed=true]:bg-ink/85">
        <div className="flex h-header items-center gap-6 px-4 transition-[height] duration-200 ease-out-quiet group-data-[condensed=true]:h-header-condensed sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] xl:gap-10">
          <Brand condensedAware />
          <nav aria-label="Primary" className="hidden lg:block lg:justify-self-center">
            <ul className="flex items-center gap-5 xl:gap-8">
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
                    className="inline-flex rounded-control py-2 text-label font-medium whitespace-nowrap text-paper/85 transition-colors duration-150 hover:text-paper xl:text-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="ml-auto hidden items-center lg:flex lg:justify-self-end">
            <ButtonLink item={talkToUs} variant="paper-brand" size="nav" />
          </div>
          <MobileNav groups={mobileMenu} cta={talkToUs} />
        </div>
      </div>
      <HeaderCondense />
    </header>
  );
}
