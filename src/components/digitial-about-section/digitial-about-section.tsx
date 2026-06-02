"use client";

import { cn } from "@/lib/utils";
import KorcomptenzImage from "../korcomptenz-image";

export function DigitialAboutSection({
  data,
}: {
  data: DigitialAboutSectionType;
}) {
  return (
    <div
      className={cn(
        "relative conainer-nav overflow-hidden",
        data?.noPadding && "-mb-12 md:-mb-24",
      )}
    >
      {/* Fixed Background with Parallax */}
      <div className="absolute inset-0 -z-10" />

      {/* Content Wrapper */}
      <div className="relative z-10 container-md py-10 px-15">
        {/* Header Section */}
        <section className="relative py-5 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Title */}
            <div className="pt-8">
              {data?.title && (
                <h2 className="text-5xl md:text-6xl font-bold mb-2">
                  {data?.title}
                </h2>
              )}
              <p className="text-lg md:text-xl font-semibold">
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

              <div className="w-[260px] aspect-[596/306] p-2 flex items-center justify-center">
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
              <div
                key={stat?.id}
                className="text-center p-5 relative overflow-hidden border-t border-white/40 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(255,255,255,0.75))] backdrop-blur-xl"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#17CEB8] via-[#5648D8] to-transparent"></div>
                {stat?.value && (
                  <h3
                    className={cn(
                      "text-5xl md:text-8xl font-semibold mb-2 text-secondary text-left",
                    )}
                  >
                    {stat?.value}
                  </h3>
                )}
                <p className="text-sm md:text-base text-left">{stat?.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-5">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mx-5">
              {data?.features?.map((feature) => (
                <div
                  key={feature?.id}
                  className="flex flex-row items-center text-center relative z-10 overflow-hidden border border-[#111827]/6 bg-white/70 p-5 transition-all   duration-500   hover:-translate-y-1   hover:border-[#17CEB8]/20"
                >
                  <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-[#17CEB8] to-transparent"></div>
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
          <div className="w-full flex flex-col">
            <div className="mb-5 mx-5">
              <h3 className="text-2xl font-bold">Our Global Locations</h3>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-12">
              {data?.countries?.map((countries) => (
                <div
                  key={countries?.id}
                  className="flex flex-col items-center gap-3 group cursor-normal"
                >
                  <div className="w-10 h-10 lg:w-[50px] lg:h-[50px]">
                    <KorcomptenzImage
                      src={countries?.flag?.[0]}
                      width={160}
                      height={160}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <p className="text-[12px] lg:text-sm font-normal text-[#FFFFFF] text-center">
                    {countries?.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
