"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const [selectedRow, setSelectRow] = useState <number | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const removeCandidate = (index: number) => {
    const updatedCompanies = [...companies];
    updatedCompanies.splice(index, 1);
    setCompanies(updatedCompanies);
    setSelectRow(null);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleClick= (index:number)=>{
    setSelectRow(index);
  }
  const handleRowDoubleClick =(id:number) =>{
  window.location.href= `/dashboard/post/detail/${id}`;
  }
  const handleClickOutside = (event: MouseEvent) => {
    if (tableRef.current && !tableRef.current.contains(event.target as Node)) {
      setSelectRow(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Typography fontSize="md">Total Post </Typography>
        <Button onClick={() => setIsOpen(true)} colorScheme="primary" textColor="white" className="w-40 text-md px-4 py-2 rounded" >
        Create Post
        </Button>
      </div >
      <div ref={tableRef} className="overflow-x-auto shadow-md">
      <table className="min-w-full border-collapse">
        <thead >
          <tr className="bg-gray-200 text-sm ">
          <th className="py-2 px-4 border-x text-left font-normal">Position</th>
            <th className="py-2 px-4 border-x text-left font-normal">Salary</th>
            <th className="py-2 px-4 border-x text-left font-normal">Duration</th>
            <th className="py-2 px-4 border-x text-left font-normal">Date Line</th>
            <th className="py-2 px-4 border-x font-normal">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-500">
        {companies.map((company, index) => (
            <tr
            key={index}
            className={`border-x ${index === selectedRow ? "bg-gray-300" : ""}`}
            onClick={() => handleClick(index)}
            onDoubleClick={() => handleRowDoubleClick(company.id)}
            >
              <td className="py-2 px-4  text-sm">{company.position}</td>
              <td className="py-2 px-4  text-sm">{company.salary}</td>
              <td className="py-2 px-4  text-sm">{company.duration}</td>
              <td className="py-2 px-4  text-sm">{company.dateLine}</td>
            
              <td className="py-2 px-4 flex justify-center items-center space-x-4">
              <div className="text-blue-500 cursor-pointer">
                    <Typography fontSize="sm">Edit</Typography>
                  </div>
                  <div
                    className="text-red-500 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCandidate(index);
                    }}
                  >
                    <Typography fontSize="sm">Delete</Typography>
                  </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="xl" corner="3xl">
        <div className="bg-white p-8">
          <PostJob />
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;