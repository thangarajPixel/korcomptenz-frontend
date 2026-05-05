import React, { cache } from "react";
import GlobalPage from "@/components/global-page";
import { getDemoPage } from "@/services";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/utils/app-config";
import { generatePageMetadata } from "@/utils/metadata";

const getDemoCache = cache(getDemoPage);

export async function generateMetadata() {
  try {
    const data = await getDemoCache();
    return generatePageMetadata({
      title: data?.seo?.title,
      description: data?.seo?.description,
      path: "/live-demo",
    });
  } catch {
    return generatePageMetadata({ path: "/live-demo" });
  }
}

export default async function DemoPage() {
  try {
    const data = await getDemoCache();
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
