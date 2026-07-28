import React from "react";
import KorcomptenzImage from "../korcomptenz-image";

interface NewsLetterLeaderProps {
  data: NewsLetterLeaderShipType;
}

const NewsLetterLeaderShip: React.FC<NewsLetterLeaderProps> = ({ data }) => {
  if (!data) return null;

  return (
    <section className="bg-white container-md" data-debug={"home.opportunity"}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_320px] items-center gap-8 mb-12">
          <div className="flex items-center">
            <h2 className="text-4xl lg:text-6xl font-semibold text-primary whitespace-nowrap bg-white pr-8 z-10">
              <p className="text-lg font-medium mb-6">
                {data.LeadershipMessage}{" "}
              </p>
              {data?.Title}
            </h2>

            <div className="flex-1 h-[4px] bg-[#2AA889]" />
          </div>

          <div className="justify-self-end">
            <div className="relative w-[300px] h-[260px] rounded-3xl overflow-hidden bg-gradient-to-r from-[#C93CCF] to-[#6545F5]">
              <KorcomptenzImage
                src={data.AuthorImage}
                alt={data?.Title || "Leadership Message"}
                width={300}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Description Full Width */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html: data?.description || "",
          }}
        />
      </div>
    </section>
  );
};

export default NewsLetterLeaderShip;
