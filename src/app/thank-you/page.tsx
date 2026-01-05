"use client";

import ThankYouPage from "../thank-you";

const Page = () => {
  const data = getCaseStudyPage();

  if (!data) return null;
  return <ThankYouPage />;
};

export default Page;
