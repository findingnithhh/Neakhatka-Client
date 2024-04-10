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
} from "@/components";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      {/* <div className="flex justify-center">
        <nav className="w-[70%] h-auto p-3 text-[14px] absolute z-10 mx-auto">
          <div className="flex justify-between items-center font-Poppins cursor-pointer">
            <div>
              <Image src="/logo.svg" alt="next" width={50} height={50} />
            </div>
            <div className="hidden lg:flex items-center text-white ">
              <ul className="flex mr-3">
                <li className="ml-9">
                  <Link href="/" />
                  Home
                </li>
                <li className="ml-7">
                  <Link href="/" />
                  Favorite
                </li>
                <li className="ml-7 mr-8">
                  <Link href="/" />
                  About Us
                </li>
              </ul>
              <div className="flex text-white">
                <Button className="mr-2" colorOutline="primary" rounded="lg">
                  Login
                </Button>
                <Button colorScheme="primary" rounded="lg">
                  Sign Up
                </Button>
              </div>
            </div>
            <div className="block lg:hidden">
              <Icon className="p-2 rounded-full text-white" label="Menu" />
            </div>
          </div>
        </nav>
      </div> */}
      
    </>
  );
};

export { Navbar };
