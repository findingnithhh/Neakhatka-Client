"use client";
import { Button, Typography } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PleaseVerify = () => {

  return (
    <>
      <div className="container h-screen flex justify-center items-start flex-col">
        <div className="container my-10 -mt-32">
          <Link href="/">
            <Image src="/logo.svg" alt="please verify" width={60} height={60} />
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <Image
            src="/auth/please-verify.svg"
            alt="please verify"
            width={100}
            height={100}
            className="w-[256px] h-[260px]"
          />
          <div className="flex justify-center items-center flex-col gap-8 px-2 lg:px-10">
            <Typography fontSize="2xl" variant="black">
              Verify your email to continue
            </Typography>
            <Typography
              fontSize="base"
              className="text-center w-full lg:w-8/12"
            >
              We just sent an email to the address:
              <span className="font-bold mx-1">
                Findingnithcoding@gmail.com
              </span>
              Please check your email and select the link provided to verify
              your email address
            </Typography>
          </div>
          <div className="flex gap-5">
            <Button type="button" colorOutline="primary" rounded="lg" size="md">
              Send again
            </Button>
            <Button
              type="button"
              colorOutline="none"
              rounded="lg"
              size="md"
              colorScheme="primary"
              textColor="white"
            >
              Go to Gmail
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PleaseVerify;
