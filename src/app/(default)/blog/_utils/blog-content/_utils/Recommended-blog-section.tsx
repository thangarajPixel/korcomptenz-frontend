import { InsightCard } from "@/components/insight-section";
import SplitDivider from "@/components/ui/split-divider";

const RecommendedBlogSection = ({ data }: { data: InsightsSectionType }) => {
  return (
    <section data-debug="content-showcase-section">
      <div className="flex flex-col gap-10">
        <SplitDivider className="lg:gap-28">
          <h2 className="text-pretty lg:text-7xl text-6xl font-semibold  text-gray-900 break-words  ">
            {data?.title}
          </h2>
        </SplitDivider>

        {/* Cards Grid */}
        <div className="container-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data?.list?.map((list, index) => (
            <InsightCard key={index} {...list} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedBlogSection;
