"use client";

import { CareersSection, InspireSection, ServicesSection, WeAreKorcomptenzSection } from "./_utils";
import SlidingSection from "@/components/sliding-section";
import StickyCards from "@/components/sticky-cards";

export default function Home() {
  return (
    <div >
      <SlidingSection />
      <WeAreKorcomptenzSection />
      <ServicesSection />
      <InspireSection />
      <StickyCards />
      <CareersSection />
    </div>
  );
}
1