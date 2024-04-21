'use client'
import React from 'react'
import { Card, Icon, Button} from '@/components'
import { Typography } from "../../../components/atoms/Typography";
// import { Button } from '@/components/ui/button';
import { DetailCard } from '@/Types/DetailCard';
import Modal from "@/components/molecules/Modal/Modal";
import { useState } from "react";
import { PiWarningCircleFill } from "react-icons/pi";

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
  },
  {
    id: "3",
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
    id: "4",
    companyName: "Wing Bank",
    companyLogo: "/images.png",
    peopleAmount: "100+ people",
    jobTitle: "UX/UI Intership",
    salary: "$150-$200",
    location: "Phnom Penh",
    Emploment: "Full-Time",
    DeadLine: "01-01-2025",
  }
];

const Favorite = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <main className="w-full container h-screen my-10 px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {Cardinfor.map((job) => (
            <div key={job.id} className="card-container">
              <Card className="w-full h-auto" data={job} iconType="close" />
            </div>
          ))}
        </div>
      </main>

      <div className="flex justify-center items-center h-screen">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Open Modal
        </button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="md"
          corner="2xl"
        >
          <div className="bg-white p-8">
            <h1 className="flex justify-center flex-col items-center">
              <PiWarningCircleFill className="w-[100px] h-[100px] text-red-500" />
              <Typography fontSize="lg" className="my-2">
                Are you sure?
              </Typography>
              <Typography fontSize="sm" className="text-gray-500 text-center">
                This action will delete all your information, You won’t be able
                to revert this!
              </Typography>
              <div className="flex mt-5 gap-4">
                <Button
                  onClick={() => setIsOpen(false)}
                  className="border border-red-500 rounded-lg bg-white"
                >
                  Cancel
                </Button>
                <Button className="bg-red-500 rounded-lg text-white">
                  Remove
                </Button>
              </div>
            </h1>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Favorite;