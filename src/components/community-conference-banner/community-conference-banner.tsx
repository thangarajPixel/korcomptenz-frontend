"use client";

//import { Button } from "../ui/button";
//import { ChevronRight } from "lucide-react";

import { DangerousHtml } from "../ui/dangerous-html";
import CommunityBannerForm from "./_utils/community-Banner-form";
import { RecaptchaProvider } from "@/components/providers/recaptcha-provider";

const CommunityBanner = ({ data }: { data: CommunityBannerType }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[820px]">
        {/* ================= LEFT PANEL ================= */}
        <div className="relative bg-black flex flex-col">
          <div className="relative z-10 px-8 md:px-12 pt-16 pb-8 space-y-6 text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              {data?.title1}{" "}
            </h1>
            <p className="text-2xl md:text-lg leading-relaxed text-white/80 max-w-xl">
              {data?.title2}
            </p>
            <DangerousHtml
              html={data?.description}
              className=" md:text-xl  text-white max-w-xl"
            />
          </div>

          {/* Background / bottom image */}
          <div
            className="relative flex-1 min-h-[360px] bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${data?.backgroundImage?.url})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>
        </div>

        {/* ================= RIGHT PANEL (FORM) ================= */}
        <div
          id="Community-enquiry"
          style={{ backgroundColor: "#0B1020" }}
          className="bg-[#0B1020] px-8 md:px-14 py-16 flex flex-col justify-center scroll-mt-32"
        >
          <div className="max-w-xl w-full mx-auto space-y-2">
            <div className="space-y-2">
              <h3 className="text-[#1EBFA1] text-2xl md:text-4xl font-bold">
                <DangerousHtml
                  html={data?.formTitle}
                  className=" text-2xl  md:text-4xl text-[#1EBFA1]"
                />
              </h3>

              <p className="text-white/60 text-sm md:text-base">
                <DangerousHtml
                  html={data?.formDescription}
                  className=" md:text-xl  text-white max-w-xl"
                />
              </p>
            </div>

            <RecaptchaProvider>
              <CommunityBannerForm form={data?.form} />
            </RecaptchaProvider>
            <p className="text-white/60 text-sm md:text-base">
              {data?.formFooterText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityBanner;
