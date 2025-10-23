import BookDemoSection from "../book-demo-section";


const GlobalForm = ({ form }: { form: GlobalFormType; }) => {
  return form?.forms?.map((item) => {
    switch (item?.__component) {
      case "form-fields.case-study-form":
        return "";
      case "form-fields.contact-form":
        return "";
      case "form-fields.book-demo-form":
        return <BookDemoSection essential={item} />;
      default:
        return "";
    }
  })
}

export default GlobalForm