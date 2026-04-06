"use client";

import React, { Suspense, lazy, useRef, useEffect } from "react";

interface LazySectionWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Wrapper component for lazy loading sections below the fold
 * Uses Intersection Observer to load content when it enters viewport
 * Optimized for mobile with larger rootMargin
 */
export const LazySectionWrapper = React.memo(
  ({
    children,
    fallback = <div className="h-96" />,
    threshold = 0.1,
    rootMargin = "100px",
  }: LazySectionWrapperProps) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold, rootMargin },
      );

      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return (
      <div ref={ref}>
        {isVisible ? (
          <Suspense fallback={fallback}>{children}</Suspense>
        ) : (
          fallback
        )}
      </div>
    );
  },
);

LazySectionWrapper.displayName = "LazySectionWrapper";

/**
 * Higher-order component for lazy loading components
 * Useful for heavy components that should be code-split
 */
export function withLazyLoading<P extends object>(
  Component: React.ComponentType<P>,
  displayName: string,
) {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));

  const Wrapped = (props: P) => (
    <Suspense fallback={<div className="h-96" />}>
      <LazyComponent {...props} />
    </Suspense>
  );

  Wrapped.displayName = `withLazyLoading(${displayName})`;
  return Wrapped;
}

/**
 * Aggressive lazy loading for mobile
 * Defers rendering until user scrolls close to section
 */
export const AggressiveLazySectionWrapper = React.memo(
  ({
    children,
    fallback = <div className="h-96" />,
  }: Omit<LazySectionWrapperProps, "threshold" | "rootMargin">) => {
    return (
      <LazySectionWrapper
        fallback={fallback}
        threshold={0.05}
        rootMargin="200px"
      >
        {children}
      </LazySectionWrapper>
    );
  },
);

AggressiveLazySectionWrapper.displayName = "AggressiveLazySectionWrapper";
