import Image from "next/image";
import { hero } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { reveal } from "@/lib/utils/reveal";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      data-ground="dark"
      className="relative isolate flex min-h-[52rem] flex-col overflow-hidden bg-forest text-paper lg:min-h-svh"
    >
      {/* Poster first: it is the LCP and paints before the video's first frame decodes. */}
      <Image
        src="/assets/consulting-hero.jpg"
        alt="A technology consulting team collaborating in a contemporary workspace"
        fill
        preload
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        sizes="100vw"
        aria-hidden="true"
        className="hero-image object-cover object-[67%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,27,20,.96)_0%,rgba(3,27,20,.8)_42%,rgba(3,27,20,.18)_72%,rgba(3,27,20,.08)_100%)]"
      />

      <Container className="relative flex flex-1 flex-col justify-center pt-40 pb-16 text-left lg:pt-48">
        {/* The locator lines were removed from the hero at the client's instruction (7 September 2026). */}
        <h1
          id="hero-heading"
          className="max-w-[14ch] font-display text-display-1 text-paper"
          {...reveal(0)}
        >
          {/* The headline is intentionally composed as three lines. */}
          <span className="block">Technology</span>
          <span className="block">that makes</span>
          <span className="block whitespace-nowrap text-lime">work run better.</span>
        </h1>
        <p className="mt-9 max-w-[34rem] text-lede text-paper/85" {...reveal(1)}>
          {hero.lede}
        </p>
        <div
          className="mt-9 flex w-full max-w-sm flex-col items-start gap-3 sm:max-w-none sm:flex-row"
          {...reveal(2)}
        >
          {/* Order swapped at the client's request, 5 September 2026: the solid action leads. */}
          <ButtonLink
            item={hero.secondaryCta}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          />
          <ButtonLink
            item={hero.primaryCta}
            variant="inverse-outline"
            size="lg"
            className="w-full sm:w-auto"
          />
        </div>
      </Container>

      <Container className="relative flex flex-wrap justify-between gap-4 border-t border-paper/20 py-6 text-caption font-bold tracking-[.12em] text-paper/75">
        <span>FOUNDED IN LAGOS. WORKING INTERNATIONALLY.</span>
        <span>LAGOS / LONDON</span>
      </Container>
    </section>
  );
}
