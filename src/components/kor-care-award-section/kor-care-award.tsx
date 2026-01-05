import React from "react";
import KorcomptenzImage from "../korcomptenz-image";

const KorCareAward = ({ data }: { data: KorCareAwardType }) => {
  return (
    <section className="container-nav bg-[#E5E7EB] py-16 px-12">
      <div className="mx-auto max-w-4xl text-center space-y-5 rounded-3xl shadow-2xl bg-white  px-10 py-16">
        {/* Center Image */}
        <KorcomptenzImage
          src={data.image}
          width={300}
          height={300}
          className="mx-auto"
        />

        <h2 className="text-6xl font-bold text-primary">{data.title}</h2>

        {/* Description with proper word wrap */}
        <p className="text-muted text-xl break-words max-w-2xl mx-auto">
          {data.description}
        </p>
      </div>
    </section>
  );
};

export default KorCareAward;
