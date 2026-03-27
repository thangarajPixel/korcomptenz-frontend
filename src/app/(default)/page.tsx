import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { getHomeService } from "@/services";
import { APP_CONFIG } from "@/utils/app-config";
import { cache } from "react";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const revalidate = 60; // Revalidate every 60 seconds

const getHomeServiceCache = cache(getHomeService);

export async function generateMetadata() {
  const data = await getHomeServiceCache();

  return {
    title: data?.seo?.title || "Home",
    description: data?.seo?.description || "",
    openGraph: {
      title: data?.seo?.title || "Home",
      description: data?.seo?.description || "",
    },
  };
}

function HomeContent({ data }: { data: unknown }) {
  return (
    <div className={cn("flex flex-col pb-10 md:pb-24", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data as ComponentPropsType[]} />
    </div>
  );
}

export default async function Home() {
  const data = await getHomeServiceCache();

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <HomeContent data={data?.list} />
    </Suspense>
  );
}
