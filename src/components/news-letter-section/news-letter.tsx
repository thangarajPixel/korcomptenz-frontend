"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import { Button } from "@/components/ui/button";
import React from "react";

import CareerForm from "./career-form";

const ContactUsNewsletter = ({
  newsletterData,
}: {
  newsletterData: NewsletterData;
}) => {
  return (
    <section id={newsletterData.isForm ? "career-form" : "contact-us.news-letter"} data-debug={"contact-us.news-letter"} className="container-md ">
      <div className="">
        {/* Mobile Layout: Content Top (70%), Image Bottom (30%) */}
        <div className="flex flex-col md:flex-row md:gap-0 md:rounded-3xl md:overflow-hidden ">
          {/* Content Section - 70% on mobile, 50% on desktop */}
          <div className="flex flex-col justify-center px-6 py-8 md:w-[60%] md:px-20 md:py-12 bg-secondary   ">
            <h4 className="text-5xl  font-semibold text-white mb-4 md:mb-6">
              {newsletterData.title}
            </h4>

            <p className="text-base text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
              {newsletterData.description}
            </p>
            {newsletterData.buttonText && (
              <div className="flex items-center">
                <Button
                  arrow
                  variant="ghost"
                  size="xl"
                  className="bg-white text-primary hover:text-primary"
                >
                  {newsletterData.buttonText}
                </Button>
              </div>
            )}
            {newsletterData?.isForm && <CareerForm />}
          </div>

          {/* Image Section - 30% on mobile, 50% on desktop */}
          <div className="relative w-full h-40 md:w-[40%] md:h-auto md:min-h-80">
            <KorcomptenzImage
              src={newsletterData.image}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsNewsletter;
