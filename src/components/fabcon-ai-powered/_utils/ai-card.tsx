import KorcomptenzImage from "@/components/korcomptenz-image";
import ButtonLink from "@/components/ui/button-link";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import React from "react";
import { cn } from "@/lib/utils";

const AiCard = ({
  card,
  isLastOdd = false,

  isSingle = false,
}: {
  card: AiCardType;
  isLastOdd?: boolean;

  isSingle?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white p-4 md:p-2 shadow-sm w-full",
        isLastOdd && "md:col-span-2",
      )}
    >
      {/* SINGLE CARD → ONE ROW, 3 COLS */}
      {isSingle ? (
        <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr_2fr] gap-6 items-stretch">
          {/* Column 1 → Image (centered vertically & horizontally) */}
          <div className="flex items-start justify-start">
            <KorcomptenzImage
              src={card?.image}
              width={280}
              height={280}
              className="flex-shrink-0"
            />
          </div>

          {/* Column 2 → Title + Description */}
          <div className="flex flex-col justify-center gap-3">
            <h3 className="bg-gradient-to-r from-[#1F849F] to-[#6AC494]  bg-clip-text text-transparent text-xl font-semibold text-2xl md:text-[26px] ">
              {card?.title}
            </h3>

            <DangerousHtml
              html={card?.description}
              className="text-md md:text-lg leading-7.5 text-[#020202] "
            />
          </div>

          {/* Column 3 → Button (bottom + right) */}
          <div className="flex justify-start md:justify-end md:items-end">
            <ButtonLink
              link={card?.buttonLink}
              isTargetNew={card?.isTarget}
              buttonProps={{ size: "xl", arrow: true }}
            >
              {card?.buttonText}
            </ButtonLink>
          </div>
        </div>
      ) : (
        <>
          {/* HEADER (2 cards → justify-between) */}
          <div
            className={cn(
              "flex flex-col md:flex-row items-center md:items-center gap-0 md:gap-3",
            )}
          >
            {/* Image → centered on mobile */}
            <div className="flex justify-center w-full md:w-auto hidden md:block">
              <KorcomptenzImage
                src={card?.image}
                width={180}
                height={180}
                className="flex-shrink-0"
              />
            </div>
            <div className="flex justify-start w-full md:w-auto block md:hidden">
              <KorcomptenzImage
                src={card?.image}
                width={200}
                height={150}
                className="flex-shrink-0  w-[250px] h-[180px] object-contain"
              />
            </div>

            {/* Title → left on mobile, right on desktop */}
            <h3 className="bg-gradient-to-r from-[#1F849F] to-[#6AC494] bg-clip-text text-transparent text-2xl md:text-[26px] font-semibold text-left md:text-right w-full md:w-auto md:mt-16">
              {card?.title}
            </h3>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-3">
            <DangerousHtml
              html={card?.description}
              className="text-md md:text-lg leading-7.5 text-[#020202] md:px-4"
            />
          </div>

          {/* BUTTON */}
          <div className="mt-6 md:px-4">
            <ButtonLink
              link={card?.buttonLink}
              isTargetNew={card?.isTarget}
              buttonProps={{ size: "xl", arrow: true }}
            >
              {card?.buttonText}
            </ButtonLink>
          </div>
        </>
      )}
    </div>
  );
};

export default AiCard;
