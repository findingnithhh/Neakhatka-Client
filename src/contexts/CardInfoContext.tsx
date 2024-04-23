"use client";

import React, { createContext, useState, ReactNode } from "react";

interface CardModal {
  [x: string]: any;
  id: string; // Changed from string to number
  companyName: string; // Corrected the spelling of companyName
  companyLogo: string; // Changed from src to companyLogo
  peopleAmount: string;
  jobTitle: string;
  salary: string;
  location: string;
  Emploment: string; // Corrected the spelling of Employment
  DeadLine: string; // Corrected the spelling of Deadline
}

interface CardContextProp {
  children: ReactNode;
}

interface ContextProps {
  CardInfo: CardModal[];
}

export const MyContext = createContext<ContextProps>({
  CardInfo: [],
});

const CardContext: React.FC<CardContextProp> = ({ children }) => {
  const [CardInfo, setCardInfo] = useState([
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
      companyName: "ABA Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "React Js Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2045",
    },
    {
      id: "4",
      companyName: "J Trust Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "Mobile app Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2025",
    },
    {
      id: "5",
      companyName: "ABA Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "React Js Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2045",
    },
    {
      id: "6",
      companyName: "J Trust Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "Mobile app Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2025",
    },
    {
      id: "7",
      companyName: "ABA Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "React Js Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2045",
    },
    {
      id: "8",
      companyName: "J Trust Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "Mobile app Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2025",
    },
    {
      id: "9",
      companyName: "J Trust Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "Mobile app Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2025",
    },
    {
      id: "10",
      companyName: "J Trust Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "Mobile app Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2025",
    },
  ]);

  const Contextvalue = {
    CardInfo,
    setCardInfo,
  };
  return (
    <MyContext.Provider value={Contextvalue}>{children}</MyContext.Provider>
  );
};

export default CardContext;
