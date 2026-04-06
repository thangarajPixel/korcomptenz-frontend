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
};

const KorcomptenzImage = React.memo((props: KorcomptenzImageProps) => {
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

  const imageClassName = useMemo(
    () =>
      cn(
        props?.nonAnimate &&
          "object-cover transition-transform duration-300 hover:scale-110",
        props?.className,
      ),
    [props?.nonAnimate, props?.className],
  );

  return (
    <Image
      placeholder={imagePlaceholder}
      {...props}
      src={(src || "/assets/placeholder.png") as string}
      alt={alt || "/assets/placeholder.png"}
      loading={props.priority ? undefined : "lazy"}
      unoptimized={isGif}
      priority={props.priority || false}
      className={imageClassName}
    />
  );
});

KorcomptenzImage.displayName = "KorcomptenzImage";

export default KorcomptenzImage;
