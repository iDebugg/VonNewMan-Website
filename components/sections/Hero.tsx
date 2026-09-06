import Image from "next/image";
import { hero } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      data-ground="dark"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-forest text-paper"
    >
      {/* Poster first: it is the LCP and paints before the video's first frame decodes. */}
      <Image
        src={hero.video.poster.src}
        alt=""
        fill
        preload
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        sizes="100vw"
        aria-hidden="true"
        className="object-cover"
      />
      <HeroVideo src={hero.video.src} poster={hero.video.poster.src} />
      {/* Wash: keeps AA contrast for paper text over any frame of the video. */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink/65" />

      <Container className="relative flex flex-1 flex-col justify-center pt-[calc(var(--spacing-header)+2*var(--spacing-header-inset)+3rem)] pb-[clamp(4rem,10vw,8rem)] text-center">
        {/* The locator lines were removed from the hero at the client's instruction (7 September 2026). */}
        <h1 id="hero-heading" className="mx-auto font-display text-display-1 text-paper">
          {/* Each sentence holds its own line from 640px up. That is the emphasis. */}
          {hero.headline.map((sentence) => (
            <span key={sentence} className="block sm:whitespace-nowrap">
              {sentence}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-7 max-w-[38rem] text-lede text-paper/85">{hero.lede}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {/* Order swapped at the client's request, 5 September 2026: the solid action leads. */}
          <ButtonLink item={hero.secondaryCta} variant="inverse" size="lg" />
          <ButtonLink item={hero.primaryCta} variant="inverse-outline" size="lg" />
        </div>
      </Container>

      <Container className="relative">
        <ul className="grid list-none border-t border-line-dark sm:grid-cols-3 sm:divide-x sm:divide-line-dark">
          {hero.trustPoints.map((point) => (
            <li
              key={point}
              className="border-b border-line-dark py-4 text-center text-label font-medium text-paper sm:border-b-0 sm:py-6"
            >
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
