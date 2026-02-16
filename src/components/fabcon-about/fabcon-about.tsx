import React from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import ButtonLink from "../ui/button-link";
import KorcomptenzImage from "../korcomptenz-image";

const FabconAbout = ({ data }: { data: FabconAboutType }) => {
  return (
    <div className="container-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
        {/* IMAGE SECTION */}
        <div className="relative">
          {/* Background image (behind) */}
          <div className="absolute -bottom-8 -right-9 z-0 md:block hidden">
            <KorcomptenzImage
              src={data?.backgroundImage}
              width={500}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Foreground image (on top) */}
          <div className="relative z-10">
            <KorcomptenzImage
              src={data?.image}
              width={500}
              height={500}
              className="w-full"
            />
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className=" lg:px-5 space-y-4 mt-8">
          {/* Title */}
          <div className="grid md:flex items-center gap-2 md:whitespace-nowrap">
            <h2 className="text-foreground">{data?.title1}</h2>

            <h2 className="bg-gradient-to-r from-[#1F849F] to-[#6AC494] bg-clip-text text-transparent">
              {data?.title2}
            </h2>
          </div>

          {/* Description */}
          <DangerousHtml
            html={data?.description}
            className="text-md md:text-lg text-foreground leading-7.5 break-words"
          />

          {/* Button */}
          {data?.buttonText && (
            <div className="pt-2">
              <ButtonLink
                link={data?.buttonLink || "#"}
                buttonProps={{
                  size: "xl",
                  arrow: true,
                }}
              >
                {data?.buttonText || "Watch Now"}
              </ButtonLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FabconAbout;
