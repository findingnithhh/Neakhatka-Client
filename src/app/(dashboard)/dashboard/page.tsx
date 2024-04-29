'use client'
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PieChart } from "@/components/organisms/PieChart";
// import { Chart as ChartJS } from "chart.js";
// import { Bar, Doughnut } from "react-chartjs-2";
// import { CategoryScale } from "chart.js"; 

const Dashboard = () => {
  return (
    <>
      <div className="overflow-auto ">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 px-10 py-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold tracking-wide">
                Total Candidates
              </CardTitle>
              <div className="flex items-center mt-4">
                <FaUserFriends className="w-6 h-6" />
                <span className="text-green-500 ml-3">
                  130 <span>people</span>
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end">
                <Link href="/">
                  <Button>View All Candidates</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold tracking-wide">
                Total Posted Jobs
              </CardTitle>
              <div className="flex items-center mt-4">
                <MdOutlineWork className="w-6 h-6" />
                <span className="text-green-500 ml-3">
                  5 <span>posted</span>
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end">
                <Link href="/">
                  <Button>View New Post</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold tracking-wide">
                Total Active
              </CardTitle>
              <div className="flex items-center mt-4">
                <MdVerified className="w-6 h-6" />
                <span className="text-green-500 ml-3">
                  5 <span>Active</span>
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end">
                <Link href="/">
                  <Button>View All Active</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="w-full h-screen px-10 grid grid-cols-2">
        <div className="w-full h-full">
            <PieChart />
        </div>
        <div className="bg-gray-500 w-full h-full">

        </div>
      </div>
    </>
  );
};

export default Dashboard;
