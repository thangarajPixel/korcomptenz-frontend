"use client";

import ButtonLink from "../ui/button-link";
import { DangerousHtml } from "../ui/dangerous-html";
import FabconBannerForm from "./_utils/fabcon-Banner-form";

const FabconBanner = ({ data }: { data: FabconBannerType }) => {
  return (
    <section className="relative overflow-hidden py-12">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-[#07003B]"
        style={{ backgroundImage: `url(${data?.backgroundImage?.url})` }}
      />

      <div className="container-md grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-6 text-white max-w-2xl mx-auto">
          {/* Title */}
          <span className="text-[32px] md:text-[40px]">{data?.title1}</span>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            <span className="bg-gradient-to-r from-[#1F849F] to-[#6AC494] bg-clip-text text-transparent">
              {data?.title2}
            </span>
          </h1>
          <DangerousHtml
            html={data?.description}
            className="text-lg md:text-3xl leading-relaxed text-white max-w-2xl"
          />
          <div className="flex gap-4">
            <p
              className="text-base md:text-lg leading-relaxed text-white 
                border border-white rounded-full px-6 py-2"
            >
              {data?.date}
            </p>

            <p
              className="text-base md:text-lg leading-relaxed text-white 
                border border-white rounded-full px-6 py-2"
            >
              {data?.location}
            </p>
          </div>

          <ButtonLink
            link={data?.buttonLink}
            buttonProps={{
              arrow: true,
              size: "xl",
            }}
            isTargetNew={data?.isTarget}
          >
            {data?.buttonText}
          </ButtonLink>
        </div>

        <div className=" flex justify-start lg:justify-start">
          <FabconBannerForm form={data?.form} />
        </div>
      </div>
    </section>
  );
};

export default FabconBanner;
