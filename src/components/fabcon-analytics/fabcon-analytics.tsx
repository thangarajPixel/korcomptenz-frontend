import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { DangerousHtml } from "../ui/dangerous-html";
import ButtonLink from "../ui/button-link";

import Link from "next/link";

const FabconAnalytics = ({ data }: { data: FabconAnalyticsType }) => {
  return (
    <section className="relative overflow-visible ">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-right bg-no-repeat bg-[#07003B]"
        style={{ backgroundImage: `url(${data?.backgroundImage?.url})` }}
      />

      <div className="container-md py-16 text-white">
        {/* ================= TITLE ================= */}
        <div className="text-center  mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            {data?.title1}
            <span className="bg-gradient-to-r from-[#1F849F] to-[#6AC494] bg-clip-text text-transparent ml-2">
              {data?.title2}
            </span>
          </h2>
        </div>

        {/* ================= TOP CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {data?.top?.map((item) => (
            <div
              key={item.id}
              className="bg-white text-foreground rounded-2xl p-6 shadow-md"
            >
              <div className="w-14 h-14 bg-[#E8F9F6] rounded-xl flex items-center justify-center mb-4">
                <KorcomptenzImage
                  src={item.image}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#020202]">
                {item.title}
              </h3>

              <DangerousHtml
                html={item.description || ""}
                className="text-sm md:text-base text-[#020202] leading-relaxed mb-4"
              />

              {item?.buttonText && (
                <ButtonLink
                  link={item?.buttonLink || "#"}
                  isTargetNew={item?.isTarget}
                  buttonProps={{
                    arrow: true,

                    className:
                      "hover:bg-transparent bg-transparent text-primary hover:text-primary hover:border-transparent md:-ml-4 ",
                  }}
                >
                  {item.buttonText}
                </ButtonLink>
              )}
            </div>
          ))}
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {data?.mid?.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <KorcomptenzImage
                  src={stat.image}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Text Section */}
              <div className="mt-4">
                <p className="text-[40px] md:text-[48px] font-extrabold">
                  {stat.percentage}
                </p>

                <DangerousHtml
                  html={stat.description || ""}
                  className="text-md md:text-lg leading-7.5"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ================= PARTNER LOGOS ================= */}
        <div
          className="
    w-full px-4
    mt-10
    md:absolute md:left-1/2 md:bottom-0
    md:-translate-x-1/2 md:translate-y-1/2
    md:z-10
  "
        >
          <div className="bg-white rounded-2xl md:rounded-full py-5 px-6 md:px-10 flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-4xl mx-auto shadow-lg">
            {data?.bottom?.map((logo) => (
              <Link key={logo?.id} href={logo?.link || "#"}>
                <KorcomptenzImage
                  src={logo.image}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FabconAnalytics;
