"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";

const data = {
  kicker: "Case Study: Finance",
  title: "Redefining IRA Onboarding with Automation",
  description:
    "Digital onboarding made simple with DocuSign and Salesforce delivering 50 percent faster and fully trackable journeys.",
  image:
    "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_weare_71a605310a.jpg?updatedAt=2025-09-24T09%3A53%3A40.256Z",
  imageAlt:
    "Two professionals reviewing documents with laptops and analytics on screen in a modern office",
};

export function CaseStudyBanner() {
  return (
    <section
      className="container-md rounded-2xl overflow-hidden py-12"
      aria-label="Case Study Banner"
    >
      <div className="flex flex-col md:flex-row  ">
        {/* Left Content */}
        <div className="bg-[#C7D7CA] flex-1 p-8 md:p-12 flex flex-col rounded-l-[50px] ">
          <p className="text-xl font-medium text-gray-800 mt-4">
            {data.kicker}
          </p>

          <span className="text-9xl  text-custom-gray-9 mt-4  font-semibold  max-w-md ">
            {data.title}
          </span>
          <p className="mt-4 text-5xl font-semibold  text-gray-700 ">
            {data.description}
          </p>
        </div>
        {/* Right Image */}
        <div className="relative flex-1 rounded-r-[50px]">
          <KorcomptenzImage
            src={data.image}
            alt={data.imageAlt}
            width={800}
            height={512}
            className="object-cover w-full h-full rounded-r-[50px]"
          />
        </div>
      </div>
    </section>
  );
}

export default CaseStudyBanner;
