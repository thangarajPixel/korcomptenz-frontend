import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { getHomeService } from "@/services";
import { APP_CONFIG } from "@/utils/app-config";
import { generatePageMetadata } from "@/utils/metadata";
import { cache } from "react";
import { Suspense } from "react";

/**
 * SSG Configuration for Homepage
 * - Pre-renders static HTML at build time
 * - Revalidates every 1 hour (ISR)
 * - All crawlers see full content (H1, body copy, schema) on arrival
 * - No JavaScript rendering delay for SEO bots
 */
export const revalidate = 3600;

const getHomeServiceCache = cache(getHomeService);

export async function generateMetadata() {
  try {
    const data = await getHomeServiceCache();

    return generatePageMetadata({
      title: data?.seo?.title,
      description: data?.seo?.description,
      path: "/",
    });
  } catch {
    return generatePageMetadata({ path: "/" });
  }
}

function HomeContent({ data }: { data: unknown }) {
  if (!data) {
    return (
      <div
        className={cn(
          "flex flex-col pb-10 md:pb-24 min-h-screen items-center justify-center",
          APP_CONFIG.OVERALL_GAP,
        )}
      >
        <p className="text-lg text-muted-foreground">Loading content...</p>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col pb-10 md:pb-24", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data as ComponentPropsType[]} />
    </div>
  );
}

export default async function Home() {
  try {
    const data = await getHomeServiceCache();

    return (
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-lg text-muted-foreground">Loading...</p>
          </div>
        }
      >
        <HomeContent data={data?.list} />
      </Suspense>
    );
  } catch {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-destructive">
          Error loading page. Please try again later.
        </p>
      </div>
    );
  }
}
