"use client";
import KorcomptenzImage from "@/components/korcomptenz-image";

import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";

const PeopleShowcaseCard = ({ data }: { data: PeopleShowcaseCardType }) => {

  const { title, miniDescription, image, buttonText } = data;
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
                <div className="flex flex-row gap-4">
                  <p className="text-foreground text-md leading-4xl z-10 ">
                    {miniDescription}
                  </p>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              arrow
              className="mb-8 ml-8 text-primary hover:text-primary justify-start  hover:bg-transparent p-[-2px]"
            >
              {buttonText}
            </Button>
          </div>

          {/*Desktop Button */}
          {image && (
            <div className="hidden lg:flex pt-10  pb-0 ">
              {/* Illustration */}
              <div className="flex absolute bottom-0 right-0 justify-end items-end z-10">
                <KorcomptenzImage
                  // w-72
                  className={cn(`rounded-br-4xl  p-0 h-auto w-54  object-cover`)}
                  width={500}
                  // fill
                  height={500}
                  src={image}
                />
              </div>
            </div>
          )}
          {/*Mobile Button */}
        </div>
        {image && (
          <div className="relative lg:hidden ">
            <div className="flex absolute -right-0 -bottom-0 justify-end items-end  ">
              <KorcomptenzImage
                className="w-full object-cover p-0 h-28"
                width={500}
                height={500}
                src={image}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PeopleShowcaseCard;
