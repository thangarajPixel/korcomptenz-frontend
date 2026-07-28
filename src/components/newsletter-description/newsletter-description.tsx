import React from "react";
//import KorcomptenzImage from "../korcomptenz-image";

interface NewsLetterDescriptionProps {
  data: NewsLetterDescriptionType;
}

const NewsLetterDescription: React.FC<NewsLetterDescriptionProps> = ({
  data,
}) => {
  if (!data) return null;

  return (
    <section
      className="container-md py-20"
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

export default NewsLetterDescription;
