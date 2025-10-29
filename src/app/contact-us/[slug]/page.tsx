import React from "react";
import ClientSuccessPage from "../_utils/contact-us-page.";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return <ClientSuccessPage slug={slug} />;
};

export default Page;
