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
  duration = 1.5,
  className,
  __component,
}: ScrollFadeInProps) {
  const ref = useRef(null);
  // Optimize intersection observer with larger margin for Speed Index
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Memoize animation variants to prevent recreation
  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }),
    [],
  );

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
        duration,
        delay,
        ease: "easeInOut",
      }}
      className={className}
      data-component={__component}
      style={styleConfig}
    >
      {children}
    </motion.section>
  );
}
