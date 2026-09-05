import { cn } from "@/lib/utils/cn";

type SectionHeadingProps = {
  id: string;
  kicker?: string;
  title: string;
  lede?: string;
  className?: string;
};

/** Section-level heading: serif h2, optional sentence-case kicker, optional lede. */
export function SectionHeading({ id, kicker, title, lede, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-[46rem]", className)}>
      {kicker ? <p className="mb-3 text-label text-brand">{kicker}</p> : null}
      <h2 id={id} className="font-display text-display-2">
        {title}
      </h2>
      {lede ? <p className="mt-5 text-lede text-slate">{lede}</p> : null}
    </div>
  );
}
