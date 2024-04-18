"use client";
import React, { useState } from "react";
import { Button, Typography } from "@/components/atoms";
import Image from "next/legacy/image";
import SeekerReview from "./SeekerReview";
import EmployerReview from "./EmployerReview";

const CardReview = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-12">
        <Button colorOutline="primary" size="md" rounded="lg">
          See more
        </Button>
      </div>
      <div className="w-full h-auto mt-10 bg-[#efefef] font-Poppins">
        <div className="container h-auto mx-auto">
          <Typography
            className="ml-10 pt-10 font-semibold capitalize tracking-wide"
            fontSize="2xl"
          >
            What our client say?
          </Typography>
          <EmployerReview />
          <SeekerReview />
        </div>
      </div>
    </>
  );
};

export { CardReview };
