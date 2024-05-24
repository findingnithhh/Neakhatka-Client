"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Icon, Typography } from "@/components";

export default function CardTip() {
  return (
    <>
      <Typography align="center" className="text-[20px] mt-16">
        Get Hired in
        <span className="text-green-600 gap-1">4 Quick Easy Steps</span>
      </Typography>
      <Typography
        align="center"
        className="my-4 mx-80 text-gray-500"
        fontSize="sm"
      >
        Update your resume, network effectively, prepare for interviews, and
        follow up strategically to land your dream job.
      </Typography>
      <main className="container xl:w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 my-10">
        <Card className="py-4 rounded-none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <Icon label="User" size="xl" />
            <h1 className="my-4">Create an account</h1>
            <p className="text-center text-[14px] px-2 mb-4 text-gray-500">
              Find your best internship by using search
            </p>
          </CardHeader>
        </Card>
        <Card className="py-4 rounded-none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <Icon label="Search" size="xl" colorBackground="blue" />
            <h1 className="my-4">Search Internship</h1>
            <p className="text-center text-[14px] px-2 mb-4 text-gray-500">
              First, you have to create an account here.
            </p>
          </CardHeader>
        </Card>
        <Card className="py-4 rounded-none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <Icon label="File" size="xl" colorBackground="green" />
            <h1 className="my-4">Upload CV/Resume</h1>
            <p className="text-center text-[14px] px-2 mb-4 text-gray-500">
              You have to apply your CV after you find the right.
            </p>
          </CardHeader>
        </Card>
        <Card className="py-4 rounded-none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <Icon label="Work" size="xl" colorBackground="yellow" />
            <h1 className="my-4">Get an Internship</h1>
            <p className="text-center text-[14px] px-2 mb-4 text-gray-500">
              Finally, you get a right internship interview
            </p>
          </CardHeader>
        </Card>
      </main>
    </>
  );
}
