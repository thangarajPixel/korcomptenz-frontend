import React from "react";
import { cn } from "@/lib/utils"; // Import the cn function

const TechCard = ({
  data,
  className,
}: {
  data: {
    id: number;
    title: string;
    description: string;
  };
  className?: string;
}) => {
  return (
    <section className={cn(className, "p-4 flex flex-col justify-center")}>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl lg:text-6xl font-normal text-background">{data.title}</h3>
        <p className="text-sm lg:text-lg text-background">{data.description}</p>
      </div>
    </section>
  );
};

export default TechCard;