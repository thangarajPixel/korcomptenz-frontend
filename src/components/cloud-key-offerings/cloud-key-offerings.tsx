"use client";

import { DangerousHtml } from "../ui/dangerous-html";

const CloudKeyOfferings = ({ data }: { data: CloudKeyOfferingsType }) => {
  return (
    <section className="bg-[#EDF6FF] py-10 md:py-12">
    <div className="container-md ">
      {/* Heading */}
      <div className="">
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
            className="text-[#242424] text-md md:text-lg leading-7 break-words"
          />
        )}
      </div>

      {/* Divider line */}
      <hr className="border-t border-[#D9D9D9] mt-4 mb-8" />

      {/* Columns grid */}
      {data?.list?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.1fr_1fr_1fr_0.9fr_0.8fr] gap-6">
          {data.list.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-1">
              {/* Column Title */}
              {column?.title && (
                <DangerousHtml
                  html={column?.title}
                  className="text-[#242424] text-[16px] md:text-[21px] font-semibold leading-[40px]
                    [&_p]:font-semibold [&_p]:text-[#242424]"
                />
              )}

              {/* Sub items */}
              {column?.subList?.map((subItem, subIndex) => (
                <DangerousHtml
                  key={subIndex}
                  html={subItem?.description}
                  className="text-[#242424] text-[16px] md:text-[21px] font-normal leading-[1.4]
                    [&_p]:text-[#242424] [&_p]:underline [&_p]:underline-offset-2
              [&_p]:decoration-[#9ca3af] [&_p]:decoration-[0.5px]"
                />
              ))}
            </div>
          ))}
        </div>
      )}</div>
    </section>
  );
};

export default CloudKeyOfferings;
