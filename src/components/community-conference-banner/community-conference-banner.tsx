"use client";

//import { Button } from "../ui/button";
//import { ChevronRight } from "lucide-react";

import { DangerousHtml } from "../ui/dangerous-html";
import CommunityBannerForm from "./_utils/community-Banner-form";
import { TurnstileProvider } from "@/components/providers/turnstile-provider";

const CommunityBanner = ({ data }: { data: CommunityBannerType }) => {
  return (
    <div className="relative overflow-hidden" id="community-form-section">
      <div className="flex flex-col md:flex-row">
        {/* ================= LEFT PANEL ================= */}
        <div
          className="relative bg-black flex flex-col"
          id="community-form-content"
        >
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
          ></div>
        </div>

        {/* ================= RIGHT PANEL (FORM) ================= */}
        <div
          id="Community-enquiry"
          style={{ backgroundColor: "#0B1020" }}
          className="bg-[#0B1020] w-full px-8 md:px-14 py-16 flex flex-col justify-center scroll-mt-32"
        >
          <div className="w-full flex flex-col mx-auto space-y-2 items-center justify-center">
            <div className="space-y-2">
              <h3 className="text-[#26a17c] text-2xl md:text-4xl font-bold">
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

            <TurnstileProvider>
              <CommunityBannerForm form={data?.form} />
            </TurnstileProvider>
            <p className="text-white/60 text-sm md:text-base">
              {data?.formFooterText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBanner;
