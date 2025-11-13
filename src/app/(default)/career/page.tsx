import GlobalPage from "@/components/global-page";
import { getCareer } from "@/services";
import React, { cache } from "react";

const getCareerCache = cache(getCareer);
export default async function careerPage() {
  const data = await getCareerCache();

  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <GlobalPage data={data?.list} />
    </div>
  );
}
