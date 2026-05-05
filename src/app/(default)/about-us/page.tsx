import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { getAboutUs } from "@/services";
import { APP_CONFIG } from "@/utils/app-config";
import { generatePageMetadata } from "@/utils/metadata";
import { cache } from "react";

// SSG Configuration: Pre-render at build time, revalidate every hour
export const revalidate = 3600; // ISR: 1 hour

const getAboutUsCache = cache(getAboutUs);

export async function generateMetadata() {
  const data = await getAboutUsCache();

  return generatePageMetadata({
    title: data?.seo?.title,
    description: data?.seo?.description,
    path: "/about-us",
  });
}

export default async function AboutUsPage() {
  const data = await getAboutUsCache();

  return (
    <div className={cn("flex flex-col pb-10 md:pb-24", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data?.list} />
    </div>
  );
}
