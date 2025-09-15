import BannerSection from '@/components/banner-section';
import BenefitSection from '@/components/benefit-section/benefit-section';
import DomainSection from '@/components/domain-section/domain-section';
import ManuelSlider from '@/components/manuel-slider/manuel-slider';
import SapTransform from '@/components/sap-transform/sap-transform';
import SolutionsSlider from '@/components/solutions-slider/solutions-slider';
import { StickyTitleList } from '@/components/sticky-title-list';
import { getPageService } from '@/services';
import React from 'react'

type Props = {
  params: Promise<{ slug: string[] }>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  await getPageService({ slug });

  return (
    <div key={JSON.stringify(slug)}>
      <BannerSection />
      <SapTransform />
      <SolutionsSlider />
      <StickyTitleList />
      <ManuelSlider />
      <DomainSection />
      <BenefitSection />
    </div>
  )
}

export default Page