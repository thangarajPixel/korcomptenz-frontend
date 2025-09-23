import React from "react";
import StickyTitleCard from "./_utils/sticky-title-card";

const StickyTitleList = ({
  salesforceServices,
}: {
  salesforceServices: StickyTitleListType;
}) => {
  return (
    <section className="container-md" data-debug={"page-componets.sticky-title-list"}>
      <div className="w-full px-0 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* Left Sidebar - Title */}
          <div className="w-1/2"  >
            <div className={`lg:sticky lg:top-28`}>
              <h2 className="text-6xl  md:text-9xl font-bold text-gray-900 ">
                {salesforceServices.title}
              </h2>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div>
            <div className="space-y-6">
              {salesforceServices?.list?.map((service, index) => (
                <StickyTitleCard key={index} data={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyTitleList;
