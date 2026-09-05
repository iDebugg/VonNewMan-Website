import Image from "next/image";
import type { Product } from "@/lib/content";
import { products, productsIntro } from "@/lib/content";
import { cn } from "@/lib/utils/cn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

const actionVariants = ["primary", "secondary", "link"] as const;

/**
 * Showcase row: a large screenshot beside the product's copy. Rows alternate sides, Atlas with
 * the image on the left and Sonar on the right (client direction, 5 September 2026).
 */
function ProductRow({ product, flip }: { product: Product; flip: boolean }) {
  return (
    <article
      id={product.id}
      aria-labelledby={`${product.id}-name`}
      className="grid scroll-mt-[calc(var(--spacing-header)+2*var(--spacing-header-inset))] items-center gap-10 lg:grid-cols-5 lg:gap-16"
    >
      <figure className={cn("lg:col-span-3", flip && "lg:order-2")}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-nav border border-line">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-left-top"
          />
        </div>
      </figure>

      <div className={cn("lg:col-span-2", flip && "lg:order-1")}>
        <p className="text-label text-brand">{product.badge}</p>
        <h3 id={`${product.id}-name`} className="mt-3 font-display text-product">
          {product.name}
        </h3>
        <p className="mt-2 flex flex-wrap gap-x-4 text-label text-slate">
          <span>{product.subline.primary}</span>
          <span>{product.subline.secondary}</span>
        </p>
        <p className="mt-6 text-body text-slate">
          <strong className="font-semibold text-ink">{product.positioning}</strong>{" "}
          {product.description}
        </p>

        {product.figures ? (
          <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-line pt-6">
            {product.figures.map((figure) => (
              <div key={figure.label} className="flex flex-col">
                <dd className="order-1 font-display text-figure font-semibold tabular">
                  {figure.value}
                </dd>
                <dt className="order-2 mt-2 text-caption text-slate">{figure.label}</dt>
              </div>
            ))}
          </dl>
        ) : null}
        {product.platforms ? (
          <ul
            aria-label={product.platformsLabel}
            className="mt-7 flex list-none flex-wrap gap-x-5 gap-y-2 border-t border-line pt-6 text-body font-medium text-ink"
          >
            {product.platforms.map((platform) => (
              <li key={platform}>{platform}</li>
            ))}
          </ul>
        ) : null}

        <ul className="mt-7 grid list-none gap-x-6 gap-y-3 border-t border-line pt-6 sm:grid-cols-2">
          {product.features.map((feature) => (
            <li key={feature.lead} className="text-body text-slate">
              <strong className="font-semibold text-ink">{feature.lead}</strong> {feature.text}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {product.actions.map((action, index) => (
            <ButtonLink
              key={action.label}
              item={action}
              variant={actionVariants[index] ?? "link"}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <Section id="products" labelledBy="products-heading">
      <SectionHeading
        id="products-heading"
        title={productsIntro.headline}
        lede={productsIntro.lede}
      />
      <div className="mt-14 grid gap-20 lg:mt-20 lg:gap-28">
        {products.map((product, index) => (
          <ProductRow key={product.id} product={product} flip={index % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}
