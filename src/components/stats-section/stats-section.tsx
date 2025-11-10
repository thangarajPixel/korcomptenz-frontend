import React from "react";
import StatsSectionCard from "./_utils/stats-section-card";

const StatsSection = ({ data }: { data: StatsSectionType }) => {
  return (
    <section data-debug="stats-section">
      <div className="container-md flex flex-col gap-10">
        <h2 className="text-pretty lg:text-7xl text-6xl font-semibold  text-gray-900 break-words  ">
          {data?.title}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {data?.list.map((list, index) => (
            <StatsSectionCard key={index} list={list} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
