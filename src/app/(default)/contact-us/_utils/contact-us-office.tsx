import KorcomptenzImage from "@/components/korcomptenz-image";
import React from "react";

const ContactUsOffice = ({ officesData }: { officesData: OfficesDataType }) => {
  return (
    <section data-debug={'contact-us.our-office'} className="container-md ">
      <div className="rounded-2xl  py-10 px-5  bg-custom-gray-6">
        {/* Header */}
        <div className="mb-5">
          <p className="text-[50px] font-bold text-foreground mb-2">
            {officesData?.title}
          </p>
        </div>

        {/* Main Content - 50/50 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image Section - Top on Mobile, Left on Desktop */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <div className="w-full overflow-auto ">
              <div className="relative w-full aspect-square md:aspect-auto md:h-96">
                <KorcomptenzImage
                  src={officesData?.image}
                  fill
                  className="object-obtain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Section - Bottom on Mobile, Right on Desktop */}
          <div className="space-y-2 order-2 md:order-1">
            <div className="space-y-4">
              {/* Office Title */}
              <div>
                <h2 className="text-5xl font-normal text-foreground mb-5">
                  {officesData?.subtitle}
                </h2>
                <p className="text-3xl font-medium text-foreground">
                  {officesData?.country}
                </p>
              </div>

              {/* Office Details Card */}
              <div className="  ">
                <div className="space-y-3">
                  {/* Company Name */}
                  <div>
                    <p className="font-semibold text-foreground">
                      {officesData?.company}
                    </p>
                  </div>

                  {/* Address */}
                  <div>
                    <p className="text-lg text-muted-foreground whitespace-pre-wrap">
                      {officesData?.address}
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="pt-2 space-y-2 text-primary hover:underline">
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-medium text-primary hover:underline min-w-fit">
                        Phone:
                      </span>

                      {officesData?.phone}
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-medium  min-w-fit">
                        Fax:
                      </span>
                      <span className="text-sm ">{officesData?.fax}</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="pt-2 text-primary">
                    <p className="text-sm text-muted-foreground mb-1">
                      Please send your enquiries to:
                    </p>

                    {officesData?.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsOffice;
