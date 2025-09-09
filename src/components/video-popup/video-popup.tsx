"use client"

import { useEffect, useRef } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useMobile } from "@/utils/custom-hooks"


interface VideoPopupProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  title?: string
}

export function VideoPopup({ isOpen, onClose, videoSrc, title }: VideoPopupProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useMobile()

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
      // Prevent body scroll on mobile
      if (isMobile) {
        document.body.style.overflow = "hidden"
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose, isMobile])

  if (isMobile) {
    // Full-screen popup for mobile
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={onClose}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Video container */}
            <div className="w-full h-full flex items-center justify-center">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                controls
                playsInline
                poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bZf3fotTJM4HBj85kpzRJ189kUN3io.png"
              >
                <source src={videoSrc} type="video/mp4" />
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Title overlay */}
            {title && (
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
            )}
          </div>
        )}
      </>
    )
  }

  // Modal popup for desktop
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full p-0 overflow-hidden border-none">
        <div className="relative">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-10 bg-black/50 text-white hover:bg-black/70"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>

          {/* Video */}
          <video
            ref={videoRef}
            className="w-full aspect-video"
            controls
            autoPlay
            poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bZf3fotTJM4HBj85kpzRJ189kUN3io.png"
          >
            <source src={videoSrc} type="video/mp4" />
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Title */}
          {title && (
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
