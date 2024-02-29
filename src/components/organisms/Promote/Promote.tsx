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
      {/* <div className="flex justify-center items-center mt-10">
        <Button
          className="w-[124px] h-[42px]"
          colorOutline="primary"
          size="md"
          rounded="xl"
        >
          See more
        </Button>
      </div> */}
      <div className="bg-white w-[1200px] h-[131px]  shadow-lg mx-auto my-10 rounded-xl flex justify-between items-center px-20">
        <div>
          <Typography
            fontSize="2xl"
            variant="bold"
            className="text-[#4B9960] text-center"
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
          <Typography fontSize="sm" className="text-[#4B9960]">
            Post dreams internship
          </Typography>
        </div>
        <div className="mr-16">
          <Typography
            fontSize="2xl"
            variant="bold"
            className="text-[#4B9960] text-center"
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
            fontSize="2xl"
            variant="bold"
            className="text-[#4B9960] text-center"
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
