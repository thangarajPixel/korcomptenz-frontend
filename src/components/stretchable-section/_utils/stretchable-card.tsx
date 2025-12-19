import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { DangerousHtml } from "@/components/ui/dangerous-html";

const StretchableSectionCard = ({
  props,
  data,
  image = "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/lets_drive_fdc0c33e0c.png",
}: {
  props: React.HTMLAttributes<HTMLDivElement>;
  image?: ImageType | string;
  data: StretchableSectionType["list"][number];
}) => {
  const { ...rest } = props;
  const backgroundImage =
    typeof image === "string" ? image : (image as ImageType)?.url ?? "";

  return (
    <div
      {...rest}
      className={cn(
        `bg-light-gray rounded-4xl relative overflow-hidden min-h-80 flex flex-row`,
        props.className
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "280px",
        backgroundPosition: "center center",
      }}
    >
      {/* Overlay to reduce background image opacity */}
      <div className="absolute inset-0 bg-light-gray/90 z-0"></div>

      <div className="pl-8 py-8 lg:pl-10 lg:py-10 flex flex-col gap-3 flex-1 pr-8 relative z-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
          {data?.title}
        </h2>
        <div className="flex-1">
          <DangerousHtml
            html={data?.description}
            className="text-gray-700 text-base mb-6 line-clamp-4 [&>p,&>span]:line-clamp-4"
          />
        </div>
        <div className="z-10">
          <Link href={data?.link || "#"}>
            <Button size="xl" arrow={true}>
              {data?.buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StretchableSectionCard;
