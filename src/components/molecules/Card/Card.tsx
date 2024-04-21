import { Icon } from "@/components";
import { Typography } from "../../atoms/Typography";
import React from "react";
import Image from "next/legacy/image";
import { DetailCard } from "@/Types/DetailCard";
import Link from "next/link";

interface CardProps {
  className?: string;
  data: DetailCard;
  iconType?: "star" | "close";
}
const Card: React.FC<CardProps> = ({
  className = "",
  data,
  iconType = "star",
}) => {
  const {
    id,
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
      <Link href={`/detail/${id}`}>
        <div className="h-auto rounded-xl shadow-lg p-5 font-Poppins">
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
              <Icon label={iconType === "star" ? "Star" : "Close"} />
            </div>
          </div>
          <div className="flex ">
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
            <div className="mx-auto ">
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
      </Link>
    </>
  );
};

export { Card };
