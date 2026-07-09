"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo, useEffect, useState, type ReactNode } from "react";

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

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isInView = useInView(ref, {
    once: true,
    margin: "0px",
  });

  const variants = useMemo(
    () => ({
      hidden: {
        opacity: 0.95,
        y: 12,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    }),
    [],
  );

  return (
    <motion.section
      ref={ref}
      initial={false}
      animate={mounted ? (isInView ? "visible" : "hidden") : undefined}
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
