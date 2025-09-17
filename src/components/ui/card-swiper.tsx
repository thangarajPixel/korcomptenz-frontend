'use client';
import { cn } from '@/lib/utils';

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import React, { type PropsWithChildren } from 'react';


const CardSwiper = ({
  children,
  className,
  disableAutoSlide = false,
}: PropsWithChildren<unknown> & { className?: string; disableAutoSlide?: boolean }) => {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    // dragFree: true,
    loop: true,
    watchDrag: (_emblaApi, event) => {
      // Check if the target element is the div you want to disable dragging on
      if (
        (event?.target as HTMLElement)?.classList?.contains(
          'embla__disable_swiper',
        )
      ) {
        return false; // Disable dragging on this div
      }
      return true; // Enable dragging/scrolling for other elements
    },
  });
  const [_, setSelectedIndex] = React.useState(0);

  const onInit = React.useCallback((emblaApi?: UseEmblaCarouselType[1]) => {
    setSelectedIndex(emblaApi?.selectedScrollSnap() || 0);
  }, []);

  const onSelect = React.useCallback((emblaApi?: UseEmblaCarouselType[1]) => {
    setSelectedIndex(emblaApi?.selectedScrollSnap() || 0);
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onInit();
    onSelect();
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  React.useEffect(() => {
    if (!emblaApi) return;
    if (disableAutoSlide) return;
    const autoSlide = setInterval(() => {
      emblaApi.scrollNext();
    }, 10000);

    return () => clearInterval(autoSlide);
  }, [emblaApi]);

  return (
    <section className={cn("w-full rounded-none", className)}>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className={cn("flex")}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSwiper;
