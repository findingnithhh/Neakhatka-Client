"use client";
import React from 'react'
import Image from 'next/image';
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaSun } from "react-icons/fa6";
import { IoCloudyNight } from "react-icons/io5";

const NavDashboard = () => {
  const { setTheme } = useTheme()
  return (
    <div className="w-full py-4 px-10 flex items-center justify-between border-b-1">
      <div></div>
      <div className="flex items-center justify-center">
        <p className="mr-2">Hi, John Doe!</p>
        <div className="avatar rounded-full h-10 w-10 bg-emerald-500 font-[700] flex items-center justify-center">
          <p>SM</p>
        </div>
        <div className='ml-5'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <IoCloudyNight className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export {NavDashboard}