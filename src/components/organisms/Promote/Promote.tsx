"use client";
import React from "react";
import {
  Button,
  Typography,
  Input,
  InputSearch,
  Icon,
  Select,
  Search,
  Navbar,
  Banner,
} from "@/components";
import CountUp from "react-countup";

const Promote = () => {   
  return (
    <>
      <div className="w-[440px] h-[80px] bg-white px-5 sm:w-[600px] sm:px-10 md:px-14 md:w-[800px] lg:px-20 lg:w-[1000px] lg:h-[110px] xl:w-[1150px]  shadow-lg my-10 rounded-xl flex justify-between items-center">
        <div>
          <Typography
            fontSize="sm"
            variant="bold"
            className="text-[#4B9960] text-center md:text-[16px] lg:text-[18px] xl:text-[20px]"
          >
            <CountUp
              delay={0.2}
              separator=" "
              decimal=","
              suffix=" +"
              end={500}
              duration={8}
            />
          </Typography>
          <Typography fontSize="xs" className="text-[#4B9960] sm:text-[14px]">
            Internship
          </Typography>
        </div>
        <div>
          <Typography
            fontSize="sm"
            variant="bold"
            className="text-[#4B9960] text-center md:text-[16px] lg:text-[18px] xl:text-[20px]"
          >
            <CountUp
              delay={0.2}
              separator=" "
              decimal=","
              suffix=" +"
              end={50}
              duration={8}
            />
          </Typography>
          <Typography fontSize="xs" className="text-[#4B9960] sm:text-[14px]">
            Companies
          </Typography>
        </div>
        <div>
          <Typography
            fontSize="sm"
            variant="bold"
            className="text-[#4B9960] text-center md:text-[16px] lg:text-[18px] xl:text-[20px]"
          >
            <CountUp
              delay={0.2}
              decimal=","
              suffix=" +"
              end={1200}
              duration={8}
            />
          </Typography>
          <Typography fontSize="xs" className="text-[#4B9960] sm:text-[14px]">
            Seekers
          </Typography>
        </div>
      </div>
    </>
  );
};

export { Promote };
