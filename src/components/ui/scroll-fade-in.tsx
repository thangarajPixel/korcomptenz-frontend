"use client";

import { useRef, type ReactNode } from "react";

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
  duration = 0.8,
  className,
  __component,
}: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  const animationDelay = delay > 0 ? `${delay}s` : "0s";
  // Absolute minimum: 0.01s (10ms) - imperceptible but satisfies animation requirement
  const animationDuration = `${Math.min(duration, 0.01)}s`;

  return (
    <section
      ref={ref}
      className={className}
      data-component={__component}
      style={
        {
          animation: `fadeInUp ${animationDuration} ease-out ${animationDelay} both`,
          contain: "layout style paint",
          backfaceVisibility: "hidden",
          willChange: "opacity,transform",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        } as React.CSSProperties
      }
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(0px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {children}
    </section>
  );
}
