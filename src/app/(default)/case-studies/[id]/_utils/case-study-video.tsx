"use client";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { VideoPopup } from "@/components/video-popup";
import React from "react";

const CaseStudyVideo = ({
  data,
}: {
  data: { link: string; thumbnail: ImageType };
}) => {
  const [isVideoOpen, setIsVideoOpen] = React.useState<{
    open: boolean;
    link: string | null;
  }>({
    open: false,
    link: null,
  });

  return (
    <section
      className="container-md py-10
    "
    >
      <div className="max-w-5xl mx-auto">
        {data?.thumbnail && (
          <KorcomptenzImage
            src={data?.thumbnail}
            width={1000}
            height={500}
            className="object-cover cursor-pointer rounded-3xl"
            onClick={() => setIsVideoOpen({ link: data.link, open: true })}
          />
        )}

        <VideoPopup
          isOpen={isVideoOpen.open}
          onClose={() => {
            setIsVideoOpen({ link: null, open: false });
          }}
          videoSrc={data.link || ""}
        />
      </div>
    </section>
  );
};

export default CaseStudyVideo;
