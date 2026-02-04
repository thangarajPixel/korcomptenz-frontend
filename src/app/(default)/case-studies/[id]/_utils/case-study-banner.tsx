"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";

export function CaseStudyBanner({
  data,
  essential,
}: {
  data: CaseStudyHeroSection;
  essential: CaseStudyPageType;
}) {
  const title = data?.rightSection?.map((item) =>
    item?.preTitle?.title === "Industry" ? (item?.descripition ?? null) : null,
  );

  return (
    <section
      className="container-md rounded-2xl overflow-hidden py-6 md:py-12 "
      aria-label="Case Study Banner"
    >
      <div className="flex flex-col md:flex-row  ">
        {/* Left Content */}
        <div className="bg-[#C7D7CA] flex-1 p-5 md:p-12 flex flex-col  rounded-t-4xl md:rounded-l-4xl md:rounded-none">
          <p className="text-xl font-semibold text-foreground mt-4">
            {essential?.study} {title || data?.study}
          </p>

          <h1 className="text-7xl  text-custom-gray-9 mt-4  font-semibold  max-w-md leading-12 ">
            {data.title}
          </h1>
          <p className="mt-4 text-3xl md:text-5xl leading-tight  font-normal text-foreground ">
            {data.description}
          </p>
        </div>
        {/* Right Image */}
        <div className="relative flex-1    ">
          <KorcomptenzImage
            src={data?.image}
            width={800}
            height={512}
            className="object-cover size-full    md:rounded-none  rounded-b-4xl md:rounded-r-4xl  "
          />
        </div>
      </div>
    </section>
  );
}

export default CaseStudyBanner;
