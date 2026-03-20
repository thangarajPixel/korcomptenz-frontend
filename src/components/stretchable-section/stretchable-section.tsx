"use client";
import StretchableSectionCard from "./_utils/stretchable-card";
import { useMobile } from "@/utils/custom-hooks";
import CardSwiper from "../ui/card-swiper";
import { DangerousHtml } from "../ui/dangerous-html";

const StretchableSection = ({ item }: { item: StretchableSectionType }) => {
  const isMobile = useMobile();
  return (
    <section
      data-debug="page-componets.stretchable-section"
      className="container-md"
    >
      <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6  lg:mb-8  text-balance">
        {item?.title}
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
        {isMobile ? (
          <CardSwiper disableAutoSlide>
            {item?.list?.map((value) => (
              <StretchableSectionCard
                key={`stretchable-section-card-${value?.id}`}
                // open={true}
                props={{
                  className: "embla__custom_slide mr-8",
                }}
                data={value}
              />
            ))}
          </CardSwiper>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {item?.list?.map((value) => (
              <StretchableSectionCard
                key={`stretchable-section-card-${value?.id}`}
                // open={hoveredCard === value?.title?.toLowerCase()}
                props={{
                  className:
                    "flex-grow lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full",
                  // onMouseEnter: () => setHoveredCard(value?.title?.toLowerCase()),
                  // onMouseLeave: () => setHoveredCard(defaultCard)
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
