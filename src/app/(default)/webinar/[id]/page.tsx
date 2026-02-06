import React, { cache } from "react";

import ExpertsSection from "../_utils/experts-section";
import KeyTakeawaysSection from "../_utils/key-takeaways-section";
import PreWebinarHeroSection from "../_utils/pre-webinar-hero-section";
// import ReserveSeatSection from "../_utils/reserve-seat-section";
import SummarySection from "../_utils/summary-section";
import WebinarHeroSection from "../_utils/webinar-hero-section";
import WhyAttendSection from "../_utils/why-attend-section";

import DemonstrateSection from "@/components/demonstrate-section";
import { getBlogPage, getInsightPage } from "@/services";

import { GlobalForm } from "@/components/global-form";
import NotFound from "@/components/not-found";

type Props = {
  params: Promise<{ id: string }>;
};

const getBlogPageCache = cache(getBlogPage);
export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const data = await getBlogPageCache({ id });

  return {
    title: data?.seo?.title || "Career",
    description: data?.seo?.description || "",
  };
}

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const [webinarData, pageLayout] = await Promise.all([
    getBlogPageCache({ id }),
    getInsightPage(),
  ]);

  return (
    <div>
      <>
        {webinarData?.seo?.title === "not-found" ? (
          <div className="pb-10 md:pb-24">
            <NotFound data={webinarData?.list?.[0]} />
          </div>
        ) : (
          <>
            {webinarData?.content === "pre-webinar" ? (
              <PreWebinarHeroSection data={webinarData} />
            ) : (
              <WebinarHeroSection data={webinarData} />
            )}

            <SummarySection data={webinarData?.webinar?.buildData} />
            <KeyTakeawaysSection
              takeaways={webinarData?.webinar?.summary || []}
            />
            {webinarData?.content === "pre-webinar" && (
              <WhyAttendSection data={webinarData?.preWebinar?.preSummary} />
            )}
            <ExpertsSection experts={webinarData.webinar?.expert || []} />
            {webinarData?.content === "pre-webinar" && (
              <GlobalForm
                form={pageLayout?.webinarForm}
                essential={{
                  id: webinarData?.id,
                  documentId: webinarData?.documentId,
                }}
              />
            )}

            {webinarData?.webinar?.demonstrate && (
              <DemonstrateSection data={webinarData?.webinar?.demonstrate} />
            )}
          </>
        )}
      </>
    </div>
  );
};
export default Page;
