import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { getAboutUs } from "@/services";
import { APP_CONFIG } from "@/utils/app-config";
import React, { cache } from "react";

export const dynamic = "force-dynamic";

const getAboutUsCache = cache(getAboutUs);

export async function generateMetadata() {
  const data = await getAboutUsCache();
  return {
    title: data?.seo?.title || "About us",
    description: data?.seo?.description || "",
  }
}

export default async function AboutUsPage() {
  const data = await getAboutUsCache();

  return (
    <div className={cn("flex flex-col pb-10 md:pb-24", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data?.list} />
    </div>
  );
}
