"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import { GlobalForm } from "@/components/global-form";
import { DangerousHtml } from "@/components/ui/dangerous-html";

export default function ContactUsForm({
  data,
}: {
  data: ContactUsFormSectionType;
}) {
  return (
    <section
      data-debug="contact-us.contact-us-form-section"
      className="relative w-full min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${data?.backgroundImage?.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative container-md py-12 lg:py-16">
        <h5 className="text-white mb-10 text-[36px] md:text-[50px] font-semibold  leading-[44px] md:leading-[55px]">
          {data?.title}
        </h5>

        {/* MAIN GRID — stats | divider | form */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {/* LEFT SIDE – STATS (30%) */}
          <div className="flex flex-col justify-center gap-6 lg:w-[30%] pr-0 lg:pr-8">
            {data?.listLeft?.map((partner, index) => (
              <div key={index} className="text-white">
                <p className="text-[50px] md:text-[80px] leading-[40px] md:leading-[60px] font-bold mb-1">
                  {partner?.title}
                </p>
                <DangerousHtml
                  html={partner?.description}
                  className="text-base md:text-lg leading-[1.6] text-white"
                />
              </div>
            ))}
          </div>

          {/* VERTICAL WHITE DIVIDER */}
          <div className="hidden lg:block w-[3px] bg-white self-stretch mx-8 flex-shrink-0" />

          {/* RIGHT SIDE – FORM CARD (70%) */}
          <div className="flex justify-end items-end lg:w-[60%] ml-auto">
            <div
              className="
                w-full
                bg-transparent md:bg-white
                rounded-[28px]
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                 md:p-10
              "
            >
              <GlobalForm form={data?.form} />
            </div>
          </div>
        </div>

        {/* LOGO STRIP */}
        <div className="mt-14">
          <div className="hidden md:flex w-full gap-6">
            {data?.images?.slice(0, 6).map((partner) => (
              <div
                key={partner.id}
                className="flex-1 bg-white rounded-lg flex items-center justify-center h-26"
              >
                <KorcomptenzImage
                  src={partner.image}
                  width={120}
                  height={65}
                  className="object-contain max-w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
