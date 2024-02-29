"use client";
import React, { useState } from "react";
import { Icon } from "@/components";

const Select = () => {
  const [isOpenOccupation, setIsOpenOccupation] = useState(false);
  const [isOpenTime, setIsOpenTime] = useState(false);
  const [isOpenSalary, setIsOpenSalary] = useState(false);

  const handleToggleOccupation = (e: React.MouseEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    setIsOpenOccupation(!isOpenOccupation);
  };

  const handleToggleTime = (e: React.MouseEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    setIsOpenTime(!isOpenTime);
  };

  const handleToggleSalary = (e: React.MouseEvent<HTMLSelectElement>) => {
    e.stopPropagation();
    setIsOpenSalary(!isOpenSalary);
  };

  return (
    <>
      <div className="xl:w-[1200px] lg:container mx-auto px-5 flex mt-36">
        <div className="relative w-[250px] lg:max-w-sm">
          <div className="relative">
            <select
              className={`w-full h-[40px] border px-3 text-[14px] text-gray-500 bg-white rounded-md shadow-sm outline-none appearance-none ${
                isOpenOccupation ? "border-gray-500" : ""
              }`}
              onClick={handleToggleOccupation}
            >
              <option>Occupation Unlimited</option>
              <option>Web Developer</option>
              <option>Mobile app developer</option>
              <option>Front end developer</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <Icon
                label="ArrowDown"
                className={`transform origin-center transition-transform ${
                  isOpenOccupation ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>
        <div className="relative w-[200px] lg:max-w-sm ml-4">
          <div className="relative">
            <select
              className={`w-full h-[40px] border px-3 text-[14px] text-gray-500 bg-white rounded-md shadow-sm outline-none appearance-none ${
                isOpenTime ? "border-gray-500" : ""
              }`}
              onClick={handleToggleTime}
            >
              <option>Time Unlimited</option>
              <option>Full time</option>
              <option>Part time</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <Icon
                label="ArrowDown"
                className={`transform origin-center transition-transform ${
                  isOpenTime ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>
        <div className="relative w-[200px] lg:max-w-sm ml-4">
          <div className="relative">
            <select
              className={`w-full h-[40px] border px-3 text-[14px] text-gray-500 bg-white rounded-md shadow-sm outline-none appearance-none ${
                isOpenSalary ? "border-gray-500" : ""
              }`}
              onClick={handleToggleSalary}
            >
              <option>Salary Unlimited</option>
              <option>Paid</option>
              <option>Non paid</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <Icon
                label="ArrowDown"
                className={`transform origin-center transition-transform ${
                  isOpenSalary ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Select };
