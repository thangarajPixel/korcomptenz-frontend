import React, { cache } from "react";

import ContactUsPage from "./_utils/contact-us-page.";
import { getContactUs } from "@/services";
const getContactUsCache = cache(getContactUs);

export async function generateMetadata() {
  const data = await getContactUsCache();

  return {
    title: data?.seo?.title || "Contact us",
    description: data?.seo?.description || "",
    alternates: {
      canonical: "/contact-us",
    },
  };
}

const Page = async () => {
  return <ContactUsPage />;
};

export default Page;
