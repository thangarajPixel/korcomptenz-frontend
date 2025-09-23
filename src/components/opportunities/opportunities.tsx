"use client";

import { Button } from "@/components/ui/button";

import KorcomptenzImage from "../korcomptenz-image";

export default function Opportunities({
  careers,
}: {
  careers: OpportunitiesType;
}) {
  return (
    <section className="bg-white container-md" data-debug={"home.opportunity"}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
          {/* Left side - Image with geometric elements */}
          <div className="relative">
            {/* Blue geometric arrows */}
            <div className="absolute top-8 left-6 z-10 group-hover:left-24 transition-all duration-1000">
              <div className="flex space-x-1 w-72">
                <KorcomptenzImage
                  src={careers?.arrowImage}
                  className="w-full h-auto rounded-lg"
                  width={500}
                  height={300}
                />
              </div>
            </div>

            {/* Main image */}
            <div className="relative z-10 ml-10">
              <KorcomptenzImage
                src={careers?.bannerImage}
                className="w-full h-auto rounded-lg"
                width={1112}
                height={607}
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 mx-auto">
            {/* Desktop heading */}
            <div className="relative hidden lg:block group-hover:-translate-x-5 group-hover:scale-102 transition-all">
              <div className="text-5xl lg:text-9xl font-bold leading-tight w-full">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-custom-black lg:-ml-56 text-4xl lg:text-7xl font-semibold lg:me-20">
                    {careers?.breakOne}
                  </span>
                  <section className="flex flex-row items-center gap-2">
                    <KorcomptenzImage
                      src={careers.profiles?.[0].image?.url}
                      alt={careers.profiles?.[0].image?.alternativeText}
                      className="lg:w-[100px] lg:h-[100px] w-16 h-16 rounded-full border-4 border-white shrink-0"
                      width={1000}
                      height={1000}
                    />
                    <span className="text-custom-black text-4xl lg:text-7xl font-semibold">
                      {careers?.breakTwo}
                    </span>
                  </section>
                  <div className="ps-10">
                    <KorcomptenzImage
                      src={careers.profiles?.[2].image?.url}
                      alt={careers.profiles?.[2].image?.alternativeText}
                      className="w-16 h-16 lg:w-[100px] lg:h-[100px] rounded-full border-4 border-white shrink-0"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </div>

                <div className="flex flex-row items-center mt:[40px]">
                  <span className="text-primary text-4xl lg:-ml-42 lg:text-7xl lg:me-48 font-semibold">
                    {careers.breakThree}
                  </span>
                  <section className="flex flex-row items-center gap-2 lg:-ml-12">
                    <KorcomptenzImage
                      src={careers.profiles?.[1].image?.url}
                      alt={careers.profiles?.[1].image?.alternativeText}
                      className="lg:w-[100px] lg:h-[100px] w-16 h-16 rounded-full border-4 border-white shrink-0"
                      width={1000}
                      height={1000}
                    />
                    <span className="text-primary text-4xl lg:text-7xl font-semibold">
                      {careers.breakFour}
                    </span>
                  </section>
                </div>
              </div>
            </div>

            {/* Mobile heading */}
            <div className="relative transition-all duration-500 group-hover:-translate-x-5 group-hover:scale-105 lg:hidden">
              <div className="text-5xl font-bold leading-tight w-full ">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-custom-black text-5xl font-semibold">
                    {careers.breakOne}
                  </span>

                  <KorcomptenzImage
                    src={careers.profiles?.[0].image?.url}
                    alt={careers.profiles?.[0].image?.alternativeText}
                    className="w-16 h-16 rounded-full border-4 border-white shrink-0"
                    width={1000}
                    height={1000}
                  />

                  <span className="text-custom-black text-5xl font-semibold">
                    {careers.breakTwo}
                  </span>
                </div>

                <div className="flex flex-row justify-between items-center">
                  <KorcomptenzImage
                    src={careers.profiles?.[2].image?.url}
                    alt={careers.profiles?.[2].image?.alternativeText}
                    className="w-16 h-16 rounded-full border-4 border-white shrink-0"
                    width={1000}
                    height={1000}
                  />
                  <span className="text-primary text-5xl font-semibold">
                    {careers.breakThree}
                  </span>
                  <KorcomptenzImage
                    src={careers.profiles?.[1].image?.url}
                    alt={careers.profiles?.[1].image?.alternativeText}
                    className="w-16 h-16 rounded-full border-4 border-white shrink-0"
                    width={1000}
                    height={1000}
                  />
                </div>

                <span className="text-primary text-5xl font-semibold">
                  {careers.breakFour}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-3xl text-custom-black leading-[28px] max-w-lg lg:ms-[-30px]">
              {careers.description}
            </p>

            {/* CTA */}
            <Button
              type="button"
              arrow={true}
              variant="default"
              size="xl"
              className="text-lg lg:ms-[-30px]"
            >
              {careers.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
