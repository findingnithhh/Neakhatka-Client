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
      <main>
        <Typography align="center" className="mt-20 text-[18px]">
          Get Hired in<span className="text-[#4B9960]">4 Quick Easy Steps</span>
        </Typography>
        <div className="w-[1200px] mt-10 md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto font-Poppins flex flex-wrap justify-center gap-10 md:gap-8">
          <div className="w-full md:w-[270px] h-[176px] bg-white flex flex-col justify-center items-center shadow-lg ">
            <Icon label="User" size="xl" />
            <h1 className="text-[16px] text-center m-3">Create an account</h1>
            <p className="text-center text-[12px] px-5 text-gray-500">
              Find your best internship by using search
            </p>
          </div>
          <div className="w-full md:w-[270px] h-[176px] bg-white flex flex-col justify-center items-center shadow-lg ">
            <Icon label="Search" size="xl" colorBackground="blue" />
            <h1 className="text-[16px] text-center m-3">Search Internship</h1>
            <p className="text-center text-[12px] px-5 text-gray-500">
              First, you have to create an account here.
            </p>
          </div>
          <div className="w-full md:w-[270px] h-[176px] bg-white flex flex-col justify-center items-center shadow-lg ">
            <Icon label="File" size="xl" colorBackground="green" />
            <h1 className="text-[16px] text-center m-3">Upload CV/Resume</h1>
            <p className="text-center text-[12px] px-5 text-gray-500">
              You have to apply your CV after you find the right.
            </p>
          </div>
          <div className="w-full md:w-[270px] h-[176px] bg-white flex flex-col justify-center items-center shadow-lg ">
            <Icon label="Work" size="xl" colorBackground="yellow" />
            <h1 className="text-[16px] text-center m-3">Get a Internship</h1>
            <p className="text-center text-[12px] px-5 text-gray-500">
              Finally you get a right internship interview
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export { CardTips };
