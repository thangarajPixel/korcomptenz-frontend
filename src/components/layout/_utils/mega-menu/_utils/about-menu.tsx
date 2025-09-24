"use client";

import { ChevronRight } from "lucide-react";
import KorcomptenzImage from "@/components/korcomptenz-image";

const AboutMenu = ({ data }: { data: LayoutType }) => {
  return (
    <div className="bg-white h-[598px] w-full overflow-y-auto overflow-x-hidden">
      <div className="flex h-full">
        {/* Left section */}
        <div className="w-1/3 h-full flex flex-col">
          <h1 className="text-9xl font-semibold text-primary mb-8">
            {data?.aboutMenu.title}
          </h1>
          <div className="relative h-1 border-5 border-b  border-primary w-full " />
        </div>

        {/* Middle section */}
        <div className="w-2/5 bg-light-white mr-10 rounded-2xl">
          <div className="h-full rounded-2xl p-6 pt-10 flex flex-col">
            {/* Top section - 40% */}
            <div className="flex-[0.4] flex">
              {/* Left side */}
              <div className="w-2/5 flex flex-col">
                <div className="flex items-center mb-4">
                  <h2 className="text-3xl font-normal text-primary mr-3">
                    {data?.aboutMenu?.whoWeAre.title}
                  </h2>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="w-3/5 pl-6">
                <div className="">
                  {data?.aboutMenu?.navigationItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2 rounded-lg cursor-pointer group"
                    >
                      <span className="text-custom-gray text-lg font-medium">
                        {item.title}
                      </span>
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-transparent group-hover:border-primary  group-hover:text-primary transition-colors duration-300  ">
                        <ChevronRight className="w-4 h-4 text-custom-gray group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom image section - 60% */}
            <div className="flex-[0.6] mt-6">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-none">
                <KorcomptenzImage
                  src={data?.aboutMenu?.whoWeAre.image}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-[26.67%]">
          <div className="h-full flex flex-col gap-4">
            {data?.aboutMenu?.sidebarSections.map((section) => (
              <div
                key={section.id}
                className="flex-1 bg-gray-100 rounded-2xl p-4 flex items-center cursor-pointer"
              >
                {/* Text - 50% */}
                <div className="w-1/2 pr-2 grid items-center gap-3 bg-light-white">
                  <div>
                    <h3 className="text-3xl font-normal text-primary leading-7">
                      {section.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Image - 50% */}
                <div className="relative w-1/2 h-full flex items-center justify-center">
                  <KorcomptenzImage
                    src={section.icon}
                    alt={`${section.title} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;
