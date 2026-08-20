"use client";
import Script from "next/script";
import React from "react";
import CaseStudyBanner from "./case-study-banner";
import CaseStudyContent from "./case-study-content";
//import { CaseStudyForm } from "./case-study-contact";
import { CaseStudyCard } from "@/components/case-study-section";
import { cn } from "@/lib/utils";
import ButtonLink from "@/components/ui/button-link";
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in";
//import { RecaptchaProvider } from "@/components/providers/recaptcha-provider";
import CaseStudyVideo from "./case-study-video";
import { ClientTestimonial } from "@/app/(default)/case-studies/_utils";
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
        }) => void;
      };
    };
  }
}
const CaseStudy = ({
  data,
  essential,
}: {
  data: CaseStudySingleData;
  essential: CaseStudyPageType;
}) => {
  return (
    <React.Fragment>
      <ScrollFadeIn>
        <CaseStudyBanner
          data={{
            ...data?.heroSection,
            title: data?.heroSection?.title || data?.title,
            study: data?.case_industries
              .map((industry) => industry.label)
              .join(", "),
            rightSection: data?.rightSection,
            formTitle: data?.formTitle,
            formDescription: data?.formDescription,
            formImage: data?.formImage,
            isForm: data?.isForm,

            form: data?.form,
          }}
          essential={essential}
        />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <CaseStudyContent data={data} />
      </ScrollFadeIn>
      {data?.video && <CaseStudyVideo data={data?.video} />}
      {data?.testimonials?.length > 0 && (
        <ScrollFadeIn>
          <ClientTestimonial data={data?.testimonials} />
        </ScrollFadeIn>
      )}
      {data?.relatedCaseStudies?.length > 0 && (
        <ScrollFadeIn>
          <div className={cn("h-1 container-md my-20 bg-primary ")} />
          <div className="container-md">
            {essential?.relatedCase?.title && (
              <h2
                id="insights-heading"
                className="text-pretty lg:text-7xl text-6xl font-semibold text-primary break-words md:text-7xl "
              >
                {essential?.relatedCase?.title}
              </h2>
            )}

            <div className="grid grid-cols-12 gap-6 mb-8 md:py-10">
              {data?.relatedCaseStudies?.length > 0 &&
                data?.relatedCaseStudies?.map((item) => (
                  <div
                    key={`related-case-study-${item.id}`}
                    className="col-span-12 md:col-span-6 lg:col-span-4"
                  >
                    <CaseStudyCard data={item} />
                  </div>
                ))}
            </div>
            <div className="flex justify-center">
              <ButtonLink
                link="/case-studies"
                buttonProps={{
                  size: "xl",
                  arrow: true,
                }}
              >
                {essential?.relatedCase?.buttonText || "View all case studies"}
              </ButtonLink>
            </div>
          </div>
        </ScrollFadeIn>
      )}
      {/* <ScrollFadeIn>
        <RecaptchaProvider>
          <CaseStudyForm data={data} essential={essential} />
        </RecaptchaProvider>
      </ScrollFadeIn> */}

      <ScrollFadeIn>
        <div className="container-md py-12 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div id="hubspot-form" />
          </div>
        </div>
        <Script
          src="//js.hsforms.net/forms/embed/v2.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (window.hbspt) {
              window.hbspt.forms.create({
                portalId: "7991245",
                formId: "89ae85c4-f137-4b8a-901d-fc3ab2e0f82e",
                region: "na1",
                target: "#hubspot-form",
              });
            }
          }}
        />
      </ScrollFadeIn>
    </React.Fragment>
  );
};

export default CaseStudy;
