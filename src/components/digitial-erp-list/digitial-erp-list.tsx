"use client";
import { cn } from "@/lib/utils";

import ButtonLink from "../ui/button-link";

export default function DigitalErpList({ data }: { data: DigitalErpListType }) {
  return (
    <div className=" container-md">
      {/* Right Content Area */}
      <div className="flex-1 overflow-y-auto ">
        {/* Content Sections */}

        <div className={cn("mb-6 pb-6")}>
          <h2 className="text-7xl font-semibold text-foreground mb-8">
            {data?.title1}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            {data?.list1?.map((item) => (
              <div
                key={`section-item-${item.id}`}
                className="bg-white text-foreground "
              >
                <h3 className="text-xl font-semibold  leading-6.5 line-clamp-2 mb-3">
                  {item?.title}
                </h3>

                <p className=" text-lg mb-2  font-normal leading-7.5">
                  {item?.description}
                </p>

                <ButtonLink
                  link={item?.buttonLink || "#"}
                  isTargetNew={item?.isTarget ? true : false}
                  buttonProps={{
                    variant: "ghost",
                    className:
                      "text-primary font-normal text-md hover:text-primary hover:bg-transparent  p-0",
                    arrow: true,
                  }}
                >
                  {item?.buttonText}
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
        <div className={cn("mb-6 pb-6 ")}>
          <h2 className="text-7xl font-semibold text-foreground mb-8 ">
            {data?.title2}
          </h2>
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-7.5">
            {data?.list2?.map((item) => (
              <div
                key={`section-item-${item.id}`}
                className="bg-[#E2EBE4] p-5 rounded-2xl text-foreground"
              >
                <h3 className="text-xl font-semibold  leading-6.5 line-clamp-2 mb-3">
                  {item?.title}
                </h3>

                <p className="text-gray-600 text-lg mb-2 leading-7.5 font-normal">
                  {item?.description}
                </p>
                <ButtonLink
                  link={item?.buttonLink || "#"}
                  isTargetNew={item?.isTarget ? true : false}
                  buttonProps={{
                    variant: "ghost",
                    className:
                      "text-primary font-normal text-md hover:text-primary transition-colors p-0 hover:bg-transparent",
                    arrow: true,
                  }}
                >
                  {item?.buttonText}
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
