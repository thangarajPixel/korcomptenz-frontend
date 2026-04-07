import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { getHomeService } from "@/services";
import { APP_CONFIG } from "@/utils/app-config";
import { cache } from "react";

export const dynamic = "force-dynamic";
export const revalidate = 60; // Revalidate every 60 seconds

const getHomeServiceCache = cache(getHomeService);

export async function generateMetadata() {
  try {
    const data = await getHomeServiceCache();

    // Extract first hero slide image for LCP preload
    const heroList = data?.list?.find(
      (item: ComponentPropsType) => item.__component === "home.hero-section-one"
    );
    const firstSlide = heroList?.list?.[0] as SlidingSectionType | undefined;
    const mobileImageUrl = firstSlide?.mobile_image?.url ?? firstSlide?.image?.url ?? null;

    return {
      title: data?.seo?.title || "Home",
      description: data?.seo?.description || "",
      openGraph: {
        title: data?.seo?.title || "Home",
        description: data?.seo?.description || "",
      },
      ...(mobileImageUrl && {
        other: {
          // Next.js will render this as <link rel="preload"> in <head>
          "preload-lcp-image": mobileImageUrl,
        },
      }),
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
      <GlobalPage data={data as ComponentPropsType[]} />
    </div>
  );
}

export default async function Home() {
  try {
    const data = await getHomeServiceCache();

    // Extract first hero mobile image for LCP preload hint
    const heroList = data?.list?.find(
      (item: ComponentPropsType) => item.__component === "home.hero-section-one"
    );
    const firstSlide = heroList?.list?.[0] as SlidingSectionType | undefined;
    const lcpImageUrl = firstSlide?.mobile_image?.url ?? firstSlide?.image?.url ?? null;

    return (
      <>
        {lcpImageUrl && (
          // eslint-disable-next-line @next/next/no-head-element
          <link
            rel="preload"
            as="image"
            href={`/_next/image?url=${encodeURIComponent(lcpImageUrl)}&w=828&q=75`}
            fetchPriority="high"
          />
        )}
        <HomeContent data={data?.list} />
      </>
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
