"use client";

import useEmblaCarousel from "embla-carousel-react";
import { InsightCard } from "./insight-cards";
import { cn } from "@/lib/utils";

export default function InsightsMobileCarousel({
  items,
}: {
  items: InsightsMobileCarouselType[];
}) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    // containScroll: "keepSnaps",
    loop: true,
    // watchSlides: true,
    // slides: 'always',
  });

  return (
    <div className="block md:hidden w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 pl-4">
          {items?.map((item) => (
            <div
              key={item?.title}
              className={cn("min-w-[78%] max-w-[78%] pr-1 relative")}
            >
              <InsightCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
