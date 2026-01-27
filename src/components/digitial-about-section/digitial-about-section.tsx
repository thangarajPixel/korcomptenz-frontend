"use client";

import React from "react";

import { cn } from "@/lib/utils";
import KorcomptenzImage from "../korcomptenz-image";

export function DigitialAboutSection({
  data,
}: {
  data: DigitialAboutSectionType;
}) {
  return (
    <div className="relative conainer-nav overflow-hidden">
      {/* Fixed Background with Parallax */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `url(${data.backgroundImage?.url})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "right center",
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 container-md py-10 ">
        {/* Header Section */}
        <section className="relative py-5 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Title */}
            <div className="pt-8">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">
                {data?.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 font-semibold">
                {data?.description}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-row  justify-start lg:justify-end">
              <div className="w-[200px] h-[165px] flex items-center justify-center ">
                <KorcomptenzImage
                  src={data?.badges?.badge1 || "/placeholder.svg"}
                  width={1024}
                  height={1024}
                  className="object-contain max-h-full max-w-full"
                />
              </div>

              <div className="w-[260px] aspect-[596/306] bg-white p-2 flex items-center justify-center">
                <KorcomptenzImage
                  src={data?.badges?.badge2 || "/placeholder.svg"}
                  width={596}
                  height={306}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data?.stats?.map((stat) => (
              <div key={stat?.id} className="text-center">
                <h3
                  className={cn(
                    "text-4xl md:text-9xl font-semibold mb-2 text-primary text-left",
                  )}
                >
                  {stat?.value}
                </h3>
                <p className="text-[#FFFFFF] text-sm md:text-base text-left">
                  {stat?.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-5">
          <div className="bg-[#D7E9DC]  -mx-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mx-5">
              {data?.features?.map((feature) => (
                <div
                  key={feature?.id}
                  className="flex flex-row items-center text-center "
                >
                  <div className="w-20 h-20 flex items-center justify-center">
                    <KorcomptenzImage
                      src={feature?.icon}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>

                  <p className="text-foreground text-sm text-left ">
                    {feature?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countries Section */}
        <section className="relative py-5 ">
          <div className="flex flex-wrap justify-between gap-8 md:gap-12">
            {data?.countries?.map((countries) => (
              <div
                key={countries?.id}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-[50px] h-[50px]">
                  <KorcomptenzImage
                    src={countries?.flag?.[0]}
                    width={160}
                    height={160}
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className=" text-sm font-normal text-[#FFFFFF]">
                  {countries?.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
