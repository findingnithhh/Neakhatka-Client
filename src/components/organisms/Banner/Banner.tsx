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
import Image from "next/image";
const Banner = () => {
  return (
    <>
      <main className="xl:max-w-[1200px] xl:bg-red-400 lg:bg-green-400 lg:container md:w-full md:bg-blue-500 mx-auto grid grid-cols-2">
        <div className="flex flex-col justify-center ml-10">
          <h1 className="text-[23px] font-Poppins font-black mb-10 capitalize tracking-wide text-[#4B9960] xl:text-[48px] md:text-[40px] sm:text-[30px]">
            Find your dream <span className="text-[#212529]">internship</span>
            here!
          </h1>
          <Search />
        </div>
        <div className="xl:flex justify-center items-center lg:flex mx-auto">
          <Image
            className=""
            src="/banner.svg"
            alt="Banner"
            width={455}
            height={431}
          />
        </div>
      </main>
    </>
  );
};

export { Banner };
