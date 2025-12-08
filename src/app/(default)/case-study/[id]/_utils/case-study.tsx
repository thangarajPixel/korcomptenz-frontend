import React from "react";
import CaseStudyBanner from "./case-study-banner";
import CaseStudyContent from "./case-study-content";
import { ClientTestimonial } from "@/app/(default)/client-success/_utils";
import { CaseStudyForm } from "./case-study-contact";
import { CaseStudyCard } from "@/components/case-study-section";
import { cn } from "@/lib/utils";
import ButtonLink from "@/components/ui/button-link";

const CaseStudy = ({
  data,
  essential,
}: {
  data: CaseStudySingleData;
  essential: CaseStudyPageType;
}) => {
  return (
    <React.Fragment>
      <CaseStudyBanner
        data={data?.caseStudy?.heroSection}
        essential={essential}
      />
      <CaseStudyContent data={data?.caseStudy} />
      {data?.caseStudy?.testimonials?.length > 0 && (
        <ClientTestimonial data={data?.caseStudy?.testimonials} />
      )}
      <div className={cn("h-1 container-md my-20 bg-primary ")} />
      <div className="container-md">
        <h2
          id="insights-heading"
          className="text-pretty lg:text-7xl text-6xl font-semibold text-primary break-words md:text-7xl "
        >
          {essential?.relatedCase?.title || "Explore more success stories"}
        </h2>
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
            link="/client-success"
            buttonProps={{
              size: "xl",
              arrow: true,
            }}
          >
            {essential?.relatedCase?.buttonText || "View all case studies"}
          </ButtonLink>
        </div>
      </div>

      <CaseStudyForm data={data?.caseStudy} essential={essential} />
    </React.Fragment>
  );
};

export default CaseStudy;
