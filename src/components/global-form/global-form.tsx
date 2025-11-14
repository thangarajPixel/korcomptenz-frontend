import BookDemoSection from "../book-demo-section";
import ContactusForm from "@/app/(default)/contact-us/_utils/contact-us-form";

const GlobalForm = ({ form }: { form: GlobalFormType }) => {
  return form?.forms?.map((item, index) => {
    switch (item?.__component) {
      case "form-fields.case-study-form":
        return "";
      case "form-fields.contact-form":
        return "";
      case "form-fields.book-demo-form":
        return <BookDemoSection key={index} essential={item} />;
      case "form-fields.contact-us-form":
        return <ContactusForm key={index} form={item} />;
      default:
        return "";
    }
  });
};

export default GlobalForm;
