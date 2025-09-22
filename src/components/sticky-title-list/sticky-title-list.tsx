import React from "react";
import StickyTitleCard from "./_utils/sticky-title-card";

// const salesforceServices: { title: string, list: GlobalFieldType[] } = {
//   title: "Our Salesforce services",
//   list: [
//     {
//       title: "Salesforce Sales Cloud",
//       description:
//         "Boost revenue with our world-class CRM designed to help your sales teams close deals faster.",
//       image: {
//         url: "/assets/temp-img.png",
//         height: 100,
//         width: 100,
//         name: "temp-img",
//         id: "temp-img",
//         createdAt: "temp-img",
//         updatedAt: "temp-img",
//         publishedAt: "temp-img",
//         size: 100,
//         ext: "png",
//         mime: "image/png",
//       },
//     },
//     {
//       title: "Salesforce Service Cloud",
//       description:
//         "Deliver exceptional customer service experiences with powerful case management and support tools.",
//       image: {
//         url: "/assets/services/stickyheadingimg2.png",
//         height: 100,
//         width: 100,
//         name: "temp-img",
//         id: "temp-img",
//         createdAt: "temp-img",
//         updatedAt: "temp-img",
//         publishedAt: "temp-img",
//         size: 100,
//         ext: "png",
//         mime: "image/png",
//       },
//     },
//     {
//       title: "Salesforce Marketing Cloud",
//       description:
//         "Execute one-to-one customer journeys with data-first marketing automation tools.",
//       image: {
//         url: "/assets/services/stcikyheadingimg3.png",
//         height: 100,
//         width: 100,
//         name: "temp-img",
//         id: "temp-img",
//         createdAt: "temp-img",
//         updatedAt: "temp-img",
//         publishedAt: "temp-img",
//         size: 100,
//         ext: "png",
//         mime: "image/png",
//       },
//     },
//     {
//       title: "Salesforce Field Service Cloud",
//       description:
//         "Optimize field operations with intelligent scheduling, mobile workforce management.",
//       image: {
//         url: "/assets/services/stickyheadingimg4.png",
//         height: 100,
//         width: 100,
//         name: "temp-img",
//         id: "temp-img",
//         createdAt: "temp-img",
//         updatedAt: "temp-img",
//         publishedAt: "temp-img",
//         size: 100,
//         ext: "png",
//         mime: "image/png",
//       },
//     },
//     {
//       title: "Salesforce Einstein & Analytics",
//       description:
//         "Harness the power of AI and advanced analytics to make smarter business decisions.",
//       image: {
//         url: "/assets/services/stickyheadingimg5.png",
//         height: 100,
//         width: 100,
//         name: "temp-img",
//         id: "temp-img",
//         createdAt: "temp-img",
//         updatedAt: "temp-img",
//         publishedAt: "temp-img",
//         size: 100,
//         ext: "png",
//         mime: "image/png",
//       },
//     },
//     {
//       title: "Salesforce Data Cloud Services",
//       description:
//         "Create data lake-level scale insights through a unified view of your customer data.",
//       image: {
//         url: "/assets/services/stickyheadingimg6.png",
//         height: 100,
//         width: 100,
//         name: "temp-img",
//         id: "temp-img",
//         createdAt: "temp-img",
//         updatedAt: "temp-img",
//         publishedAt: "temp-img",
//         size: 100,
//         ext: "png",
//         mime: "image/png",
//       },
//     },
//     {
//       title: "CRM Rescue & Rapid Response",
//       description:
//         "Get immediate help when your CRM system faces critical issues or performance problems.",
//       image: {
//         url: "/assets/services/stickyheadingimg7.png",
//         height: 100,
//         width: 100,
//         name: "temp-img",
//         id: "temp-img",
//         createdAt: "temp-img",
//         updatedAt: "temp-img",
//         publishedAt: "temp-img",
//         size: 100,
//         ext: "png",
//         mime: "image/png",
//       },
//     },
//     {
//       title: "Agentforce Solutions",
//       description:
//         "Deploy intelligent agents that work alongside your team to automate and enhance customer interactions.",
//       image: {
//         url: "/assets/services/stickyheadingimg8.png",
//         height: 90,
//         width: 100,
//         name: "temp-img",
//         id: "temp-img",
//         createdAt: "temp-img",
//         updatedAt: "temp-img",
//         publishedAt: "temp-img",
//         size: 100,
//         ext: "png",
//         mime: "image/png",
//       },
//     },
//   ]
// }

const StickyTitleList = ({
  salesforceServices,
}: {
  salesforceServices: StickyTitleListType;
}) => {
  return (
    <div className="container-md">
      <div className="w-full px-0 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* Left Sidebar - Title */}
          <div className="w-1/2"  >
            <div className={`lg:sticky lg:top-28`}>
              <h2 className="text-6xl  md:text-9xl font-bold text-gray-900 ">
                {salesforceServices.title}
              </h2>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div>
            <div className="space-y-6">
              {salesforceServices?.list?.map((service, index) => (
                <StickyTitleCard key={index} data={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyTitleList;
