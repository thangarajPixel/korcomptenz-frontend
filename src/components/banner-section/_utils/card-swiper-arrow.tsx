"use client";

import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import React, { type PropsWithChildren } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const CardSwiperArrow = ({
  children,
  className,

  ...props
}: PropsWithChildren<unknown> & {
  className?: string;
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

  return (
    <section
      className={cn("w-full rounded-none relative", className)}
      {...props}
    >
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">{children}</div>
        </div>

        {/* arrows */}
        <button
          onClick={scrollPrev}
          className="hidden lg:flex absolute -left-18 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full text-primary"
        >
          <ChevronLeft className="w-16 h-16 stroke-[2.5]" />
        </button>

        <button
          onClick={scrollNext}
          className="hidden lg:flex absolute -right-18 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full text-primary"
        >
          <ChevronRight className="w-16 h-16 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
};

export default CardSwiperArrow;
