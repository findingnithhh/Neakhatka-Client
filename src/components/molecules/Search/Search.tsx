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
      <div className="xl:flex lg:flex sm:flex">
        <input
          type="text"
          className="w-[250px] sm:w-[420px] h-[40px] text-sm pl-5 rounded-md border text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Please search something...."
        />
        <Button
          className="w-[100px] mt-1 sm:w-[120px] sm:h-[40px] sm:ml-2 sm:mt-0 text-white"
          colorScheme="primary"
          colorOutline="primary"
        >
          Search
        </Button>
      </div>
    </>
  );
};

export { Search };
