import BannerSection from '@/components/banner-section';
import { StickyTitleList } from '@/components/sticky-title-list';
import type { Params } from 'next/dist/server/request/params';
import React from 'react'

type Props = {
  params: Promise<Params>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  return (
    <div key={JSON.stringify(slug)}>
      <BannerSection />
      <StickyTitleList />
      {/* <ManuelSlider /> */}
    </div>
  )
}

export default Page