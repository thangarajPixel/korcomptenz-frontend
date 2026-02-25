"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type VideoPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title?: string;
};

function isYouTubeUrl(url: string): boolean {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

function getYouTubeEmbedUrl(url: string): string {
  const videoId = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
  )?.[1];
  return videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    : url;
}

function isVimeoUrl(url: string): boolean {
  return url.includes("vimeo.com");
}

function getVimeoEmbedUrl(url: string): string {
  const matchWithHash = url.match(/vimeo\.com\/(\d+)\/([a-zA-Z0-9]+)/);
  if (matchWithHash) {
    const [, videoId, hash] = matchWithHash;
    return `https://player.vimeo.com/video/${videoId}?h=${hash}&autoplay=1`;
  }

  const matchSimple = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (matchSimple) {
    const videoId = matchSimple[1];
    return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
  }

  return url;
}

export function VideoPopup({
  isOpen,
  onClose,
  videoSrc,
  title,
}: VideoPopupProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const isYouTube = isYouTubeUrl(videoSrc);
  const isVimeo = isVimeoUrl(videoSrc);

  const embedUrl = isYouTube
    ? getYouTubeEmbedUrl(videoSrc)
    : isVimeo
      ? getVimeoEmbedUrl(videoSrc)
      : videoSrc;

  useEffect(() => {
    if (!videoRef.current) return;

    if (isOpen) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </Button>

      <div className="w-full h-full max-w-6xl max-h-[90vh] py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {isYouTube || isVimeo ? (
          <iframe
            src={embedUrl}
            className="w-full h-full rounded-lg"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full object-contain rounded-lg"
            controls
            autoPlay
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {title && (
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-2xl sm:text-4xl font-semibold">{title}</h3>
        </div>
      )}
    </div>
  );
}
