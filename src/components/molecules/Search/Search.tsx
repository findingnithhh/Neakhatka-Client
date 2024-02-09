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
      <div className="container flex">
        <input
          type="text"
          className="w-[420px] h-[40px] text-sm pl-5 rounded-md border text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Please enter the position you are looking for..."
        />
        <Button
          className="w-[120px] h-[40px] text-white ml-2"
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
