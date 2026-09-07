"use client";

import { useEffect } from "react";

/**
 * Reveals [data-reveal] elements as they scroll into view, every time. Until this mounts the
 * page renders fully visible (the hidden state is scoped to html[data-js]), so crawlers and
 * no-JS readers see everything. A leaf with no markup.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    root.dataset.js = "";
    // Replays every time (client direction, 7 September 2026): an element reveals once a fifth
    // of it is on screen, and resets only after it has left the viewport entirely, so nothing
    // flickers at the edges.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) el.dataset.inview = "";
          else if (!entry.isIntersecting) delete el.dataset.inview;
        }
      },
      { threshold: [0, 0.2], rootMargin: "0px 0px -10% 0px" },
    );
    const observed = new WeakSet<Element>();
    const observeAll = () =>
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        observer.observe(el);
      });
    observeAll();
    // Elements inside tab panels that open later are picked up when they appear.
    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, {
      attributes: true,
      attributeFilter: ["hidden"],
      subtree: true,
    });
    // Safety net: if the observer has not fired for something already on screen (hidden tabs,
    // some in-app browsers), show it anyway after a moment so nothing stays invisible.
    const safety = window.setInterval(() => {
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-inview])").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) el.dataset.inview = "";
      });
    }, 1500);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      window.clearInterval(safety);
      delete root.dataset.js;
    };
  }, []);
  return null;
}
