"use client";
import KorcomptenzImage from "@/components/korcomptenz-image";

import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";
import React from "react";
import { DialogDemo } from "./popup";

const PeopleShowcaseCard = ({ data }: { data: PeopleShowcaseCardType }) => {
  // const data = {
  //   title: "A S Viswanathan",
  //   description:
  //     "He is an industry veteran with over four decades of experience in various leadership roles, board positions and global responsibilities.",
  //   image: "/assets/tempory/36b03a61190f1a327f5d7859152444a90101b5fd.png",
  //   buttonText: "Learn more",
  //   position: "corner",
  // };
  const { title, miniDescription, image, description } = data;
  return (
    <div className="bg-light-gray rounded-4xl  relative overflow-hidden min-h-[280px]">
      {/* Content */}
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-start gap-6 p-8 ">
          <h3 className=" text-foreground text-6xl  font-bold leading-tight">
            {title}
          </h3>
          {miniDescription && (
            <div className="flex flex-row gap-4">
              <DangerousHtml
                html={miniDescription || description}
                className={cn(
                  image &&
                    "text-foreground text-md pr-10  md:text-lg leading-4xl z-10  max-w-xs"
                )}
              />
            </div>
          )}
          {/* 
          <Button
            variant="ghost"
            arrow
            className="text-primary hover:text-primary justify-start  hover:bg-transparent p-[-2px]"
          >
            {buttonText}
          </Button> */}
          <DialogDemo data={data} />
        </div>

        {/*Desktop Button */}
        {image && (
          <div className="hidden lg:flex pt-10  pb-0 ">
            {/* Illustration */}
            <div className="flex absolute bottom-0 right-0 justify-end items-end  z-10">
              <KorcomptenzImage
                className={cn(
                  ` rounded-tl-4xl  p-0 `,
                  image?.height > 300
                    ? "size-2/3"
                    : image?.height >= 200
                    ? "h-[200px]"
                    : image?.height >= 100
                    ? "h-[150px]"
                    : "h-[90px]"
                )}
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
  );
};

export default PeopleShowcaseCard;
