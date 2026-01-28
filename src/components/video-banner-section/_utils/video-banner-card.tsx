"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import DownloadForm from "@/components/news-room/_utils/download-form";
import ButtonLink from "@/components/ui/button-link";
import { cn } from "@/lib/utils";
// import DownloadForm from "@/components/news-room/_utils/download-form";

type VideoBannerCardProps = {
  data: VideoBannerItemType;

  className?: string;
};

const VideoBannerCard = ({ data, className }: VideoBannerCardProps) => {
  return (
    <div className={cn("relative w-full ", className)}>
      <div className="relative hidden lg:block w-full h-120">
        {/* ===== Background: Video or Image ===== */}
        {data?.isVideo && data?.videoLink ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={data.videoLink}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <KorcomptenzImage
            src={data?.image}
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent z-5" />

        {/* ===== Content Wrapper ===== */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container-md grid grid-cols-12 gap-10 px-6 md:px-10">
            {/* ---------- LEFT CONTENT ---------- */}
            <div className="col-span-8 flex flex-col justify-center ">
              <h1 className="text-4xl md:text-7xl font-semibold text-white leading-tight max-w-3xl">
                {data?.title}
              </h1>
              <p className="text-3xl md:text-5xl leading-tight font-normal  justify-center text-white mb-4">
                {" "}
                {data?.description}
              </p>
              <ButtonLink
                link={data?.buttonLink || "#"}
                buttonProps={{
                  arrow: true,
                  className: "hover:bg-transparent ",
                  size: "xl",
                }}
              >
                {data?.buttonText}
              </ButtonLink>
            </div>

            {/* ---------- RIGHT FORM ---------- */}

            {data?.form && (
              <div className="col-span-4 flex  justify-end">
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                  <DownloadForm />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ===================== MOBILE VIEW ===================== */}
      <div className="lg:hidden w-full">
        {/* Mobile Background */}
        {data?.isVideo && data?.videoLink ? (
          <video
            className="w-full h-65 object-cover"
            src={data?.videoLink}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <KorcomptenzImage
            src={data?.imageMobile || data?.image}
            width={1000}
            height={600}
            className="w-full h-65 object-cover"
          />
        )}

        {/* Mobile Content */}
        <div className="container-md flex flex-col gap-6 p-6">
          <h1 className="text-3xl font-bold text-foreground">{data?.title}</h1>
        </div>
        {data?.form && (
          <div className="p-5 rounded-2xl shadow-2xl">
            <DownloadForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoBannerCard;
