"use client";
import React from "react";
import {
  Button,
  Typography,
  Input,
  InputSearch,
  Icon,
  CardTips,
  Search,
  Navbar,
} from "@/components";
import { useState } from "react";
const Select = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-[1200px] mx-auto px-5 flex mt-10">
        <div className="relative w-[250px] lg:max-w-sm">
          <div className="relative">
            <select
              className={`w-full h-[40px] border px-3 text-[14px] text-gray-500 bg-white rounded-md shadow-sm outline-none appearance-none ${
                isOpen ? "border-gray-500" : ""
              }`}
              onClick={handleToggle}
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
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>
        <div className="relative w-[200px] lg:max-w-sm ml-4">
          <div className="relative">
            <select
              className={`w-full h-[40px] border px-3 text-[14px] text-gray-500 bg-white rounded-md shadow-sm outline-none appearance-none ${
                isOpen ? "border-gray-500" : ""
              }`}
              onClick={handleToggle}
            >
              <option>Time Unlimited</option>
              <option>Full time</option>
              <option>Part time</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <Icon
                label="ArrowDown"
                className={`transform origin-center transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>
        <div className="relative w-[200px] lg:max-w-sm ml-4">
          <div className="relative">
            <select
              className={`w-full h-[40px] border px-3 text-[14px] text-gray-500 bg-white rounded-md shadow-sm outline-none appearance-none ${
                isOpen ? "border-gray-500" : ""
              }`}
              onClick={handleToggle}
            >
              <option>Salary Unlimited</option>
              <option>Paid</option>
              <option>Non paid</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <Icon
                label="ArrowDown"
                className={`transform origin-center transition-transform ${
                  isOpen ? "rotate-180" : ""
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
