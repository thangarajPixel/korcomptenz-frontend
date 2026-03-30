import { useEffect, useState } from "react";

/**
 * Hook to defer rendering of non-critical components until after initial paint
 * Improves LCP and TBT metrics
 */
export function useDeferredRender(delay = 0) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return shouldRender;
}
