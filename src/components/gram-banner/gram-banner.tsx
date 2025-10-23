import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { Button } from "../ui/button";
import Link from "next/link";
import { DangerousHtml } from "../ui/dangerous-html";

const GramBanner = ({ gramData }: { gramData: GramBannerType }) => {
  return (
    <section
      className="container-md my-10 grid grid-cols-1 lg:grid-cols-1"
      data-debug={"page-componets.build-data"}
    >
      <div className="px-5 space-y-3 ">
        <h1 className="text-6xl md:text-9xl font-bold text-foreground leading-10 lg:leading-15 text-center">
          {gramData?.title}
        </h1>
        <DangerousHtml
          html={gramData?.description}
          className="text-md md:text-2xl text-foreground leading-7 break-words text-center"
        />
        {gramData?.descriptionButtonText && (
          <Link href={gramData?.descriptionButtonLink || "#"}>
            <Button size="xl" className="items-center" arrow={true}>
              {gramData?.descriptionButtonText || "Watch Now"}
            </Button>
          </Link>
        )}
      </div>
      <div className="p-5 hidden lg:flex  items-center justify-center ">
        <KorcomptenzImage
          src={gramData?.image}
          width={500}
          height={500}
          className="w-auto h-auto  "
        />
      </div>
      <div className="p-5 lg:hidden ">
        <KorcomptenzImage
          src={gramData?.mobileImage}
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
        {gramData?.imageCaption && (
          <div className="flex flex-col items-center gap-2 lg:mt-5">
            <p className="text-md text-center">{gramData?.imageCaption}</p>
            <Button className="items-center">
              {gramData?.buttonText || "Watch Now"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GramBanner;
