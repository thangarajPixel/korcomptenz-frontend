//import Link from "next/link";
//import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import ButtonLink from "@/components/ui/button-link";

type CTABannerProps = {
  data: CTABannerType;
};

export default function CTABanner({ data }: CTABannerProps) {
  return (
    <div
      className="overflow-hidden"
      style={
        data?.isBgImage && data?.backroundImage?.url
          ? {
              backgroundImage: `url(${data.backroundImage.url})`,
              backgroundSize: "object-cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {
              background: data?.bgColor || "#5548E5",
            }
      }
    >
      <div className="grid lg:grid-cols-[1.8fr_1fr] items-center">
        {/* Content */}
        <div className="px-8 py-12 lg:px-16">
          {data?.Title && (
            <h2
              className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-6"
              style={{
                color: data?.TitleColor || "#ffffff",
              }}
            >
              {data.Title}
            </h2>
          )}

          {data?.description && (
            <div
              className="max-w-2xl text-base lg:text-xl mb-8"
              style={{
                color: data?.DescriptionColor || "#ffffff",
              }}
            >
              <DangerousHtml
                className="text-3xl md:text-5xl leading-tight font-normal text-white my-4  max-w-2xl"
                html={data?.description}
              />
            </div>
          )}

          {data?.buttonText && (
            <ButtonLink
              link={data?.buttonLink || "#"}
              buttonProps={{
                arrow: true,
                size: "xl",
                className: "hover:bg-transparent",
                style: {
                  background: data?.buttonBgColor || "#ffffff",
                  color: data?.ButtonTextColor || "#00A88E",
                },
              }}
            >
              {data?.buttonText}
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  );
}
