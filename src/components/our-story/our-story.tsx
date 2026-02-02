"use client";

import { useState } from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { motion, AnimatePresence } from "framer-motion";

const OurStory = ({ data }: { data: OurStorySectionType }) => {
  const [activeYear, setActiveYear] = useState(2025);

  const activeItem = data?.list.find((item) => item.year === activeYear);
  const image = activeItem?.image;

  return (
    <section
      id="our-story"
      data-debug="about-us.our-story-list"
      className="w-full px-2 md:px-0"
    >
      {/* Hero Wrapper */}
      <div className="relative h-auto md:aspect-[1443/696]">
        {/* Background */}
        <div
          className="absolute inset-0 rounded-4xl md:rounded-none"
          style={{
            backgroundImage:
              "url(/assets/tempory/f27fd965a14e9cdc20b9e1e1049c0fc2435c4485.png)",
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 rounded-4xl md:rounded-none bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 size-full flex flex-col justify-between md:justify-center gap-6 md:gap-12 lg:gap-16 xl:gap-24 pb-8 lg:pb-0">
          {/* Top Content */}
          <div className="container-md pt-6 md:pt-12">
            <div className="flex gap-5 md:gap-12 lg:gap-16 h-full">
              {/* Vertical Year */}
              <div className="flex items-center">
                <span
                  className="text-[80px] md:text-[100px] lg:text-[140px] xl:text-[160px]
                  font-bold text-primary opacity-50 leading-[0.85] tracking-tight
                  [writing-mode:vertical-lr] [transform:rotate(180deg)]"
                >
                  {activeYear}
                </span>
              </div>

              {/* Animated Content */}
              <div className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-8 justify-end overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeYear}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3, ease: [0.22, 0.36, 0.22, 1] }}
                  >
                    {/* Logo */}
                    {image && (
                      <KorcomptenzImage
                        src={image}
                        width={1000}
                        height={1000}
                        className="w-48 md:w-60 h-auto object-contain mb-4"
                      />
                    )}

                    {/* Description */}
                    <p
                      className="
                        text-white
                        text-sm md:text-lg lg:text-3xl
                        leading-6 md:leading-8
                         md:line-clamp-none
                      "
                    >
                      {activeItem?.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="w-full pb-6 md:pb-12">
            <div className="relative">
              <div className="h-0.5 bg-primary" />

              <div className="absolute top-[-6px] left-0 right-0 container-md flex justify-between gap-2">
                {data?.list.map((item) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveYear(item.year)}
                    className="flex flex-col items-center flex-1 group"
                  >
                    {/* Dot */}
                    <div
                      className={`w-7 h-4 border border-primary rounded-full mb-3 transition-all
                        ${
                          activeYear === item.year
                            ? "bg-primary"
                            : "bg-slate-600 group-hover:bg-slate-500"
                        }`}
                    />

                    {/* Label */}
                    <span
                      className={`text-xs md:text-sm text-white transition-all
                        ${
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
