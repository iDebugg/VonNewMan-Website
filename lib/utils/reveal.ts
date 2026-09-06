import type { CSSProperties } from "react";

/**
 * Marks an element for the scroll reveal. `index` staggers items in a row or grid so they
 * arrive one after another; the observer in components/layout/RevealObserver.tsx does the rest.
 */
export function reveal(index = 0, step = 60) {
  return {
    "data-reveal": "",
    style: { "--reveal-delay": `${index * step}ms` } as CSSProperties,
  };
}
