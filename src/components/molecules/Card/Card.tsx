import { Icon, Typography } from "@/components";
import React from "react";
import Image from "next/image";
const Card = () => {
  return (
    <>
      <main className="w-[1200px] mx-auto mt-10">
        <Typography className="text-[#212529] mb-10" fontSize="2xl">
          Latest <span className="text-[#4B9960]">Interns</span>
        </Typography>
        {/* Card */}
        <div className="grid grid-cols-2 gap-[20px] ">
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
                  <Typography>Sathapana Bank</Typography>
                  <Typography fontSize="sm" className="text-gray-500">
                    100+ people
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
                  React Js developer
                </Typography>
                <Typography className="text-gray-500" fontSize="sm">
                  $100-$200
                </Typography>
                <div>
                  <Typography className="mt-2" fontSize="sm">
                    Employment
                  </Typography>
                  <Typography className="text-gray-500" fontSize="sm">
                    <div className="flex">
                      <Icon className="mr-2" label="Bag" size="sm" />
                      Full-ime
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
                    Phnom Penh
                  </div>
                </Typography>
                <Typography className="mt-2" fontSize="sm">
                  Deadline
                </Typography>
                <Typography className="text-gray-500" fontSize="sm">
                  <div className="flex">
                    <Icon className="mr-2" label="Date" size="sm" />
                    01-09-2024
                  </div>
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export { Card };
