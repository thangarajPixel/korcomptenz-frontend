"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      event: string,
      name: string,
      params: Record<string, unknown>,
    ) => void;
  }
}

export function WebVitals() {
  useEffect(() => {
    if (typeof window === "undefined" || !("PerformanceObserver" in window)) {
      return;
    }

    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as unknown as {
          renderTime?: number;
          loadTime?: number;
        };
        if (window.gtag) {
          window.gtag("event", "LCP", {
            value: Math.round(
              (lastEntry.renderTime || lastEntry.loadTime) ?? 0,
            ),
            event_category: "Web Vitals",
            non_interaction: true,
          });
        }
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (window.gtag) {
            const fid = entry as unknown as { processingDuration: number };
            window.gtag("event", "FID", {
              value: Math.round(fid.processingDuration),
              event_category: "Web Vitals",
              non_interaction: true,
            });
          }
        });
      });
      fidObserver.observe({ entryTypes: ["first-input"] });

      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const cls = entry as unknown as {
            value: number;
            hadRecentInput: boolean;
          };
          if (!cls.hadRecentInput) {
            clsValue += cls.value;
            if (window.gtag) {
              window.gtag("event", "CLS", {
                value: Math.round(clsValue * 1000),
                event_category: "Web Vitals",
                non_interaction: true,
              });
            }
          }
        });
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    } catch {
      // Performance monitoring not available
    }
  }, []);

  return null;
}
