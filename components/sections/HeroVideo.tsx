"use client";

import { useEffect, useRef } from "react";

type HeroVideoProps = {
  src: string;
  poster: string;
};

/**
 * Looping, muted background video. Decorative, so hidden from assistive tech. The source is
 * attached after window load; prefers-reduced-motion holds on the poster; playback pauses while
 * scrolled out of view.
 */
export function HeroVideo({ src, poster }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (reduce.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play().catch(() => undefined);
      }
    };
    // The source is attached only after the page has loaded, so the poster, styles and fonts
    // are not competing with a 480 KB download for first paint.
    const attach = () => {
      if (video.src) return;
      video.src = src;
      apply();
    };
    if (document.readyState === "complete") attach();
    else window.addEventListener("load", attach, { once: true });
    reduce.addEventListener("change", apply);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry || reduce.matches) return;
        if (entry.isIntersecting) void video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.05 },
    );
    observer.observe(video);
    return () => {
      window.removeEventListener("load", attach);
      reduce.removeEventListener("change", apply);
      observer.disconnect();
    };
  }, [src]);

  return (
    <video
      ref={ref}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      className="absolute inset-0 size-full scale-105 object-cover blur-[3px]"
    />
  );
}
