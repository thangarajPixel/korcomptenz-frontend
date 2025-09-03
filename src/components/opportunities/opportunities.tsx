"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { jsonData } from "@/utils/helper";

export default function Opportunities() {
  const careers = jsonData.careers;
  return (
    <section className="bg-white  px-4 sm:px-6 lg:px-8 mb-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
          {/* Left side - Image with geometric elements */}
          <div className="relative">
            {/* Blue geometric arrows */}
            <div className="absolute top-8 left-6 z-10 group-hover:left-24 transition-all duration-1000">
              <div className="flex space-x-1 w-72">
                <Image
                  src="/assets/home/arrow.png"
                  alt="arrow"
                  className="w-full h-auto rounded-lg"
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
            <div className="relative group-hover:-translate-x-5 group-hover:scale-102 transition-all ">
              <div className="text-xl lg:text-5xl font-bold leading-tight w-full">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-[#22282E] lg:-ml-56 text-lg lg:text-3xl font-semibold lg:me-20">Ready to </span>
                  <section className="flex flex-row items-center gap-2">
                    <div>
                      <img
                        src="/assets/home/profile-1.png"
                        alt="Team member"
                        className="lg:w-[100px] lg:h-[100px] w-16 h-16 rounded-full border-4 border-white shrink-0"
                      />
                    </div>
                    <span className="text-[#22282E] text-lg lg:text-3xl  font-semibold">build an</span>
                  </section>
                  <div className="ps-10">
                    <img
                      src="/assets/home/profile-3.png"
                      alt="Team member"
                      className="w-16 h-16 lg:w-[100px] lg:h-[100px] rounded-full border-4 border-white shrink-0"
                    />
                  </div>
                </div>

                <div className="flex flex-row items-center  mt:[40px]">
                  <span className="text-primary text-lg lg:-ml-42 lg:text-3xl lg:me-48 font-semibold">exceptional </span>
                  <section className="flex flex-row items-center gap-2 lg:-ml-12">
                    <div >
                      <img
                        src="/assets/home/profile-2.png"
                        alt="Team member"
                        className="lg:w-[100px] lg:h-[100px] w-16 h-16  rounded-full border-4 border-white shrink-0"
                      />
                    </div>
                    <span className="text-primary text-lg lg:text-3xl font-semibold">career?</span>
                  </section>
                </div>
              </div>
            </div>

            {/* Description text */}
           <p className="text-md text-[#22282E] leading-[28px] max-w-lg lg:ms-[-30px]">
              {careers.description}
            </p>

            {/* CTA Button */}
            <Button
              type="button"
              arrow={true}
              variant="default"
              size="xl"
              className="text-sm lg:ms-[-30px]"
            >
              {careers.exploreBtn}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
