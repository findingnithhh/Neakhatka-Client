import React from "react";
import { Typography } from "@/components";
import { InputSearch } from "@/components";
import { Input } from "@/components";
import { FloatingButton } from "@/components";
import { Button } from "@/components";

import Image from "next/image";

const Postjob = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto px-8 py-6 border rounded-lg shadow-sm">
        <Typography fontSize="xl" className="text-center ">
          Post New Job
        </Typography>

        {/* image */}
        <div className="flex items-center justify-center mb-2">
          <div className=" h-[100px] w-[100px] rounded-full items-center bg-slate-500 mb-2"></div>
        </div>
        <div className="flex items-center justify-center">
          <Button colorScheme="secondary" size="md" className="text-white">
            Upload
          </Button>
        </div>
        {/* input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          <div className="flex flex-col w-full items-start px-20">
            <label className="mb-2 text-sm">Company Name</label>
            <div className="w-full flex justify-center">
              <Input
                type="text"
                placeholder="Company name"
                className="text-sm w-[475px]"
              ></Input>
            </div>
          </div>
          <div className="flex flex-col w-full items-start px-20">
            <label className="mb-2 text-sm">Position</label>
            <div className="w-full flex justify-center">
            <Input
              type="text"
              placeholder="Position"
              className="text-sm w-[475px]"
            ></Input>
          </div>
          </div>
          <div className="flex flex-col w-full items-start px-20">
            <label className="mb-2 text-sm">Salary</label>
            <div className="w-full flex justify-center">
            <Input
              type="text"
              placeholder="Salary"
              className="text-sm w-[475px]"
            ></Input>
          </div>
          </div>
          <div className="flex flex-col w-full items-start px-20">
            <label className="mb-2 text-sm">Employment</label>
            <div className="w-full flex justify-center">
            <Input
              type="text"
              placeholder="Employment"
              className="text-sm w-[475px]"
            ></Input>
          </div>
          </div>
          <div className="flex flex-col w-full items-start px-20">
            <label className="mb-2 text-sm">Work Place</label>
            <div className="w-full flex justify-center">
            <Input
              type="text"
              placeholder="Work Place"
              className="text-sm w-[475px]"
            ></Input>
            </div>
          </div>
          <div className="flex flex-col w-full items-start px-20">
            <label className="mb-2 text-sm">Duration</label>
            <div className="w-full flex justify-center">
            <Input
              type="email"
              placeholder="Duration"
              className="text-sm w-[475px]"
            ></Input>
          </div>
          </div>
          <div className="flex flex-col w-full items-start px-20">
            <label className="mb-2 text-sm">Location</label>
            <div className="w-full flex justify-center">
            <Input
              type="text"
              placeholder="Location"
              className="text-sm w-[475px]"
            ></Input>
          </div>
          </div>
          <div className="flex flex-col w-full items-start px-20">
            <label className="mb-2 text-sm">Deadline</label>
            <div className="w-full flex justify-center">
            <Input
              type="text"
              placeholder="Deadline"
              className="text-sm w-[475px]"
            ></Input>
            </div>
          </div>
          <div className="w-full justify-center mx-auto px-20">
            <label className="mb-2 ">Job description</label>
            <textarea
              id="message"
              rows={4}
              className="p-2 w-full md:w-[1160px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="typing something..."
            ></textarea>
          </div><br />
          <div className="w-full justify-center mb-4 mx-auto px-20">
            <label className="mb-2 ">Job description</label>
            <textarea
              id="message"
              rows={4}
              className="p-2 w-full md:w-[1160px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="typing something..."
            ></textarea>
          </div>
          
        </div>
        <div className="flex justify-end pr-16">
          <Button colorOutline="danger" className="mr-3 w-48" rounded="lg">
            Cancel
          </Button>
          <Button
            colorScheme="primary"
            rounded="lg"
            className="w-48 text-white"
          >
            Post Now
          </Button>

          {/* <button className=" text-white text-sm px-2 py-2 rounded-md bg-[#4B9960] ">
            Save Changes
          </button> */}
        </div>
      </div>
    </>
  );
};
export default Postjob;
