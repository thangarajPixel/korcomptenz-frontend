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
    <section className={cn(className)}>
      <div className="flex flex-col  gap-2 p-8">
        <div>
          <h3 className="text-2xl font-normal text-background">{data.title}</h3>
        </div>
        <div>
          <p className="text-sm text-background">{data.description}</p>
        </div>
      </div>
    </section>
  );
};

export default TechCard;