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
          className="w-[400px] h-[54px] text-md pl-5
           rounded-[12px] border text-gray-900 placeholder:text-gray-400 
           outline-none"
          placeholder="Please search something...."
        />
        <Button
          className="w-[140px] h-[54px] ml-3 text-white"
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
