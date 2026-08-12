import React from "react";

const DemandHowKORSection = ({
  DemandData,
}: {
  DemandData: DemandHowKORSectionType;
}) => {
  return (
    <section
      className="container-md"
      data-debug={"page-componets.demand-how-kor-section"}
    >
      {DemandData?.title}

      {DemandData?.title && (
        <h2 className="text-6xl md:text-9xl font-semibold text-foreground mb-6 w-full">
          {DemandData?.title}
        </h2>
      )}
    </section>
  );
};

export default DemandHowKORSection;
