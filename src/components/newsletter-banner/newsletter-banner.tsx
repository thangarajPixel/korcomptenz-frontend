import React from "react";
import { DangerousHtml } from "@/components/ui/dangerous-html";
export default function NewsletterBanner({ data }: NewsletterBannerProps) {
  const handleScroll = (title: string) => {
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="bg-[#443C79] text-white py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl">
          <h1 className="font-outfit text-[90px] font-semibold leading-[100px] mb-4">
            {data?.title}
          </h1>

          {data?.subtitle && (
            <p className="text-xl md:text-3xl font-medium mb-8 max-w-3xl">
              {data.subtitle}
            </p>
          )}

          {data?.eventDate && (
            <p className="text-base text-white/80">{data.eventDate}</p>
          )}
        </div>

        {/* What's Inside */}
        {data?.whatsIncludeContent?.sublist?.length ? (
          <div className="mt-16">
            <h2 className="text-[#FF6FB5] text-3xl md:text-4xl font-bold mb-8">
              {data?.whatsIncludeContent?.title || "What's Inside"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {data.whatsIncludeContent.sublist.map((item) => (
                <a
                  href={item.sectionLink}
                  onClick={() => handleScroll(item.sectionLink)}
                  className="bg-[#6D688F] rounded-2xl p-6 text-left transition-all hover:bg-[#7974A1]"
                >
                  <h3 className="text-[#56E2D0] text-xl font-bold mb-3">
                    {item.title}
                  </h3>

                  {item.description && (
                    <DangerousHtml
                      html={item.description}
                      className="md:text-lg text-md"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
