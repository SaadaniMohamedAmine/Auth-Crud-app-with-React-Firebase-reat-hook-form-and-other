import * as yup from "yup";

const schema = yup.object({
  title: yup
    .string()
    .required("The title is required")
    .min(4, "The title should be more than 6 letters"),
  content: yup
    .string()
    .required("The content is required")
    .min(6, "The title should be more than 6 letters"),
  tag: yup
    .string()
    .required("The tag is required.")
    .min(3, "The tag should be more than 3 letters")
    .max(10, "The tag should be less than 10 letters"),
  writer: yup
    .string()
    .required("The writer is required.")
    .min(6, "The writer name should be more than 5 caractres")
    .max(25, "The writer name should be less than 20caractres"),
});
export default schema;
