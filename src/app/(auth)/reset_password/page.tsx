import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Image from "next/legacy/image";
import "../../globals.css";

const ResetPassword = () => {
  return (
    <div className="flex h-screen mx-auto overflow-hidden">
      {/* Use flexbox to make it full height */}
      <div className="left hidden lg:block w-full h-full p-10 bg-[#18181B] flex-col justify-between rounded-r-2xl">
        {/* <div>⚛</div> */}
        <div className="flex justify-center items-center h-screen">
          <Image
            src="/auth/reset_password.svg"
            alt="ResetPassword"
            width={450}
            height={450}
            className="mb-20"
          />
        </div>
      </div>
      <div className="right w-full p-10">
        <div className="flex flex-col justify-center items-center h-full">
          {" "}
          {/* Use flexbox to make it full height */}
          <Link href="/home">
            <Image
              src="/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="-mt-20 mb-10"
            />
          </Link>
          <div className="text-center">
            <h1 className="font-bold mb-1 text-lg">Reset new password</h1>
            <div className="flex justify-center">
              <p className="text-gray-500 text-sm w-[70%] my-4">
                Enter your new password below we will change you, your new
                password
              </p>
            </div>
          </div>
          <div className="mt-5">
            <Input
              accept="email"
              placeholder="your old password"
              className="w-[350px] outline-none"
            />
            <Input
              accept="email"
              placeholder="your new password"
              className="w-[350px] mt-4"
            />
            <Button className="mt-4 w-[350px] bg-[#343A40] hover:bg-[#4a535c]">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
