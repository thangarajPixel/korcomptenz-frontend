"use client";
import KorcomptenzImage from "@/components/korcomptenz-image";
import React from "react";
import { DialogDemo } from "./popup";

const AdvisoryPeopleShowcaseCard = ({
  data,
}: {
  data: PeopleShowcaseCardType;
}) => {
  const { title, miniDescription, image } = data;

  return (
    <div className="relative mt-20 flex justify-center">
      <div
        className="bg-foreground rounded-3xl overflow-visible min-h-[180px] 
                  w-full md:w-full 
                  max-w-[500px] md:max-w-full"
      >
        <div className="flex flex-row items-end h-full min-h-[180px] relative">
          {/* Person image — top-left, overflows above card */}
          {image && (
            <div className="absolute left-3 -bottom-1 md:bottom-0 z-10">
              <KorcomptenzImage
                className="w-36 lg:w-52 h-60 lg:h-84 object-contain "
                width={400}
                height={520}
                src={image}
                alt={title}
              />
            </div>
          )}

          {/* Geometric chevron image — top-right, overflows above card */}
          <div className="absolute right-4 -top-12 md:-top-12 lg:-top-21 z-10">
            <KorcomptenzImage
              src="https://aue2kormlworkspacetest01.blob.core.windows.net/korcomptenz/Group_1213_2b21d71dc1.png"
              alt="decorative geometric"
              className="w-24 lg:w-42 h-auto opacity-90"
              width={1112}
              height={607}
            />
          </div>

          {/* Text content — offset left to clear person image */}
          <div className="flex flex-col justify-center md:gap-2 pl-40 lg:pl-60 pr-8  md:py-6 w-full max-[400px]:mt-10 md:max-[1200px]:mt-15">
            {title && (
              <h3 className="text-white text-[20px] lg:text-[28px] font-bold leading-tight max-w-[180px] md:max-w-[220px]">
                {title}
              </h3>
            )}
            {miniDescription && (
              <p className="text-white/70 text-[16px] leading-7.5 max-w-[250px] line-clamp-2">
                {miniDescription}
              </p>
            )}
            <div className="mt-2">
              <DialogDemo data={data} isAdvisoryBoard={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryPeopleShowcaseCard;
