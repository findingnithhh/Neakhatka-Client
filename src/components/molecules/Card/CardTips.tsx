import React from "react";
import {
  Button,
  Typography,
  Input,
  InputSearch,
  Icon,
  Select,
} from "@/components";
const CardTips = () => {
  return (
    <>
      <main className="text-center mt-20">
        <Typography align="center" className="text-18">
          Get Hired in<span className="text-green-600">4 Quick Easy Steps</span>
        </Typography>
        <div
          className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:w-[1200px] md:gap-x-8"
        >
          <div className="h-48 bg-white flex flex-col justify-center items-center shadow-lg">
            <Icon label="User" size="xl" />
            <h1 className="text-16 m-3">Create an account</h1>
            <p className="text-gray-500 px-5">
              Find your best internship by using search
            </p>
          </div>
          <div className="h-48 bg-white flex flex-col justify-center items-center shadow-lg">
            <Icon label="Search" size="xl" colorBackground="blue" />
            <h1 className="text-16 m-3">Search Internship</h1>
            <p className="text-gray-500 px-5">
              First, you have to create an account here.
            </p>
          </div>
          <div className="h-48 bg-white flex flex-col justify-center items-center shadow-lg">
            <Icon label="File" size="xl" colorBackground="green" />
            <h1 className="text-16 m-3">Upload CV/Resume</h1>
            <p className="text-gray-500 px-5">
              You have to apply your CV after you find the right.
            </p>
          </div>
          <div className="h-48 bg-white flex flex-col justify-center items-center shadow-lg">
            <Icon label="Work" size="xl" colorBackground="yellow" />
            <h1 className="text-16 m-3">Get an Internship</h1>
            <p className="text-gray-500 px-5">
              Finally, you get a right internship interview
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export { CardTips };
