import Image from "next/image";
import type { Product } from "@/lib/content";
import { products, productsIntro } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

const actionVariants = ["primary", "secondary", "link"] as const;

/**
 * Atlas and Sonar as a matched pair. On large screens each article is a subgrid of the
 * parent's seven rows, so every rule sits at the same height in both columns.
 */
function ProductColumn({ product }: { product: Product }) {
  return (
    <article
      id={product.id}
      aria-labelledby={`${product.id}-name`}
      className="grid scroll-mt-header lg:row-span-full lg:grid-rows-subgrid"
    >
      <div className="relative aspect-[16/10] border border-ink">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-left-top"
        />
      </div>

      <p className="pt-4 pb-3 text-label text-brand">{product.badge}</p>

      <div className="border-t-2 border-ink pt-5 pb-6">
        <h3 id={`${product.id}-name`} className="font-display text-product">
          {product.name}
        </h3>
        <p className="mt-2 flex flex-wrap gap-x-4 text-label text-slate">
          <span>{product.subline.primary}</span>
          <span>{product.subline.secondary}</span>
        </p>
      </div>

      <p className="border-t border-line py-6 text-body text-slate">
        <strong className="font-semibold text-ink">{product.positioning}</strong>{" "}
        {product.description}
      </p>

      <div className="border-t border-line py-6">
        {product.figures ? (
          <dl className="grid grid-cols-3 gap-6">
            {product.figures.map((figure) => (
              <div key={figure.label} className="flex flex-col">
                <dd className="order-1 font-display text-figure tabular">{figure.value}</dd>
                <dt className="order-2 mt-2 text-caption text-slate">{figure.label}</dt>
              </div>
            ))}
          </dl>
        ) : null}
        {product.platforms ? (
          <ul
            aria-label={product.platformsLabel}
            className="flex list-none flex-wrap gap-x-6 gap-y-2 text-body font-medium text-ink"
          >
            {product.platforms.map((platform) => (
              <li key={platform}>{platform}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <ul className="grid list-none gap-3 border-t border-line py-6">
        {product.features.map((feature) => (
          <li key={feature.lead} className="text-body text-slate">
            <strong className="font-semibold text-ink">{feature.lead}</strong> {feature.text}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-3 border-t border-line pt-6">
        {product.actions.map((action, index) => (
          <ButtonLink key={action.label} item={action} variant={actionVariants[index] ?? "link"} />
        ))}
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
      <div className="mt-12 grid gap-y-20 lg:mt-16 lg:grid-cols-2 lg:grid-rows-[repeat(7,auto)] lg:gap-x-12 lg:gap-y-0">
        {products.map((product) => (
          <ProductColumn key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
