"use client";
import React from "react";
import { Editor, Typography } from "@/components";
import { InputSearch } from "@/components";
import { Input } from "@/components";
import { FloatingButton } from "@/components";
import { Button } from "@/components";
import { useState } from "react";

import Image from "next/image";

const Postjob = () => {
  const [contentDescription, setContentDescription] = useState<string>("");
  const [contentResponsibilities, setContentResponsibilities] =
    useState<string>("");

  const handleChangeDescription = (value: string) => {
    setContentDescription(value);
  };
  const handleChangeResponsibilities = (value: string) => {
    setContentResponsibilities(value);
  };
  return (
    <>
      <div className="container h-auto xl:max-w-[1200px] mx-auto px-5 md:px-10 py-6 border rounded-lg shadow-sm">
        {/* tile */}
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
          <Button
            colorScheme="secondary"
            size="md"
            className="text-white rounded-full"
          >
            Upload
          </Button>
        </div>

        {/* input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
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
        </div>
        {/* react-quill */}
        <div className="mt-4">
          <label className="mb-2 text-sm">Job description</label>
          <Editor
            value={contentDescription}
            onChange={handleChangeDescription}
            className="h-[200px]"
          />
        </div>
        <div className="mt-14">
          <label className="mb-2 text-sm">Job Responsibilities</label>
          <Editor
            value={contentResponsibilities}
            onChange={handleChangeResponsibilities}
            className="h-[200px]"
          />
        </div>
        {/* buttons */}
        <div className=" flex justify-end items-end mt-20">
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
