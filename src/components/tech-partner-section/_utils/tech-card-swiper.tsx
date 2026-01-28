"use client";

import { cn } from "@/lib/utils";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import React, { type PropsWithChildren } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TechCardSwiper = ({
  children,
  className,
  cardlenght,
  disableAutoSlide = false,
  ...props
}: PropsWithChildren<unknown> & {
  className?: string;
  disableAutoSlide?: boolean;
  cardlenght?: number;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
  });

  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  const updateButtons = React.useCallback((api?: UseEmblaCarouselType[1]) => {
    if (!api) return;
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    updateButtons(emblaApi);
    emblaApi.on("reInit", () => updateButtons(emblaApi));
    emblaApi.on("select", () => updateButtons(emblaApi));

    return () => {
      emblaApi.off("reInit", () => updateButtons(emblaApi));
      emblaApi.off("select", () => updateButtons(emblaApi));
    };
  }, [emblaApi, updateButtons]);

  // Auto-slide
  React.useEffect(() => {
    if (!emblaApi || disableAutoSlide) return;

    const autoSlide = setInterval(() => {
      emblaApi.canScrollNext() ? emblaApi.scrollNext() : emblaApi.scrollTo(0);
    }, 4000);

    return () => clearInterval(autoSlide);
  }, [emblaApi, disableAutoSlide]);

  return (
    <section className={cn("w-full rounded-none", className)} {...props}>
      <div className="relative">
        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">{children}</div>
        </div>

        {cardlenght && cardlenght > 2 && (
          <>
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="
            absolute lg:left-[-32px]  left-[-42px] top-1/2 -translate-y-1/2 z-20
            h-15 w-15 rounded-full  
            flex items-center justify-center
            disabled:opacity-30 disabled:cursor-not-allowed text-white cursor-pointer
          "
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="
            absolute right-[-30px] lg:right-[-20px] top-1/2 -translate-y-1/2 z-20 cursor-pointer
            h-15 w-15 rounded-full  
            flex items-center justify-center
            disabled:opacity-30 disabled:cursor-not-allowed text-white
          "
            >
              <ChevronRight className="h-12 w-12" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default TechCardSwiper;
