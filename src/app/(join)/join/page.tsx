"use client";
import React from "react";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import Image from "next/legacy/image";
import Link from "next/link";
import "../../globals.css";
const Join = () => {
  return (
    <>
      <div className="container h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="h-96 flex justify-center items-center flex-col px-10">
            <Link href="/">
              <Image
                className="mb-5"
                src="/logo.svg"
                alt="logo"
                width={50}
                height={50}
              />
            </Link>
            <h1 className="text-sm lg:text-lg xl:text-2xl mb-7 ">
              Join as a businessman or seeker
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="mx-4">
                <Link href="/seeker_sign_up">
                  <Card className="py-4 border-3 border-[#4B9960]">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                      <p className="text-[13px]">
                        Are you a internship seeker?
                      </p>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 flex justify-center items-center my-2">
                      <Image
                        alt="C"
                        className="object-cover rounded-full"
                        src="/userProfile/student.svg"
                        width={100}
                        height={100}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <div className="flex justify-center items-center mt-5 mb-10">
                  <Link href="/seeker_sign_up">
                    <Button className="rounded-full py-7 px-8 text-white bg-[#4B9960]">
                      I want to look for intern
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-4">
                <Link href="/emplyer_sign_up">
                  <Card className="py-4 border-3 border-[#4B9960]">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                      <p className="text-[13px]">Are you a businessman?</p>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 flex justify-center items-center my-2">
                      <Image
                        alt="C"
                        className="object-cover rounded-full"
                        src="/userProfile/employer.svg"
                        width={100}
                        height={100}
                      />
                    </CardBody>
                  </Card>
                </Link>
                <div className="flex justify-center items-center mt-5">
                  <Link href="/emplyer_sign_up">
                    <Button className="rounded-full py-7 px-8 text-white bg-[#4B9960]">
                      Are you a businessman?
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex mt-10 md:mt-0">
              <p className="text-[14px] text-gray-700">
                Already have an account?
              </p>
              <Link
                href="/login"
                className="text-blue-400 underline ml-1 text-[14px]"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
