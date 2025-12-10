import React from "react";
import KorcomptenzImage from "../korcomptenz-image";

const KorCareImpactHighlight = ({
  data,
}: {
  data: KorCareImpactHighlightType;
}) => {
  return (
    <section className="container-nav bg-foreground lg:p-20 p-5">
      <div className="lg:container-md ">
        <h2 className="text-6xl  font-bold text-white text-center my-12 mx-auto">
          {data.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 p-5">
          {data?.list?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center space-y-3"
            >
              <KorcomptenzImage
                src={item.image}
                width={100}
                height={100}
                className="w-[100px] h-[100px] object-contain"
              />

              <p className="text-white text-6xl font-bold">{item.title}</p>

              <p className="text-white text-base font-normal break-words">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
``;
export default KorCareImpactHighlight;
