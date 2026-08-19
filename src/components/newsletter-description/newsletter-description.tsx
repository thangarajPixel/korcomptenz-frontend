import React from "react";
//import KorcomptenzImage from "../korcomptenz-image";
import RawHtmlEmbed from "@/components/ui/raw-html-embed";
interface NewsLetterDescriptionProps {
  data: NewsLetterDescriptionType;
}

const NewsLetterDescription: React.FC<NewsLetterDescriptionProps> = ({
  data,
}) => {
  if (!data) return null;

  return (
    <div
      className=""
      style={{
        background: data?.bgColor || "#ffffff",
      }}
    >
      <div
        className={`${
          data?.bgColor && data.bgColor.toLowerCase() !== "#ffffff"
            ? "p-10"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {data.subtext && (
            <p className="text-lg font-medium mb-2 text-primary">
              {data.subtext}{" "}
            </p>
          )}
          {data.Title && (
            <h2 className="text-7xl font-bold text-foreground leading-tight mb-6">
              {data.Title}
            </h2>
          )}
          <div className="space-y-4">
            <RawHtmlEmbed key={data?.id} html={data.description ?? ""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterDescription;
