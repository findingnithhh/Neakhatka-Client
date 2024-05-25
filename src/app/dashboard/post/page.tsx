"use client";
import React, { useState } from "react";
import { Typography, Input, Button } from "@/components";
import { FaTrash } from "react-icons/fa";
import Modal from "@/components/molecules/Modal/Modal";
import PostJob from "../edit_post/page";

interface Company {
  id: number;
  name: string;
  position: string;
  totalEmployees: string;
  startDate: string;
  endDate: string;
}

const Dashboard: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([
    {
      id: 1,
      name: "Tech Solutions",
      position: "Software Engineer",
      totalEmployees: "5",
      startDate: "2023-06-01",
      endDate: "N/A",
    },
    {
      id: 2,
      name: "HealthCorp",
      position: "Data Analyst",
      totalEmployees: "2",
      startDate: "2023-08-15",
      endDate: "N/A",
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
    <div>
      <div className="flex justify-between items-center mb-4">
        <Typography fontSize="md">Company Post Table</Typography>
        <Button onClick={() => setIsOpen(true)} colorScheme="primary" textColor="white" className="text-md px-4 py-2 rounded w-40 font-bold mb-4">
        Add Information
        </Button>
      </div>
      <table className="w-full border-collapse">
        <thead >
          <tr className="bg-gray-200 text-sm">
          <th className="py-2 px-4 border-b text-sm">Company Name</th>
            <th className="py-2 px-4 border-b">Position</th>
            <th className="py-2 px-4 border-b">Total Employees</th>
            <th className="py-2 px-4 border-b">Start Date</th>
            <th className="py-2 px-4 border-b">End Date</th>
            <th className="py-2 px-4 border-b">Edit</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
        {companies.map((company, index) => (
            <tr
              key={index}
              className={`border-b ${index % 2 === 0 ? "bg-gray-100" : ""}`}
            >
              <td className="py-2 px-4 border-b text-sm">{company.name}</td>
              <td className="py-2 px-4 border-b text-sm">{company.position}</td>
              <td className="py-2 px-4 border-b text-sm">{company.totalEmployees}</td>
              <td className="py-2 px-4 border-b text-sm">{company.startDate}</td>
              <td className="py-2 px-4 border-b text-sm">{company.endDate}</td>
            
              <td className="py-2 px-4 border-b">
                <Button size="sm" colorScheme="primary" textColor="white" >Edit</Button>
              </td>
              <td className="py-2 px-4">
                <Button onClick={() => removeCandidate(index)} colorScheme="danger" size="sm" className="text-white"> <FaTrash /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="xl" corner="3xl">
        <div className="bg-white p-8">
          <PostJob />
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
