import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { Button } from "../ui/button";
import Link from "next/link";
import { DangerousHtml } from "../ui/dangerous-html";

import BookDemoSection from "../book-demo-section";

const BuildConnect = ({
  buildData,
}: {
  buildData: BuildConnectSectionType;
}) => {

  return (
    <section
      className="container-md my-10 grid grid-cols-1 lg:grid-cols-2"
      data-debug={"page-componets.build-data"}
    >
      <div className="px-5 space-y-3 ">
        <h1 className="text-6xl md:text-9xl font-bold text-foreground leading-10 lg:leading-15">
          {buildData?.title}
        </h1>
        <DangerousHtml
          html={buildData?.description}
          className="text-md md:text-2xl text-foreground leading-7 break-words"
        />
        {buildData?.descriptionButtonText && (
          <Link href={buildData?.descriptionButtonLink || "#"}>
            <Button size="xl" className="items-center" arrow={true}>
              {buildData?.descriptionButtonText || "Watch Now"}
            </Button>
          </Link>
        )}
      </div>
      {buildData?.rightSection?.content === "image" && (
        <div>
          <div className="p-5 hidden lg:block">
            <KorcomptenzImage
              src={buildData?.rightSection?.responsiveImage?.image}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
            {buildData?.imageCaption && (
              <div className="flex flex-col items-center gap-4 lg:mt-5">
                <p className="text-3xl">{buildData?.imageCaption}</p>
                <Button size="xl" className="items-center">
                  {buildData?.buttonText || "Watch Now"}
                </Button>
              </div>
            )}
          </div>
          <div className="p-5 lg:hidden ">
            <KorcomptenzImage
              src={buildData?.rightSection?.responsiveImage?.mobileImage}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
            {buildData?.imageCaption && (
              <div className="flex flex-col items-center gap-2 lg:mt-5">
                <p className="text-md text-center">{buildData?.imageCaption}</p>
                <Button className="items-center">
                  {buildData?.buttonText || "Watch Now"}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {buildData?.rightSection?.content === "description" && (
        <DangerousHtml
          html={buildData?.rightSection?.description}
          className=""
        />
      )}
      {buildData?.rightSection?.content === "form" && <BookDemoSection essential={buildData?.rightSection?.form?.forms[0] as BookDemoFormType} />}
    </section>
  );
};

export default BuildConnect;
