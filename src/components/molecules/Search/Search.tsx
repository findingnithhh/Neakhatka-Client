import React from "react";
import {
  Button,
  Typography,
  Input,
  InputSearch,
  Icon,
  Select,
  CardTips,
} from "@/components";
import Image from "next/image";
const Search = () => {
  return (
    <>
      <div className="flex">
        <input
          type="text"
          className="w-[260px] h-[45px] text-[14px] tracking-wide lg:text-[16px] lg:w-[400px] lg:h-[52px] text-md pl-5 font-Poppins
           rounded-[12px] border text-gray-900 placeholder:text-gray-400
           outline-none bg-none"
          placeholder="Please search something..."
        />
        <Button
          className="w-[100px] h-[45px] lg:w-[140px] lg:h-[52px] ml-3 text-white"
          colorScheme="primary"
          colorOutline="primary"
          rounded="xl"
        >
          Search
        </Button>
      </div>
    </>
  );
};

export { Search };
