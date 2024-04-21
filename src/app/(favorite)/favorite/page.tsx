"use client";
import React from "react";
import { Card, Icon } from "@/components";
import { Typography } from "../../../components/atoms/Typography";
import { Button } from "@/components/ui/button";
import { DetailCard } from "@/Types/DetailCard";
import Modal from "@/components/molecules/Modal/Modal";
import { useState } from "react";
import { PiWarningCircleFill } from "react-icons/pi";
import { Link } from "lucide-react";

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
  },
];

const Favorite = () => {
  const [cards, setCards] = useState([...Cardinfor]);

  const handleDeleteCard = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <main className="w-full container h-screen my-10 px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
        {cards.map((job) => (
          <div key={job.id} className="card-container" onClick={(e) => {}}>
            <Card
              className="w-full h-auto"
              data={job}
              iconType="close"
              onDelete={(e) => handleDeleteCard(job.id, e)}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Favorite;
