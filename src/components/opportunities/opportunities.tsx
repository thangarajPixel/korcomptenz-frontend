"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { jsonData } from "@/utils/helper";
import KorcomptenzImage from "../korcomptenz-image";

export default function Opportunities() {
  const careers = jsonData.careers;
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 mb-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-4 items-center transition-all duration-1000 group">
          {/* Left side - Image with geometric elements */}
          <div className="relative">
            {/* Blue geometric arrows */}
            <div className="absolute top-2 md:top-8 left-10 md:left-6 z-10 group-hover:left-24 transition-all duration-1000">
              <div className="flex space-x-1 w-72">
                <Image
                  src="/assets/home/arrow.png"
                  alt="arrow"
                  className="md:w-full w-2/4 h-auto rounded-lg"
                  width={500}
                  height={300}
                />
              </div>
            </div>

            {/* Main image */}
            <div className="relative z-10 ml-10">
              <Image
                src="/assets/banner/banner-5.png"
                alt="Professional working on laptop"
                className="w-full h-auto rounded-lg"
                width={1112}
                height={607}
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 mx-auto">
            {/* Header text with profile images */}
            <div className="relative transition-all duration-500 group-hover:-translate-x-5 group-hover:scale-105 hidden lg:block">
              <div className="text-xl font-bold leading-tight w-full">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-[#22282E] text-lg lg:text-3xl font-semibold lg:me-20">
                    Ready to{" "}
                  </span>
                  <section className="flex flex-row items-center gap-2">
                    <div>
                      <Image
                        src="/assets/home/profile-1.png"
                        alt="Team member"
                        className="lg:w-[100px] lg:h-[100px] w-16 h-16 rounded-full border-4 border-white shrink-0"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <span className="text-[#22282E] text-lg lg:text-3xl font-semibold">
                      build an
                    </span>
                  </section>
                  <div className="ps-10">
                    <KorcomptenzImage
                      src="/assets/home/profile-3.png"
                      alt="Team member"
                      className="w-16 h-16 lg:w-[100px] lg:h-[100px] rounded-full border-4 border-white shrink-0"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </div>

                <div className="flex flex-row items-center mt:[40px]">
                  <span className="text-primary text-lg lg:-ml-38 lg:text-3xl lg:me-38 font-semibold">
                    exceptional{" "}
                  </span>
                  <section className="flex flex-row items-center gap-2 lg:-ml-12">
                    <div>
                      <KorcomptenzImage
                        src="/assets/home/profile-2.png"
                        alt="Team member"
                        className="lg:w-[100px] lg:h-[100px] w-16 h-16 rounded-full border-4 border-white shrink-0"
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <span className="text-primary text-lg lg:text-3xl font-semibold">
                      career?
                    </span>
                  </section>
                </div>
              </div>
            </div>
            {/* Header text with profile images responsive */}
            <div className="relative transition-all duration-500 group-hover:-translate-x-5 group-hover:scale-105 lg:hidden">
              <div className="text-xl lg:text-5xl font-bold leading-tight w-full">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-[#22282E] text-xl font-semibold">
                    Ready to{" "}
                  </span>

                  <div>
                    <KorcomptenzImage
                      src="/assets/home/profile-1.png"
                      alt="Team member"
                      className="lg:w-[100px] lg:h-[100px] w-16 h-16 rounded-full border-4 border-white shrink-0"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <span className="text-[#22282E] text-xl font-semibold">
                    build an
                  </span>
                </div>

                <div className="flex flex-row justify-between items-center mt:[40px]">
                  <div>
                    <KorcomptenzImage
                      src="/assets/home/profile-3.png"
                      alt="Team member"
                      className="w-16 h-16 lg:w-[100px] lg:h-[100px] rounded-full border-4 border-white shrink-0"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <span className="text-primary text-xl font-semibold">
                    exceptional{" "}
                  </span>

                  <div>
                    <KorcomptenzImage
                      src="/assets/home/profile-2.png"
                      alt="Team member"
                      width={1000}
                      height={1000}
                      className="lg:w-[100px] lg:h-[100px] w-16 h-16 rounded-full border-4 border-white shrink-0"
                    />
                  </div>
                </div>
                <span className="text-primary text-xl font-semibold">
                  career?
                </span>
              </div>
            </div>
            {/* Description text */}
            <p className="text-sm text-[#22282E] leading-[28px] max-w-lg lg:ms-[-30px]">
              {careers.description}
            </p>

            {/* CTA Button */}
            <Button
              type="button"
              variant="default"
              size="xl"
              arrow={true}
            >
              {careers.exploreBtn}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}