import KorcomptenzImage from '@/components/korcomptenz-image'
import { cn } from '@/lib/utils';
import React from 'react'

const BannerCard = ({ data, className }: {
  data: {
    id: number;
    imageMobile: string;
    image: string;
    alt: string;
    logo: string;
    logoMobile: string;
    altMobile: string;
    title: string;
    description: string;
  }; className?: string
}) => {
  return (
    <div className={cn(className)}>
      {/* Desktop view */}
      <div className="relative w-full md:h-[513px] h-full overflow-hidden rounded-4xl hidden lg:block">
        <KorcomptenzImage
          src={data.image}
          alt={data.alt}
          width={1000}
          height={800}
          className="w-full h-full object-cover rounded-4xl"
        />
        <div className="absolute top-30 left-10 p-4 md:p-8 z-10 w-full h-full flex flex-col gap-6 justify-center items-start">
          <KorcomptenzImage
            src={data.logo}
            alt={data.alt}
            width={300}
            height={200}
            className="w-20 md:w-[300px] h-auto object-contain mb-2 md:mb-4"
          />
          <p className="text-lg md:text-base text-white mb-4 md:mb-8 max-w-md">
            {data.description}
          </p>
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-full h-auto aspect-square overflow-hidden rounded-4xl lg:hidden items-center justify-center">
        <KorcomptenzImage
          src={data.imageMobile}
          alt={data.altMobile}
          width={1000}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="gap-6 justify-center items-start p-4 md:p-8 w-full lg:hidden  h-full">
        <KorcomptenzImage
          src={data.logoMobile}
          alt={data.altMobile}
          width={300}
          height={200}
          className="w-[300px] h-auto object-contain mb-2 md:mb-4 opacity-65"
        />
        <p className="text-lg font-medium text-foreground mb-4 md:mb-8 max-w-md">
          {data.description}
        </p>
      </div>
    </div>
  )
}

export default BannerCard