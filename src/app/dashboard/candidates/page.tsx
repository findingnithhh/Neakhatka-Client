"use client"
import React, { useState } from 'react';
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
      <h1 className="text-2xl font-bold mb-4">Candidate Table</h1> 
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
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
              <td className="py-2 px-4">{candidate.name}</td>
              <td className="py-2 px-4">{candidate.email}</td>
              <td className="py-2 px-4">{candidate.date}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => viewCandidate(candidate)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                  View
                </button>
              </td>
              <td className="py-2 px-4">
                <button
                  onClick={() => removeCandidate(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;