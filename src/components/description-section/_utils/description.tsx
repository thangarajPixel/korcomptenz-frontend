import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";
import React from "react";

const DescriptionOnly = ({
  data,
  isbgColor = false,
}: {
  data: DescriptionOnlyType;
  isbgColor?: boolean;
}) => {
  return (
    <section className="container-md">
      <DangerousHtml
        html={data?.description}
        className={cn(
          "text-pretty text-foreground text-xl md:text-3xl leading-relaxed",
          isbgColor && "bg-[#C9F5FF] p-6 rounded-lg"
        )}
      />
    </section>
  );
};

export default DescriptionOnly;
