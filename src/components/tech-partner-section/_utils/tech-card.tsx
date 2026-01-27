import { cn } from "@/lib/utils";

import ButtonLink from "@/components/ui/button-link";

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
          <ButtonLink
            link={data?.link || "#"}
            isTargetNew={data?.isTargetBlank ? true : false}
            buttonProps={{
              variant: "ghost",
              className:
                "text-primary hover:text-primary hover:bg-transparent p-0 text-md",
              arrow: true,
            }}
          >
            {data?.buttonText}
          </ButtonLink>
        )}
      </div>
    </section>
  );
};

export default TechCard;
