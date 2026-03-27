import type { ImageProps } from "next/image";
import Image from "next/image";
import React, { useMemo } from "react";

import { cn } from "@/lib/utils";

import { imagePlaceholder } from "./_utils";

type KorcomptenzImageProps = Omit<ImageProps, "src" | "alt"> & {
  ref?: React.Ref<HTMLImageElement>;
  fallbackSrc?: string;
  nonAnimate?: boolean;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  src?: ImageType | string;
  priority?: boolean;
  imageType?: "hero" | "card" | "thumbnail" | "gallery" | "default";
};

// Optimized sizes for different image types
const SIZES_MAP: Record<string, string> = {
  hero: "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw",
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  thumbnail: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
  gallery: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw",
  default: "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw",
};

const KorcomptenzImage = React.forwardRef<
  HTMLImageElement,
  KorcomptenzImageProps
>((props, ref) => {
  const src = useMemo(() => {
    return (props?.src as ImageType)?.url
      ? (props?.src as ImageType)?.url
      : props.src || "";
  }, [props?.src]);

  const alt = useMemo(() => {
    return (props?.src as ImageType)?.alternativeText
      ? (props?.src as ImageType)?.alternativeText
      : props?.alt || "";
  }, [props?.src, props?.alt]);

  const isGif = useMemo(
    () => typeof src === "string" && src.toLowerCase().endsWith(".gif"),
    [src],
  );

  // Use priority from props, default to false for lazy loading
  const priority = props?.priority ?? false;
  // Use loading from props, default to lazy unless priority is true
  const loading = priority ? undefined : ("lazy" as const);

  // Get optimized sizes based on image type
  const imageType = props?.imageType ?? "default";
  const sizes = SIZES_MAP[imageType] || SIZES_MAP.default;

  return (
    <Image
      ref={ref}
      placeholder={imagePlaceholder}
      {...props}
      src={(src || "/assets/placeholder.png") as string}
      alt={alt || "/assets/placeholder.png"}
      loading={loading}
      unoptimized={isGif}
      priority={priority}
      className={cn(
        "object-cover",
        props?.nonAnimate &&
          "transition-transform duration-300 hover:scale-110",
        props?.className,
      )}
      sizes={sizes}
    />
  );
});

KorcomptenzImage.displayName = "KorcomptenzImage";

export default KorcomptenzImage;
