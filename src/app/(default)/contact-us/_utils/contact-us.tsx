import { cache } from "react";

import GlobalPage from "@/components/global-page";
import { getContactUs } from "@/services";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/utils/app-config";

// SSG Configuration: Pre-render at build time, revalidate every hour
export const revalidate = 3600; // ISR: 1 hour

const getContactUsCache = cache(getContactUs);

export default async function ContactUsPage() {
  const data = await getContactUsCache();

  return (
    <div className={cn("flex flex-col pb-10 md:pb-24", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data?.list} />
    </div>
  );
}
