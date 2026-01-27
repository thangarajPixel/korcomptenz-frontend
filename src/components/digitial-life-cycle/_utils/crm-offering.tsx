import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";

export default function CrmOfferingsSection({
  offerings,
}: {
  offerings: DigitialLifeTopType;
}) {
  return (
    <section className="relative bg-foreground text-white py-6 md:py-12 md:pb-24 overflow-hidden">
      <div className="container-md ">
        {/* Section Title */}
        <h2 className=" font-bold mb-4 md:mb-6 text-left">
          {offerings?.title}
        </h2>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {offerings?.topList?.map((offering) => (
            <div key={offering?.id} className="text-center text-white">
              {/* Icon */}
              <KorcomptenzImage
                src={offering?.image}
                width={80}
                height={80}
                className="text-white object-cover mb-2"
              />

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-left text-[#f7f8f8] ">
                {offering?.title}
              </h3>

              {/* Description */}
              <DangerousHtml
                html={offering?.description}
                className="text-sm md:text-lg   text-left text-[#f7f8f8] leading-7.5"
              />
              {/* <p className="text-sm md:text-lg  leading-relaxed text-left text-[#f7f8f8]">
                {offering?.description}
              </p> */}
            </div>
          ))}
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-20"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C240,70 480,70 720,40 960,10 1200,10 1440,40 L1440,90 L0,90 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
