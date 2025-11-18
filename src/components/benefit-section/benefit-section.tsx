import React from "react";
import KorcomptenzImage from "../korcomptenz-image";

const BenefitSection = ({
  benefitData,
}: {
  benefitData: BenefitSectionType;
}) => {
  return (
    <section
      className="container-md"
      data-debug={"page-componets.benefit-data"}
    >
      <div>
        <h4 className="text-6xl md:text-9xl font-semibold text-foreground mb-6 text-balance w-full">
          {benefitData?.title}
        </h4>
        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row md:p-6 gap-10">
          <div className="lg:w-1/2 w-full">
            <KorcomptenzImage
              src={benefitData?.image}
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-4xl"
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-wrap">
            {benefitData?.cards?.map((card, index) => {
              const isLastCard = index === benefitData?.cards?.length - 1;
              const isOddNumberOfCards =
                benefitData?.cards?.length % 2 !== 0 && isLastCard;
              return (
                <div
                  key={`benefit-card-item-${card?.id}`}
                  className={`flex gap-4 ${isOddNumberOfCards ? "w-full" : "w-1/2"
                    }`}
                >
                  <div className="md:mx-4 m-2 flex flex-col gap-4">
                    <p className="text-6xl md:text-8xl  font-light text-primary shrink-0 ">
                      {card?.number || (index + 1).toString().padStart(2, '0')}
                    </p>
                    {card?.title && <p className="text-black text-xl">{card?.title}</p>}
                    {card?.description && <p className="text-foreground text-lg">
                      {card?.description}
                    </p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
