import KorcomptenzImage from "@/components/korcomptenz-image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardContentwithoutpadding,
} from "@/components/ui/card";
import Image from "next/image";


const InspireSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16">
      {/* Mobile Layout */}
      <div className="lg:hidden space-y-6">
        {/* Manufacturing Card */}
        <Card className="border-2 border-blue-400">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Manufacturing
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Struggling with poor supply chain visibility, planning gaps, and
              disconnected operations? We help you simplify processes, boost
              efficiency, and respond better to customer demands.
            </p>
            <div className="flex justify-center">
              <KorcomptenzImage
                src="/orange-robotic-arm-manufacturing-equipment.png"
                alt="Manufacturing robotic arm"
                width={250}
                height={200}
                className="rounded-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Center Content */}
        <div className="text-center py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-balance">
            Best-in-class solutions for key industry challenges
          </h1>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3  rounded-full">
            Explore solutions for your industry →
          </Button>
        </div>

        {/* Banking Card */}
        <Card className="bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Banking & Financial Services
                </h3>
                <p className="text-gray-600 text-sm">
                  We help you lead in the digital era with AI-driven,
                  customer-centric solutions that enhance engagement, boost
                  efficiency, and elevate customer experiences.
                </p>
              </div>
              <div className="flex-shrink-0">
                <KorcomptenzImage
                  src="/assets/home/Banking Icon.png"
                  alt="Banking icon"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Healthcare Card */}
        <Card className="bg-gray-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/assets/home/Banking Icon.png"
                alt="Healthcare stethoscope"
                width={150}
                height={100}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Healthcare
            </h3>
            <p className="text-gray-600 text-sm">
              We enable healthcare providers to deliver connected,
              patient-centric experiences through intuitive design, personalized
              journeys, and digital innovation.
            </p>
          </CardContent>
        </Card>

        {/* Retail Card */}
        <Card className="bg-purple-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Retail & E-Commerce
                </h3>
                <p className="text-gray-600 text-sm">
                  We empower retail brands with connected, end-to-end solutions
                  that streamline operations, improve agility, simplify supply
                  chain management and elevate customer experiences.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/assets/home/Banking Icon.png"
                  alt="Retail shopping bags"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block ">
        <div className="grid grid-cols-12 gap-6   ">
          {/* Manufacturing - Large left card */}
          <div className="col-span-4 ">
            <Card className="border-2 border-blue-400 h-[650px] w-[400px] bg-[#E2EBE4] rounded-[40px] me-24">
              <CardContentwithoutpadding className="h-full flex flex-col m-[]">
                <h3 className="font-[Outfit] font-semibold text-[28px] leading-[34px] tracking-[0] text-gray-900 mb-4 ps-[40px] pt-[42px]">
                  Manufacturing
                </h3>

                <p className="font-[Outfit] font-normal text-[18px] leading-[25px] tracking-[0]  text-gray-600 mb-6 flex-1  ps-[40px] pt-[17px] pe-[24px]">
                  Struggling with poor supply chain visibility, planning gaps,
                  and disconnected operations? We help you simplify processes,
                  boost efficiency, and respond better to customer demands.
                </p>

                <div className="flex justify-end  ">
                  <Image
                    src="/assets/home/Manufacturing (2).png"
                    alt="Manufacturing robotic arm"
                    width={390}
                    height={323}
                    className="rounded-lg"
                  />
                </div>
              </CardContentwithoutpadding>
            </Card>
          </div>

          {/* Center column */}
          <div className="col-span-4 flex flex-col gap-6  h-[691px]  w-[400px] ">
            {/* Center header */}
            <div className="text-center">
              <h1 className="font-[Outfit] font-semibold text-[36px] leading-[42px] text-center  text-gray-900 mb-6 w-[431px]  h-[84px] text-balance">
                Best-in-class solutions for key industry challenges
              </h1>

              <Button className="font-[Outfit] font-normal text-[17px] leading-[26px] tracking-[0] bg-[#26A17C] text-white px-8 py-3 rounded-full w-[353px] h-[66px]">
                Explore solutions for your industry →
              </Button>
            </div>

            {/* Healthcare card */}
            <Card className="py-6 bg-[#E2EBE4] rounded-[40px]  min-h-[463px] min-w-[401px] ">
              <CardContent className="flex flex-col ps-[36px] pe-[26px] pt-[24px] pb-[40px]">
                <div className="flex justify-start mb-4">
                  <Image
                    src="/assets/home/Healthcare.png"
                    alt="Healthcare stethoscope"
                    width={301}
                    height={215}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="font-[Outfit] font-semibold text-[28px] leading-[34px] tracking-[0] text-gray-900 mb-3 w-[367px] h-[34px]">
                  Healthcare
                </h3>

                <p className="font-[Outfit] font-normal text-[18px] leading-[25px] tracking-[0] text-gray-600 ">
                  We enable healthcare providers to deliver connected,
                  patient-centric experiences through intuitive design,
                  personalized journeys, and digital innovation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right column */}
          <div className="col-span-4 flex flex-col gap-6  w-[400px]">
            {/* Banking card */}
            <Card className="relative  w-[400px] h-[356px] ps-[40px] pb-[40px] pe-[24px] bg-[#E2EBE4] rounded-[40px]">
              <CardContentwithoutpadding className="w-[367px] h-[368px] position-absolute z-5 mt-[-75px] ">
                <div className="flex-shrink-0 ms-[122px]  me-[-20px] ">
                  <Image
                    src="/assets/home/Banking Icon.png"
                    alt="Banking icon"
                    width={244.12}
                    height={182}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1 w-[367px] h-[186px]">
                  <h3 className="font-[Outfit] font-semibold text-[28px] leading-[34px] tracking-[0] text-gray-900 mb-3 w-[234px] h-[68px]">
                    Banking & Financial Services
                  </h3>
                  <p className="font-[Outfit] font-normal text-[18px] leading-[25px] tracking-[0] text-gray-600 w-[367px] h-[105px]">
                    We help you lead in the digital era with AI-driven,
                    customer-centric solutions that enhance engagement, boost
                    efficiency, and elevate customer experiences.
                  </p>
                </div>
              </CardContentwithoutpadding>
            </Card>

            {/* Retail card */}

            <Card className="relative  w-[431px] h-[356px] ps-[40px] pb-[40px] pe-[24px] bg-[#E2EBE4] rounded-[40px]">
              <CardContentwithoutpadding className="w-[367px] h-[321px] position-absolute z-5 mt-[-75px] ">
                <div className=" ms-[222px]  me-[-20px] position-absolute z-5 bottom-10">
                  <Image
                    src="/assets/home/Reatils.png"
                    alt="Banking icon"
                    width={144.12}
                    height={190}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1 w-[367px] h-[205px]">
                  <h3 className="font-[Outfit] font-semibold text-[28px] leading-[34px] tracking-[0] text-gray-900 mb-3 w-[259px] h-[68px]">
                    Retail & <br /> E-Commerce
                  </h3>
                  <p className="font-[Outfit] font-normal text-[18px] leading-[25px] tracking-[0] text-gray-600 w-[367px] h-[105px] pb-20px">
                    We empower retail brands with connected, end-to-end
                    solutions that streamline operations, improve agility,
                    simplify supply chain management and elevate customer
                    experiences.
                  </p>
                </div>
              </CardContentwithoutpadding>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspireSection;
