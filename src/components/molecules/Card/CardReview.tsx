"use client";
import React, { useState } from "react";
import { Button, Typography } from "@/components/atoms";
import Image from "next/image";

interface UserProps {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
}

const defaultDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus purus in adipiscing vel dolor donec. In in id ultrices maecenas et. Nibh faucibus neque, ipsum volutpat nullam turpis. Ultrices libero sit rhoncus ac et viverra lobortis nisl, interdum.";

const CardReview: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [selectedDescription, setSelectedDescription] =
    useState<string>(defaultDescription);

  const user: UserProps[] = [
    {
      id: 1,
      name: "Tieng Kimlang",
      position: "React Js at SabaiCode",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus purus in adipiscing vel dolor donec. In in id ultrices maecenas et. Nibh faucibus neque, ipsum volutpat nullam turpis. Ultrices libero sit rhoncus ac et viverra lobortis nisl, interdum.",
      image: "./userProfile/user.svg",
    },
    {
      id: 2,
      name: "Tang Sapho",
      position: "Vue Js at SabaiCode",
      description: "dak jol hx nah pu !!! ouyyy thom gha ",
      image: "./userProfile/user1.svg",
    },
    {
      id: 3,
      name: "Chhun Rathna",
      position: "UX/UI Js at SabaiCode",
      description:
        " Nibh faucibus neque, ipsum volutpat nullam turpis. Ultrices libero sit rhoncus ac et viverra lobortis nisl, interdum.",
      image: "./userProfile/user2.svg",
    },
  ];

  const handleToggle = (id: number, description: string) => {
    if (expanded === id) {
      setExpanded(null);
      setSelectedDescription(defaultDescription);
    } else {
      setExpanded(id);
      setSelectedDescription(description);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-12">
        <Button colorOutline="primary" size="md" rounded="lg">
          See more
        </Button>
      </div>
      <div className="w-full h-auto mt-10 bg-[#efefef] font-Poppins">
        <div className="w-[1200px] h-auto mx-auto">
          <Typography
            className="ml-10 pt-10 font-semibold capitalize tracking-wide"
            fontSize="2xl"
          >
            What our client say?
          </Typography>
          <div className="grid grid-cols-2">
            <div className="mx-auto">
              {user.map((items, index) => (
                <div
                  key={items.id}
                  className={`w-[340px] h-[100px] shadow-xl flex items-center px-3 rounded-[6px] my-16 ${
                    expanded === items.id ? "bg-gray-100" : ""
                  } ${index === 0 || index === 2 ? "ml-20" : ""}`}
                  onClick={() => handleToggle(items.id, items.description)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="flex items-center">
                    <Image
                      src={items.image}
                      alt="person"
                      width={54}
                      height={54}
                      className="w-[60px] h-[60px] flex items-center rounded-full object-cover"
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
                <div className="w-[450px]">
                  <q>{selectedDescription}</q>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CardReview };
