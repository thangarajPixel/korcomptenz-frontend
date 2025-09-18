import BannerSection from "@/components/banner-section";
import BenefitSection from "@/components/benefit-section/benefit-section";
import DomainSection from "@/components/domain-section/domain-section";
import { StickyTitleList } from "@/components/sticky-title-list";
import React from "react";
import FaqSection from "@/components/faq-section";
import LightSlider from "@/components/light-slider/light-slider";
import DarkSlider from "@/components/dark-slider/dark-slider";
import SapSection from "@/components/sap-section";
import { getPageService } from "@/services";
import DemonstratreSection from "@/components/demonstrate-section";


type Props = {
  params: Promise<{ slug: string[] }>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params; await getPageService({ slug });
  return (
    <div key={`page-${JSON.stringify(slug)}`}>
      <BannerSection />
      <SapSection />
      <LightSlider />
      <StickyTitleList />
      <DarkSlider />
      <DomainSection />
      <BenefitSection />
      <DemonstratreSection/>
      <FaqSection />
    </div>
  );
};

export default Page;
