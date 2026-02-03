"use client";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { cn } from "@/lib/utils";
import React from "react";
import { DialogDemo } from "./popup";

const PeopleShowcaseCard = ({ data }: { data: PeopleShowcaseCardType }) => {
  const { title, miniDescription, image } = data;
  return (
    <div className="relative">
      <div className="bg-light-gray rounded-4xl  overflow-hidden min-h-[307px] h-full">
        {/* Content */}
        <div className="flex flex-row size-full">
          <div className="flex flex-col justify-between   size-full">
            <div className="w-1/2 mt-8 ml-8 flex flex-col gap-3">
              <h3 className=" text-foreground text-4xl font-bold leading-tight">
                {title}
              </h3>
              {miniDescription && (
                <div className="flex md:flex-row md:gap-4">
                  <p className="text-foreground text-md leading-4xl z-10 whitespace-pre-wrap">
                    {miniDescription}
                  </p>
                </div>
              )}
            </div>
            <DialogDemo data={data} />
          </div>

          {/*Desktop Button */}
          {image && (
            <div className="hidden lg:flex pt-10  pb-0 ">
              {/* Illustration */}
              <div className="flex absolute bottom-0 right-0 justify-end items-end z-10">
                <KorcomptenzImage
                  className={cn(
                    `rounded-br-4xl  p-0 h-auto w-54  object-cover`,
                  )}
                  width={500}
                  height={500}
                  src={image}
                />
              </div>
            </div>
          )}
          {/*Mobile Button */}
        </div>
        {image && (
          <div className="relative lg:hidden">
            <KorcomptenzImage
              className="absolute right-0 bottom-0 w-50 h-75 object-cover object-contain"
              width={500}
              height={500}
              src={image}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PeopleShowcaseCard;
