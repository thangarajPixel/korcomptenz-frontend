"use client";
import KorcomptenzImage from "../korcomptenz-image";

export default function MicrosoftWhyBusiness({
  data,
}: {
  data: MicrosoftWhyBusinessType;
}) {
  return (
    <section>
      <div className="container-md">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="rounded-2xl overflow-hidden">
            <KorcomptenzImage
              src={data?.introimage}
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-4xl"
            />
          </div>
          <div>
            {/* Subtext */}

            {/* Title */}
            {data?.title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black mb-4">
                {data.title}
              </h2>
            )}

            {/* Description */}

            <p className="text-1xl">{data.description}</p>
          </div>

          {/* RIGHT IMAGE (STATIC / OPTIONAL STRAPI) */}
        </div>

        {/* LIST BOX GRID */}

        {/* TOP CONNECT + CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16 relative">
          {data?.gridlist?.map((item) => (
            <div key={item.id} className="relative flex flex-col items-center">
              {/* CONNECTOR LINE */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-16 h-8 border-t-2 border-gray-300 rounded-t-full"></div>
                <div className="w-3 h-3 bg-white border-2 border-[#26a17c] rounded-full -mt-1"></div>
              </div>

              {/* CARD */}
              <div className="bg-[#F8F9FB] border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 w-full">
                {/* ICON CIRCLE */}
                {item?.icon?.url && (
                  <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#E9EDF3] mb-5">
                    <img
                      src={item.icon.url}
                      alt={item.title || "icon"}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                )}

                {/* TITLE */}
                <h3 className="font-semibold text-gray-800 mb-2 text-2xl">
                  {item.title}
                </h3>

                {/* SMALL BLUE LINE */}
                <div className="w-10 h-1 bg-[#26a17c] mx-auto mb-3 rounded-full mt-3"></div>

                {/* DESCRIPTION */}
                <p className="text-1xl">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
