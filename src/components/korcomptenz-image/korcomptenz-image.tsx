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

  const loading = props?.priority ? "eager" : props?.loading || "lazy";
  const fetchPriority = props?.priority ? "high" : "auto";

  return (
    <Image
      placeholder={imagePlaceholder}
      {...props}
      src={(src || "/assets/placeholder.png") as string}
      alt={alt || "/assets/placeholder.png"}
      loading={loading}
      fetchPriority={fetchPriority}
      priority={props?.priority || false}
      quality={props?.quality || 75}
      sizes={
        props?.sizes ||
        "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
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
