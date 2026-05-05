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
  duration = 0.5,
  className,
  __component,
}: ScrollFadeInProps) {
  const ref = useRef(null);
  // Use a positive margin so elements animate in slightly before they enter the viewport,
  // preventing content from appearing invisible on slow mobile devices
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 12 },
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
        ease: "easeOut",
      }}
      className={className}
      data-component={__component}
    >
      {children}
    </motion.section>
  );
}
