// import React from "react";
// import { notFound } from "next/navigation";

// import webinarsData from "@/../public/json/webinars.json";
// import ExpertsSection from "../utils/experts-section";
// import KeyTakeawaysSection from "../utils/key-takeaways-section";
// import PreWebinarHeroSection from "../utils/pre-webinar-hero-section";
// import ReserveSeatSection from "../utils/reserve-seat-section";
// import SummarySection from "../utils/summary-section";
// import WebinarHeroSection from "../utils/webinar-hero-section";
// import WhyAttendSection from "../utils/why-attend-section";

// import DemonstrateSection from "@/components/demonstrate-section";

// // interface WebinarPageProps {
// //   params: {
// //     slug: string;
// //   };
// // }

// function getWebinarData(slug: string) {
//   const webinars = webinarsData.webinars as Record<string, any>;
//   return webinars[slug] || null;
// }

// export default function WebinarPage({ params }: WebinarPageProps) {
//   const { slug } = params;
//   const webinarData = getWebinarData(slug);

//   if (!webinarData) {
//     notFound();
//   }

//   const isPreWebinar = webinarData.status === "pre-webinar" || webinarData.type === "upcoming";

//   return (
//     <div>
//       {isPreWebinar ? (
//         <>
//           {/* Pre-Webinar Layout */}
//           <PreWebinarHeroSection
//             title={webinarData.title}
//             description={webinarData.description}
//             date={webinarData.date}
//             time={webinarData.time}
//             registerLink={webinarData.registerLink || "#register"}
//             backgroundImage={webinarData.backgroundImage}
//             websitePreviewImage={webinarData.websitePreviewImage}
//             mobileBackgroundImage={webinarData.mobileBackgroundImage}
//           />
//           <SummarySection
//             title={webinarData.summaryTitle || "Summary of Webinar"}
//             description={webinarData.summaryDescription}
//             showImage={false}
//             image={webinarData.summaryImage}
//           />
//           <KeyTakeawaysSection takeaways={webinarData.keyTakeaways || []} />
//           <WhyAttendSection
//             title={webinarData.whyAttendTitle || "Why You Should Attend"}
//             reasons={webinarData.whyAttendReasons || []}
//             image={webinarData.whyAttendImage}
//           />
//           <ExpertsSection experts={webinarData.experts || []} />
//           <ReserveSeatSection
//             title={webinarData.reserveSeatTitle || "Reserve Your Seat"}
//             description={webinarData.reserveSeatDescription}
//             buttonText={webinarData.reserveSeatButtonText || "Reserve Your Seat Now!"}
//             formAction={webinarData.registerLink || "#register"}
//           />
//           {webinarData.demonstrateSection && (
//             <DemonstrateSection data={webinarData.demonstrateSection} />
//           )}
//         </>
//       ) : (
//         <>
//           {/* Post-Webinar Layout */}
//           <WebinarHeroSection
//             title={webinarData.title}
//             description={webinarData.description}
//             date={webinarData.date}
//             time={webinarData.time || ""}
//             registerLink={webinarData.registerLink || "#"}
//             backgroundImage={webinarData.backgroundImage}
//             websitePreviewImage={webinarData.websitePreviewImage || webinarData.backgroundImage}
//             mobileBannerImage={webinarData.mobileBackgroundImage || webinarData.backgroundImage}
//           />
//           <SummarySection
//             title={webinarData.summaryTitle || "Summary of Webinar"}
//             description={webinarData.summaryDescription}
//             showImage={webinarData.summaryShowImage !== false}
//             image={webinarData.summaryImage}
//           />
//           <KeyTakeawaysSection takeaways={webinarData.keyTakeaways || []} />
//           <ExpertsSection experts={webinarData.experts || []} />

//           {webinarData.demonstrateData && (
//             <DemonstrateSection data={webinarData.demonstrateData} />
//           )}
//         </>
//       )}
//     </div>
//   );
// }

import React from "react";

const page = () => {
  return <div></div>;
};

export default page;
