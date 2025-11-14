"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";

import { GlobalForm } from "@/components/global-form";

export default function ContactUsForm({
  data,
}: {
  data: ContactUsFormSectionType;
}) {
  return (
    <main
      className="min-h-screen container-md"
      style={{ backgroundColor: "#e8f5f0" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left side - Responsive Logo Grid */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 w-full">
              {data?.images?.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-xl flex items-center justify-center h-28 "
                >
                  <KorcomptenzImage
                    src={partner.image}
                    className="object-cover"
                    width={150}
                    height={80}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            <GlobalForm form={data?.form} />
          </div>
        </div>
      </div>
    </main>
  );
}
