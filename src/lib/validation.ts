import * as Yup from "yup";

const formValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required").min(50, "Message must be at least 50 characters long"),
});

export default formValidationSchema;