"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode, useMemo } from "react";

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
  const ref = useRef(null);
  // Larger margin for better Speed Index, once: true prevents re-animation
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Memoize animation variants to prevent recreation
  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    }),
    [],
  );

  // Memoize style config
  const styleConfig = useMemo(
    () => ({
      willChange: isInView ? "auto" : "transform, opacity",
      contain: "layout style paint",
      backfaceVisibility: "hidden" as const,
    }),
    [isInView],
  );

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: Math.min(duration, 0.5),
        delay,
        ease: "easeOut" as const,
      }}
      className={className}
      data-component={__component}
      style={styleConfig}
    >
      {children}
    </motion.section>
  );
}
