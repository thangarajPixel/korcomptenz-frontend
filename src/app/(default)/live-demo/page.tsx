import React, { cache } from "react";
import GlobalPage from "@/components/global-page";
import { getDemoPage } from "@/services";

const getDemoCache = cache(getDemoPage);

export default async function DemoPage() {
  const data = await getDemoCache();
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <GlobalPage data={data?.list} />
    </div>
  );
}
