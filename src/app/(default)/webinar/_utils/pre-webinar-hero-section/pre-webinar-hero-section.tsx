"use client";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import KorcomptenzImage from "@/components/korcomptenz-image";
import dayjs from "dayjs";
import { formatRange } from "@/utils/helper";
import Timer from "./timer";
import React from "react";

const PreWebinarHeroSection = ({ data }: { data: InsightResponse }) => {
  const date = data?.preWebinar?.webinarTime;
  const time = formatRange(date);

  const formatDate = React.useCallback(() => {
    const d = dayjs(date);
    const day = d.date();
    const month = d.format("MMMM");
    const year = d.year();
    const weekday = d.format("dddd");
    const suffix = (day: number) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    return `${day}${suffix(day)} ${month} ${year} (${weekday})`;
  }, [date]);

  return (
    <section className="relative  overflow-visible md:pb-16">
      {/* Mobile Card Design */}
      <div className="block md:hidden">
        <div className="overflow-hidden">
          {/* Image with countdown overlay */}
          <div className="relative h-64">
            <KorcomptenzImage
              src={data?.heroSection?.image}
              fill
              className="object-cover"
            />
            {/* Countdown Timer Overlay */}
            <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2">
              <Timer data={data?.preWebinar?.webinarTime} />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 mt-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
              {data?.title}
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              {data?.heroSection?.description}
            </p>

            {/* Date & Time - Teal Background */}
            <div className="bg-primary  p-4 mb-6 space-y-2 text-white">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <div>
                  <span className="font-medium">Date: </span>
                  <span>{data?.preWebinar?.dateText || formatDate()}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <div>
                  <span className="font-medium">Time: </span>
                  <span>
                    {data?.preWebinar?.timeText ||
                      `${time.est} EST | ${time.pst} PST | ${time.cst} CST`}
                  </span>
                </div>
              </div>
            </div>

            {/* Register Button */}
            {/* <a
              href={registerLink}
              className="inline-flex items-center gap-2 bg-[#26A17C] text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors shadow-lg"
            >
              Register Now
              <span>→</span>
            </a> */}
          </div>
        </div>
      </div>

      <div className="hidden md:grid  w-full gap-0 min-h-125 lg:min-h-150">
        <div className="relative text-white px-8 lg:px-16 py-12 lg:py-16 flex items-center h-full w-full">
          <Image
            src="/assets/tempory/image_preview1.png"
            alt="Webinar speaker"
            fill
            className="object-cover"
            priority
          />

          <div className="relative z-10 container-lg ">
            <div className="w-7/12">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                {data?.title}
              </h1>

              <p className="text-base lg:text-lg mb-6 leading-relaxed">
                {data?.heroSection?.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Date: </span>
                    <span>{data?.preWebinar?.dateText || formatDate()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Time: </span>
                    <span>
                      {data?.preWebinar?.timeText ||
                        `${time.est} EST | ${time.pst} PST | ${time.cst} CST`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <a
              href={registerLink}
              className="inline-flex items-center gap-2 bg-white text-[#229D68] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Register Now
              <span>→</span>
            </a> */}
          </div>
        </div>
      </div>

      {/* Desktop Countdown Timer - Overlapping white box */}
      <div className="hidden md:block absolute bottom-16.25 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
        <Timer data={data?.preWebinar?.webinarTime} />
      </div>
    </section>
  );
};

export default PreWebinarHeroSection;
