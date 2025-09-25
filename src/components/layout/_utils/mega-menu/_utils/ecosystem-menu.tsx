"use client";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

const EcosystemMenu = ({ data }: { data: LayoutType }) => {
  const [activeSideBar, setActiveSiderBar] = useState(data?.ecosystemMenu[0]);
  return (
    <div className="grid grid-cols-24 ">
      {/* Sidebar */}
      <div className="col-span-24 md:col-span-6 lg:col-span-6">
        <div className="bg-white sticky top-8">
          <nav className="space-y-2 px-10  ">
            {data?.ecosystemMenu?.map((item) => (
              <div
                key={item?.id}
                onClick={() => setActiveSiderBar(item)}
                className={`w-full group ${
                  activeSideBar.id === item.id
                    ? "border-b-2 border-primary"
                    : "border-b-2 border-transparent hover:border-primary"
                }`}
              >
                <h4 className="relative font-medium text-3xl text-primary  leading-10 flex items-center justify-between cursor-pointer">
                  <span>{item.menu}</span>
                  {activeSideBar.id === item.id && (
                    <ChevronRight className="w-5 h-5 font-extrabold" />
                  )}
                  {activeSideBar.id !== item.id && (
                    <ChevronRight className="w-5 h-5 font-extrabold opacity-0 group-hover:opacity-100" />
                  )}
                </h4>
              </div>
            ))}
          </nav>
        </div>
      </div>
      {/* Content Area */}
      <div className="col-span-24 md:col-span-12 lg:col-span-12 pl-0 md:px-8 lg:px-8">
        <div className="space-y-6">
          {activeSideBar?.item?.map((contentItem, index) => (
            <div key={index}>
              <h2 className="text-3xl font-normal  text-foreground mb-4">
                {contentItem.title}
              </h2>
              <p className="text-sm text-custom-gray-4 ">
                {contentItem.description}
              </p>
              <div className="mt-4">
                <Button size="lg" arrow={true}>
                  {contentItem.buttontext}
                </Button>
              </div>
              <div className="mt-6 space-y-2 ">
                {contentItem?.child?.map((childItem, childIndex) => (
                  <div key={childIndex}>
                    <span
                      className={` ${
                        childItem.type === "Dark"
                          ? "text-black"
                          : " text-primary"
                      }`}
                    >
                      {childItem.title}
                    </span>
                    <div className="my-2 flex flex-wrap">
                      {childItem?.description?.map((item, index) => (
                        <p
                          key={index}
                          className="text-custom-gray-4 text-sm w-1/2 leading-5.5 mb-2"
                        >
                          {item.description}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Image Section */}
      <div className="col-span-24 md:col-span-6 lg:col-span-6 mt-0 ">
        <KorcomptenzImage
          src="/assets/menu/service_menu.png"
          alt={activeSideBar.menu}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default EcosystemMenu;
