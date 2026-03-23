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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Memoize animation variants to prevent recreation
  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }),
    [],
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
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      data-component={__component}
      style={{
        willChange: isInView ? "auto" : "transform, opacity",
        contain: "layout style paint",
      }}
    >
      {children}
    </motion.section>
  );
}
