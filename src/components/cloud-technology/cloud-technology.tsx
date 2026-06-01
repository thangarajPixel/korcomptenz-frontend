"use client";

import KorcomptenzImage from "../korcomptenz-image";
import ButtonLink from "../ui/button-link";
import { DangerousHtml } from "../ui/dangerous-html";

const CloudTechnology = ({ data }: { data: CloudTechnologyType }) => {
  return (
    <section className="container-md py-8 md:py-12">
      {/* Heading */}
      <div className="mb-8 md:mb-10">
        {data?.subHeading && (
          <DangerousHtml
            className="
              inline-flex items-center justify-center
              text-[12px] md:text-[16px]
              leading-normal
              font-normal
              text-[#151515]
              border border-[#4C4C4C]
              rounded-full
              px-4 py-1
              mb-4
            "
            html={data?.subHeading}
          />
        )}

        {data?.title && (
          <DangerousHtml
            as="h2"
            html={data?.title}
            className="text-[#020202] mb-4"
          />
        )}

        {data?.description && (
          <DangerousHtml
            html={data?.description}
            className="
              text-[#242424]
              text-base
              md:text-lg
              leading-7
            "
          />
        )}
      </div>

      {/* Partner Logos */}
      <div
        className="
          flex flex-col
          md:flex-row
          items-center
          md:items-center
          md:justify-between
          gap-6 md:gap-8
          max-w-5xl
        "
      >
        {data?.list?.map((partner, index) => (
          <ButtonLink
            key={index}
            link={partner.link}
            isTargetNew={partner.isTargetNew}
            buttonProps={{
              arrow: false,
              size: "xl",
              className:
                "p-0 border-0 bg-transparent shadow-none hover:shadow-none w-full md:w-auto",
            }}
          >
            <span
              className="
                flex items-center justify-center
                rounded-full
                w-full
                max-w-[260px]
                min-h-[72px]
                md:min-h-[84px]
                px-6 md:px-8
                bg-transparent
                transition-all duration-300 ease-in-out
                hover:bg-[#E8F5FF]
                active:bg-[#E8F5FF]
                group
              "
            >
              <KorcomptenzImage
                src={partner?.image}
                width={500}
                height={250}
                className="
                  h-auto
                  w-[140px]
                  md:w-[180px]
                  object-contain
                  transition-transform duration-300
                  group-hover:scale-105
                "
              />
            </span>
          </ButtonLink>
        ))}
      </div>
    </section>
  );
};

export default CloudTechnology;
