"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";

export function CaseStudyBanner({ data }: { data: CaseStudyHeroSection }) {
  return (
    <section
      className="container-md rounded-2xl overflow-hidden py-12"
      aria-label="Case Study Banner"
    >
      <div className="flex flex-col md:flex-row  ">
        {/* Left Content */}
        <div className="bg-[#C7D7CA] flex-1 p-8 md:p-12 flex flex-col rounded-l-[50px] ">
          <p className="text-xl font-medium text-gray-800 mt-4">
            {" "}
            {data?.study}Manufacturing
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
            src={data?.image}
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
