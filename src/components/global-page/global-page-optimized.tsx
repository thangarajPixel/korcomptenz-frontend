/**
 * Optimized GlobalPage component with lazy loading for below-the-fold sections
 * This wrapper defers rendering of non-critical sections to improve LCP and TBT
 */

import { AggressiveLazySectionWrapper } from "../lazy-section-wrapper";
import GlobalPage from "./global-page";

type Props = {
  data: ComponentPropsType[];
};

/**
 * Wraps GlobalPage with lazy loading for sections after the first 3
 * This significantly improves mobile performance by deferring non-critical content
 */
export default function GlobalPageOptimized({ data }: Props) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-muted-foreground">No content available</p>
      </div>
    );
  }

  // Split data into critical (first 3 sections) and deferred
  const criticalSections = data.slice(0, 3);
  const deferredSections = data.slice(3);

  return (
    <>
      {/* Render critical sections immediately */}
      <GlobalPage data={criticalSections} />

      {/* Defer non-critical sections */}
      {deferredSections.length > 0 && (
        <AggressiveLazySectionWrapper
          fallback={<div className="h-96 bg-muted animate-pulse" />}
        >
          <GlobalPage data={deferredSections} />
        </AggressiveLazySectionWrapper>
      )}
    </>
  );
}
