import React from "react";
import { Typography } from "@/components";
import { InputSearch } from "@/components";
import { Input } from "@/components";
import { FloatingButton } from "@/components";
import { Button } from "@/components";

import Image from "next/image";

const EditEmployer = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mx-auto">
        <div className="max-w-[880px] mx-auto rounded-lg shadow-sm">
          <Typography fontSize="xl" className="text-center ">
            Edit Company Profile
          </Typography>
          <div>
            <Typography fontSize="sm" className="text-center mb-4 py-5 px-0 md:px-14">
              The company details will be visible to the public and candidate.
              Please enter accurate information about your company.
            </Typography>
          </div>
          {/* image */}
          <div className="flex items-center justify-center mb-2">
            <div className=" h-[105px] w-[105px] rounded-full items-center bg-slate-500 mb-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
            <div className="flex flex-col">
              <label className="mb-2 text-sm">Name</label>
              <Input
                type="text"
                placeholder="San Visal"
                className="text-sm w-full"
              ></Input>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm">Date of Birth</label>
              <Input
                type="date"
                placeholder="2001-10-13"
                className="text-sm w-full"
              ></Input>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm">Contact Phone</label>
              <Input
                type="text"
                placeholder="0965774927"
                className="text-sm w-full"
              ></Input>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm">Nationality</label>
              <Input
                type="text"
                placeholder="Khmer"
                className="text-sm w-full"
              ></Input>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm">Gender</label>
              <Input
                type="text"
                placeholder="Male"
                className="text-sm w-full"
              ></Input>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm">Contact Email</label>
              <Input
                type="email"
                placeholder="sanvisal@gmail.com"
                className="text-sm w-full"
              ></Input>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm">Location</label>
              <Input
                type="text"
                placeholder="Phnom Penh"
                className="text-sm w-full"
              ></Input>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm">Address</label>
              <Input
                type="text"
                placeholder="8391 Elgin. St. Celina. Delaware 10"
                className="text-sm w-full"
              ></Input>
            </div>
          </div>
          <div className="my-4 pl-4">
            <label className="mb-2">Education background</label>
            <textarea
              id="message"
              rows={4}
              className="p-2 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
              placeholder="typing something..."
            ></textarea>
          </div>
          <div className="flex justify-end">
            <Button
              colorOutline="danger"
              size="md"
              className="mr-3"
              rounded="lg"
            >
              Cancel
            </Button>
            <Button colorScheme="primary" className="w-48 text-white">
              Save change
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditEmployer;
