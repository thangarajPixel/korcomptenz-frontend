import { cn } from "@/lib/utils";
import ConsultationForm from "./consultation-form";
import KorcomptenzImage from "@/components/korcomptenz-image";

const BlogBuildDemo = ({ form, essential }: { form: FreeConsultationFormType; essential?: { id: string | number;[key: string]: unknown } }) => {
  return (
    <section data-debug="page-componets.build-data">
      <div className="container-md  ">
        <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-x-10")}>
          <div className=" justify-end">
            <KorcomptenzImage
              src={form?.image}
              width={500}
              height={500}
              className="object-cover rounded-4xl"
            />
          </div>
          <ConsultationForm form={form} essential={essential} />
        </div>
      </div>
    </section>
  );
};

export default BlogBuildDemo;
