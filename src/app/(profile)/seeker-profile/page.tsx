import React from "react";
import Image from "next/image";
import { Card, Icon } from "@/components";
import { Typography } from "../../../components/atoms/Typography";
import CardList from "@/components/molecules/Card/CardList";

import { Button } from "@/components/ui/button";
import { DetailCard } from "@/Types/DetailCard";

const seekerProfile = () => {
  return (
    <>
      <div className="container xl:max-w-[1200px] bg-[#F8F9FA] rounded-xl mt-5 md:mt-10 p-5 md:px-24 md:py-10 ">
        {/* top */}
        <div className="w-full flex md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/userProfile/seeker.svg"
              alt="company logo"
              width={120}
              height={120}
              className="rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
            />
            <div className="ml-4 md:ml-6">
              <Typography className="mb-1 md:mb-2 text-[18px] md:text-[24px]">
                San Visal
              </Typography>
              <Typography className="text-gray-400 text-[12px] md:text-[18px]">
                sanvisal@gmail.com
              </Typography>
            </div>
          </div>
          <div className="flex items-center">
            <Button className="bg-[#4B9960] rounded-full flex items-center justify-center gap-2 px-4 md:px-6 py-2">
              <Icon label="Edit" className="flex items-center justify-center" />
              <span className="hidden md:block">Edit profile</span>
            </Button>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div className="w-full">
            <div className="my-[25px]">
              <Typography fontSize="lg">Date of Birth</Typography>
              <Typography>2001/10/13</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Contact Number</Typography>
              <Typography>0965774927</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Nationality</Typography>
              <Typography>Khmer</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Gender</Typography>
              <Typography>Male</Typography>
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
              <Typography fontSize="lg" className="mb-2">
                Education Background
              </Typography>
              <Typography className="mb-2">
                Royal University of Phnom Penh
              </Typography>
              <Typography>Preah Sisowath High School</Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default seekerProfile;
