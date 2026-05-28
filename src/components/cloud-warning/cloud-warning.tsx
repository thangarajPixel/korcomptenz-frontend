"use client";

import { DangerousHtml } from "../ui/dangerous-html";

const CloudWarning = ({ data }: { data: CloudWarningType }) => {

  return (
    <section className="container-md ">
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
            className="text-[#242424] text-base md:text-lg leading-7 break-words"
          />
        )}
      </div>

      {/* Cards Section */}

      {data?.list && data.list.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {data.list.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#E0E0E0] p-6 flex flex-col bg-white"
            >
              {item?.title && (
                <div className="md:min-h-[72px]">
                  <DangerousHtml
                    as="h3"
                    html={item.title}
                    className="text-[#2AAC94] text-24 leading-5.75 md:text-[25px] xl:text-[26px] xl:leading-7.5 font-semibold md:line-clamp-2 md:[&_p]:line-clamp-2"
                  />
                </div>
              )}
              {item?.description && (
                <DangerousHtml
                  html={item.description}
                  className="text-[#242424] text-[16px] md:text-[18px] xl:text-[20px] leading-5.75 md:leading-5 xl:leading-7.5"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CloudWarning;
