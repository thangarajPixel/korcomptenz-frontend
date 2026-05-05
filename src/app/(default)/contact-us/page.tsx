import React, { cache } from "react";

import ContactUsPage from "./_utils/contact-us-page.";
import { getContactUs } from "@/services";
import { generatePageMetadata } from "@/utils/metadata";

const getContactUsCache = cache(getContactUs);

export async function generateMetadata() {
  const data = await getContactUsCache();

  return generatePageMetadata({
    title: data?.seo?.title,
    description: data?.seo?.description,
    path: "/contact-us",
  });
}

const Page = async () => {
  return <ContactUsPage />;
};

export default Page;
