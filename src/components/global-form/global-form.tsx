import BlogBuildDemo from "@/app/(default)/blog/_utils/blog-consultation/_utils/blog-consulation";
import BookDemoSection from "../book-demo-section";
import ContactusForm from "@/app/(default)/contact-us/_utils/contact-us-form";
import DemoRequestForm from "@/app/(default)/live-demo/_utils/demo-request-form";

const GlobalForm = ({
  form,
  item,
  essential,
}: {
  form: GlobalFormType;
  item?: GlobalFormItemType;
  essential?: {
    id: string | number;
    [key: string]: unknown;
  };
}) => {
  return form?.forms?.map((form) => {
    switch (form?.__component) {
      case "form-fields.book-demo-form":
        return <BookDemoSection key={`book-demo-form-${form.id}`} essential={form} item={item} />;
      case "form-fields.contact-us-form":
        return <ContactusForm key={`contact-us-form-${form.id}`} form={form} />;
      case "form-fields.reserve-spot-fields":
        return <DemoRequestForm key={`reserve-spot-form-${form.id}`} form={form} item={item} />;
      case "form-fields.free-consultation-form":
        return <BlogBuildDemo key={`free-consultation-form-${form.id}`} essential={essential} form={form} />;
      default:
        return "";
    }
  });
};

export default GlobalForm;
