"use client";
import { getCaseStudyPage } from "@/services";
import ThankYouPage from "../thank-you";

const Page = () => {
  const data = getCaseStudyPage();

  if (!data) return null;
  return <ThankYouPage />;
};

export default Page;
