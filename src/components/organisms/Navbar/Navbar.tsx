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
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
      <nav className="w-[1200px] mx-auto h-[90px] shadow-lg rounded-lg px-10 py-5 flex justify-between items-center">
        <div className=" flex items-center">
          <Image src="/logo.svg" alt="next" width={50} height={50} />
          <ul className="flex cursor-pointer font-Poppins text-[14px]">
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
        <div className="flex font-Poppins text-[14px]">
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

      {/* <nav className="container mx-auto h-[90px] shadow-lg rounded-lg px-5 sm:px-10 py-3 sm:py-5 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-3 sm:mb-0">
          <Image src="/logo.svg" alt="next" width={50} height={50} />
          <ul className="flex flex-col sm:flex-row cursor-pointer font-Poppins text-[14px] sm:ml-9">
            <li className="mb-2 sm:mb-0">
              <Link href="/">Home</Link>
            </li>
            <li className="mb-2 sm:mb-0 ml-0 sm:ml-7">
              <Link href="/">Favorite</Link>
            </li>
            <li className="mb-2 sm:mb-0 ml-0 sm:ml-7">
              <Link href="/">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row font-Poppins text-[14px]">
          <Button
            className="text-[14px] mb-2 sm:mb-0"
            colorOutline="primary"
            size="md"
          >
            Login
          </Button>
          <Button
            className="text-white ml-0 sm:ml-2"
            colorScheme="primary"
            colorOutline="primary"
            size="md"
          >
            Sign Up
          </Button>
        </div>
      </nav> */}

      {/* <nav className="container mx-auto shadow-lg rounded-lg px-5 py-3 md:px-10 md:py-5 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="next" width={50} height={50} />
          <ul
            className={`flex cursor-pointer font-Poppins text-[14px] ${
              menuVisible ? "hidden" : "md:flex"
            }`}
          >
            <li className="ml-3 md:ml-9">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-3 md:ml-7">
              <Link href="/">Favorite</Link>
            </li>
            <li className="ml-3 md:ml-7">
              <Link href="/">About Us</Link>
            </li>
          </ul>
        </div>
        <div
          className={`flex font-Poppins text-[14px] ${
            menuVisible ? "md:hidden" : "hidden md:flex"
          }`}
        >
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
        <button
          className="md:hidden text-[14px] focus:outline-none"
          onClick={toggleMenu}
        >
          {menuVisible ? "Close" : "Menu"}
        </button>
      </nav> */}
    </>
  );
};

export { Navbar };
