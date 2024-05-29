"use client"
import React, { useState } from 'react';
import { Typography, Input, Button } from "@/components";
import { FaTrash } from 'react-icons/fa';
import CandidatesTable from '../candidates-table/page';

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
    <CandidatesTable />
  );
};

export default Dashboard;