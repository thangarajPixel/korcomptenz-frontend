import React from "react";
import KorcomptenzImage from "../korcomptenz-image";

const benefitData = {
  title: "Focusing on benefits that truly matter",
  image: "/assets/services/benefitimage.png",
  cards: [
    {
      id: 1,
      number: "01",
      description:
        "Gain real-time insights across business functions to make smarter, data-driven decisions.",
    },
    {
      id: 2,
      number: "02",
      description:
        "Automate routine tasks and streamline processes to reduce manual effort and increase productivity.",
    },
    {
      id: 3,
      number: "03",
      description:
        "Break down silos by unifying data, teams, and tools across departments and geographies.",
    },
    {
      id: 4,
      number: "04",
      description:
        "Adopt a modular platform that grows with your business and adapts to changing needs.",
    },
    {
      id: 5,
      number: "05",
      description:
        "Deliver personalized experiences and faster service through integrated sales, marketing, and support tools.",
    },
  ],
};

const BenefitSection = () => {
  return (
    <section className="container-md py-10 ">
      <div>
        <h1 className="text-6xl md:text-8xl font-semibold text-foreground mb-6 text-balance w-full lg:w-1/2">
          {benefitData.title}
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row md:p-6 gap-10">
          <div className="lg:w-1/2 w-full">
            <KorcomptenzImage
              src={benefitData.image}
              alt={benefitData.title}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-wrap">
            {benefitData.cards.map((card, index) => {
              const isLastCard = index === benefitData.cards.length - 1;
              const isOddNumberOfCards =
                benefitData.cards.length % 2 !== 0 && isLastCard;
              return (
                <div
                  key={card.id}
                  className={`flex gap-4 ${isOddNumberOfCards ? "w-full" : "w-1/2"
                    }`}
                >
                  <div className="md:mx-4 m-2">
                    <p className="text-6xl font-light text-primary w-10 shrink-0 ">
                      {card.number}
                    </p>
                    <p className="text-foreground">{card.description}</p>
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