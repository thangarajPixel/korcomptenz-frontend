import type { ImageProps } from "next/image";
import Image from "next/image";
import React from "react";

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
};

const KorcomptenzImage = (props: KorcomptenzImageProps) => {
  const src = (props?.src as ImageType)?.url
    ? (props?.src as ImageType)?.url
    : props.src || "";
  const alt = (props?.src as ImageType)?.alternativeText
    ? (props?.src as ImageType)?.alternativeText
    : props?.alt || "";
  const isGif = typeof src === "string" && src.toLowerCase().endsWith(".gif");

  const isPriority = props.priority || true;

  return (
    <Image
      {...props}
      src={(src || "/assets/placeholder.png") as string}
      alt={alt || "/assets/placeholder.png"}
      placeholder={isPriority ? "empty" : imagePlaceholder}
      loading={isPriority ? "eager" : undefined}
      fetchPriority={isPriority ? "high" : "auto"}
      unoptimized={isGif}
      priority={isPriority}
      sizes={
        props.sizes ||
        "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      }
      className={cn(
        props?.nonAnimate &&
        "object-cover transition-transform duration-300 hover:scale-110",
        props?.className,
      )}
    />
  );
};

export default KorcomptenzImage;
