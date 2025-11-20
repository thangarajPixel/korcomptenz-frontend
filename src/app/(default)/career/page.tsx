import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { getCareer } from "@/services";
import { APP_CONFIG } from "@/utils/app-config";
import React, { cache } from "react";

const getCareerCache = cache(getCareer);
export default async function careerPage() {
  const data = await getCareerCache();

  return (
    <div className={cn("flex flex-col", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data?.list} />
    </div>
  );
}
