import React, { cache } from "react";
import GlobalPage from "@/components/global-page";
import { getDemoPage } from "@/services";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/utils/app-config";

const getDemoCache = cache(getDemoPage);

export default async function DemoPage() {
  const data = await getDemoCache();
  return (
    <div className={cn("flex flex-col", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data?.list} />
    </div>
  );
}
