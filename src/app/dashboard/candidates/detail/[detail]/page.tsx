"use client"
import { useParams } from "next/navigation";
import React from 'react';
import { Typography } from "@/components";

const CandidateDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <Typography fontSize="lg">Candidate Detail</Typography>
      <Typography fontSize="md">ID: {id}</Typography>
    </div>
  );
};

export default CandidateDetail;