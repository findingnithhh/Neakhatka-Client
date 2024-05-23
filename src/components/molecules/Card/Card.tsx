'use client'
import React, { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Icon } from "@/components";
import { Typography } from "../../atoms/Typography";
import { DetailCard } from "@/Types/DetailCard";
import { useCount } from "../../../contexts/CountContext";
// import { toast } from "sonner";

interface CardProps {
  className?: string;
  data: DetailCard;
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
    e.preventDefault(); // To prevent default behavior of link
    e.stopPropagation(); // To prevent redirect when star icon is clicked

    setIsFavorited((prev) => !prev); // Toggle favorite

    if (iconType === "star") {
      if (isFavorited) {
        // If already favorited, decrement
        descrement();
      } else {
        // If not favorited, increment
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
              src="/company.svg"
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
          {/* favorite */}
          <div onClick={handleStarClick}>
            {iconType === "star" ? (
              <button>
                <Icon label={isFavorited ? "StarFill" : "Star"} />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevent default button behavior
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
                <Icon className="mr-1" label="Dollar" size="sm" />
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

export { Card };
