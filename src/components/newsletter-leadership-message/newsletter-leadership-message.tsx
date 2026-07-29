import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";

interface NewsLetterLeaderProps {
  data: NewsLetterLeaderShipType;
}

const NewsLetterLeaderShip: React.FC<NewsLetterLeaderProps> = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-white container-md" data-debug={"home.opportunity"}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_320px] gap-0 items-center">
          {/* Left Section */}
          <div>
            {/* Message + Line */}
            <div className="flex items-center mb-4">
              <p className="text-lg font-medium whitespace-nowrap mr-6">
                {data.LeadershipMessage}
              </p>

              <div className="flex-1 h-[4px] bg-[#2AA889]" />
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-6xl font-semibold text-primary">
              {data.Title}
            </h2>
          </div>

          {/* Image */}
          <div className="-ml-52">
            <KorcomptenzImage
              src={data.AuthorImage}
              alt={data.Title}
              width={300}
              height={260}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Description Full Width */}
        <DangerousHtml
          html={data.description}
          className="md:text-lg text-md mb-4"
        />
      </div>
    </section>
  );
};

export default NewsLetterLeaderShip;
