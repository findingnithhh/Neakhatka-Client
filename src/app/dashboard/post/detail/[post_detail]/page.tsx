"use client"
import { useParams } from "next/navigation";
import React from 'react';
import { Typography } from "@/components";
import Image from "next/image";
import { Card, Icon } from "@/components";
import { Button } from "@/components/ui/button";
import Modal from "@/components/molecules/Modal/Modal";
import EditEmployer from "@/app/dashboard/edit_employer/page";

const PostDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
       <div className="container xl:max-w-[1200px] bg-[#F8F9FA] rounded-xl mt-5 px-10 py-5">
        {/* top */}
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
                Sathapana Bank
              </Typography>
              <Typography className="text-gray-400 text-[12px] md:text-[16px]">
                sathapanabankinfo@gmail.com
              </Typography>
            </div>
          </div>
        </div>
       
        {/* bottom */}
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div className="w-full">
            <div className="my-[25px]">
              <Typography fontSize="lg">Contact Email</Typography>
              <Typography>sathapanabankinfo@gmail.com</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Contact Number</Typography>
              <Typography>0965774927</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Contact Person</Typography>
              <Typography>San Visal</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Website</Typography>
              <Typography>https://www.sathapana.com.kh</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Employees</Typography>
              <Typography>10-20 people</Typography>
            </div>
          </div>
          <div className="w-full">
            <div className="my-[25px]">
              <Typography fontSize="lg">Location</Typography>
              <Typography>Phnom Penh</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Address</Typography>
              <Typography>
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Company Description</Typography>
              <Typography>
                SATHAPANA Limited was originally established as a non-government
                organization (NGO) in 1995, and at the time of acquisition, it
                had become a deposit-taking microfinance institution providing
                funds to the low income people throughout the country with a
                strong contribution track record in Cambodia economic
                development.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;