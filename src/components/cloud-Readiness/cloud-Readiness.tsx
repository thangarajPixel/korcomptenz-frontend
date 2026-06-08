import React from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import ButtonLink from "../ui/button-link";
import CloudForm from "../cloud-Readiness/_utils/cloud-form";
import { RecaptchaProvider } from "../providers/recaptcha-provider";

const CloudReadiness = ({ data }: { data: CloudReadinessType }) => {
  return (
    <div className="container-md">
      <div className="grid grid-cols-1 lg:grid-cols-[55%_42%] md:gap-x-10 gap-y-10">
        {/* CONTENT SECTION */}
        <div className="lg:px-5 md:mt-8">
          {data?.subHeading && (
            <DangerousHtml
              className="inline-flex items-center justify-center text-[16px] md:text-[18px] leading-7.5 font-normal text-[#151515] border-2 border-[#4C4C4C] rounded-full px-4 md:px-6 mb-4 bg-transparent md:pt-3 pt-2"
              html={data?.subHeading}
            />
          )}
          {data?.title && (
            <div className="flex items-center gap-2 max-w-4xl">
              <DangerousHtml
                as="h2"
                html={data?.title}
                className="text-[#020202]"
              />
            </div>
          )}
          {data?.description && (
            <DangerousHtml
              html={data?.description}
              className="text-md md:text-lg text-[#242424] leading-7.5 break-words"
            />
          )}
          {data?.buttonText && (
            <div className="pt-2">
              <ButtonLink
                link={data?.buttonLink || "#"}
                isTargetNew={data?.isTarget}
                buttonProps={{ size: "xl", arrow: true, className: "text-2xl" }}
              >
                {data?.buttonText || "Watch Now"}
              </ButtonLink>
            </div>
          )}
        </div>

        <div>
          <RecaptchaProvider>
            <CloudForm form={data?.form?.forms?.[0]} />{" "}
          </RecaptchaProvider>
        </div>
      </div>
    </div>
  );
};

export default CloudReadiness;
