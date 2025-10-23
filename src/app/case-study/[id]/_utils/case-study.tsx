import React from "react";
import CaseStudyBanner from "./case-study-banner";
import CaseStudyContent from "./case-study-content";
import { ClientTestimonial } from "@/app/client-success/_utils";
import { CaseStudyForm } from "./case-study-contact";
import { CaseStudyCard } from "@/components/case-study-section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CaseStudy = ({ data }: { data: CaseStudySingleData }) => {
  return (
    <React.Fragment>
      <CaseStudyBanner data={data?.caseStudy?.heroSection} />
      <CaseStudyContent data={data?.caseStudy} />
      <ClientTestimonial data={data?.caseStudy?.testimonials} />
      <div className={cn("h-1 container-md my-20 bg-primary ")} />
      <div className="container-md">
        <h2
          id="insights-heading"
          className="text-pretty lg:text-7xl text-6xl font-semibold text-primary break-words md:text-7xl "
        >
          {data?.caseStudy?.relatedCase?.title ||
            "Explore more success stories"}
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
          <Link href="/client-success">
            <Button size="xl" arrow={true}>
              {data?.caseStudy?.relatedCase?.buttonText ||
                "View all case studies"}
            </Button>
          </Link>
        </div>
      </div>

      <CaseStudyForm data={data?.caseStudy} />
    </React.Fragment>
  );
};

export default CaseStudy;
