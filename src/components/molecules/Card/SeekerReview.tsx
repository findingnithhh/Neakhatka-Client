import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import { Typography } from "@/components/atoms";
import { SeekerData } from "./Data/UserData";

const SeekerReview: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(1);
  const [selectedDescription, setSelectedDescription] = useState<string>();

  useEffect(() => {
    setSelectedDescription(
      SeekerData.find((item) => item.id === 1)?.description
    );
  }, []);

  const handleToggle = (id: number, description: string) => {
    if (expanded === id) {
      return;
    } else {
      setExpanded(id);
      setSelectedDescription(description);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:flex lg:flex-row-reverse -mt-10 md:0 ml-10 md:ml-48 pb-0 lg:pb-20">
        <div className="mx-auto">
          {SeekerData.map((items, index) => (
            <div
              key={items.id}
              className={`w-[270px] h-[80px] lg:w-[340px] lg:h-[100px] shadow-xl flex items-center px-3 rounded-[6px] my-16 ${
                expanded === items.id ? "bg-gray-100" : ""
              } ${index === 0 || index === 2 ? "mr-30" : "ml-10"}`}
              onClick={() => handleToggle(items.id, items.description)}
              style={{ cursor: "pointer" }}
            >
              <div className="flex items-center">
                <Image
                  src={items.image}
                  alt="person"
                  width={54}
                  height={54}
                  layout="fixed"
                  objectFit="cover"
                  className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] flex items-center rounded-full"
                />
                <div className="ml-3">
                  <Typography>{items.name}</Typography>
                  <Typography
                    className="text-[#ADB5BD] tracking-wide"
                    fontSize="xs"
                  >
                    {items.position}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[450px] h-[500px] flex justify-center items-center">
            <div className="ml-0 lg:ml-10 -mt-40 w-[350px] lg:w-[500px] lg:mt-0">
              <q>{selectedDescription}</q>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeekerReview;
