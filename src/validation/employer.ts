import * as yup from "yup";

export const employerSchema = yup.object().shape({
  companyName: yup.string().required("Company Name is required"),
  contactEmail: yup
    .string()
    .email("Invalid email")
    .required("Contact Email is required"),
  contactPhone: yup
    .string()
    .matches(/^\d+$/, "Invalid phone number")
    .required("Contact Phone is required"),
  contactPerson: yup.string().required("Contact Person is required"),
  websiteLink: yup.string().url("Invalid URL"),
  totalEmployees: yup.string().required("Total Employees is required"),
  location: yup.string().required("Location is required"),
  address: yup.string().required("Address is required"),
  companyDescription: yup.string().required("Company Description is required"),
});

export const imageSchema = yup.object().shape({
  image: yup.mixed().required("Image is required"),
});
