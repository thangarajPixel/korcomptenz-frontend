import React, { cache } from "react";

import ExpertsSection from "../_utils/experts-section";
import KeyTakeawaysSection from "../_utils/key-takeaways-section";
import PreWebinarHeroSection from "../_utils/pre-webinar-hero-section";
// import ReserveSeatSection from "../_utils/reserve-seat-section";
import SummarySection from "../_utils/summary-section";
import WebinarHeroSection from "../_utils/webinar-hero-section";
import WhyAttendSection from "../_utils/why-attend-section";

import DemonstrateSection from "@/components/demonstrate-section";
import { getBlogPage } from "@/services";

type Props = {
  params: Promise<{ id: string }>;
};

const getBlogPageCache = cache(getBlogPage);

const Page = async ({ params }: Props) => {
  const { id } = await params;

  const webinarData = await getBlogPageCache({ id });

  return (
    <div>
      <>
        {/* Pre-Webinar Layout */}
        {/* <PreWebinarHeroSection
            title={webinarData.title}
            description={webinarData.description}
            date={webinarData.date}
            time={webinarData.time}
            registerLink={webinarData.registerLink || "#register"}
            backgroundImage={webinarData.backgroundImage}
            websitePreviewImage={webinarData.websitePreviewImage}
            mobileBackgroundImage={webinarData.mobileBackgroundImage}
          /> */}
        {/* <SummarySection
            title={webinarData.summaryTitle || "Summary of Webinar"}
            description={webinarData.summaryDescription}
            showImage={false}
            image={webinarData.summaryImage}
          /> */}
        {/* <KeyTakeawaysSection takeaways={webinarData.keyTakeaways || []} />
          <WhyAttendSection
            title={webinarData.whyAttendTitle || "Why You Should Attend"}
            reasons={webinarData.whyAttendReasons || []}
            image={webinarData.whyAttendImage}
          />
          <ExpertsSection experts={webinarData.experts || []} />
          <ReserveSeatSection
            title={webinarData.reserveSeatTitle || "Reserve Your Seat"}
            description={webinarData.reserveSeatDescription}
            buttonText={
              webinarData.reserveSeatButtonText || "Reserve Your Seat Now!"
            }
            formAction={webinarData.registerLink || "#register"}
          />
          {webinarData.demonstrateSection && (
            <DemonstrateSection data={webinarData.demonstrateSection} />
          )} */}

        {/* Post-Webinar Layout */}

        {webinarData?.content === "pre-webinar" ? (
          <PreWebinarHeroSection data={webinarData} />
        ) : (
          <WebinarHeroSection data={webinarData} />
        )}

        <SummarySection data={webinarData?.webinar?.buildData} />
        <KeyTakeawaysSection takeaways={webinarData?.webinar?.summary || []} />
        {webinarData?.content === "pre-webinar" && (
          <WhyAttendSection data={webinarData?.preWebinar?.preSummary} />
        )}
        <ExpertsSection experts={webinarData.webinar?.expert || []} />

        {webinarData?.webinar?.demonstrate && (
          <DemonstrateSection data={webinarData?.webinar?.demonstrate} />
        )}
      </>
    </div>
  );
};
export default Page;
