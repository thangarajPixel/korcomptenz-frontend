import React from "react";

import InsightsSuccessPage from "../_utils/insights-success-page";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return <InsightsSuccessPage slug={slug} />;
};

export default Page;
