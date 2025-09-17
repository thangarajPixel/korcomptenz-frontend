import BannerSection from "@/components/banner-section";
import BenefitSection from "@/components/benefit-section/benefit-section";
import DomainSection from "@/components/domain-section/domain-section";
import { StickyTitleList } from "@/components/sticky-title-list";
import type { Params } from "next/dist/server/request/params";
import React from "react";
import FaqSection from "@/components/faq-section";
import LightSlider from "@/components/light-slider/light-slider";
import DarkSlider from "@/components/dark-slider/dark-slider";
import SapSection from "@/components/sap-section";
import TechPartner from "@/components/tech-partner-section/tech-partner";
import BuildConnect from "@/components/build-connect";

type Props = {
  params: Promise<Params>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  return (
    <div key={JSON.stringify(slug)}>
      <BannerSection />
      <SapSection />
      <LightSlider />
      <StickyTitleList />
      <DarkSlider />
      <DomainSection />
      <BenefitSection />
      <FaqSection/>
      <TechPartner/>
      <BuildConnect/>
    </div>
  );
};

export default Page;
