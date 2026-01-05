import StretchableSection from "@/components/stretchable-section";

import ServiceProvider from "./service-provider";
import { DangerousHtml } from "@/components/ui/dangerous-html";

const CombinedSection = ({ data }: { data: CombinedSectionType }) => {
  return (
    <section className="bg-[#f7f8f8] ">
      <div className="flex flex-col gap-12 md:gap-20 py-8">
        {/* Heading (needs container) */}
        <div className="container-md flex flex-col ">
          <DangerousHtml
            html={data?.heading?.title}
            className="text-4xl lg:text-[40px] font-bold text-foreground mb-12  lg:mb-16  text-balance"
          />

          <DangerousHtml
            html={data?.heading?.description}
            className="text-black text-lg"
          />
        </div>

        {/* These components already handle container-md internally */}
        <StretchableSection item={data?.stretchableComponent} />

        <ServiceProvider data={data} isCustom />
      </div>
    </section>
  );
};

export default CombinedSection;
