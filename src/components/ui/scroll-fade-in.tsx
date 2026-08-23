"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

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
