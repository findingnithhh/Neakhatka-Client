"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components";
import { Typography } from "../../../components/atoms/Typography";
import { Button } from "@/components/ui/button";
import Modal from "@/components/molecules/Modal/Modal";
import EditEmployer from "@/app/dashboard/edit_employer/page";

const EmployerProfile: React.FC = () => {
  const [employerData, setEmployerData] = useState({
    id: "1",
    companyName: "Sathapana Bank",
    contactEmail: "sathapanabankinfo@gmail.com",
    contactPhone: "0965774927",
    contactPerson: "Sal Visal",
    websiteLink: "https://www.saathapana.com.kh",
    location: "Phnom Penh",
    address: "8391 Elgin. St. Celina. Delaware 10",
    totalEmployees: "10-20",
    description:
      "SATHAPANA Limited was originally established as a non-government organization (NGO) in 1995, and at the time of acquisition, it had become a deposit-taking microfinance institution providing funds to the low income people throughout the country with a strong contribution track record in Cambodia economic development.",
  });

  const [isOpen, setIsOpen] = useState(false);

  const updateEmployerData = (updatedData: any) => {
    setEmployerData(updatedData);
    setIsOpen(false);
  };

  return (
    <>
      <div className="container xl:max-w-[1200px] bg-[#F8F9FA] rounded-xl mt-5 px-10 py-5">
        <div className="w-full flex md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/company.svg"
              alt="company logo"
              width={80}
              height={80}
              className="rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
            />
            <div className="ml-4 md:ml-6">
              <Typography className="mb-1 md:mb-2 text-[18px] md:text-[20px]">
                {employerData.companyName}
              </Typography>
              <Typography className="text-gray-400 text-[12px] md:text-[16px]">
                {employerData.contactEmail}
              </Typography>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              onClick={() => setIsOpen(true)}
              className="bg-[#4B9960] rounded-full flex items-center justify-center gap-2 px-4 md:px-6 py-2"
            >
              <Icon label="Edit" className="flex items-center justify-center" />
              <span className="hidden md:block">Edit profile</span>
            </Button>
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="xl"
          corner="3xl"
        >
          <div className="bg-white p-8">
            <h1 className="flex justify-center flex-col items-center">
              <EditEmployer />
            </h1>
          </div>
        </Modal>
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div className="w-full">
            <div className="my-[25px]">
              <Typography fontSize="lg">Contact Email</Typography>
              <Typography>{employerData.contactEmail}</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Contact Number</Typography>
              <Typography>{employerData.contactPhone}</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Contact Person</Typography>
              <Typography>{employerData.contactPerson}</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Website</Typography>
              <Typography>{employerData.websiteLink}</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Employees</Typography>
              <Typography>{employerData.totalEmployees}</Typography>
            </div>
          </div>
          <div className="w-full">
            <div className="my-[25px]">
              <Typography fontSize="lg">Location</Typography>
              <Typography>{employerData.location}</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Address</Typography>
              <Typography>{employerData.address}</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Company Description</Typography>
              <Typography>{employerData.description}</Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerProfile;
