"use client";
import * as Yup from "yup";
import React, { useEffect } from "react";
import { Editor, Typography } from "@/components";
import { Input } from "@/components";
import { Button } from "@/components";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// import { PostJobSchema } from "@/validation/postJob";
import { PostJobSchema } from "../../../validation/postJob";
import { ValidationError } from "yup";
import { ChangeEvent } from "react";
<<<<<<< HEAD
interface PostJobFormProps {
  onCancel: () => void;
}
=======
>>>>>>> d7ee7017bf58f4748bc20f82b6d67b135dc188ee

const PostJob: React.FC = () => {
  const [postError, setPostError] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [workplace, setWorkplace] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [companyNameError, setCompanyNameError] = useState<string>("");
  const [workplaceError, setWorkplaceError] = useState<string>("");
  const [positionError, setPositionError] = useState<string>("");
  const [locationError, setLocationError] = useState<string>("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobDescriptionError, setJobDescriptionError] = useState("");

  const [jobResponsibilities, setJobResponsibilities] = useState("");
  const [jobResponsibilitiesError, setJobResponsibilitiesError] = useState("");
  //date
  const [startDate, setStartDate] = useState<string>("");
  const [startDateError, setStartDateError] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [endDateError, setEndDateError] = useState<string>("");
  const [dateError, setDateError] = useState<string>("");

  const handleChange =
    (setter: (value: string) => void) => (e: ChangeEvent<HTMLInputElement>) =>
      setter(e.target.value);
  const handleFocus = (setter: (value: string) => void) => () => setter("");
  const handleEditorChange =
    (setContent: any, setError: any) => (content: any) => {
      setContent(content);
      if (content !== "") {
        // Assuming content is non-empty when the user types
        setError(""); // Clear the error message
      }
    };
  const handlePostNowClick = async () => {
    try {
      // Validate the form data
      await PostJobSchema.validate(
        {
          companyName,
          position,
          workplace,
          location,
          jobDescription,
          jobResponsibilities,
          startDate: startDate || null,
          endDate: endDate || null,
        },
        { abortEarly: false }
      );
      // If validation passes, clear any existing errors
      setCompanyNameError("");
      setPositionError("");
      setWorkplaceError("");
      setLocationError("");
      setPostError("");
      setStartDateError("");
      setJobDescriptionError("");
      setJobResponsibilitiesError("");
      setEndDateError("");
      setDateError("");
      // Proceed with form submission
      console.log("Form submitted successfully!");
    } catch (error) {
      // If validation fails, set the appropriate error messages
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          switch (err.path) {
            case "companyName":
              setCompanyNameError(err.message);
              break;
            case "position":
              setPositionError(err.message);
              break;
            case "workplace":
              setWorkplaceError(err.message);
              break;
            case "location":
              setLocationError(err.message);
              break;
            case "startDate":
              setStartDateError(err.message);
              break;
            case "endDate":
              setEndDateError(err.message);
              break;
            case "jobDescription":
              setJobDescriptionError(err.message);
              break;
            case "jobResponsibilities":
              setJobResponsibilitiesError(err.message);
              break;
            default:
              break;
          }
        });
      } else {
        // Handle other types of errors
        setPostError("Error Posting. Please try again.");
      }
    }
  };
  // Function to handle changes in the start date input field
  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedStartDate = e.target.value;
    setStartDate(selectedStartDate);
    setDateError("");
  };

  // Function to handle changes in the end date input field
  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedEndDate = e.target.value;
    setEndDate(selectedEndDate);
  };

  return (
    <>
      <div className="h-auto max-w-[1200px] mx-auto px-5 md:px-10 rounded-lg shadow-sm">
        {/* tile */}
        <div className="text-center mb-4">
          <Typography fontSize="xl" variant="bold" className="text-center my-5">
            Post New Job
          </Typography>
        </div>

        {/* input */}
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="flex flex-col col-span-2 md:col-span-1">
              <label className="mb-2 text-sm">Company Name</label>
              <div className="flex justify-center flex-col">
                <Input
                  type="text"
                  placeholder="Company name"
                  className={`w-full text-sm ${
                    companyNameError ? "border-red-500" : ""
                  }`}
                  value={companyName}
                  onChange={handleChange(setCompanyName)}
                  onFocus={handleFocus(setCompanyNameError)}
                />
                {companyNameError && (
                  <div className=" text-red-500 text-xs mt-1 ">
                    {companyNameError}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1">
              <label className="mb-2 text-sm">Position</label>
              <div className="flex flex-col justify-center">
                <Input
                  type="text"
                  placeholder="Position"
                  className={`w-full text-sm ${
                    positionError ? "border-red-500" : ""
                  }`}
                  value={position}
                  onChange={handleChange(setPosition)}
                  onFocus={handleFocus(setPositionError)}
                />
                {positionError && (
                  <div className=" text-red-500 text-xs mt-1 ">
                    {positionError}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1">
              <label className="mb-2 text-sm">Salary</label>
              <div className="flex justify-center">
                <select
                  id="salary"
                  className="border  text-gray-900 outline-none text-sm rounded-lg block w-full h-[35px]"
                >
                  <option value="50-100">50$-100$</option>
                  <option value="100-150">100$-150$</option>
                  <option value="150-200">150$-200$</option>
                  <option value="negotiable">Negotiable</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1">
              <label className="mb-2 text-sm">Total Employees</label>
              <div className="flex justify-center">
                <select
                  id="countries"
                  className="border text-[#424242] outline-none text-sm rounded-lg block w-full h-[35px]"
                >
                  <option selected>1-10</option>
                  <option value="10-20">10-20</option>
                  <option value="20-50">20-50</option>
                  <option value="100">&#x3e; 100</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1">
              <label className="mb-2 text-sm">Time</label>
              <div className="flex justify-center">
                <select
                  id="countries"
                  className="border  text-gray-900 outline-none text-sm rounded-lg block w-full h-[35px]"
                >
                  <option value="part-time">Full time</option>
                  <option value="full-time">Part time</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1">
              <label className="mb-2 text-sm">Work Place</label>
              <div className="flex flex-col justify-center">
                <Input
                  type="text"
                  placeholder="Work Place"
                  className={`w-full text-sm ${
                    workplaceError ? "border-red-500" : ""
                  }`}
                  value={workplace}
                  onChange={handleChange(setWorkplace)}
                  onFocus={handleFocus(setWorkplaceError)}
                />
                {workplaceError && (
                  <div className=" text-red-500 text-xs mt-1 ">
                    {workplaceError}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1">
              <label className="mb-2 text-sm">Duration</label>
              <select
                id="countries"
                className="border  text-gray-900 outline-none text-sm rounded-lg block w-full h-[35px]"
              >
                <option value="1-3">1-3 months</option>
                <option value="3-6">3-6 months</option>
                <option value="6-9">6-9 months</option>
              </select>
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1">
              <label className="mb-2 text-sm">Location</label>
              <div className="flex flex-col justify-center">
                <Input
                  type="text"
                  placeholder="Location"
                  className={`w-full text-sm ${
                    workplaceError ? "border-red-500" : ""
                  }`}
                  value={location}
                  onChange={handleChange(setLocation)}
                  onFocus={handleFocus(setLocationError)}
                />
                {locationError && (
                  <div className=" text-red-500 text-xs mt-1 ">
                    {locationError}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1">
              <label className="mb-2 text-sm">Start</label>
              <div className="flex flex-col justify-center">
                <input
                  type="date"
                  className={`border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 mt-1 outline-none ${
                    startDateError && !startDate ? "border-red-500" : ""
                  }`}
                  value={startDate}
                  onChange={handleChange(setStartDate)}
                  onFocus={handleFocus(setStartDateError)}
                />
              </div>
              {startDateError && (
                <div className="text-red-500 text-xs mt-1">
                  {startDateError}
                </div>
              )}
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1">
              <label className="mb-2 text-sm">End</label>
              <div className="flex flex-col justify-center">
                <input
                  type="date"
                  className={`border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2 mt-1 outline-none ${
                    endDateError && !endDate ? "border-red-500" : ""
                  }`}
                  value={endDate}
                  onChange={handleChange(setEndDate)}
                  onFocus={handleFocus(setEndDateError)}
                />
              </div>
              {endDateError && (
                <div className="text-red-500 text-xs mt-1">{endDateError}</div>
              )}
            </div>
          </div>
          {/* react-quill */}
          <div className="mt-4">
            <label className="mb-2 text-sm">Job description</label>
            <Editor
              value={jobDescription}
              onChange={handleEditorChange(
                setJobDescription,
                setJobDescriptionError
              )}
              className={`h-[200px] ${
                jobDescriptionError ? "border-red-500" : ""
              }`}
            />
            {jobDescriptionError && (
              <div className="text-red-500 text-xs mt-10">
                {jobDescriptionError}
              </div>
            )}
          </div>
          <div className="mt-14">
            <label className="mb-2 text-sm">Job Responsibilities</label>
            <Editor
              value={jobResponsibilities}
              onChange={handleEditorChange(
                setJobResponsibilities,
                setJobResponsibilitiesError
              )}
              className={`h-[200px] ${
                jobResponsibilitiesError ? "border-red-500" : ""
              }`}
            />
            {jobResponsibilitiesError && (
              <div className="text-red-500 text-xs mt-10">
                {jobResponsibilitiesError}
              </div>
            )}
          </div>
          {/* buttons */}
          <div className=" flex justify-end items-end mt-14">
<<<<<<< HEAD
          <Button
            colorOutline="danger"
            className="mr-3 w-24 rounded-lg"
           
          >
            Cancel
          </Button>
=======
            <Button colorOutline="danger" className="mr-3 w-24 rounded-lg">
              Cancel
            </Button>
>>>>>>> d7ee7017bf58f4748bc20f82b6d67b135dc188ee
            <Button
              colorScheme="primary"
              className="w-24 text-white rounded-lg"
              onClick={handlePostNowClick}
            >
              Post Now
            </Button>
       
          </div>
        </form>
      </div>
    </>
  );
};
export default PostJob;
