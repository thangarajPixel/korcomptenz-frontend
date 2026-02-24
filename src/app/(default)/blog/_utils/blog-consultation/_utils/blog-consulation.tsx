"use client";
import { cn } from "@/lib/utils";
import ConsultationForm from "./consultation-form";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const BlogBuildDemo = ({
  form,
  essential,
}: {
  form: FreeConsultationFormType;
  essential?: { id: string | number; [key: string]: unknown };
}) => {
  return (
    <section data-debug="page-componets.build-data">
      <div className="container-md  ">
        <h3 className="text-6xl md:text-9xl font-semibold text-muted mb-10 ">
          {" "}
          {form?.title}
        </h3>
        <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-x-10")}>
          <div className="w-full h-full">
            <KorcomptenzImage
              src={form?.image}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-4xl"
            />
          </div>
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? ""}
          >
            <ConsultationForm form={form} essential={essential} />
          </GoogleReCaptchaProvider>
        </div>
      </div>
    </section>
  );
};

export default BlogBuildDemo;
