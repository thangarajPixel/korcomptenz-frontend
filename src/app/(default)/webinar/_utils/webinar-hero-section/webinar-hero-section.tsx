import KorcomptenzImage from "@/components/korcomptenz-image";

const WebinarHeroSection = ({ data }: { data: InsightResponse }) => {
  return (
    <section className="relative w-full">
      {/* Desktop Banner */}
      <div className="hidden md:grid  w-full gap-0 min-h-[500px] lg:min-h-[600px]">
        <div className="relative text-white px-8 lg:px-16 py-12 lg:py-16 flex items-center size-full">
          <KorcomptenzImage
            src={data?.heroSection?.image}
            fill
            className="object-cover"
            priority
          />

          <div className="relative z-10 container-lg">
            <div className="w-7/12">
              <h2 className="text-3xl md:text-9xl   mb-4 leading-tight font-semibold">
                {data?.title}
              </h2>

              <p className="text-base lg:text-lg mb-6 leading-relaxed font-semibold whitespace-pre-wrap">
                {data?.heroSection?.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden relative w-full">
        <KorcomptenzImage
          src={data?.heroSection?.mobileImage}
          width={600}
          height={1000}
          className="object-contain w-full h-auto"
        />
      </div>
      <div className="px-4 block md:hidden">
        <h1 className="text-4xl   mb-4 leading-8 font-semibold">
          {data?.title}
        </h1>

        <p className="text-lg mb-6 leading-6 font-semibold">
          {data?.heroSection?.description}
        </p>
      </div>
    </section>
  );
};

export default WebinarHeroSection;
