"use client";
import KorcomptenzImage from "../korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";

export default function SapWhyKorcomptenz({
  data,
}: {
  data: SapWhyKorcomptenzType;
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black mb-4">
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
          <div className="rounded-2xl overflow-hidden">
            <KorcomptenzImage
              src={data?.introimage?.url}
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-4xl"
            />
          </div>
        </div>

        {/* LIST BOX GRID */}
        <div className="grid relative md:grid-cols-2 gap-6 mt-12">
          {data?.listbox?.map((item) => (
            <div
              key={item.id}
              style={{
                background:
                  "radial-gradient(circle at top left, #FFFFFF 0%, #F6F4FF 45%, #EEE9FF 100%)",
              }}
              className="rounded-[26px] border border-[#B7AFFF] p-8 shadow-[0px_2px_10px_rgba(124,58,237,0.06)] transition-all duration-300 hover:shadow-lg"
            >
              {item?.icon?.url && (
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-500 rounded-lg p-2 mb-4 text-white">
                  <img src={item.icon.url} alt="" />
                </div>
              )}

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2 text-black">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
