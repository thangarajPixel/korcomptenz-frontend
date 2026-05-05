import React from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import { cn } from "@/lib/utils";

const SapImplementation = ({ data }: { data: SapImplementationType }) => {
  return (
    <section className="container-md py-12">
      {/* Main Title */}
      {data?.title && (
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          {data?.title}
        </h2>
      )}

      <div className="space-y-12">
        {data?.list?.map((list, index) => {
          return (
            <div key={index} className="space-y-3">
              {/* Section Subtitle */}
              {list?.title && (
                <h3 className="text-[26px] md:text-[32px] font-semibold">
                  {list?.title}
                </h3>
              )}

              {/* Description */}
              <DangerousHtml
                html={list?.description}
                className="text-foreground text-md md:text-lg leading-7 mb-6"
              />

              {/* Boxes */}
              <div className="grid gap-6 md:grid-cols-2 ">
                {list?.sublist?.map((sub, subIndex) => (
                  <div
                    key={subIndex}
                    className={cn(
                      "bg-gray-100 p-6 rounded-lg shadow-sm",
                      list?.sublist?.length === 1 &&
                        "md:col-span-2 md:justify-self-center md:w-1/2",
                    )}
                  >
                    {sub?.title && (
                      <h4 className="font-medium mb-4 text-lg md:text-[22px] text-foreground">
                        {sub?.title}
                      </h4>
                    )}

                    <DangerousHtml
                      html={sub?.description}
                      className="text-foreground text-md md:text-lg leading-7.5"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SapImplementation;
