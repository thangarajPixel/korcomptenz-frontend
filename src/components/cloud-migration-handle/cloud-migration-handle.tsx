"use client";

import { DangerousHtml } from "../ui/dangerous-html";

const CloudMigrationHandle = ({ data }: { data: CloudMigrationType }) => {
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
            className="text-[#242424] text-md md:text-lg leading-7 break-words"
          />
        )}
      </div>
    </section>
  );
};

export default CloudMigrationHandle;
