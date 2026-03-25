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

  // Use priority from props, default to false for lazy loading
  const priority = props?.priority ?? false;
  // Use loading from props, default to lazy unless priority is true
  const loading = priority ? undefined : ("lazy" as const);

  return (
    <Image
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
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
    />
  );
};

export default KorcomptenzImage;
