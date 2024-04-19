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
  return (
    <>
      
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

export default Favorite;