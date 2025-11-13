import React, { cache } from "react";

import GlobalPage from "@/components/global-page";
import { getContactUs } from "@/services";

const getContactUsCache = cache(getContactUs);
export default async function ContactUsPage() {
  const data = await getContactUsCache();

  return (
    <div className="flex flex-col gap-16">
      <GlobalPage data={data?.list} />
    </div>
  );
}
