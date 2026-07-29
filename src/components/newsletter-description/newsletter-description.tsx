import React from "react";
//import KorcomptenzImage from "../korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";

interface NewsLetterDescriptionProps {
  data: NewsLetterDescriptionType;
}

const NewsLetterDescription: React.FC<NewsLetterDescriptionProps> = ({
  data,
}) => {
  if (!data) return null;

  return (
    <div
      className="container-md"
      style={{
        background: data?.bgColor || "#ffffff",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {data.subtext && (
          <p className="text-lg font-medium mb-6">{data.subtext} </p>
        )}
        {data.Title && (
          <h2 className="text-left text-foreground text-5xl font-semibold">
            {data.Title}
          </h2>
        )}
        <DangerousHtml
          html={data.description}
          className="md:text-lg text-md mb-4"
        />
      </div>
    </div>
  );
};

export default NewsLetterDescription;
