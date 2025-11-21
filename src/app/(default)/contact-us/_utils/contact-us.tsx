import React, { cache } from "react";

import GlobalPage from "@/components/global-page";
import { getContactUs } from "@/services";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/utils/app-config";

export const dynamic = "force-dynamic";

const getContactUsCache = cache(getContactUs);

export async function generateMetadata() {
  const data = await getContactUsCache();
  return {
    title: data?.seo?.title || "Contact us",
    description: data?.seo?.description || "",
  }
}


export default async function ContactUsPage() {
  const data = await getContactUsCache();

  return (
    <div className={cn("flex flex-col", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data?.list} />
    </div>
  );
}
