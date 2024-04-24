"use client";
import React, { useState } from "react";
import { Card, Icon } from "@/components";
import { Typography } from "../../../components/atoms/Typography";
import { Button } from "@/components/ui/button";
import { DetailCard } from "@/Types/DetailCard";
import Modal from "@/components/molecules/Modal/Modal";
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
  },
];

const Favorite = () => {
  const [cards, setCards] = useState([...Cardinfor]);
  const [selectedCardId, setSelectedCardId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteCard = (id: string) => {
    setSelectedCardId(id);
    setIsOpen(true);
  };

  const handleConfirmDelete = () => {
    setCards(cards.filter((card) => card.id !== selectedCardId));
    setIsOpen(false);
  };

  const handleCancelDelete = () => {
    setIsOpen(false);
  };

  return (
    <main className="w-full container h-screen my-10 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
        {cards.map((job) => (
          <div key={job.id} className="card-container" onClick={(e) => {}}>
            <Card
              className="w-full h-auto"
              data={job}
              iconType="close"
              onDelete={() => handleDeleteCard(job.id)}
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onClose={handleCancelDelete}
        size="md"
        corner="2xl"
      >
        <div className="bg-white p-8">
          <h1 className="flex justify-center flex-col items-center">
            <PiWarningCircleFill className="w-[100px] h-[100px] text-[#C33025]" />
            <Typography fontSize="lg" className="my-2">
              Are you sure?
            </Typography>
            <Typography fontSize="sm" className="text-gray-500 text-center">
              This action will delete all your information, You won’t be able to
              revert this!
            </Typography>
            <div className="flex mt-5 gap-4">
              <Button
                onClick={handleCancelDelete}
                className="border bg-white hover:bg-white text-black border-red-500 rounded-lg"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmDelete}
                className="bg-[#C33025] hover:bg-[#af2a21] hover:transition-all rounded-lg text-white"
              >
                Remove
              </Button>
            </div>
          </h1>
        </div>
      </Modal>
    </main>
  );
};

export default Favorite;
