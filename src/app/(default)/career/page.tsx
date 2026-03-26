import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { getCareer } from "@/services";
import { APP_CONFIG } from "@/utils/app-config";
import React, { cache } from "react";

// Enable ISR: revalidate every 1 hour for better production performance
export const revalidate = 3600;

const getCareerCache = cache(getCareer);

export async function generateMetadata() {
  const data = await getCareerCache();

  return {
    title: data?.seo?.title || "Career",
    description: data?.seo?.description || "",
    alternates: {
      canonical: "/career",
    },
  };
}

export default async function CareerPage() {
  const data = await getCareerCache();

  return (
    <div className={cn("flex flex-col pb-10 md:pb-24", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data?.list} />
    </div>
  );
}
