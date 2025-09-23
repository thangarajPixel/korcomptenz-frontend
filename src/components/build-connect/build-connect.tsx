import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { Button } from "../ui/button";

const BuildConnect = ({
  buildData,
}: {
  buildData: buildConnectSectionType;
}) => {
  return (
    <section
      className="container-md my-10 grid grid-cols-1 lg:grid-cols-2"
      data-debug={"page-componets.build-data"}
    >
      <div className="px-5 space-y-3 ">
        <h1 className="text-6xl md:text-9xl font-bold text-foreground leading-10 lg:leading-15">
          {buildData.title}
        </h1>
        <p className="text-md md:text-2xl text-foreground leading-7 break-words">
          {buildData.description}
        </p>
      </div>
      <div className="p-5 hidden lg:block">
        <KorcomptenzImage
          src={buildData?.image}
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
          src={buildData?.mobileImage}
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
    </section>
  );
};

export default BuildConnect;
