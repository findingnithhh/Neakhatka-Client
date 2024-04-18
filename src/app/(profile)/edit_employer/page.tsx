import React from "react";
import { Typography } from "@/components";
import { InputSearch } from "@/components";
import { Input } from "@/components";
import { FloatingButton } from "@/components";
import { Button } from "@/components";

import Image from "next/image";

const Editprofile = () => {
  return (
    <>
      
      
      <div className="max-w-[880px] mx-auto px-8 py-6 border rounded-lg shadow-sm">
        <Typography fontSize="xl" className="text-center ">
          Edit Company Profile
        </Typography>
        <div >
          <Typography fontSize="sm" className="text-center mb-4">
            The company details will be visible to the public and candidate.
            Please enter accurate information about your company.
          </Typography>
        </div>
        {/* image */}
        <div className="flex items-center justify-center mb-2">
        <div className=" h-[105px] w-[105px] rounded-full items-center bg-slate-500 mb-2">
          
        </div>
        </div>
        {/* input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
          <div className="flex flex-col">
            <label className="mb-2 text-sm">Name</label>
            <Input type="text" placeholder="San Visal" className="text-sm"></Input>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm">Date of Birth</label>
            <Input type="date" placeholder="2001-10-13" className="text-sm"></Input>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm">Contact Phone</label>
            <Input type="text" placeholder="0965774927" className="text-sm"></Input>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm">Nationality</label>
            <Input type="text" placeholder="Khmer" className="text-sm"></Input>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm">Gender</label>
            <Input type="text" placeholder="Male" className="text-sm"></Input>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm">Contact Email</label>
            <Input type="email" placeholder="sanvisal@gmail.com" className="text-sm"></Input>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm">Location</label>
            <Input type="text" placeholder="Phnom Penh" className="text-sm"></Input>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm">Address</label>
            <Input
              type="text"
              placeholder="8391 Elgin. St. Celina. Delaware 10"
              className="text-sm"
            ></Input>
          </div>
          <div className="mb-4 ">
            <label className="mb-2 ">Education background</label>
            <textarea
              id="message"
              rows={4}
              className="p-2 w-full md:w-[742px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="typing something..."
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end pr-8">
          <Button colorOutline="danger" size="md" className="mr-3" rounded="lg">
            Cancel
          </Button>
          <Button colorScheme="primary" rounded="lg" className="w-48 text-white" >
            Save Change
          </Button>
        
        </div>
      </div>
    </>
  );
};
export default Editprofile ;