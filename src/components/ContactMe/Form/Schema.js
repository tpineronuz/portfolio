import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string("Please, enter your Name")
    .min(5, "Name must have of minimum 5 characters length")
    .max(50, "Name must have of maximum 50 characters length")
    .required("This field is required"),
  subject: yup
    .string("Please, enter a Subject")
    .min(5, "Subject must have of minimum 5 characters length")
    .max(50, "Subject must have of maximum 50 characters length")
    .required("This field is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("This field is required")
    .max(50, "Email must have of maximum 50 characters length"),
  message: yup
    .string("Enter a message")
    .min(20, "Message must have of minimum 20 characters length")
    .required("This field is required")
    .max(200, "Message must have of maximum 200 characters length"),
});

export default validationSchema;
