"use client";
import React, { useState } from "react";
import { Typography, Input, Button } from "@/components";
import { FaTrash } from "react-icons/fa";
import Modal from "@/components/molecules/Modal/Modal";
import PostJob from "../edit_post/page";

interface Company {
  id: number;
  position: string;
  salary: string;
  duration: string;
  dateLine: string;
}

const Dashboard: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([
    {
      id: 1,
      position: "Software Engineer",
      salary: "$100-200",
      duration: "3 months",
      dateLine: "01-08-2024",
    },
    {
      id: 2,
      position: "Data Analyst",
      salary: "$100-200",
      duration: "3 months",
      dateLine: "01-08-2024",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const removeCandidate = (index: number) => {
    const updatedCompanies = [...companies];
    updatedCompanies.splice(index, 1);
    setCompanies(updatedCompanies);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div >
      <div className="flex justify-between items-center mb-4">
        <Typography fontSize="md">Total Post</Typography>
        <Button
          onClick={() => setIsOpen(true)}
          colorScheme="primary"
          textColor="white"
          className="text-md px-4 py-2 rounded mb-4 w-44"
        >
          Create Post
        </Button>
      </div>
      <table className="w-full table-auto">
        <thead className="bg-gray-200 text-sm font-normal">
          <tr className="">
            <th className="py-2 border-b font-normal">Position</th>
            <th className="py-2 border-b font-normal">Salary</th>
            <th className="py-2 border-b font-normal">Duration</th>
            <th className="py-2 border-b font-normal">Date Line</th>
            <th className="py-2 border-b font-normal">Edit</th>
            <th className="py-2 border-b font-normal">Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr
              key={index}
              className={`border-b ${index % 2 === 0 ? "bg-white" : ""}`}
            >
              <td className="py-2  border-b text-sm">{company.position}</td>
              <td className="py-2  border-b text-sm">{company.salary}</td>
              <td className="py-2  border-b text-sm">{company.duration}</td>
              <td className="py-2  border-b text-sm">{company.dateLine}</td>

              <td className="py-2  border-b">
                <Typography
                  fontSize="sm"
                  className="text-blue-500 cursor-pointer"
                >
                  Edit
                </Typography>
              </td>
              <td className="py-2 ">
                <Button
                  onClick={() => removeCandidate(index)}
                  colorScheme="danger"
                  size="sm"
                  className="text-white"
                >
                  {" "}
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="xl"
        corner="3xl"
      >
        <div className="bg-white p-8">
          <PostJob />
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
