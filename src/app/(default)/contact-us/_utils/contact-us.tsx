import React, { cache } from "react";

import GlobalPage from "@/components/global-page";
import { getContactUs } from "@/services";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/utils/app-config";

// Enable ISR: revalidate every 1 hour for better production performance
export const revalidate = 3600;

const getContactUsCache = cache(getContactUs);

export default async function ContactUsPage() {
  const data = await getContactUsCache();

  return (
    <div className={cn("flex flex-col pb-10 md:pb-24", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data?.list} />
    </div>
  );
}
