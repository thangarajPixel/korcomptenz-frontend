import React from "react";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
interface WebinarHeroSectionProps {
  title: string;
  description: string;
  date: string; // Format: "2025-07-30"
  time: string; // Format: "11:00 AM - 12:00 PM EST | 8:00 AM - 9:00 AM PST | 10:00 AM - 11:00 AM CST"
  registerLink: string;
  backgroundImage: string; // Full background image
  websitePreviewImage: string; // Website preview screenshot for the card
  mobileBackgroundImage?: string;
  mobileBannerImage: string;
}

const WebinarHeroSection = ({
  title,
  description,
  date,
  time,
  registerLink,
  backgroundImage,
  websitePreviewImage,
  mobileBackgroundImage,
  mobileBannerImage
}: WebinarHeroSectionProps) => {
  return (
    <section className="relative w-full">
      {/* Desktop Banner */}
         <div className="hidden md:grid  w-full gap-0 min-h-[500px] lg:min-h-[600px]">
            
              <div className="relative text-white px-8 lg:px-16 py-12 lg:py-16 flex items-center h-full w-full">
              
                <Image
                  src={backgroundImage}
                  alt="Webinar speaker"
                  fill
                  className="object-cover"
                  priority
                />
      
               
                <div className="relative z-10 max-w-xl">
              
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
                    {title}
                  </h1>
      
                 
                 
                  <p className="text-base lg:text-lg mb-6 leading-relaxed">
                    {description}
                  </p>
      
                 
          
                  
                 
                </div>
              </div>
      
          
            </div>

      {/* Mobile Banner */}
      <div className="block md:hidden relative w-full">
        <Image
          src={mobileBannerImage }
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
