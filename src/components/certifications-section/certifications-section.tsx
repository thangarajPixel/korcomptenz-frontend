"use client";
import KorcomptenzImage from "../korcomptenz-image";

type Props = {
  data?: CertificationsSection;
};

export default function CertificationsSection({ data }: Props) {
  const bgUrl = data?.backgroundimage?.url;

  return (
    <section className="py-12 px-4">
      <div
        className="max-w-6xl mx-auto rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-0 " />

        {/* LEFT CONTENT */}
        <div className="relative z-10 text-white md:w-1/3">
          {data?.description && (
            <span className="border border-white px-4 py-1 rounded-full text-sm inline-block mb-4">
              {data.description}
            </span>
          )}
          {data?.title && (
            <h2 className="text-5xl md:text-6xl font-semibold leading-12">
              {data.title}
            </h2>
          )}
        </div>

        {/* DIVIDER */}
        <div className="hidden md:block w-[1px] h-32 bg-white/50 relative z-10" />

        {/* RIGHT LOGOS */}
        <div className="relative z-10 flex flex-nowrap items-center justify-between md:w-1/2 gap-8">
          {data?.partnerlogos?.map((item) => (
            <div
              key={item.id}
              className="flex flex-1 items-center justify-center"
            >
              <KorcomptenzImage
                src={item.logoimage?.url}
                width={350}
                height={120}
                className="h-12 md:h-14 lg:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
