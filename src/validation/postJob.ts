import * as Yup from 'yup';

export const PostJobSchema = Yup.object().shape({
  companyName: Yup.string().required("Company name is required"),
  position: Yup.string().required("Position is required"),
  workplace: Yup.string().required("Workplace is required"),
  location: Yup.string().required("Location is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date().required("End date is required")
    .min(Yup.ref('startDate'), "End date can't be before start date"),
  jobDescription: Yup.string().required("Job description is required"),
  jobResponsibilities: Yup.string().required("Job responsibilities are required")
});
