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
        <h1 className="text-6xl md:text-9xl font-semibold text-foreground mb-6 text-balance w-full lg:w-1/2">
          {benefitData?.title}
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row md:p-6 gap-10">
          <div className="lg:w-1/2 w-full">
            <KorcomptenzImage
              src={benefitData?.image}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-wrap">
            {benefitData?.cards?.map((card, index) => {
              const isLastCard = index === benefitData?.cards?.length - 1;
              const isOddNumberOfCards =
                benefitData?.cards?.length % 2 !== 0 && isLastCard;
              return (
                <div
                  key={card?.id}
                  className={`flex gap-4 ${
                    isOddNumberOfCards ? "w-full" : "w-1/2"
                  }`}
                >
                  <div className="md:mx-4 m-2">
                    <p className="text-8xl font-light text-primary w-10 shrink-0 ">
                      {card?.number}
                    </p>
                    <p className="text-black text-xl">{card?.title}</p>
                    <p className="text-foreground text-lg">
                      {card?.description}
                    </p>
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
