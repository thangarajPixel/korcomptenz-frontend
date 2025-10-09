"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import DangerousHtml from "@/components/ui/dangerous-html";

export default function CaseStudyContent({
  data,
}: {
  data: CaseStudyDescription[];
}) {
  const Rightdata = {
    rightImage: {
      sections: [
        {
          items: [
            {
              icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/linkdin_d3537075b7.svg?updatedAt=2025-09-24T06%3A06%3A02.971Z",
              label: "HQ",
              value: "United States",
            },
          ],
          divider: true,
        },
        {
          items: [
            {
              icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/linkdin_d3537075b7.svg?updatedAt=2025-09-24T06%3A06%3A02.971Z",
              label: "Service",
              value: "Enterprise Applications",
            },
            {
              icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/linkdin_d3537075b7.svg?updatedAt=2025-09-24T06%3A06%3A02.971Z",
              label: "Industry",
              value: "Finance",
            },
          ],
          divider: true,
        },
        {
          items: [
            {
              icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/linkdin_d3537075b7.svg?updatedAt=2025-09-24T06%3A06%3A02.971Z",
              label: "Technology",
              value: "Salesforce",
            },
          ],
        },
      ],
    },
  };

  return (
    <main className="container-md">
      <div className="mx-auto max-w-7xl h-full px-6 py-8 md:py-10">
        {/* Layout: stack on mobile, 50/50 split on md+ */}
        <div className="flex h-full flex-col md:flex-row gap-8">
          {/* LEFT: One section only (title + description text) */}
          <div className="md:basis-1/2 md:pr-2 overflow-y-auto">
            <article>
              {data?.map((item, index) => (
                <section
                  aria-labelledby="content-title"
                  className="space-y-4 py-5"
                  key={index}
                >
                  <h2
                    id="content-title"
                    className="text-7xl text-primary  font-semibold tracking-tight"
                  >
                    {item.title}
                  </h2>

                  <DangerousHtml html={item.description} />
                </section>
              ))}
            </article>
          </div>

          {/* RIGHT: Static image exactly like provided */}
          <div className="md:basis-1/2 md:pl-2 flex justify-end items-start">
            <div className="bg-[#5A36E9] text-white rounded-[25px] p-8 w-full max-w-sm">
              {Rightdata?.rightImage?.sections?.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-6 last:mb-0">
                  <div
                    className={`grid ${
                      section.items.length > 1
                        ? "grid-cols-2 gap-6"
                        : "grid-cols-1 gap-0"
                    }`}
                  >
                    {section?.items?.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex flex-col space-y-1">
                        <div className="grid items-center gap-2">
                          <KorcomptenzImage
                            src={item.icon}
                            width={20}
                            height={20}
                          />
                          <h3 className="text-5xl font-semibold">
                            {item.label}
                          </h3>
                        </div>
                        <p className="text-lg text-white/80">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {section.divider && (
                    <div className="border-t border-white/30 mt-6 pt-6"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
