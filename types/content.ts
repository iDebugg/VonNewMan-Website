/** Every link on the site is either a fragment on this page or one of a few external schemes. */
export type Href =
  `#${string}` | `/${string}` | `https://${string}` | `mailto:${string}` | `tel:${string}` | "#";

export type LinkItem = {
  label: string;
  href: Href;
  /** Opens in a new tab with rel="noopener". Only external product and social links. */
  external?: boolean;
};

export type MenuItem = LinkItem & {
  description: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** A source string that was joined with a middle dot, kept as its two parts. */
export type SplitLabel = {
  primary: string;
  secondary: string;
};
