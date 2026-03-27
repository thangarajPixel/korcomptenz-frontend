"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode, useMemo } from "react";

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  __component?: string;
  isAboveFold?: boolean;
}

export function ScrollFadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
  __component,
  isAboveFold = false,
}: ScrollFadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variants = useMemo(
    () => ({
      hidden: { opacity: isAboveFold ? 1 : 0, y: isAboveFold ? 0 : 10 },
      visible: { opacity: 1, y: 0 },
    }),
    [isAboveFold],
  );

  const transitionConfig = useMemo(
    () => ({
      duration: isAboveFold ? 0 : duration,
      delay: isAboveFold ? 0 : delay,
      ease: "easeInOut" as const,
    }),
    [duration, delay, isAboveFold],
  );

  return (
    <motion.section
      ref={ref}
      initial={isAboveFold ? "visible" : "hidden"}
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transitionConfig}
      className={className}
      data-component={__component}
    >
      {children}
    </motion.section>
  );
}
