import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { getAboutUs } from "@/services";
import { APP_CONFIG } from "@/utils/app-config";
import { generatePageMetadata } from "@/utils/metadata";
import { cache } from "react";

export const revalidate = 3600;

const getAboutUsCache = cache(getAboutUs);

export async function generateMetadata() {
  try {
    const data = await getAboutUsCache();
    return generatePageMetadata({
      title: data?.seo?.title,
      description: data?.seo?.description,
      path: "/about-us",
    });
  } catch {
    return generatePageMetadata({ path: "/about-us" });
  }
}

export default async function AboutUsPage() {
  try {
    const data = await getAboutUsCache();
    return (
      <div className={cn("flex flex-col pb-10 md:pb-24", APP_CONFIG.OVERALL_GAP)}>
        <GlobalPage data={data?.list} />
      </div>
    );
  } catch {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-destructive">Error loading page. Please try again later.</p>
      </div>
    );
  }
}
