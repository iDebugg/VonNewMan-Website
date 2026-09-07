import Image from "next/image";
import { hero } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroVideo } from "./HeroVideo";
import { reveal } from "@/lib/utils/reveal";

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
      {/* Deep green wash (client direction, 7 September 2026): keeps AA contrast for paper text
          over any frame of the video and ties the hero to the brand colour. */}
      <div aria-hidden="true" className="absolute inset-0 bg-forest/80" />

      <Container className="relative flex flex-1 flex-col justify-center pt-[calc(var(--spacing-header)+2*var(--spacing-header-inset)+3rem)] pb-[clamp(4rem,10vw,8rem)] text-center">
        {/* The locator lines were removed from the hero at the client's instruction (7 September 2026). */}
        <h1
          id="hero-heading"
          className="mx-auto font-display text-display-1 text-paper"
          {...reveal(0)}
        >
          {/* Each sentence holds its own line from 640px up. That is the emphasis. */}
          {hero.headline.map((sentence) => (
            <span key={sentence} className="block sm:whitespace-nowrap">
              {sentence}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-7 max-w-[38rem] text-lede text-paper/85" {...reveal(1)}>
          {hero.lede}
        </p>
        <div
          className="mx-auto mt-9 flex w-full max-w-sm flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row"
          {...reveal(2)}
        >
          {/* Order swapped at the client's request, 5 September 2026: the solid action leads. */}
          <ButtonLink
            item={hero.secondaryCta}
            variant="inverse"
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

      <Container className="relative">
        <ul className="grid list-none border-t border-line-dark sm:grid-cols-3 sm:divide-x sm:divide-line-dark">
          {hero.trustPoints.map((point, index) => (
            <li
              key={point}
              {...reveal(index)}
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
