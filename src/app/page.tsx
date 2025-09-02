import SlidingSection from "@/components/sliding-section";
import StickyCards from "@/components/sticky-cards";
import { InsightsSection } from "@/components/insight-section";
import WeAreKorcomptenzSection from "@/components/we-are-korcomptenz";
import InspireSection from "@/components/inspire-section";
import ServicesSection from "@/components/services-section";
import Opportunities from "@/components/opportunities";

export default async function Home() {
  return (
    <div className="flex flex-col gap-16" >
      <SlidingSection />
      <WeAreKorcomptenzSection />
      <ServicesSection />
      <InspireSection />
      <StickyCards />
      <InsightsSection />
      <Opportunities />
    </div>
  );
}
1