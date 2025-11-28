import { cn } from "@/lib/utils";
import React from "react";
import ConsultationForm from "./consultation-form";
import KorcomptenzImage from "@/components/korcomptenz-image";

const BuildDemo = () => {
  return (
    <section data-debug="page-componets.build-data">
      <div className="container-md  ">
        <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-x-10")}>
          <div className=" justify-end">
            <KorcomptenzImage
              src="/assets/Rectangle 138.png"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
};

export default BuildDemo;
