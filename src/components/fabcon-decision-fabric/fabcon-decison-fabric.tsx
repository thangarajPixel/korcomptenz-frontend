"use client";

import FabconDecisionForm from "./_utils/fabcon-decision-form";

const FabconDecisionFabric = ({ data }: { data: FabconDecisionFabricType }) => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-[#07003B]"
        style={{
          backgroundImage: `url(${data?.backgroundImage?.url})`,
        }}
      />

      <div
        className="
          container-md
          grid grid-cols-1 lg:grid-cols-2
          gap-12 lg:gap-16
          items-center
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            space-y-6
            text-white
            max-w-md
            mx-auto
            text-center lg:text-left
          "
        >
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            {data?.title1}{" "}
            <span className="bg-gradient-to-r from-[#1F849F] to-[#6AC494] bg-clip-text text-transparent">
              {data?.title2}
            </span>
          </h2>
        </div>

        {/* ================= FORM ================= */}
        <div className="flex justify-center lg:justify-start">
          <FabconDecisionForm form={data?.form} />
        </div>
      </div>
    </section>
  );
};

export default FabconDecisionFabric;
