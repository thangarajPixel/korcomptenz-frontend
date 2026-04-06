import GlobalPageOptimized from "@/components/global-page/global-page-optimized";
import { cn } from "@/lib/utils";
import { getHomeService } from "@/services";
import { APP_CONFIG } from "@/utils/app-config";
import { cache } from "react";
import { Suspense } from "react";

// Use ISR instead of force-dynamic for better caching
export const revalidate = 30; // Revalidate every 30 seconds

const getHomeServiceCache = cache(getHomeService);

export async function generateMetadata() {
  try {
    const data = await getHomeServiceCache();

    return {
      title: data?.seo?.title || "Home",
      description: data?.seo?.description || "",
      openGraph: {
        title: data?.seo?.title || "Home",
        description: data?.seo?.description || "",
      },
    };
  } catch {
    return {
      title: "Home",
      description: "Korcomptenz",
    };
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
      <GlobalPageOptimized data={data as ComponentPropsType[]} />
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
