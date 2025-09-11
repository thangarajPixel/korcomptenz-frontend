import KorcomptenzImage from "@/components/korcomptenz-image";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface CardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  order?: string;
  position?: string;
}

const InspireSectionCard: React.FC<{ card: CardProps }> = ({ card }) => {
  return (
    <Card
      key={card.id}
      className="relative border-2 bg-light-gray flex flex-col py-0 rounded-4xl h-full"
    >
     
        <CardContent className="px-0   text-muted h-full">
          {card.position === "bottom" ? (
            <>
              <div className="p-6 ">
                <p className="text-md md:text-lg  font-semibold mb-4">
                  {card.title}
                </p>
                <p className="md:text-sm text-xs mb-4">{card.description}</p>
              </div>
              <div className="flex justify-end  md:h-3/4 lg:pb-28  pr-0 p-6 ">
                <KorcomptenzImage
                  src={card.image}
                  alt={card.alt}
                  width={500}
                  height={500}
                  className=" h-auto   w-[90%]"
                />
              </div>
            </>
          ) : card.position === "top" ? (
            <>
                 <div className="flex mb-4 p-6">
                <KorcomptenzImage
                  src={card.image}
                  alt={card.alt}
                  width={300}
                  height={100}
                  className="rounded-lg"
                />
              </div>
               <div className="p-6 ">
                <p className="text-md xl:text-lg  font-semibold mb-2">
                  {card.title}
                </p>
                <p className="md:text-sm text-xs ">{card.description}</p>
              </div>
             
            </>
          ) : (
            card.position === "topAbove" && (
              <>
                <div className="flex items-start  gap-4 p-3">
                  <div className="flex-1 p-6 mt-10 lg:mt-6 xl:mt-10">
                    <p className="text-md md:text-lg  font-semibold mb-2 pt-5  xl:whitespace-pre-wrap">
                      {card.title}
                    </p>
                    <p className=" md:text-sm text-xs">{card.description}</p>
                  </div>
                  <div
                    className={`flex-shrink-0 absolute  ${
                      card.image.includes("Reatils") ? "" : "mt-4"
                    } right-3 -top-10`}
                  >
                    <KorcomptenzImage
                      src={card.image}
                      alt={card.alt}
                      width={card.image.includes("Reatils") ? 111 : 144}
                      height={80}
                      className={`rounded-lg ${
                        card.image.includes("Reatils") ? "mt-4" : ""
                      }`}
                    />
                  </div>
                </div>
              </>
            )
          )}
        </CardContent>
      
    </Card>
  );
};

export default InspireSectionCard;
