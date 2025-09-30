import KorcomptenzImage from "@/components/korcomptenz-image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

type InspireCardType = InspireSectionType["list"][number];

const InspireSectionCard: React.FC<{ card: InspireCardType }> = ({ card }) => {
  if (!card) return null;

  const renderImage = () => {
    if (!card.image) return null;

    if (card.position === "topAbove") {
      return (
        <div
          className={`flex justify-end w-full absolute -top-16 `}
        >
          <KorcomptenzImage
            src={card.image}
            width={100}
            height={100}
            className={cn("h-auto max-h-40 w-1/2 max-w-full")}
          />
        </div>
      );
    }

    return (
      <KorcomptenzImage
        src={card.image}
        width={500}
        height={500}
        className={cn(
          "h-auto rounded-lg",
          card.position === "bottom" ? "w-full" : ""
        )}
      />
    );
  };

  return (
    <Card
      key={`inspire-section-card-${card.id}`}
      className="relative border-2 bg-light-gray flex flex-col py-0 rounded-4xl h-full"
    >
      <CardContent className="px-0 text-muted">
        {card.position === "bottom" && (
          <>
            <div className="p-6">
              <p className="text-3xl md:text-4xl font-semibold mb-4">
                {card.title}
              </p>
              <p className="md:text-lg text-md mb-4">{card.description}</p>
            </div>
            <div className="flex justify-end md:h-3/4 lg:pb-28 pr-0 p-6">
              {renderImage()}
            </div>
          </>
        )}

        {card.position === "top" && (
          <>
            <div className="flex mb-4 p-6">{renderImage()}</div>
            <div className="p-6">
              <p className="text-3xl xl:text-4xl font-semibold mb-2">
                {card.title}
              </p>
              <p className="md:text-lg text-md">{card.description}</p>
            </div>
          </>
        )}

        {card.position === "topAbove" && (
          <div className="flex flex-col pb-3 px-3">
            <div className="relative min-h-16">
              {renderImage()}
            </div>
            <div className="px-6 pb-6">
              <p className="text-3xl md:text-4xl font-semibold mb-2 pt-5 xl:whitespace-pre-wrap">
                {card.title}
              </p>
              <p className="md:text-lg text-md">{card.description}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InspireSectionCard;
