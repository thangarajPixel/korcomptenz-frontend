// Carousel optimization for mobile performance
// Reduces animation complexity and defers carousel initialization on mobile

export const getCarouselOptions = (isMobile: boolean) => {
  return {
    align: "start" as const,
    loop: true,
    skipSnaps: false,
    // Reduce animation on mobile
    duration: isMobile ? 15 : 25,
    // Disable auto-scroll on mobile to save battery
    autoScroll: !isMobile,
  };
};

export const shouldLazyLoadCarousel = (index: number, isMobile: boolean) => {
  // On mobile, only load first 2 carousels eagerly
  // Others load on demand
  return isMobile ? index < 2 : index < 3;
};

export const getCarouselSlideOptions = (isMobile: boolean) => {
  return {
    // Reduce animation complexity on mobile
    skipSnaps: isMobile,
    // Disable drag on very small screens
    dragFree: !isMobile,
  };
};
