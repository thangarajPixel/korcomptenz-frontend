"use client";

import KorcomptenzImage from "../korcomptenz-image";
import ButtonLink from "../ui/button-link";
import { DangerousHtml } from "../ui/dangerous-html";

const CloudTechnology = ({ data }: { data: CloudTechnologyType }) => {
  return (
    <section className="container-md ">
      {/* Heading */}

      <div className="mb-5">
        {data?.subHeading && (
          <DangerousHtml
            className="inline-flex items-center justify-center text-[16px] md:text-[18px] leading-7.5 font-normal text-[#151515] border-2 border-[#4C4C4C] rounded-full px-4 md:px-6 mb-4 bg-transparent md:pt-3 pt-2"
            html={data?.subHeading}
          />
        )}

        {data?.title && (
          <DangerousHtml
            as="h2"
            html={data?.title}
            className="text-[#020202] mb-1"
          />
        )}

        {data?.description && (
          <DangerousHtml
            html={data?.description}
            className="text-[#242424] text-base md:text-lg leading-7 break-words"
          />
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 max-w-5xl">
        {" "}
        {data?.list?.map((partner, index) => (
          <ButtonLink
            key={index}
            link={partner.link}
            buttonProps={{
              arrow: false,
              size: "xl",
              className:
                "p-0 border-0 bg-transparent shadow-none hover:shadow-none",
            }}
            isTargetNew={partner.isTargetNew}
          >
            {/* Wrapper card with hover background */}
            <span
              className="
                flex items-center justify-center
                rounded-full
                px-8 py-5
                min-w-[200px] min-h-[80px]
                bg-white
               
                transition-all duration-200 ease-in-out
                hover:bg-[#E8F5FF]
                hover:border-[#C5E4FA]
                cursor-pointer shadow-none
                group
              "
            >
              <KorcomptenzImage
                src={partner?.image}
                width={500}
                height={250}
                className="
                  h-full w-[150px] object-contain
                  transition-transform duration-200
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
