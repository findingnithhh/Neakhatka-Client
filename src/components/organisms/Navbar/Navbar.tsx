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
import { useState } from "react";
const Navbar = () => {
  return (
    <>
      <nav className="xl:w-[1200px] xl:bg-red-500 lg:bg-pink-500 lg:container md:bg-green-500 sm:bg-blue-500 mx-auto h-[90px] shadow-lg rounded-lg px-10 py-5 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="next" width={50} height={50} />
          <ul className="hidden xl:flex lg:flex md:flex cursor-pointer font-Poppins text-[14px]">
            <li className="ml-9">
              <Link href="/" />
              Home
            </li>
            <li className="ml-7">
              <Link href="/" />
              Favorite
            </li>
            <li className="ml-7">
              <Link href="/" />
              About Us
            </li>
          </ul>
        </div>
        <div className="xl:hidden lg:hidden md:hidden">
          <Icon label="Hamburger" />
        </div>
        <div className="hidden xl:flex lg:flex md:flex font-Poppins text-[14px]">
          <Button className="text-[14px]" colorOutline="primary" size="md">
            Login
          </Button>
          <Button
            className="text-white ml-2"
            colorScheme="primary"
            colorOutline="primary"
            size="md"
          >
            Sign Up
          </Button>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
