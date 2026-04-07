"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

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
  duration = 0.6,
  className,
  __component,
}: ScrollFadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-80px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      data-component={__component}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
        willChange: "opacity, transform",
        contain: "layout style",
      }}
    >
      {children}
    </section>
  );
}
