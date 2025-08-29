"use client";

import { CareersSection, InspireSection, ServicesSection, WeAreKorcomptenzSection } from "./_utils";
import SlidingSection from "@/components/sliding-section";
import StickyCards from "@/components/sticky-cards";
import { InsightsSection } from "@/components/insight-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-16" >
      <SlidingSection />
      <WeAreKorcomptenzSection />
      <ServicesSection />
      <InspireSection />
      <StickyCards />
      <InsightsSection />
      <CareersSection />
    </div>
  );
}
1