// Lightweight motion configuration to reduce Framer Motion bundle impact
// Use CSS animations where possible instead of Framer Motion

export const fadeInConfig = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const slideInConfig = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const scaleInConfig = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4 },
};

// Reduced motion for accessibility and performance
export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Get animation config based on user preferences
export const getAnimationConfig = (config: typeof fadeInConfig) => {
  if (prefersReducedMotion()) {
    return {
      ...config,
      transition: { duration: 0 },
    };
  }
  return config;
};
