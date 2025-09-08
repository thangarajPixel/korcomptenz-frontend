import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

import { imagePlaceholder } from './_utils';

type KorcomptenzImageProps = {
  ref?: React.Ref<HTMLImageElement>;
  fallbackSrc?: string;
  nonAnimate?: boolean;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
} & ImageProps;

const KorcomptenzImage = (props: KorcomptenzImageProps) => {
  return (
    <Image
      {...props}
      src={props.src ?? props?.fallbackSrc ?? ''}
      className={cn(props?.nonAnimate && 'object-cover transition-transform duration-300 hover:scale-110', props?.className)}
      placeholder={imagePlaceholder}
    />
  );
};

export default KorcomptenzImage;
