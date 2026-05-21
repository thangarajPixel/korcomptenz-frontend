"use client";
import { DangerousHtml } from "@/components/ui/dangerous-html";

export default function KeyMetricsSection({
  KeyMetricsData,
}: {
  KeyMetricsData: KeyMetricsSectionType;
}) {
  return (
    <section className="w-full py-10">
      <div className="container-md">
        <div className="bg-[#1f1f1f] rounded-[40px] px-6 md:px-12 py-10">
          {/* Optional title */}
          {KeyMetricsData?.title && (
            <h5 className="text-white text-center text-3xl md:text-4xl font-semibold mb-8">
              {KeyMetricsData.title}
            </h5>
          )}

          <div className="flex flex-col md:flex-row  justify-between text-center">
            {KeyMetricsData?.listLeft?.map((partner, index) => (
              <div
                key={index}
                className={`flex-1 p-6 ${
                  index !== KeyMetricsData.listLeft.length - 1
                    ? "md:border-r border-white/80"
                    : ""
                }`}
              >
                {/* Number */}
                <p className="text-white text-[30px] md:text-[40px] font-bold">
                  {partner?.title}
                </p>

                {/* Description */}
                <DangerousHtml
                  html={partner?.description || ""}
                  className="text-white text-sm md:text-base mt-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
