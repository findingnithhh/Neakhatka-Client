import React from 'react'
import Image from 'next/image'
import { Card, Icon} from '@/components'
import { Typography } from "../../../components/atoms/Typography";
import Link from "next/link";
import CardList from "@/components/molecules/Card/CardList";

import { Button } from '@/components/ui/button';
import { DetailCard } from '@/Types/DetailCard';
const Cardinfor: DetailCard[] = [
  {
    id: "1",
    companyName: "Wing Bank",
    companyLogo: "/images.png",
    peopleAmount: "100+ people",
    jobTitle: "UX/UI Intership",
    salary: "$150-$200",
    location: "Phnom Penh",
    Emploment: "Full-Time",
    DeadLine: "01-01-2025",
  },
  {
    id: "2",
    companyName: "Sathapana Bank",
    companyLogo: "/images.png",
    peopleAmount: "50+ people",
    jobTitle: "Vue Js Intership",
    salary: "$100-$200",
    location: "Phnom Penh",
    Emploment: "Full-Time",
    DeadLine: "09-08-2024",
  }];

const anynomousEmp = () => {
  return (
    <>
      <div className="container xl:max-w-[1200px] bg-[#F8F9FA] rounded-xl mt-5 md:mt-10 p-5 md:px-24 md:py-10 ">
        {/* top */}
        <div className="w-full flex md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/company.svg"
              alt="company logo"
              width={80}
              height={80}
              className="rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
            />
            <div className="ml-4 md:ml-6">
              <Typography className="mb-1 md:mb-2 text-[18px] md:text-[20px]">
                Sathapana Bank
              </Typography>
              <Typography className="text-gray-400 text-[12px] md:text-[16px]">
                sathapanabankinfo@gmail.com
              </Typography>
            </div>
          </div>
          {/* <div className="flex items-center">
            <Button className="bg-[#4B9960] rounded-full flex items-center justify-center gap-2 px-4 md:px-6 py-2">
              <Icon label="Edit" className="flex items-center justify-center" />
              <span className="hidden md:block">Edit profile</span>
            </Button>
          </div> */}
        </div>
        {/* bottom */}
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div className="w-full">
            <div className="my-[25px]">
              <Typography fontSize="lg">Contact Email</Typography>
              <Typography>sathapanabankinfo@gmail.com</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Contact Number</Typography>
              <Typography>0965774927</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Contact Person</Typography>
              <Typography>San Visal</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Website</Typography>
              <Typography>https://www.sathapana.com.kh</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Employees</Typography>
              <Typography>10-20 people</Typography>
            </div>
          </div>
          <div className="w-full">
            <div className="my-[25px]">
              <Typography fontSize="lg">Location</Typography>
              <Typography>Phnom Penh</Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Address</Typography>
              <Typography>
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </Typography>
            </div>
            <div className="my-[25px]">
              <Typography fontSize="lg">Company Description</Typography>
              <Typography>
                SATHAPANA Limited was originally established as a non-government
                organization (NGO) in 1995, and at the time of acquisition, it
                had become a deposit-taking microfinance institution providing
                funds to the low income people throughout the country with a
                strong contribution track record in Cambodia economic
                development.
              </Typography>
            </div>
            
          </div>
         
        </div>
        
      </div>
      {/* card */}
      {/* <CardList cards={detailCard} /> */}
      
       
      <main className="w-full container  my-10 px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {Cardinfor.map((job) => (
            <div key={job.id} className="card-container">
              <Card className="w-full h-auto" data={job} />
            </div>
          ))}
        </div>
      </main>
      {/* <CardList /> */}

     
    </>
  );
}

export default anynomousEmp