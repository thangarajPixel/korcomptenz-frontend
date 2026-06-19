"use client";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { GlobalForm } from "../global-form";

export default function RequestConsultation({
  data,
}: {
  data: RequestConsultation;
}) {
  return (
    <section>
      <div className="container-md">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Subtext */}
            {data?.subtext && (
              <div className="inline-block px-4 py-1 text-sm border border-gray-300 rounded-full mb-4 text-gray-700">
                {data.subtext}
              </div>
            )}

            {/* Title */}
            {data?.title && (
              <h2 className="text-5xl md:text-6xl font-semibold text-[#1e2939] leading-12 mb-4">
                {data.title}
              </h2>
            )}

            {/* Description */}
            {data?.description && (
              <DangerousHtml
                html={data.description}
                className="text-gray-600 text-base leading-relaxed"
              />
            )}
          </div>

          {/* RIGHT IMAGE (STATIC / OPTIONAL STRAPI) */}
          <div className="rounded-2xl overflow-hidden p-6">
            {data?.form && <GlobalForm form={data.form} item={data?.item} />}
          </div>
        </div>
      </div>
    </section>
  );
}
