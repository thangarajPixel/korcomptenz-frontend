"use client";
import KorcomptenzImage from "../korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";

export default function SapWhyKorcomptenz({
  data,
}: {
  data: SapWhyKorcomptenzType;
}) {
  return (
    <section className="bg-[#f8f8f8] py-16">
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
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
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
              src={data?.image}
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-4xl"
            />
          </div>
        </div>

        {/* LIST BOX GRID */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {data?.listbox?.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* ICON PLACEHOLDER */}
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-500 rounded-lg mb-4 text-white">
                ★
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
