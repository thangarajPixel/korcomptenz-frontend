"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode, useMemo, useEffect, useState } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isReduced, setIsReduced] = useState(false);

  // Respect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReduced(mediaQuery.matches);
  }, []);

  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: isReduced ? 0 : 10 },
      visible: { opacity: 1, y: 0 },
    }),
    [isReduced],
  );

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: isReduced ? 0 : duration,
        delay: isReduced ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
      data-component={__component}
    >
      {children}
    </motion.section>
  );
}
