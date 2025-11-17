import React, { cache } from "react";
import GlobalPage from "@/components/global-page";
import { getDemoPage } from "@/services";
// import DemoPartnership from "./_utils/demo-partnership";
// import DemoExperts from "./_utils/demo-experts";
// import DemoWhyAttend from "./_utils/demo-why-attend";
// import DemoOpportunities from "./_utils/demo-opportunities";

const getDemoCache = cache(getDemoPage);

export default async function DemoPage() {
  const data = await getDemoCache();
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <GlobalPage data={data?.list} />
      {/* <DemoPartnership />
      <DemoExperts />
      <DemoWhyAttend />
      <DemoOpportunities /> */}
    </div>
  );
}
