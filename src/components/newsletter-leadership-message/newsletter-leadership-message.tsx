import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import RawHtmlEmbed from "@/components/ui/raw-html-embed";
interface NewsLetterLeaderProps {
  data: NewsLetterLeaderShipType;
}
const NewsLetterLeaderShip: React.FC<NewsLetterLeaderProps> = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-white container-md" data-debug={"home.opportunity"}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid gap-0 items-center ${
            data?.AuthorImage ? "lg:grid-cols-[1fr_320px]" : "grid-cols-1"
          }`}
        >
          {/* Left Section */}
          <div>
            {/* Message + Line */}
            <div className="flex items-center mb-4">
              {data?.LeadershipMessage && (
                <p className="text-lg font-medium whitespace-nowrap mr-6">
                  {data.LeadershipMessage}
                </p>
              )}
              <div className="flex-1 h-[4px] bg-[#2AA889]" />
            </div>
            {/* Title */}
            {data?.Title && (
              <h2 className="text-4xl lg:text-6xl font-semibold text-primary">
                {data.Title}
              </h2>
            )}
          </div>
          {/* Image */}
          {data?.AuthorImage && (
            <div className="-ml-52">
              <KorcomptenzImage
                src={data.AuthorImage}
                alt={data.Title}
                width={300}
                height={260}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
        {/* Description Full Width */}
        <RawHtmlEmbed key={data?.id} html={data.description ?? ""} />

        {/* End divider */}
        <hr className="mt-8 border-t border-gray-200" />
      </div>
    </section>
  );
};
export default NewsLetterLeaderShip;
