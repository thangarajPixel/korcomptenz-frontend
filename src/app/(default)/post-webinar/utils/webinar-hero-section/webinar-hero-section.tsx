import React from "react";
import Image from "next/image";

interface WebinarHeroSectionProps {
  bannerImage: string;
  mobileBannerImage?: string;
}

const WebinarHeroSection = ({
  bannerImage,
  mobileBannerImage,
}: WebinarHeroSectionProps) => {
  return (
    <section className="relative w-full">
      {/* Desktop Banner */}
      <div className="hidden md:block relative w-full h-[500px] lg:h-[600px]">
        <Image
          src={bannerImage}
          alt="Webinar banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden relative w-full">
        <Image
          src={mobileBannerImage || bannerImage}
          alt="Webinar banner mobile"
          width={600}
          height={1000}
          className="object-contain w-full h-auto"
          priority
        />
      </div>
    </section>
  );
};

export default WebinarHeroSection;
