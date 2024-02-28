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
      <div className="w-[1200px] mx-auto">
        <main className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <div className="px-10">
            <div className="mt-20 flex justify-start items-start text-[20px] md:text-[30px] lg:text-[40px] xl:text-[48px]">
              <h1 className="font-Poppins mb-5 font-black capitalize tracking-wide text-[#4B9960] ">
                Find your dream
                <span className="text-[#212529]"> internship </span>
                Here!
              </h1>
            </div>
            <div className="flex justify-start items-start">
              <Search />
            </div>
          </div>
          <div className="hidden md:hidden lg:block xl:block">
            <div className="flex justify-center items-center">
              <Image
                src="/banner.svg"
                alt="Banner"
                width={455}
                height={431}
                // className="w-full"
              />
            </div>
          </div>
          {/* <div className="w-full flex flex-col justify-center items-center text-[48px]">
            <h1 className="font-Poppins mx-20  mb-5 font-black capitalize tracking-wide text-[#4B9960] ">
              Find your dream
              <span className="text-[#212529]"> internship </span>
              Here!
            </h1>
            <Search />
          </div> */}
          {/* <div className="hidden md:hidden lg:block xl:block">
            <Image
              src="/banner.svg"
              alt="Banner"
              width={455}
              height={431}
              className="w-full"
            />
          </div> */}
        </main>
        {/* <main className="xl:max-w-[1200px] lg:container md:w-full mx-auto grid grid-cols-2">
          <div className="flex flex-col justify-center ml-10">
            <h1 className="text-[23px] font-Poppins font-black mb-10 capitalize tracking-wide text-[#4B9960] xl:text-[48px] md:text-[40px] sm:text-[30px]">
              Find your dream{" "}
              <span className="text-[#212529]">internship </span>
              Here!
            </h1>
            <Search />
          </div>
          <div className="hidden xl:flex justify-center items-center lg:flex mx-auto">
            <Image
              className=""
              src="/banner.svg"
              alt="Banner"
              width={455}
              height={431}
            />
          </div>
        </main> */}
      </div>
    </>
  );
};

export { Banner };
