import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { getHomeService } from "@/services";
import { APP_CONFIG } from "@/utils/app-config";
import { cache } from "react";

// Enable ISR with 1 hour revalidation for better performance
export const revalidate = 3600;

const getHomeServiceCache = cache(getHomeService);

export async function generateMetadata() {
  const data = await getHomeServiceCache();

  return {
    title: data?.seo?.title || "Home",
    description: data?.seo?.description || "",
  };
}
export default async function Home() {
  const data = await getHomeServiceCache();
  return (
    <div className={cn("flex flex-col pb-10 md:pb-24", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data?.list} />
    </div>
  );
}
