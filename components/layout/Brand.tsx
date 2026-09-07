import Image from "next/image";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils/cn";

export function Brand({ condensedAware = false }: { condensedAware?: boolean }) {
  return (
    <a href="#top" className="inline-flex items-center gap-3">
      <Image
        src={site.wordmarkWhite.src}
        alt=""
        width={site.wordmarkWhite.width}
        height={site.wordmarkWhite.height}
        className={cn("h-auto w-56", condensedAware && "group-data-[condensed=true]:hidden")}
      />
      <span
        className={cn(
          "hidden items-center gap-3",
          condensedAware && "group-data-[condensed=true]:flex",
        )}
      >
        <Image src={site.mark.src} alt="" width={42} height={42} className="rounded-lg" />
        <span className="leading-none">
          <span className="block text-title font-extrabold whitespace-nowrap text-ink">
            {site.brand.name}
          </span>
          <span className="mt-1 block text-caption font-semibold whitespace-nowrap text-slate">
            {site.brand.descriptor}
          </span>
        </span>
      </span>
    </a>
  );
}
