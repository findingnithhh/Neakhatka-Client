import { Icon } from "@/components";
import { Typography } from "../../atoms/Typography";
import React from "react";
import Image from "next/image";
import { DetailCard } from "@/Types/DetailCard";

interface CardProps {
  className?: string;
  data: DetailCard;
}
const Card: React.FC<CardProps> = ({ className = "", data }) => {
  const {
    companyName,
    companyLogo,
    peopleAmount,
    jobTitle,
    salary,
    Emploment,
    location,
    DeadLine,
  } = data;
  return (
    <>
      {/* <main className="w-[1200px] mx-auto mt-10"> */}
        {/* Card */}
        {/* <div className="grid grid-cols-2 gap-[20px]"> */}
          <div className="w-full h-[212px] rounded-xl shadow-lg p-5 font-Poppins">
            <div className="flex justify-between items-center">
              {/* image */}
              <div className="flex">
                <Image
                  className="rounded-full"
                  src="/company.svg"
                  alt="company logo"
                  width={48}
                  height={48}
                ></Image>
                {/* title */}
                <div className="font-Poppins ml-2">
                  <Typography>{companyName}</Typography>
                  <Typography fontSize="sm" className="text-gray-500">
                    {peopleAmount}
                  </Typography>
                </div>
              </div>
              {/* favorite icon */}
              <div>
                <Icon label="Star" />
              </div>
            </div>
            <div className="flex">
              <div>
                {/* position name */}
                <Typography className="mt-5" fontSize="sm">
                  {jobTitle}
                </Typography>
                <Typography className="text-gray-500" fontSize="sm">
                  {salary}
                </Typography>
                <div>
                  <Typography className="mt-2" fontSize="sm">
                    Employment
                  </Typography>
                  <Typography className="text-gray-500" fontSize="sm">
                    <div className="flex">
                      <Icon className="mr-2" label="Bag" size="sm" />
                      {Emploment}
                    </div>
                  </Typography>
                </div>
              </div>
              <div className="ml-44">
                {/* location */}
                <Typography className="mt-5" fontSize="sm">
                  Location
                </Typography>
                <Typography className="text-gray-500" fontSize="sm">
                  <div className="flex">
                    <Icon className="mr-2" label="Location" size="sm" />
                    {location}
                  </div>
                </Typography>
                <Typography className="mt-2" fontSize="sm">
                  Deadline
                </Typography>
                <Typography className="text-gray-500" fontSize="sm">
                  <div className="flex">
                    <Icon className="mr-2" label="Date" size="sm" />
                    {DeadLine}
                  </div>
                </Typography>
              </div>
            </div>
          </div>
        {/* </div>
      </main> */}
    </>
  );
};

export { Card };
