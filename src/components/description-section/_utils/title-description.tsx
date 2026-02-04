import { DangerousHtml } from "@/components/ui/dangerous-html";
import React from "react";

const TitleDescription = ({ data }: { data: DescriptionOnlyType }) => {
  return (
    <section className="container-md">
      <div>
        <DangerousHtml
          html={data?.title}
          className="text-4xl lg:text-6xl font-bold text-foreground mb-5 text-balance"
        />
        <DangerousHtml html={data?.description} />
      </div>
    </section>
  );
};

export default TitleDescription;
