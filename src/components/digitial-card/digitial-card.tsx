import React from "react";
import ButtonLink from "../ui/button-link";
import { DangerousHtml } from "../ui/dangerous-html";

const DigitialCard = ({ data }: { data: DigitialCardType }) => {
  return (
    <div className="container-md">
      <h2 className="font-bold leading-tight text-foreground mb-4 text-center">
        {data?.title}
      </h2>
      <DangerousHtml
        html={data?.description}
        className="text-md md:text-lg leading-7.5 text-foreground font-normal mb-4 text-center"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 ">
        {data?.list?.map((item) => (
          <div
            key={item?.id}
            className="border-2 border-gray-300 rounded-2xl p-6 "
          >
            <h3 className="text-lg md:text-[21px] font-semibold text-foreground mb-2">
              {item?.title}
            </h3>

            <DangerousHtml
              html={item?.description}
              className="text-sm md:text-lg text-foreground leading-7.5 mb-4"
            />

            {item?.buttonText && (
              <ButtonLink
                link={item?.buttonLink || "#"}
                isTargetNew={item?.isTarget ? true : false}
                buttonProps={{
                  variant: "ghost",
                  className:
                    "text-primary hover:text-primary hover:bg-transparent p-0 text-md",
                  arrow: true,
                }}
              >
                {item?.buttonText}
              </ButtonLink>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitialCard;
