import BookDemoSection from "../book-demo-section";
import ContactusForm from "@/app/(default)/contact-us/_utils/contact-us-form";
import DemoRequestForm from "@/app/(default)/live-demo/_utils/demo-request-form";

const GlobalForm = ({
  form,
  item,
}: {
  form: GlobalFormType;
  item?: GlobalFormItemType;
}) => {
  return form?.forms?.map((form, index) => {
    switch (form?.__component) {
      case "form-fields.book-demo-form":
        return <BookDemoSection key={index} essential={form} item={item} />;
      case "form-fields.contact-us-form":
        return <ContactusForm key={index} form={form} />;
      case "form-fields.reserve-spot-fields":
        return <DemoRequestForm key={index} form={form} item={item} />;
      default:
        return "";
    }
  });
};

export default GlobalForm;
