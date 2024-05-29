// pages/signup-success.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Confetti, Typography } from "@/components";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

const SignupSuccess = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);

    // Set a timer to hide confetti after 5 seconds and redirect to verify page
    const timer = setTimeout(() => {
      setShowConfetti(false);
      window.location.href = "/please-verify";
    }, 5000); // Display confetti for 5 seconds

    // Clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container h-screen flex justify-center items-center flex-col">
      {showConfetti && <Confetti />}
      <div className="flex flex-col justify-center items-center gap-10">
        <motion.h1
          initial={{ y: -50, scale: 0.5, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-2xl"
        >
          <Typography fontSize="5xl" variant="bold">
            CONGRATULATIONS, YOU HAVE SUCCESSFULLY SIGNUP!
          </Typography>
        </motion.h1>
      </div>
    </div>
  );
};

export default SignupSuccess;
