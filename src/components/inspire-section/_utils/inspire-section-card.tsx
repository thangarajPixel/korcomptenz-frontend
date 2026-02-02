import KorcomptenzImage from "@/components/korcomptenz-image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { InspireSectionContent } from "./inspire-section-content";

type InspireCardType = InspireSectionType["list"][number];

const InspireSectionCard: React.FC<{ card: InspireCardType }> = ({ card }) => {
  if (!card) return null;

  const renderImage = () => {
    if (!card.image) return null;

    if (card.position === "topAbove") {
      return (
        <div className={`flex justify-end w-full absolute -top-12 md:-top-16 `}>
          <KorcomptenzImage
            src={card.image}
            width={100}
            height={100}
            className={cn("h-auto max-h-40 w-1/2 max-w-full object-contain")}
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
          "h-auto rounded-lg ",
          card.position === "bottom" ? "w-full object-contain" : ""
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
          <React.Fragment>
            <InspireSectionContent card={card} />
            <div className="flex justify-end md:h-3/4 lg:pb-28 pr-0 p-6">
              {renderImage()}
            </div>
          </React.Fragment>
        )}

        {card.position === "top" && (
          <React.Fragment>
            <div className="flex mb-4 p-6">{renderImage()}</div>
            <InspireSectionContent card={card} className="mb-2" />
          </React.Fragment>
        )}

        {card.position === "topAbove" && (
          <div className="flex flex-col pb-3 px-3 mt-7">
            <div className="relative min-h-16">{renderImage()}</div>
            <InspireSectionContent
              card={card}
              // topClassName="pt-0"
              className="mb-2 pt-5 xl:whitespace-pre-wrap"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InspireSectionCard;
