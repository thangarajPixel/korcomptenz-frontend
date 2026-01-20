"use client";

import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import React, { type PropsWithChildren } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CardSwiperArrowWhite = ({
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

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  // Auto-slide
  React.useEffect(() => {
    if (!emblaApi || disableAutoSlide) return;

    const autoSlide = setInterval(() => {
      emblaApi.scrollNext();
    }, 10000);

    return () => clearInterval(autoSlide);
  }, [emblaApi, disableAutoSlide]);

  return (
    <section className={cn("relative w-full", className)} {...props}>
      <div className="relative">
        {/* LEFT ARROW */}
        <button
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="absolute top-1/2 z-10 -translate-y-1/2 rounded-full  p-3 text-white cursor-pointer"
        >
          <ChevronLeft className="h-12 w-12" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollNext}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full  p-3 text-white cursor-pointer"
        >
          <ChevronRight className="h-12 w-12" />
        </button>

        {/* SLIDER */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default CardSwiperArrowWhite;
