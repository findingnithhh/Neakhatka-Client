"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Typography, Input, Button } from "@/components";
import { FaTrash } from 'react-icons/fa';

interface Candidate {
  id: number;
  name: string;
  email: string;
  date: string;
  cv: string;
}

const Dashboard: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([
    {id:1, name: 'John Doe', email: 'john.doe@example.com', date: '2024-05-20', cv: 'john_doe_cv.pdf' },
    {id:2, name: 'Jane Smith', email: 'jane.smith@example.com', date: '2024-05-18', cv: 'jane_smith_cv.pdf' },
    {id:3, name: 'Bob Johnson', email: 'bob.johnson@example.com', date: '2024-05-15', cv: 'bob_johnson_cv.pdf' },
  ]);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [selectedRow, setSelectedRow] = useState <number | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  const removeCandidate = (index: number) => {
    const updatedCandidates = [...candidates];
    updatedCandidates.splice(index, 1);
    setCandidates(updatedCandidates);
    setSelectedRow(null);
  };

  const viewCandidate = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
  };

  const closeModal = () => {
    setSelectedCandidate(null);
  };
  const handleClick= (index:number)=>{
    setSelectedRow(index);
  }
  const handleRowDoubleClick = (id: number) => {
    window.location.href = `/dashboard/candidates/detail/${id}`;
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (tableRef.current && !tableRef.current.contains(event.target as Node)) {
      setSelectedRow(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div >
      <Typography fontSize='md' className='font-bold mb-4'>Candidates</Typography>
      <div ref={tableRef} className="overflow-x-auto shadow-md">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-sm ">
            <th className="py-2 px-4 text-left font-normal">Username</th>
            <th className="py-2 px-4 text-left font-normal">Email</th>
            <th className="py-2 px-4 text-left font-normal">Date</th>
            <th className="py-2 px-4 text-left font-normal">CV</th>
            <th className="py-2 px-4 font-normal">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-500">
          {candidates.map((candidate, index) => (
            <tr
            key={index}
            className={`border-x ${index === selectedRow ? "bg-gray-300" : ""}`}
            onClick={() => handleClick(index)}
            onDoubleClick={() => handleRowDoubleClick(candidate.id)}
            >
              <td className="py-2 px-4 text-sm">{candidate.name}</td>
              <td className="py-2 px-4 text-sm">{candidate.email}</td>
              <td className="py-2 px-4 text-sm">{candidate.date}</td>
              <td className="py-2 px-4 text-sm">
                {/* <Button onClick={() => viewCandidate(candidate)} colorScheme='primary' size='sm' textColor='white'>
                  view
                </Button> */}
                <Typography fontSize="sm" className="text-blue-500 cursor-pointer underline">view</Typography>
              </td>
              <td className="py-2 px-4 flex space-x-4 justify-center items-center">
                {/* <Button onClick={() => removeCandidate(index)} colorScheme='danger' size='sm' className="text-white"><FaTrash /></Button> */}
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
    </div>
  );
};

export default Dashboard;