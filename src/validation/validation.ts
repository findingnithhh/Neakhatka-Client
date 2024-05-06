import * as Yup from "yup";

const UserValidateSchema = Yup.object().shape({
    email: Yup.string()
    .email("Invalid email address")
    .required("Please enter an email"),
    password: Yup.string()
      .min(8, "Username should be at least 3 characters long")
      .max(25, "Username should not exceed 25 characters")
      .required("Please enter a password."),
});

export { UserValidateSchema };
