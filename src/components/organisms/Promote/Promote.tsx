"use client";
import React from "react";
import {
  Button,
  Typography,
  Input,
  InputSearch,
  Icon,
  Select,
  CardTips,
  Search,
  Navbar,
  Banner,
} from "@/components";
import CountUp from "react-countup";

const Promote = () => {
  return (
    <>
      <div className="w-[380px] h-[80px] bg-white sm:w-[600px] md:w-[800px] lg:w-[1000px] lg:h-[110px] xl:w-[1200px]  shadow-lg mx-auto my-10 rounded-xl flex justify-between items-center px-10">
        <div>
          <div className="">
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
            <Typography fontSize="sm" className="text-[#4B9960] ">
              Internship
            </Typography>
          </div>
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
          <Typography fontSize="sm" className="text-[#4B9960]">
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
          <Typography fontSize="sm" className="text-[#4B9960]">
            Seekers
          </Typography>
        </div>
      </div>
    </>
  );
};

export { Promote };
