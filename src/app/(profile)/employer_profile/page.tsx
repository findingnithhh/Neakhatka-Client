import React from 'react'
import Image from 'next/image'
import { Card, Icon} from '@/components'
import { Typography } from "../../../components/atoms/Typography";
import Link from "next/link";
import CardList from "@/components/molecules/Card/CardList";

import { Button } from '@/components/ui/button';
import { DetailCard } from '@/Types/DetailCard';
// const detailCard: DetailCard[] = [{
//   companyName: 'Acme Inc.',
//   companyLogo: '/company.svg',
//   peopleAmount: '1000+',
//   jobTitle: 'Software Engineer',
//   salary: '$100,000 - $150,000',
//   Emploment: 'Full-time',
//   location: 'San Francisco, CA',
//   DeadLine: '2023-03-31',
//   id: ''
// },

// {companyName: 'Acme Inc.',
//   companyLogo: '/company.svg',
//   peopleAmount: '1000+',
//   jobTitle: 'Software Engineer',
//   salary: '$100,000 - $150,000',
//   Emploment: 'Full-time',
//   location: 'San Francisco, CA',
//   DeadLine: '2023-03-31',
//   id: ''
// }
// ];

const employerProfile = () => {
  return (
    <>
      <div className="container xl:max-w-[1200px] bg-[#F8F9FA] rounded-xl mt-5 md:mt-10 p-5 md:px-24 md:py-10 h-screen">
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
          <div className="flex items-center">
            <Button className="bg-[#4B9960] rounded-full flex items-center justify-center gap-2 px-4 md:px-6 py-2">
              <Icon label="Edit" className="flex items-center justify-center" />
              <span className="hidden md:block">Edit profile</span>
            </Button>
          </div>
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
      {/* <CardList data={detailCard.flat()} /> */}
      
       
      {/* <Card data={detailCard} /> */}
      {/* <CardList /> */}

     
    </>
  );
}

export default employerProfile