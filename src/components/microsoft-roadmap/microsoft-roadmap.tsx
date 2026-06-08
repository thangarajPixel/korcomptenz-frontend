"use client";

export default function MicrosoftRoadmap({
  data,
}: {
  data: MicrosoftRoadmapType;
}) {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto text-center pt-4">
        {/* TITLE */}
        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-3">
          {data?.title}
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          {data?.description}
        </p>

        {/* STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-start relative">
          {data?.gridlist?.map((item, index) => (
            <div
              key={item.id}
              className="relative flex flex-col items-center text-center"
            >
              {/* CONNECTOR */}
              {index !== data.gridlist.length - 1 && (
                <div className="hidden lg:block absolute top-12 right-[-30px] text-gray-300 text-2xl">
                  →
                </div>
              )}

              {/* AUTO STEP NUMBER */}
              <div className="w-8 h-8 rounded-full bg-[#26a17c] text-white flex items-center justify-center text-sm font-semibold mb-3">
                {index + 1}
              </div>

              {/* ICON */}
              <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white mb-4">
                {item?.icon?.url && (
                  <img
                    src={item.icon.url}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                )}
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-gray-800 mb-2 text-2xl">
                {item.title}
              </h3>
              <div className="w-10 h-1 bg-[#26a17c] mx-auto mb-3 rounded-full mt-3"></div>
              {/* DESCRIPTION */}
              <p className="text-1xl">{item.description}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-12 bg-[#E9EEF6] rounded-xl px-6 py-4 flex items-center justify-center gap-3">
          <div className="text-[#26a17c] text-xl">🎯</div>
          <p className="text-gray-700">{data?.footertext}</p>
        </div>
      </div>
    </section>
  );
}
