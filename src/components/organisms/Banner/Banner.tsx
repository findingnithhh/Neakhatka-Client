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
      <main className="w-[1200px] mx-auto grid grid-cols-2">
        <div className="flex flex-col justify-center ml-10">
          <h1 className="font-Poppins text-[48px] font-black mb-10 capitalize tracking-wide text-[#4B9960]">
            Find your dream <span className="text-[#212529]">internship</span>
            here!
          </h1>
          <Search />
        </div>
        <div className="flex justify-center items-center mx-auto">
          <Image src="/banner.svg" alt="Banner" width={455} height={431} />
        </div>
      </main>
    </>
  );
};

export { Banner };
