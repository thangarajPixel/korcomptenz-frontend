import React from "react";

import Link from "next/link";
import KorcomptenzImage from "../korcomptenz-image";
import { DangerousHtml } from "../ui/dangerous-html";

const ExpertMigration = ({ data }: { data: ExpertMigrationType }) => {
  return (
    <section className="w-full bg-light-gray py-12 md:py-16">
      <div
        className="relative rounded-tr-[100px] overflow-visible container-md"
        style={{
          minHeight: "280px",
          ...(data.bgImage
            ? {
                backgroundImage: `url(${data.backgroundImage?.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {
                backgroundColor: data.bgColor,
              }),
        }}
      >
        {/* Background layer with overflow hidden to maintain rounded corners */}
        <div
          className="absolute inset-0  overflow-hidden -z-10"
          style={{
            ...(data.bgImage
              ? {
                  backgroundImage: `url(${data.backgroundImage?.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : {
                  backgroundColor: data.bgColor,
                }),
          }}
        />

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between h-full min-h-[280px] relative">
          {/* Left Content Section */}
          <div className="flex-1 z-10 px-8 md:px-12 lg:px-16 pt-10 md:py-12">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2  leading-tight max-w-6xl">
              {data?.title}
            </h2>

            {data?.description && (
              <DangerousHtml
                html={data?.description}
                className="text-md md:text-lg leading-7.5 text-white mb-3"
              />
            )}

            <Link
              href={data.buttonLink || "#"}
              target={data.isTarget ? "_blank" : "_self"}
            >
              <button className="bg-white text-gray-900 font-semibold text-sm md:text-base px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-md cursor-pointer">
                {data.buttonText || "GET EXPERT MIGRATION"}
              </button>
            </Link>
          </div>

          {/* Right Image Section - extends above container */}
          {data?.image && (
            <>
              <div className="relative hidden md:block flex-shrink-0 self-end -mt-8 md:-mt-12 md:mr-10 justify-center flex">
                <div className="relative h-[400px] w-[280px] ">
                  <KorcomptenzImage
                    className="object-cover object-bottom h-full w-full"
                    width={320}
                    height={450}
                    src={data?.image}
                  />
                </div>
              </div>
              <div className="relative md:hidden flex  justify-center items-center -mt-6">
                <div className="relative h-[400px] w-[280px] mx-auto">
                  <KorcomptenzImage
                    className="object-center object-bottom h-full w-full rounded-xl"
                    width={300}
                    height={450}
                    src={data?.image}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExpertMigration;
