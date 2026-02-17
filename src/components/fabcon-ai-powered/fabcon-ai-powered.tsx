import React from "react";
import AiCard from "./_utils/ai-card";

const FabconAiPowered = ({ data }: { data: FabconAiPoweredType }) => {
  const count = data?.list?.length || 0;
  const isEven = count % 2 === 0;

  return (
    <section className="container-md">
      {/* Title */}
      <div className="flex justify-center text-center flex-wrap gap-2 mb-10">
        <h2 className="font-semibold">{data?.title1}</h2>
        <h2 className="bg-gradient-to-r from-[#1F849F] to-[#6AC494] bg-clip-text text-transparent font-semibold">
          {data?.title2}
        </h2>
        <h2 className="font-semibold">{data?.title3}</h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data?.list?.map((card, index) => {
          const isLast = index === count - 1;

          return (
            <AiCard
              key={index}
              card={card}
              isSingle={!isEven && isLast}
              isLastOdd={!isEven && isLast}
              isTwoCard={isEven || !isLast}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FabconAiPowered;
