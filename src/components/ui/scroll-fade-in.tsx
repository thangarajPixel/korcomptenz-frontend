"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

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
  return (
    <motion.section
      initial={false}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
      data-component={__component}
    >
      {children}
    </motion.section>
  );
}
