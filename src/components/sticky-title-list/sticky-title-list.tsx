import React from "react";
import StickyTitleCard from "./_utils/sticky-title-card";

const StickyTitleList = ({
  salesforceServices,
}: {
  salesforceServices: StickyTitleListType;
}) => {
  return (
    <section
      className="container-md"
      data-debug={"page-componets.sticky-title-list"}
    >
      <div className="w-full px-0 ">
        <div className="flex flex-col lg:flex-row  gap-8 ">
          {/* Left Sidebar - Title */}
          <div className="w-full lg:w-1/2">
            <div className={`lg:sticky lg:top-28`}>
              <h2 className="text-6xl  md:text-9xl font-bold text-gray-900 mb-10 ">
                {salesforceServices?.title}
              </h2>

              <p className="text-2xl">{salesforceServices?.description}</p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 lg:w-1/2">
            {salesforceServices?.list?.map((service) => (
              <StickyTitleCard
                key={`sticky-title-card-${service?.id}`}
                data={service}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyTitleList;
