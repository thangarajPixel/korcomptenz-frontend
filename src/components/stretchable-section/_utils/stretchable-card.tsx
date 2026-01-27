import { cn } from "@/lib/utils";

import { DangerousHtml } from "@/components/ui/dangerous-html";
import ButtonLink from "@/components/ui/button-link";

const StretchableSectionCard = ({
  props,
  data,
}: {
  props: React.HTMLAttributes<HTMLDivElement>;
  image?: ImageType | string;
  data: StretchableSectionType["list"][number];
}) => {
  const { ...rest } = props;
  // const backgroundImage =
  //   "https://aue2kormlworkspacetest01.blob.core.windows.net/korcomptenz/lets_drive_fdc0c33e0c.png";

  return (
    <div
      {...rest}
      className={cn(
        `bg-light-gray rounded-4xl relative overflow-hidden  flex flex-row`,
        props.className,
      )}
      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "280px",
      //   backgroundPosition: "center center",
      // }}
    >
      {/* Overlay to reduce background image opacity */}
      <div className="absolute inset-0 bg-light-gray/80 z-0"></div>

      <div className="pl-8 py-8 lg:pl-10 lg:py-10 flex flex-col gap-3 flex-1 pr-8 relative z-10">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
          {data?.title}
        </h3>

        <div className="flex-1">
          <DangerousHtml
            html={data?.description}
            className="text-gray-700 text-base mb-6 "
          />
        </div>
        {/* {data?.buttonText && (
          <div className="z-10">
            <Link
              href={data?.link || "#"}
              target={data?.isTargetBlank ? "true" : "false"}
            >
              <Button size="xl" arrow={true}>
                {data?.buttonText}
              </Button>
            </Link>
          </div>
        )} */}

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
    </div>
  );
};

export default StretchableSectionCard;
