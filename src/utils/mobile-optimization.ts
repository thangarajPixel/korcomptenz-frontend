/**
 * Mobile Performance Optimization Utilities
 * Aggressive optimizations for mobile devices
 */

/**
 * Detect if device is mobile
 */
export function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

/**
 * Detect if connection is slow (3G/4G)
 */
export function isSlowConnection(): boolean {
  if (typeof navigator === "undefined") return false;

  const connection = (navigator as unknown as { connection?: { effectiveType?: string } }).connection;
  if (!connection) return false;

  const effectiveType = connection.effectiveType;
  return effectiveType === "3g" || effectiveType === "4g";
}

/**
 * Get optimal image size for device
 */
export function getOptimalImageSize(
  isMobile: boolean,
): { width: number; height: number } {
  if (isMobile) {
    return { width: 750, height: 600 };
  }
  return { width: 1920, height: 1080 };
}

/**
 * Disable animations on slow connections or reduced motion preference
 */
export function shouldReduceAnimations(): boolean {
  if (typeof window === "undefined") return false;

  // Check prefers-reduced-motion
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReduced) return true;

  // Check slow connection
  return isSlowConnection();
}

/**
 * Get animation duration based on device and connection
 */
export function getAnimationDuration(
  baseDuration: number = 0.6,
): number {
  if (shouldReduceAnimations()) return 0;
  return baseDuration;
}

/**
 * Defer non-critical operations on mobile
 */
export function deferOnMobile(callback: () => void, delay: number = 2000) {
  if (typeof window === "undefined") return;

  if (isMobileDevice()) {
    // Use requestIdleCallback if available, otherwise setTimeout
    const windowWithIdleCallback = window as Window & { requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number };
    if (windowWithIdleCallback.requestIdleCallback) {
      windowWithIdleCallback.requestIdleCallback(callback, { timeout: delay });
    } else {
      setTimeout(callback, delay);
    }
  } else {
    callback();
  }
}

/**
 * Lazy load images with lower quality on slow connections
 */
export function getImageQuality(): number {
  if (isSlowConnection()) return 60;
  return 85;
}

/**
 * Get carousel autoplay delay based on device
 */
export function getCarouselAutoplayDelay(isMobile: boolean): number {
  if (isMobile) return 6000; // Slower on mobile
  return 5000;
}

/**
 * Disable autoplay on slow connections
 */
export function shouldAutoplayCarousel(): boolean {
  return !isSlowConnection();
}

/**
 * Get intersection observer margin for lazy loading
 */
export function getLazyLoadMargin(isMobile: boolean): string {
  if (isMobile) return "100px"; // Load earlier on mobile
  return "50px";
}
