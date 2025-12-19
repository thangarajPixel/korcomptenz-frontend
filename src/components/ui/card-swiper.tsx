"use client";

import { cn } from "@/lib/utils";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import React, { type PropsWithChildren } from "react";

const CardSwiper = ({
  children,
  className,
  disableAutoSlide = false,
  ...props
}: PropsWithChildren<unknown> & {
  className?: string;
  disableAutoSlide?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
  });

  // Safe initializer
  const onInit = React.useCallback((api?: UseEmblaCarouselType[1]) => {
    if (!api) return;
  }, []);

  const onSelect = React.useCallback((api?: UseEmblaCarouselType[1]) => {
    if (!api) return;
  }, []);

  // Attach Embla listeners once it's ready
  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", () => onInit(emblaApi));
    emblaApi.on("select", () => onSelect(emblaApi));

    return () => {
      emblaApi.off("reInit", () => onInit(emblaApi));
      emblaApi.off("select", () => onSelect(emblaApi));
    };
  }, [emblaApi, onInit, onSelect]);

  // Auto-slide
  React.useEffect(() => {
    if (!emblaApi || disableAutoSlide) return;

    const autoSlide = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0); // loop safely
      }
    }, 10000);

    return () => clearInterval(autoSlide);
  }, [emblaApi, disableAutoSlide]);

  return (
    <section className={cn("w-full rounded-none", className)} {...props}>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Important: min-w-0 ensures flex items shrink properly */}
          <div className={cn("flex")}>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default CardSwiper;
