"use client";

//import { Button } from "../ui/button";
import ButtonLink from "../ui/button-link";
import { DangerousHtml } from "../ui/dangerous-html";

const CloudBanner = ({ data }: { data: FabconBannerType }) => {
  return (
    <div className="container-md mt-2 lg:mt-10">
      <section className="relative overflow-hidden rounded-[32px] bg-[#07003B]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${data?.image?.url})` }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-10 items-center px-5 md:px-8 lg:px-16 py-10 md:py-12 lg:py-16">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            {data?.subHeading && (
              <DangerousHtml
                className="inline-flex items-center justify-center text-[14px] md:text-[18px] leading-7.5 font-normal text-white border-1 border-white rounded-full px-4 md:px-6 py-2 md:py-3 mb-5 mx-auto lg:mx-0 
                [&_p]:!pb-0"
                html={data?.subHeading}
              />
            )}

            <DangerousHtml
              as="h1"
              className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight max-w-3xl mx-auto lg:mx-0"
              html={data?.title}
            />

            <DangerousHtml
              html={data?.description}
              className="mt-5 text-base md:text-xl lg:text-3xl leading-relaxed text-white"
            />

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start items-center">
              <ButtonLink
                link={data?.buttonLinkOne}
                buttonProps={{
                  arrow: true,
                  size: "xl",
                  className: "w-full sm:w-auto",
                }}
                isTargetNew={data?.isTargetOne}
              >
                {data?.buttonTextOne}
              </ButtonLink>
              <ButtonLink
                link={data?.buttonLinkTwo}
                buttonProps={{
                  size: "xl",
                  variant: "outline",
                  className:
                    "w-full sm:w-auto border-white text-white bg-transparent hover:bg-white hover:text-[#07003B]",
                }}
              >
                {data?.buttonTextTwo}
              </ButtonLink>
            </div>
          </div>

          {/* Right Card */}
          <div className="w-full md:max-w-[455px] mx-auto lg:ml-auto border border-[2.5px] border-[#1EBFA1] rounded-3xl px-5 md:px-6 py-5 bg-[#182543]/80 backdrop-blur-sm text-white">
            <h3 className="text-[22px] md:text-[32px] font-semibold text-[#1EBFA1] mb-5">
              {data?.list?.title}
            </h3>

            {data?.list?.subList?.map((item, index) => (
              <div
                key={index}
                className={`pb-4 ${
                  index !== data?.list?.subList?.length - 1
                    ? "border-b border-white/20 mb-4"
                    : ""
                }`}
              >
                <DangerousHtml
                  html={item?.title}
                  className="text-[28px] md:text-[40px] font-bold text-[#2FC7E8] leading-none -mb-1"
                />

                <DangerousHtml
                  html={item?.description}
                  className="mt-2 text-sm md:text-base text-white/90 leading-6 -mb-4"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudBanner;
