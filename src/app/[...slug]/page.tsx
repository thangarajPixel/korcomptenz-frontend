import BannerSection from "@/components/banner-section";
import BenefitSection from "@/components/benefit-section/benefit-section";
import DomainSection from "@/components/domain-section/domain-section";
import SapTransform from "@/components/sap-transform/sap-transform";
import { StickyTitleList } from "@/components/sticky-title-list";
import type { Params } from "next/dist/server/request/params";
import React from "react";

import LightSlider from "@/components/light-slider/light-slider";
import DarkSlider from "@/components/dark-slider/dark-slider";

type Props = {
  params: Promise<Params>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  return (
    <div key={JSON.stringify(slug)}>
      <BannerSection />
      <SapTransform />
      <LightSlider />
      <StickyTitleList />
      <DarkSlider />
      <DomainSection />
      <BenefitSection />
     
    </div>
  );
};

export default Page;
