"use client";

import SlidingSection from "@/components/sliding-section";

import { InspireSection } from "./_utils";
import { WeAreKorcomptenzSection } from "./_utils";
import StickyCards from "@/components/sticky-cards";

export default function Home() {
  return (
    <div >
      <SlidingSection />
      <WeAreKorcomptenzSection />

      <InspireSection />
      <StickyCards />
    </div>
  );
}
1