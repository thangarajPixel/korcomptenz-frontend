import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TechCard = ({
  data,
  className,
}: {
  data: {
    id: number;
    title: string;
    description: string;
    link: string;
    buttonText: string;
    isTargetBlank: boolean;
  };
  className?: string;
}) => {
  return (
    <section className={cn(className, "p-4 flex flex-col ")}>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl lg:text-5xl font-normal text-background">
          {data?.title}
        </h3>
        <p className="text-sm lg:text-lg text-background">
          {data?.description}
        </p>

        {data?.buttonText && (
          <Link
            href={data?.link || "#"}
            target={data?.isTargetBlank ? "_blank" : "_self"}
          >
            <Button
              arrow
              className="bg-secondary hover:bg-secondary/80 hover:text-white hover:border-secondary text-white flex justify-start items-center -ms-4"
            >
              {data?.buttonText}
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default TechCard;
