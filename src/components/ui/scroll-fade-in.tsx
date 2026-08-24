"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useIsomorphicLayoutEffect } from "@/utils/custom-hooks";

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  __component?: string;
}

export function ScrollFadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
  __component,
}: ScrollFadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  // A section that's already (even partially) in the viewport on mount —
  // e.g. one sitting right below a hero that's intentionally shorter than
  // 100vh — would otherwise still mount in the "not yet revealed" state and
  // get flipped to "revealed" a moment later by the IntersectionObserver
  // below, animating a translateY it never needed since the user could
  // already see it. That transform-driven movement is exactly what the
  // Layout Instability API scores as a shift. Checking synchronously before
  // paint lets already-visible sections skip straight to their settled
  // state, while sections that are genuinely off-screen on mount keep the
  // existing observer-driven reveal-on-scroll animation unchanged.
  useIsomorphicLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportHeight && rect.bottom > 0) {
      setIsInView(true);
    }
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = {
    opacity: isInView ? 1 : 0.95,
    transform: isInView ? "translateY(0px)" : "translateY(12px)",
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}s`,
    transitionDelay: `${delay}s`,
    transitionTimingFunction: "ease-out",
  };

  return (
    <section
      ref={ref}
      style={style}
      className={className}
      data-component={__component}
    >
      {children}
    </section>
  );
}
