"use client";

import StretchableSectionCard from "./_utils/stretchable-card";
import { useMobile } from "@/utils/custom-hooks";
import CardSwiper from "../ui/card-swiper";
import { DangerousHtml } from "../ui/dangerous-html";
import { cn } from "@/lib/utils";

const StretchableSection = ({ item }: { item: StretchableSectionType }) => {
  const isMobile = useMobile();

  const gridClassMap = {
    "grid-cols-2": "md:grid-cols-2",
    "grid-cols-3": "md:grid-cols-3",
    "grid-cols-4": "md:grid-cols-4",
    "grid-cols-5": "md:grid-cols-5",
  };

  return (
    <section
      data-debug="page-componets.stretchable-section"
      className="container-md"
    >
      {item?.title && (
        <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 lg:mb-8 text-balance">
          {item?.title}
        </h2>
      )}

      {item?.title_description && (
        <DangerousHtml
          html={item?.title_description}
          className="text-foreground text-md md:text-lg leading-7.5 mt-4"
        />
      )}

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
        {isMobile ? (
          <CardSwiper disableAutoSlide>
            {item?.list?.map((value) => (
              <StretchableSectionCard
                key={`stretchable-section-card-${value?.id}`}
                props={{
                  className: "embla__custom_slide mr-8",
                }}
                data={value}
              />
            ))}
          </CardSwiper>
        ) : (
          <div
            className={cn(
              "grid grid-cols-1 gap-4 w-full",
              gridClassMap[item?.colSpan as keyof typeof gridClassMap] ||
                "md:grid-cols-3",
            )}
          >
            {item?.list?.map((value) => (
              <StretchableSectionCard
                key={`stretchable-section-card-${value?.id}`}
                props={{
                  className: "",
                }}
                data={value}
              />
            ))}
          </div>
        )}
      </div>

      {item?.description && (
        <DangerousHtml
          html={item?.description}
          className="text-foreground text-md md:text-lg leading-7.5 mt-4"
        />
      )}
    </section>
  );
};

export default StretchableSection;
