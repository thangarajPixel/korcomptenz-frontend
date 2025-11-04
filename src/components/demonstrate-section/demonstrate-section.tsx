import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const DemonstrateSection = ({ data }: { data: DemonstrationSectionType }) => {
  return (
    <section
      className="container-md"
      data-debug={"page-componets.demonstrate-section"}
    >
      <div className="">
        <div className="flex flex-col gap-9 text-start lg:text-center items-start lg:items-center justify-center leading-14  text-foreground  ">
          <h1 className="text-6xl md:text-9xl whitespace-pre-wrap text-balance font-semibold text-foreground mb-10 lg:mb-0">
            {data?.title}
          </h1>
          <Button
            size="xl"
            arrow={true}
            className="hidden lg:inline-flex variant:default px-8 py-2 text-4xl rounded-full "
          >
            {data?.buttonText}
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:p-10 ">
          {data?.list?.map((card, index) => {
            return (
              <div
                key={`card-item-demo-${card?.id}`}
                className={`bg-none flex flex-col gap-4 ${
                  !((index + 1) % 2) ? "lg:mt-10" : ""
                }`}
              >
                <div className="py-3 md:py-0 rounded-4xl">
                  <KorcomptenzImage
                    src={card?.image}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full "
                  />
                </div>
                <div>
                  <p className="lg:text-5xl text-4xl font-semibold text-foreground leading-9">
                    {card?.title}
                  </p>
                </div>

                <p className="text-lg font-normal text-foreground leading-6 break-words">
                  {card?.description}
                </p>
                {card?.buttonText && (
                  <div>
                    <button className="inline-flex items-center gap-2 text-primary hover:text-primary hover:opacity-80 font-medium transition-colors">
                      {card?.buttonText}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <Button
          size="xl"
          arrow={true}
          className=" w-full lg:hidden variant:default px-8 py-2 text-4xl rounded-full mt-10"
        >
          {data?.buttonText}
        </Button>
      </div>
    </section>
  );
};

export default DemonstrateSection;
