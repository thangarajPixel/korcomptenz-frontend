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
        <div className="absolute inset-0 bg-gradient-to-r from-[#165c7d]/90 to-[#3aa17e]/80 z-0" />

        {/* LEFT CONTENT */}
        <div className="relative z-10 text-white md:w-1/2">
          {data?.description && (
            <span className="border border-white px-4 py-1 rounded-full text-sm inline-block mb-4">
              {data.description}
            </span>
          )}
          {data?.title && (
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {data.title}
            </h2>
          )}

          {data?.description && (
            <p className="text-sm opacity-90 max-w-md">{data.description}</p>
          )}
        </div>

        {/* DIVIDER */}
        <div className="hidden md:block w-[1px] h-32 bg-white/50 relative z-10" />

        {/* RIGHT LOGOS */}
        <div className="relative z-10 flex flex-wrap gap-6 items-center justify-center md:w-1/2">
          {data?.partnerlogos?.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 rounded-xl px-6 py-4 flex items-center justify-center"
            >
              <KorcomptenzImage
                src={item.logoimage?.url}
                width={50}
                height={50}
                className="h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
