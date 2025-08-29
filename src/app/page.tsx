"use client";

import CareersSection from "./_utils/oppurtunities";
import SlidingSection from "@/components/sliding-section";

import { InspireSection } from "./_utils";
import { WeAreKorcomptenzSection } from "./_utils";
import StickyCards from "@/components/sticky-cards";
import { InsightsSection } from "@/components/insight-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-16" >
      <SlidingSection />
      <WeAreKorcomptenzSection />
      <InspireSection />
      <StickyCards />
      <InsightsSection />
      <CareersSection />
    </div>
  );
}
1