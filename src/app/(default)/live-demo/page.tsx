import React, { cache } from "react";
import GlobalPage from "@/components/global-page";
import { getDemoPage } from "@/services";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/utils/app-config";
import { generatePageMetadata } from "@/utils/metadata";

const getDemoCache = cache(getDemoPage);

export async function generateMetadata() {
  const data = await getDemoCache();
  return generatePageMetadata({
    title: data?.seo?.title,
    description: data?.seo?.description,
    path: "/live-demo",
  });
}
export default async function DemoPage() {
  const data = await getDemoCache();
  return (
    <div className={cn("flex flex-col pb-10 md:pb-24", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data?.list} />
    </div>
  );
}
