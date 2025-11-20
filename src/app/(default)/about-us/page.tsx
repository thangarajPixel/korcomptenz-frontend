import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { getAboutUs } from "@/services";
import { APP_CONFIG } from "@/utils/app-config";
import React, { cache } from "react";

const getAboutUsCache = cache(getAboutUs);
export default async function AboutUsPage() {
  const data = await getAboutUsCache();

  return (
    <div className={cn("flex flex-col", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data?.list} />
    </div>
  );
}
