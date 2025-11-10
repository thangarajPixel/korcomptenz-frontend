import GlobalPage from "@/components/global-page";
import { getAboutUs } from "@/services";
import React, { cache } from "react";

const getAboutUsCache = cache(getAboutUs);
export default async function AboutUsPage() {
  const data = await getAboutUsCache();

  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <GlobalPage data={data?.list} />
    </div>
  );
}
