import React from "react";
import KorcomptenzImage from "../korcomptenz-image";

const KorCareImpactDescription = ({
  data,
}: {
  data: KorCareImpactDescriptionType;
}) => {
  return (
    <section className="container-md">
      <div className="mx-auto max-w-3xl text-center space-y-5">
        <KorcomptenzImage
          src={data.image}
          width={100}
          height={100}
          className="w-[100px] h-[100px] rounded-full mx-auto"
        />

        <p className=" text-md md:text-4xl font-light text-[#1E293B] md:leading-9">
          {data.description}
        </p>
        <div>
          <p className="text-primary font-semibold text-3xl">{data.title}</p>
          <p className="text-lg text-foreground">{data.roleDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default KorCareImpactDescription;
