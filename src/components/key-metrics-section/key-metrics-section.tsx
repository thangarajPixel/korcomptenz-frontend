"use client";
import { DangerousHtml } from "@/components/ui/dangerous-html";

export default function KeyMetricsSection({
  KeyMetricsData,
}: {
  KeyMetricsData: KeyMetricsSectionType;
}) {
  return (
    <section
      data-debug="contact-us.contact-us-form-section"
      className="relative w-full  flex items-center container-md"
      style={{
        backgroundImage: `url(${KeyMetricsData.backgroundImage?.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative container-md py-12 lg:py-16">
        {KeyMetricsData?.title && (
          <h5 className="text-white mb-10 text-[60px] md:text-[60px] font-semibold  leading-11 md:leading-13.75 text-center">
            {KeyMetricsData?.title}
          </h5>
        )}

        <div className="flex flex-wrap lg:flex-nowrap gap-10">
          {KeyMetricsData?.listLeft?.map((partner, index) => (
            <div key={index} className="flex-1 min-w-[200px] text-white">
              <p className="text-[50px] md:text-[60px] font-bold mb-1">
                {partner?.title}
              </p>

              <DangerousHtml
                html={partner?.description || ""}
                className="text-base md:text-lg leading-[1.6] text-white"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
