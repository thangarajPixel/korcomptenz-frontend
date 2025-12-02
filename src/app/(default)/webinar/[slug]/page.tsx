import React from "react";
import { notFound } from "next/navigation";

// Pre-webinar components
import PreWebinarHeroSection from "../../pre-webinar/utils/pre-webinar-hero-section";
import WhyAttendSection from "../../pre-webinar/utils/why-attend-section";
import ReserveSeatSection from "../../pre-webinar/utils/reserve-seat-section";

// Post-webinar components
import WebinarHeroSection from "../../post-webinar/utils/webinar-hero-section";
import WebinarContentSection from "../../post-webinar/utils/webinar-content-section";
import DownloadSection from "../../post-webinar/utils/download-section";

// Shared components
import SummarySection from "../../post-webinar/utils/summary-section/summary-section";
import KeyTakeawaysSection from "../../post-webinar/utils/key-takeaways-section/key-takeaways-section";
import ExpertsSection from "../../post-webinar/utils/experts-section/experts-section";
import DemonstrateSection from "@/components/demonstrate-section";

interface WebinarPageProps {
  params: {
    slug: string;
  };
}

import webinarsData from "@/../public/json/webinars.json";

// Fetch webinar data from static JSON
function getWebinarData(slug: string) {
  const webinars = webinarsData.webinars as Record<string, any>;
  return webinars[slug] || null;
}

export default function WebinarPage({ params }: WebinarPageProps) {
  const { slug } = params;
  const webinarData = getWebinarData(slug);

  // If webinar not found, show 404
  if (!webinarData) {
    notFound();
  }

  const isPreWebinar = webinarData.status === "pre-webinar" || webinarData.type === "upcoming";

  return (
    <div>
      {isPreWebinar ? (
        <>
          {/* Pre-Webinar Layout */}
          <PreWebinarHeroSection
            title={webinarData.title}
            description={webinarData.description}
            date={webinarData.date}
            time={webinarData.time}
            registerLink={webinarData.registerLink || "#register"}
            backgroundImage={webinarData.backgroundImage}
            websitePreviewImage={webinarData.websitePreviewImage}
            mobileBackgroundImage={webinarData.mobileBackgroundImage}
          />
          <SummarySection
            title={webinarData.summaryTitle || "Summary of Webinar"}
            description={webinarData.summaryDescription}
            showImage={false}
            image={webinarData.summaryImage}
          />
          <KeyTakeawaysSection takeaways={webinarData.keyTakeaways || []} />
          <WhyAttendSection
            title={webinarData.whyAttendTitle || "Why You Should Attend"}
            reasons={webinarData.whyAttendReasons || []}
            image={webinarData.whyAttendImage}
          />
          <ExpertsSection experts={webinarData.experts || []} />
          <ReserveSeatSection
            title={webinarData.reserveSeatTitle || "Reserve Your Seat"}
            description={webinarData.reserveSeatDescription}
            buttonText={webinarData.reserveSeatButtonText || "Reserve Your Seat Now!"}
            formAction={webinarData.registerLink || "#register"}
          />
          {webinarData.demonstrateSection && (
            <DemonstrateSection data={webinarData.demonstrateSection} />
          )}
        </>
      ) : (
        <>
          {/* Post-Webinar Layout */}
          <WebinarHeroSection
            title={webinarData.title}
            description={webinarData.description}
            date={webinarData.date}
            time={webinarData.time || ""}
            registerLink={webinarData.registerLink || "#"}
            backgroundImage={webinarData.backgroundImage}
            websitePreviewImage={webinarData.websitePreviewImage || webinarData.backgroundImage}
            mobileBannerImage={webinarData.mobileBackgroundImage || webinarData.backgroundImage}
          />
          <SummarySection
            title={webinarData.summaryTitle || "Summary of Webinar"}
            description={webinarData.summaryDescription}
            showImage={webinarData.summaryShowImage !== false}
            image={webinarData.summaryImage}
          />
          <KeyTakeawaysSection takeaways={webinarData.keyTakeaways || []} />
          <ExpertsSection experts={webinarData.experts || []} />
          {/* {webinarData.downloadSection && (
            <DownloadSection
              downloadLink={webinarData.downloadSection.downloadLink}
            />
          )} */}
          {webinarData.demonstrateData && (
            <DemonstrateSection data={webinarData.demonstrateData} />
          )}
        </>
      )}
    </div>
  );
}
