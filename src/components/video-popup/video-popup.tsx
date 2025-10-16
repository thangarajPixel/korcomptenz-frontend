"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"


type VideoPopupProps = {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  title?: string
}
function getYouTubeEmbedUrl(url: string): string {
  const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1]
  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : url
}

function isYouTubeUrl(url: string): boolean {
  return url.includes("youtube.com") || url.includes("youtu.be")
}

export function VideoPopup({ isOpen, onClose, videoSrc, title }: VideoPopupProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const embedUrl = isYouTubeUrl(videoSrc) ? getYouTubeEmbedUrl(videoSrc) : videoSrc
  const isYouTube = isYouTubeUrl(videoSrc)

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play()
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // // Prevent body scroll on mobile
      // if (isMobile) {
      //   document.body.style.overflow = "hidden"
      // }
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  return isOpen && (
    <div className="fixed inset-0 z-50 bg-black/50">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </Button>
      <div className="size-full py-10 px-15  flex items-center justify-center">
        {isYouTube ? (
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            controls
            autoPlay
            playsInline
            poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bZf3fotTJM4HBj85kpzRJ189kUN3io.png"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {title && (
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-4xl font-semibold">{title}</h3>
        </div>
      )}
    </div>
  )
}
