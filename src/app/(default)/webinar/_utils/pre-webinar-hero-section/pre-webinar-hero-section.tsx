"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import KorcomptenzImage from "@/components/korcomptenz-image";

const PreWebinarHeroSection = ({ data }: { data: InsightResponse }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const date = "2025-12-30";
  const time = "11AM - 12 PM EST | 8AM - 9AM PST | 10AM - 11AM CST";

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date(date).getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [date]);

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    const day = d.getDate();
    const month = d.toLocaleString("en-US", { month: "long" });
    const year = d.getFullYear();
    const weekday = d.toLocaleString("en-US", { weekday: "long" });

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
  };

  return (
    <section className="relative w-screen overflow-visible md:pb-16">
      {/* Mobile Card Design */}
      <div className="block md:hidden">
        <div className="overflow-hidden">
          {/* Image with countdown overlay */}
          <div className="relative h-64">
            <KorcomptenzImage
              src={data?.heroSection?.image}
              fill
              className="object-cover"
              priority
            />
            {/* Countdown Timer Overlay */}
            <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2">
              <div className="bg-white rounded-2xl shadow-xl px-6 py-3">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {timeLeft.days.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs text-[#229D68] font-medium">
                      Days
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs text-[#229D68] font-medium">
                      Hours
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs text-[#229D68] font-medium">
                      Minutes
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs text-[#229D68] font-medium">
                      Seconds
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="bg-[#26A17C]  p-4 mb-6 space-y-2 text-white">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <div>
                  <span className="font-medium">Date: </span>
                  <span>{formatDate(date)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <div>
                  <span className="font-medium">Time: </span>
                  <span>{time}</span>
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

      <div className="hidden md:grid  w-full gap-0 min-h-[500px] lg:min-h-[600px]">
        <div className="relative text-white px-8 lg:px-16 py-12 lg:py-16 flex items-center h-full w-full">
          <Image
            src="/assets/tempory/image_preview1.png"
            alt="Webinar speaker"
            fill
            className="object-cover"
            priority
          />

          <div className="relative z-10 max-w-xl">
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
                  <span>{formatDate(date)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <div>
                  <span className="font-medium">Time: </span>
                  <span>{time}</span>
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
      <div className="hidden md:block absolute bottom-[65px] left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
        <div className="bg-white rounded-2xl shadow-xl px-6 md:px-12 py-4 md:py-6">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-gray-900">
                {timeLeft.days.toString().padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-[#229D68] font-medium mt-1">
                Days
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-gray-900">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-[#229D68] font-medium mt-1">
                Hours
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-gray-900">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-[#229D68] font-medium mt-1">
                Minutes
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-gray-900">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-[#229D68] font-medium mt-1">
                Seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreWebinarHeroSection;
