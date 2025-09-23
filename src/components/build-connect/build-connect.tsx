import React from "react";
import KorcomptenzImage from "../korcomptenz-image";

const BuildConnect = ({
  buildData,
}: {
  buildData: buildConnectSectionType;
}) => {
  return (
    <section className="container-md my-10 grid grid-cols-1 lg:grid-cols-2" data-debug={"page-componets.build-data"}>
      <div className="px-5 space-y-3">
        <h1 className="text-6xl md:text-9xl font-bold text-foreground leading-10 lg:leading-15">
          {buildData.title}
        </h1>
        <p className="text-md md:text-2xl text-foreground leading-7  ">
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
      </div>
      <div className="p-5 lg:hidden ">
        <KorcomptenzImage
          src={buildData.imagemobile}
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default BuildConnect;
