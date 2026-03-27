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
};

const KorcomptenzImage = (props: KorcomptenzImageProps) => {
  const src = useMemo(() => {
    const imageSrc = (props?.src as ImageType)?.url
      ? (props?.src as ImageType)?.url
      : props.src || "";
    return (imageSrc || "/assets/placeholder.png") as string;
  }, [props?.src]);

  const alt = useMemo(() => {
    return (props?.src as ImageType)?.alternativeText
      ? (props?.src as ImageType)?.alternativeText
      : props?.alt || "";
  }, [props?.src, props?.alt]);

  const isGif = useMemo(() => {
    return typeof src === "string" && src.toLowerCase().endsWith(".gif");
  }, [src]);

  const priority = useMemo(() => {
    return props.priority || false;
  }, [props.priority]);

  const quality = useMemo(() => {
    return props.quality || 65;
  }, [props.quality]);

  return (
    <Image
      placeholder={imagePlaceholder}
      {...props}
      src={src}
      alt={alt || "/assets/placeholder.png"}
      loading={priority ? "eager" : "lazy"}
      unoptimized={isGif}
      priority={priority}
      quality={quality}
      className={cn(
        props?.nonAnimate &&
          "object-cover transition-transform duration-300 hover:scale-110",
        props?.className,
      )}
    />
  );
};

export default KorcomptenzImage;
