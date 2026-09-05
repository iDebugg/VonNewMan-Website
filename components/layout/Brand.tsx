import Image from "next/image";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils/cn";

export function Brand({ condensedAware = false }: { condensedAware?: boolean }) {
  return (
    <a href="#top" className="inline-flex items-center gap-3">
      <Image
        src={site.mark.src}
        alt=""
        width={40}
        height={40}
        className={cn(
          "rounded-lg",
          condensedAware && "transition-[width,height] group-data-[condensed=true]:size-8",
        )}
      />
      <span className="leading-none">
        <span className="block text-title-lg whitespace-nowrap text-paper">{site.brand.name}</span>{" "}
        <span className="mt-0.5 block text-caption whitespace-nowrap text-paper/70">
          {site.brand.descriptor}
        </span>
      </span>
    </a>
  );
}
