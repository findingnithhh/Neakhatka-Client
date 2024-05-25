"use client"
import React, { useState } from 'react';
import { Typography, Input, Button } from "@/components";
import { FaTrash } from 'react-icons/fa';

interface Candidate {
  name: string;
  email: string;
  date: string;
  cv: string;
}

const Dashboard: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([
    { name: 'John Doe', email: 'john.doe@example.com', date: '2024-05-20', cv: 'john_doe_cv.pdf' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', date: '2024-05-18', cv: 'jane_smith_cv.pdf' },
    { name: 'Bob Johnson', email: 'bob.johnson@example.com', date: '2024-05-15', cv: 'bob_johnson_cv.pdf' },
  ]);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const removeCandidate = (index: number) => {
    const updatedCandidates = [...candidates];
    updatedCandidates.splice(index, 1);
    setCandidates(updatedCandidates);
  };

  const viewCandidate = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
  };

  const closeModal = () => {
    setSelectedCandidate(null);
  };


  return (
    <div >
      <Typography fontSize='md' className='font-bold mb-4'>Candidate Table</Typography>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-sm">
            <th className="py-2 px-4 text-left">Username</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">CV</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr
              key={index}
              className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : ''}`}
            >
              <td className="py-2 px-4 text-sm">{candidate.name}</td>
              <td className="py-2 px-4 text-sm">{candidate.email}</td>
              <td className="py-2 px-4 text-sm">{candidate.date}</td>
              <td className="py-2 px-4 text-sm">
                <Button onClick={() => viewCandidate(candidate)} colorScheme='primary' size='sm' textColor='white'>
                  view
                </Button>
              </td>
              <td className="py-2 px-4">
                <Button onClick={() => removeCandidate(index)} colorScheme='danger' size='sm' className="text-white"><FaTrash /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;