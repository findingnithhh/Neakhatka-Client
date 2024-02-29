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
      {/* <div className="w-[1200px] mx-auto">
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
              />
            </div>
          </div>
        </main>
      </div> */}
      {/* <div className="bg-black">
        <Image
          src="banner-work.svg"
          alt="banner work"
          width={300}
          height={200}
          className="w-full h-full backdrop-brightness-50"
        />
      </div> */}
      {/* <div>
        <div className="flex h-screen justify-center items-center flex-col">
          <div className="relative w-full h-screen">
            <Image
              src="banner-work.svg"
              alt="banner-work"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 w-full h-5/6 flex justify-center items-center backdrop-brightness-50">
              <span className="text-white text-4xl w-1/2 text-center">
                Here is an example of black overlay on an image
              </span>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="flex"> */}
      <div className="relative w-full h-auto opacity">
        <Image
          src="banner-work.svg"
          alt="banner-work"
          width={300}
          height={300}
          className="w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center backdrop-brightness-50">
          <span className="text-white text-center text-5xl">
            <Typography className="font-black" fontSize="5xl">
              Find Your Dream
              <span className="text-[#5FAD74]"> Internship </span>
              Here!
            </Typography>
            <div className="flex justify-center items-center">
              <Typography className="mt-8 w-[600px] text-center tracking-wide">
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
      {/* </div> */}
    </>
  );
};

export { Banner };
