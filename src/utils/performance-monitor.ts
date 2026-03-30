/**
 * Performance monitoring utilities for tracking LCP, TBT, and SI metrics
 */

export function reportWebVitals(metric: {
  name: string;
  value: number;
  rating?: string;
}) {
  // Send to analytics service
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", metric.name, {
      value: Math.round(metric.value),
      event_category: "Web Vitals",
      event_label: metric.name,
      non_interaction: true,
    });
  }
}

export function optimizeImageLoading() {
  if (typeof window !== "undefined") {
    // Preload critical images
    const preloadImages = document.querySelectorAll(
      "img[data-preload='true']"
    );
    preloadImages.forEach((img) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = (img as HTMLImageElement).src;
      document.head.appendChild(link);
    });
  }
}
