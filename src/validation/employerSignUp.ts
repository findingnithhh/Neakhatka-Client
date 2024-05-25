// validation.ts
import * as Yup from "yup";

export const EmployerSignupSchema = Yup.object().shape({
  companyname: Yup.string()
    .min(2, "Company name must be at least 2 characters")
    .required("Company name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});
