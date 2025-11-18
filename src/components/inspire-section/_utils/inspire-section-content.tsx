import { Button } from "@/components/ui/button";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";
import Link from "next/link";

type InspireCardType = InspireSectionType["list"][number];
export const InspireSectionContent = ({
  card,
  className,
  topClassName,
}: {
  card: InspireCardType;
  className?: string;
  topClassName?: string;
}) => {
  return (
    <div className={cn("p-6", topClassName)}>
      <p className={cn("text-3xl md:text-4xl font-semibold mb-4", className)}>
        {card.title}
      </p>
      <DangerousHtml
        html={card.description}
        className="md:text-lg text-md mb-4"
      />
      {/* <p className="md:text-lg text-md mb-4">{card.description}</p> */}
      {card?.buttonText && (
        <Link href={card?.link || "#"}>
          <Button size={"xl"} arrow>
            {card?.buttonText}
          </Button>
        </Link>
      )}
    </div>
  );
};
