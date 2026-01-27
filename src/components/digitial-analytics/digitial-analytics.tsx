import React from "react";
import { DangerousHtml } from "../ui/dangerous-html";

import ButtonLink from "../ui/button-link";

const DigitialAnalytics = ({ data }: { data: DigitialAnalyticsType }) => {
  return (
    <section className="container-md py-12">
      {/* ---------- TOP CONTENT ---------- */}
      <div className="max-w-4xl space-y-4">
        {data?.title && (
          <h2 className="text-sm font-semibold uppercase text-primary">
            {data.title}
          </h2>
        )}

        <h3 className="text-foreground text-2xl md:text-4xl font-semibold leading-tight">
          {data?.heading1}
        </h3>

        <DangerousHtml
          html={data?.description}
          className="text-md leading-7 font-light text-foreground"
        />
      </div>

      {/* ---------- PLAYBOOK SECTION ---------- */}
      <div className="mt-6 lg:mt-16">
        <h3 className="text-primary text-2xl md:text-4xl font-semibold mb-10">
          {data?.heading2}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
          {data?.list1?.map((item) => (
            <div
              key={item.id}
              className="border border-foreground rounded-2xl p-6 flex flex-col gap-4 bg-[#f7f5f8] "
            >
              <h4 className="text-3xl font-semibold text-foreground">
                {item.title}
              </h4>

              <DangerousHtml
                html={item.description}
                className="text-base text-foreground  leading-7.5 font-normal pr-5"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ---------- CASE STUDIES / READ MORE ---------- */}
      <div className=" mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.list2?.map((item) => (
          <div
            key={item.id}
            className="border border-foreground rounded-2xl p-6 bg-[#F7F8F8] flex flex-col justify-between"
          >
            <DangerousHtml
              html={item.description}
              className="text-lg text-foreground leading-7.5 font-normal"
            />

            {item.buttonText && (
              // <Link
              //   href={item?.buttonLink || "#"}
              //   target={item?.isTarget ? "_blank" : "_self"}
              //   className="text-primary font-normal text-md hover:text-primary transition-colors"
              // >
              //   {item?.buttonText}
              // </Link>

              <ButtonLink
                link={item?.buttonLink || "#"}
                isTargetNew={item?.isTarget ? true : false}
                buttonProps={{
                  variant: "ghost",
                  className:
                    "text-primary hover:text-primary hover:bg-transparent p-0 text-md",
                  arrow: true,
                }}
              >
                {item?.buttonText}
              </ButtonLink>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitialAnalytics;
