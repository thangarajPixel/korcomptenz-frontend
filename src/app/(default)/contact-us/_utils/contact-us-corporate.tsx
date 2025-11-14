import KorcomptenzImage from "@/components/korcomptenz-image";
import React from "react";

const ContactUsCorporate = ({
  corporateData,
}: {
  corporateData: OfficeCardProps;
}) => {
  return (
    <div className="container-md ">
      <div className="rounded-2xl bg-light-gray py-12 px-4">
        <h2 className="text-2xl font-semibold text-foreground mb-8">
          {corporateData?.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-3xl">
          {corporateData?.list.map((corporate, index) => (
            <div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              key={index}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="text-4xl">
                  <KorcomptenzImage
                    src={corporate?.image}
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <h3 className="text-center text-4xl font-semibold text-gray-900 mb-3">
                {corporate?.country}
              </h3>
              <p className="text-center text-lg text-gray-600 mb-4 leading-relaxed">
                {corporate?.address}
              </p>
              <div className="space-y-1 text-lg text-primary">
                <p className="text-center">
                  <span className=" font-medium">Phone:</span>{" "}
                  <span className="">{corporate?.phone}</span>
                </p>
                <p className="text-center">
                  <span className="">Fax:</span>{" "}
                  <span className="">{corporate?.fax}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUsCorporate;
