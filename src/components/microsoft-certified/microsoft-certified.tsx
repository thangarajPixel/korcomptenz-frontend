import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import ButtonLink from "../ui/button-link";
import { DangerousHtml } from "../ui/dangerous-html";

const MicrosoftGoldCertified = ({
  data,
}: {
  data: MicrosoftGoldCertifiedType;
}) => {
  return (
    <div className="container-md py-12">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* LEFT CARD */}
        <div className="relative bg-primary text-white rounded-2xl overflow-hidden flex flex-col min-h-[55vh]">
          {/* Text Content — top portion */}
          <div className="px-10 pt-12 pb-4 text-center flex-1 flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-4xl md:text-[30px] font-medium leading-[36px] ">
              {data?.card1?.title}
            </h2>

            {/* Sub text */}

            <DangerousHtml
              html={data?.card1?.description}
              className="text-md md:text-[18px] leading-7.5"
            />

            {/* Button */}
            <div className="mt-6">
              <ButtonLink
                link={data?.card1?.buttonLink || "#"}
                isTargetNew={data?.card2?.isTarget}
                buttonProps={{
                  size: "lg",
                  className:
                    "!bg-pink-600 hover:!bg-pink-700 !text-white !rounded-full !px-7 !py-3 shadow-md font-medium",
                }}
              >
                {data?.card1?.buttonText}
              </ButtonLink>
            </div>
          </div>

          <div className="relative h-56 mt-10 flex justify-center">
            <div className="absolute bottom-12 translate-y-8">
              <KorcomptenzImage
                src={data?.card1?.image}
                width={600}
                height={600}
                className="w-[600px] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="border-2 border-primary rounded-2xl overflow-hidden bg-white flex flex-col">
          {/* Top image — full width */}
          <div className="w-full h-60 md:h-80 lg:h-100 overflow-hidden p-4">
            <KorcomptenzImage
              src={data?.card2?.image}
              width={600}
              height={600}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Text content */}
          <div className="px-4 md:px-8 pt-6 pb-8 flex flex-col flex-1">
            <h2 className="text-4xl md:text-[30px] font-medium leading-[36px] text-black">
              {data?.card2?.title1}{" "}
              <span className="text-primary font-bold">
                {data?.card2?.title2}
              </span>{" "}
              {data?.card2?.title3}
            </h2>

            <DangerousHtml
              html={data?.card2?.description}
              className="mt-3 text-md md:text-lg text-foreground leading-7.5 font-normal"
            />

            <ButtonLink
              link={data?.card2?.buttonLink || "#"}
              isTargetNew={data?.card2?.isTarget}
              buttonProps={{
                size: "lg",
                className:
                  "bg-transparent hover:bg-transparent border-none text-foreground hover:text-forground p-0 text-3xl shadow-none",
              }}
            >
              {data?.card1?.buttonText}
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicrosoftGoldCertified;
