import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

const Signup = () => {
  return (
    <div className="flex h-screen">
      {" "}
      {/* Use flexbox to make it full height */}
      <div className="left hidden lg:block w-full h-full p-10 bg-[#18181B] flex-col justify-between rounded-r-2xl">
        <div>⚛</div>
        <div className="flex items">
          Acme Inc “This library has saved me countless hours of work and helped
          me deliver stunning designs to my clients faster than ever before.”
          Sofia Davis
        </div>
      </div>
      <div className="right w-full p-10">
        <div className="text-end">
          <Link href="/login" color="primary" className="text-sm">
            Login
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          {" "}
          {/* Use flexbox to make it full height */}
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="-mt-20 mb-10"
            />
          </Link>
          <div className="text-center">
            <h1 className="font-bold mb-1 text-lg">Create an account</h1>
            <p className="text-gray-500 text-sm text-center w-[380px]">
              Enter your email below to sign up with Matching Internship
            </p>
          </div>
          <div className="mt-5">
            <Input
              accept="text"
              placeholder="company name"
              className="w-[350px]"
            />
            <Input
              accept="email"
              placeholder="example@gmail.com"
              className="w-[350px] mt-4"
            />
            <Input
              accept="password"
              placeholder="password123"
              className="w-[350px] mt-4"
            />
            <Button className="mt-4 w-[350px]">Sign Up</Button>
          </div>
          <div className="mt-5">
            <span className="flex text-gray-300">or continue with</span>
          </div>
          <div className="flex flex-col w-[350px]">
            <Button
              className="mt-4 mb-2 flex justify-center items-center"
              variant="outline"
            >
              <FcGoogle className="mx-1" />
              Google
            </Button>

            <Button
              className="flex justify-center items-center"
              variant="outline"
            >
              <FaFacebook className="mx-1" />
              Facebook
            </Button>
          </div>
          <div className="mt-5 text-sm text-center">
            <p className="text-balance">
              By clicking continue, you agree to our{" "}
              <span className="underline">Terms</span> <br />
              <span className="underline"> of Service</span> and{" "}
              <span className="underline">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
