import React from "react";
import RawHtmlEmbed from "./raw-html-embed";

const CustomScriptSection = ({ data }: { data: CustomScriptSectionType }) => {
  return (
    <div>
      <RawHtmlEmbed key={data?.id} html={data.customcode ?? ""} />
    </div>
  );
};

export default CustomScriptSection;
