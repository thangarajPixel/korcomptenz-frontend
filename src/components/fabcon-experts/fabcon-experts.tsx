import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";

export default function FabconExperts({ data }: { data: ExpertsSectionType }) {
  return (
    <section className="relative rounded-4xl  overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: data?.backgroundImage?.url
            ? `url(${data.backgroundImage.url})`
            : undefined,
        }}
      />
      <div className="container-md">
        {/* Title Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 text-center">
          <h2 className="text-black">{data?.title1}</h2>

          <h2 className="bg-gradient-to-r from-[#1F849F] to-[#6AC494] bg-clip-text text-transparent">
            {data?.title2}
          </h2>

          <h2 className="text-black">{data?.title3}</h2>
        </div>

        {/* Cards Grid */}
        <div
          className={`grid gap-12 justify-items-center ${
            data?.list?.length === 1
              ? "grid-cols-1 mx-auto max-w-3xl"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {data?.list?.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center "
            >
              <KorcomptenzImage
                src={partner?.image}
                width={200}
                height={200}
                className="object-contain"
              />

              <h4 className="text-2xl font-semibold text-[#020202] mt-2">
                {partner?.title}
              </h4>

              <DangerousHtml
                html={partner?.description}
                className="text-[#020202]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
