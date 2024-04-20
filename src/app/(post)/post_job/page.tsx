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
      <div className="container xl:max-w-[1200px] mx-auto px-4 py-6 border rounded-lg shadow-sm">
        <div className="text-center mb-4">
          <Typography fontSize="xl" className="text-center">
            Post New Job
          </Typography>
        </div>

        {/* image */}
        <div className="flex items-center justify-center mb-4">
          <div className="h-[100px] w-[100px] rounded-full bg-slate-500 mb-2"></div>
        </div>
        <div className="flex items-center justify-center mb-4">
          <Button colorScheme="secondary" size="md" className="text-white rounded-full">
            Upload
          </Button>
        </div>

        {/* input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-24">
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label className="mb-2 text-sm">Company Name</label>
            <div className="flex justify-center">
              <Input
                type="text"
                placeholder="Company name"
                className="text-sm w-full"
              />
            </div>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label className="mb-2 text-sm">Position</label>
            <div className="flex justify-center">
              <Input
                type="text"
                placeholder="Position"
                className="text-sm w-full"
              />
            </div>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label className="mb-2 text-sm">Salary</label>
            <div className="flex justify-center">
              <Input
                type="text"
                placeholder="Salary"
                className="text-sm w-full"
              />
            </div>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label className="mb-2 text-sm">Employment</label>
            <div className="flex justify-center">
              <Input
                type="text"
                placeholder="Employment"
                className="text-sm w-full"
              />
            </div>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label className="mb-2 text-sm">Work Place</label>
            <div className="flex justify-center">
              <Input
                type="text"
                placeholder="Work Place"
                className="text-sm w-full"
              />
            </div>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label className="mb-2 text-sm">Duration</label>
            <div className="flex justify-center">
              <Input
                type="email"
                placeholder="Duration"
                className="text-sm w-full"
              />
            </div>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label className="mb-2 text-sm">Location</label>
            <div className="flex justify-center">
              <Input
                type="text"
                placeholder="Location"
                className="text-sm w-full"
              />
            </div>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label className="mb-2 text-sm">Deadline</label>
            <div className="flex justify-center">
              <Input
                type="text"
                placeholder="Deadline"
                className="text-sm w-full"
              />
            </div>
          </div>
          <div className="flex flex-col col-span-2">
            <label className="mb-2">Job description</label>
            <textarea
              id="message"
              rows={4}
              className="p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Typing something..."
            ></textarea>
          </div>

          <div className="flex flex-col col-span-2">
            <label className="mb-2">Job description</label>
            <textarea
              id="message"
              rows={4}
              className="p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Typing something..."
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end pr-9 md:pr-24 mt-4">
          <Button colorOutline="danger" className="mr-3 w-24 rounded-lg">
            Cancel
          </Button>
          <Button colorScheme="primary" className="w-24 text-white rounded-lg">
            Post Now
          </Button>
        </div>
      </div>
    </>
  );
};
export default Postjob;
