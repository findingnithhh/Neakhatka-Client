"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Typography, Input, Button } from "@/components";
import { FaTrash } from 'react-icons/fa';
import CandidatesTable from '../candidates-table/page';

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
    <CandidatesTable />
  );
};

export default Dashboard;