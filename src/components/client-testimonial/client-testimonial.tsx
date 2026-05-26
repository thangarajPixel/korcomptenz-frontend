"use client";

export default function ClientTestimonial({ data }: { data: TestimonialItem }) {
  return (
    <section className="bg-gradient-to-r from-[#5B4DCC] to-[#6A5AE0] py-16 px-6 rounded-xl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-white">
          {data?.subtext && (
            <span className="border border-white px-4 py-1 rounded-full text-sm inline-block mb-4">
              {data.subtext}
            </span>
          )}

          <h2 className="text-3xl md:text-4xl font-semibold">
            {data?.title || "Client Voices"}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {data?.testimonials?.map((item, index) => (
            <div key={item.id || index} className="bg-white p-6 rounded-2xl">
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {Array.from({ length: item.star || 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6">{item.content}</p>

              {/* Client Info */}
              <div>
                <p className="font-semibold">{item.clientname}</p>
                <p className="text-sm text-gray-500">{item.designation}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar (static like UI) */}
        <div className="mt-10">
          <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-white rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
