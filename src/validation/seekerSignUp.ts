// validation.ts
import * as Yup from "yup";

export const SeekerSignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username name must be at least 2 characters")
    .required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});
