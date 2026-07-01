"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import DownloadForm from "@/components/news-room/_utils/download-form";
import ButtonLink from "@/components/ui/button-link";
import { cn } from "@/lib/utils";
import { RecaptchaProvider } from "@/components/providers/recaptcha-provider";

import { useEffect, useState } from "react";
import { IsgBannerPopup } from "./isg-popup";
// import DownloadForm from "@/components/news-room/_utils/download-form";

type VideoBannerCardProps = {
  data: VideoBannerItemType;

  className?: string;
};

const VideoBannerCard = ({ data, className }: VideoBannerCardProps) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true); // Default to desktop for SSR

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  useEffect(() => {
    // Only run on client
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);
  return (
    <div className={cn("relative w-full ", className)}>
      {isDesktop ? (
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
              priority
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
                {data?.isForm ? (
                  <div className="flex items-start">
                    <button onClick={() => setIsPopupOpen(true)}>
                      <ButtonLink
                        link="#"
                        buttonProps={{
                          arrow: true,
                          className: "mt-6",
                          size: "xl",
                        }}
                      >
                        {data?.formButtonText || "Get in Touch"}
                      </ButtonLink>
                    </button>
                  </div>
                ) : (
                  <ButtonLink
                    link={data?.buttonLink || "#"}
                    isTargetNew={data?.isTarget ? true : false}
                    buttonProps={{
                      arrow: true,
                      className: "hover:bg-transparent ",
                      size: "xl",
                    }}
                  >
                    {data?.buttonText}
                  </ButtonLink>
                )}
              </div>

              {/* ---------- RIGHT FORM ---------- */}

              {data?.form && (
                <div className="col-span-4 flex  justify-end">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                    <RecaptchaProvider>
                      <DownloadForm />
                    </RecaptchaProvider>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="lg:hidden w-full">
          {/* ===================== MOBILE VIEW ===================== */}

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
              priority
            />
          )}

          {/* Mobile Content */}
          <div className="container-md flex flex-col gap-6 pt-2 px-4 md:px-0 md:p-6">
            <h1 className="font-bold text-foreground">{data?.title}</h1>
          </div>
          {data?.form && (
            <div className="p-5 rounded-2xl shadow-2xl">
              <RecaptchaProvider>
                <DownloadForm />
              </RecaptchaProvider>
            </div>
          )}
        </div>
      )}
      <>
        <RecaptchaProvider>
          <IsgBannerPopup
            data={data?.sapForm?.forms?.[0]}
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            formTitle={data?.formTitle}
            formDescription={data?.formDescription}
            formImage={data?.formImage}
          />
        </RecaptchaProvider>
      </>
    </div>
  );
};

export default VideoBannerCard;
