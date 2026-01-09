"use client";

import { useState } from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { motion, AnimatePresence } from "framer-motion";

const OurStory = ({ data }: { data: OurStorySectionType }) => {
  const [activeYear, setActiveYear] = useState(2025);

  // const activeData = TIMELINE_DATA.find((d) => d.year === activeYear) || TIMELINE_DATA[TIMELINE_DATA.length - 1]
  const image = data?.list.find((item) => item.year === activeYear)?.image;
  return (
    <section
      data-debug="about-us.our-story-list"
      id="our-story"
      className="w-full px-2 md:px-0"
    >
      {/* Hero Section */}
      <div className="relative aspect-[627/500] md:aspect-[1443/696]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 rounded-4xl md:rounded-none"
          style={{
            backgroundImage:
              "url(/assets/tempory/f27fd965a14e9cdc20b9e1e1049c0fc2435c4485.png)",
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
          }}
        >
          <div className="absolute rounded-4xl md:rounded-none inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        </div>
        {/* Content Container */}
        <div className="relative z-10 size-full  flex flex-col  justify-center  gap-0 md:gap-12 lg:gap-16 xl:gap-24">
          <div className="container-md ">
            <div className="flex flex-row md:items-start md:gap-12 lg:gap-16 gap-5 h-full">
              {/* Year 2025 - Large Vertical Text */}
              <div className="mb-8 md:mb-0 md:flex md:items-center">
                <span className="text-[80px] md:text-[100px] font-bold lg:text-[140px] xl:text-[160px] text-primary leading-[0.85] opacity-50 tracking-tight md:-rotate-0 [writing-mode:vertical-lr] [transform:rotate(180deg)]">
                  {activeYear}
                </span>
              </div>{" "}
              {/* Content Area */}
              <div className="flex-1 flex flex-col overflow-hidden  gap-2 lg:gap-6 md:gap-8 h-full lg:justify-end ">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`active-content-${activeYear}`}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3, ease: [0.22, 0.36, 0.22, 1] }}
                  >
                    {/* Partner Badges */}
                    <div className="flex items-center gap-4 flex-wrap mb-5">
                      <KorcomptenzImage
                        src={image}
                        width={1000}
                        height={1000}
                        className="w-60 h-auto object-contain"
                      />
                    </div>

                    {/* Achievement Text */}
                    <div className="text-white ">
                      <p className="text-base md:text-lg lg:text-xl leading-relaxed line-clamp-4 md:line-clamp-none">
                        {
                          data?.list.find((item) => item.year === activeYear)
                            ?.description
                        }
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="relative">
              <div className="h-0.5 bg-primary" />
              <div className="absolute top-[-6px] left-0 right-0 container-md flex justify-between items-start gap-2">
                {data?.list.map((item) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveYear(item.year)}
                    className="flex flex-col items-center group cursor-pointer flex-1"
                  >
                    {/* Year Marker */}
                    <div
                      className={`w-7 h-4 border border-primary rounded-full mb-4 transition-all duration-300 transform 
                      ${
                        activeYear === item.year
                          ? "bg-primary "
                          : "bg-slate-600 hover:bg-slate-500"
                      }`}
                    />

                    {/* Year Label */}
                    <span
                      className={`text-xs md:text-sm transition-all text-white duration-300 ${
                        activeYear === item.year
                          ? "text-base md:text-lg"
                          : "opacity-80"
                      }`}
                    >
                      {item.year}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
