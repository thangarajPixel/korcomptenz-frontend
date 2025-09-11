import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

import { imagePlaceholder } from './_utils';

type KorcomptenzImageProps = Omit<ImageProps, "src" | "alt"> & {
  ref?: React.Ref<HTMLImageElement>;
  fallbackSrc?: string;
  nonAnimate?: boolean;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  src?: ImageType | string;
}

const KorcomptenzImage = (props: KorcomptenzImageProps) => {
  const src = typeof props.src === 'string' ? props?.src : props.src?.url || '';
  const alt = typeof props.src === 'string' ? props?.alt : props.src?.alternativeText;
  return (
    <Image
      {...props}
      src={src}
      alt={alt || ''}
      className={cn(props?.nonAnimate && 'object-cover transition-transform duration-300 hover:scale-110', props?.className)}
      placeholder={imagePlaceholder}
    />
  );
};

export default KorcomptenzImage;
