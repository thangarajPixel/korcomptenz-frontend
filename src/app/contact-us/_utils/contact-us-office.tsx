import KorcomptenzImage from "@/components/korcomptenz-image";

import React from "react";
interface Office {
  title: string;
  country: string;
  company: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
  image: ImageType;
}

const ContactUsOffice = ({ officesData }: { officesData: Office[] }) => {
  return (
    <div>
      {" "}
      <section className="container-md py-12 px-4 md:py-16 lg:py-20 bg-custom-gray-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <p className="text-[50px] font-bold text-foreground mb-2">
              Our Offices
            </p>
          </div>

          {/* Main Content - 50/50 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Image Section - Top on Mobile, Left on Desktop */}
            <div className="flex items-center justify-center order-1 md:order-2">
              <div className="w-full overflow-auto ">
                <div className="relative w-full aspect-square md:aspect-auto md:h-96">
                  <KorcomptenzImage
                    src="https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_image_45_c6b1ff8c3c.png?updatedAt=2025-10-29T07%3A20%3A10.363Z"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content Section - Bottom on Mobile, Right on Desktop */}
            <div className="space-y-2 order-2 md:order-1">
              {officesData?.map((office, index) => (
                <div key={index} className="space-y-4">
                  {/* Office Title */}
                  <div>
                    <h2 className="text-5xl font-normal text-foreground mb-1">
                      {office?.title}
                    </h2>
                    <p className="text-lg font-medium text-foreground">
                      {office?.country}
                    </p>
                  </div>

                  {/* Office Details Card */}
                  <div className="  ">
                    <div className="space-y-3">
                      {/* Company Name */}
                      <div>
                        <p className="font-semibold text-foreground">
                          {office?.company}
                        </p>
                      </div>

                      {/* Address */}
                      <div>
                        <p className="text-lg text-muted-foreground word-break">
                          {office?.address}
                        </p>
                      </div>

                      {/* Contact Information */}
                      <div className="pt-2 space-y-2 text-primary hover:underline">
                        <div className="flex items-start gap-2">
                          <span className="text-sm font-medium text-primary hover:underline min-w-fit">
                            Phone:
                          </span>

                          {office?.phone}
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-sm font-medium  min-w-fit">
                            Fax:
                          </span>
                          <span className="text-sm ">{office?.fax}</span>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="pt-2 text-primary">
                        <p className="text-sm text-muted-foreground mb-1">
                          Please send your enquiries to:
                        </p>

                        {office.email}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsOffice;
