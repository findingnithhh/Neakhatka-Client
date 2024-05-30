'use client'
import React, { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Icon } from "@/components";
import { Typography } from "../../atoms/Typography";
import { DetailCard } from "@/Types/DetailCard";
import { useCount } from "../../../contexts/CountContext";
// import { toast } from "sonner";

interface CardData {
  id: string;
  companyLogo: string;
  companyName?: string;
  peopleAmount: string;
  jobTitle: string;
  salary: string;
  Emploment: string;
  location: string;
  DeadLine: string;
}

interface CardProps {
  className?: string;
  data: CardData; // Use the new interface
  iconType?: "star" | "close";
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Card: React.FC<CardProps> = ({
  className = "",
  data,
  iconType = "star",
  onDelete,
}) => {
  const {
    id,
    companyLogo,
    companyName,
    peopleAmount,
    jobTitle,
    salary,
    Emploment,
    location,
    DeadLine,
  } = data;

  const [isFavorited, setIsFavorited] = useState(false);
  const { increment, descrement } = useCount();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(e);
    }
  };

  const handleStarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    setIsFavorited((prev) => !prev);

    if (iconType === "star") {
      if (isFavorited) {
        descrement();
      } else {
        increment();
      }
    }
  };

  return (
    <div
      className={`h-auto rounded-xl shadow-lg p-5 font-Poppins ${className}`}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <Link href={`/detail/${id}`}>
        <div className="flex justify-between items-center">
          <div className="flex">
            <Image
              className="rounded-full"
              src={companyLogo}
              alt="company logo"
              width={48}
              height={48}
            />
            <div className="font-Poppins ml-2">
              <Typography>{companyName}</Typography>
              <Typography fontSize="sm" className="text-gray-500">
                {peopleAmount}
              </Typography>
            </div>
          </div>
          <div onClick={handleStarClick}>
            {iconType === "star" ? (
              <button>
                <Icon label={isFavorited ? "StarFill" : "Star"} />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(e);
                }}
              >
                <Icon label="Close" />
              </button>
            )}
          </div>
        </div>
        <div className="flex">
          <div>
            <Typography className="mt-5" fontSize="sm">
              {jobTitle}
            </Typography>
            <Typography className="text-gray-500" fontSize="sm">
              <div className="flex">
                <Icon className="mr-0.5" label="Dollar" size="sm" />
                {salary}
              </div>
            </Typography>
            <div>
              <Typography className="mt-2" fontSize="sm">
                Employment
              </Typography>
              <Typography className="text-gray-500" fontSize="sm">
                <div className="flex">
                  <Icon className="mr-2" label="Bag" size="sm" />
                  {Emploment}
                </div>
              </Typography>
            </div>
          </div>
          <div className="mx-auto">
            <Typography className="mt-5" fontSize="sm">
              Location
            </Typography>
            <Typography className="text-gray-500" fontSize="sm">
              <div className="flex">
                <Icon className="mr-2" label="Location" size="sm" />
                {location}
              </div>
            </Typography>
            <Typography className="mt-2" fontSize="sm">
              Deadline
            </Typography>
            <Typography className="text-gray-500" fontSize="sm">
              <div className="flex">
                <Icon className="mr-2" label="Calendar" size="sm" />
                {DeadLine}
              </div>
            </Typography>
          </div>
        </div>
      </Link>
    </div>
  );
};

export { Card, type CardData };