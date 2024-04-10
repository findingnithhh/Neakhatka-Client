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
} from "@/components";
import { Promote } from "@/components";
import Image from "next/image";
const Banner = () => {
  return (
    <>
      <div className="relative w-full pt-[100%] lg:pt-[40%]">
        <Image
          src="/banner-work.svg"
          alt="banner-work"
          layout="fill"
          objectFit="cover"
          className="max-h-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center backdrop-brightness-50">
          <span className="text-white">
            <Typography
              fontSize="2xl"
              className="-mt-5 mb-5 flex justify-center items-center font-bold md:text-[40px] md:mt-5 lg:text-[48px]"
            >
              Find Your Dream
              <span className="text-[#5FAD74]">Internship</span>
              Here!
            </Typography>
            <div className="flex justify-center items-center">
              <Typography
                fontSize="xs"
                className="w-[400px] text-center -mt-2 tracking-wide lg:w-[600px] lg:text-[16px] lg:mt-5"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Typography>
            </div>
            <div className="text-[16px] flex justify-center items-center mt-10">
              <Search />
            </div>
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute">
          <Promote />
        </div>
      </div>
    </>
  );
};

export { Banner };
