"use client";

import { ChevronRight } from "lucide-react";
import KorcomptenzImage from "@/components/korcomptenz-image";

import Link from "next/link";

const AboutMenu = ({
  data,
  onClick,
}: {
  data: LayoutType;
  onClick: () => void;
}) => {
  return (
    <div className="bg-white  h-100 w-full  overflow-hidden">
      <div className="flex ">
        {/* Left section */}
        <div className="w-1/5 h-full flex flex-col">
          <p className="text-9xl font-semibold text-primary mb-8">
            {data?.aboutMenu?.title}
          </p>
        </div>

        {/* Middle section */}
        <div className="w-2/5 bg-light-white mr-10 rounded-2xl">
          <div className="h-full rounded-2xl p-6 pt-5 flex flex-col">
            {/* Top section - 40% */}
            <div className=" flex">
              {/* Left side */}
              <div className="w-3/5 flex flex-col">
                <div className="flex items-center mb-4">
                  <p className="text-3xl font-normal text-primary mr-3">
                    {data?.aboutMenu?.whoWeAre?.title}
                  </p>
                  <div
                    className="group w-8 h-8 rounded-full flex items-center justify-center 
             bg-primary border border-transparent 
             transition-all duration-300 ease-in-out 
             hover:bg-white hover:border-primary cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4 text-white transition-all duration-300 ease-in-out group-hover:text-primary" />
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="w-full pl-6">
                <div className="">
                  {data?.aboutMenu?.navigationItems?.map((item, index) => (
                    <Link
                      href={item?.link || "#"}
                      key={index}
                      onClick={onClick}
                    >
                      <div
                        key={`about-menu-${item?.id}`}
                        className="flex items-center justify-between p-2 rounded-lg cursor-pointer group"
                      >
                        <span className="text-custom-gray text-lg font-medium">
                          {item?.title}
                        </span>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-transparent group-hover:border-primary  group-hover:text-primary transition-colors duration-300  ">
                          <ChevronRight className="w-4 h-4 text-custom-gray group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom image section - 60% */}
            <div className=" ">
              <div className="relative -top-12 -left-12 rounded-xl overflow-hidden shadow-none">
                <KorcomptenzImage
                  src={data?.aboutMenu?.whoWeAre?.image}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-1/3">
          <div className=" grid grid-cols-2 gap-4">
            {data?.aboutMenu?.sidebarSections?.map((section, index) => (
              <Link href={section?.link || "#"} key={index} onClick={onClick}>
                <div>
                  <div
                    key={`about-menu-sidebar-${section?.id}`}
                    className="flex-1 bg-gray-100 rounded-2xl py-4 h-30 pl-4 flex items-center cursor-pointer"
                  >
                    {/* Text - 50% */}
                    <div className="w-1/2 pr-2 grid items-center gap-3 bg-light-white">
                      <div>
                        <h3 className="text-3xl font-normal text-primary leading-7">
                          {section?.title}
                        </h3>
                      </div>
                      <div
                        className="group w-8 h-8 rounded-full flex items-center justify-center 
             bg-primary border border-transparent 
             transition-all duration-300 ease-in-out 
             hover:bg-white hover:border-primary cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4 text-white transition-all duration-300 ease-in-out group-hover:text-primary" />
                      </div>
                    </div>

                    {/* Image - 50% */}
                    {section?.icon && (
                      <div className="relative w-1/2 h-full flex items-end justify-end">
                        <KorcomptenzImage
                          src={section?.icon}
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
