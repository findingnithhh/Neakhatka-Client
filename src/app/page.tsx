import {
  Button,
  Typography,
  Input,
  InputSearch,
  Icon,
  Select,
  CardTips,
  Card,
  Search,
  Navbar,
  Banner,
  Promote,
  Footer,
} from "@/components";
import "./globals.css";
import Image from "next/image";
import { DetailCard } from "@/Types/DetailCard";
export default function Home() {
  const Cardinfor: DetailCard[] = [
    {
      id: 1,
      companyName: "Wing Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "UX/UI Intership",
      salary: "$150-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-01-2025",
    },
    {
      id: 2,
      companyName: "Sathapana Bank",
      companyLogo: "/images.png",
      peopleAmount: "50+ people",
      jobTitle: "Vue Js Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "09-08-2024",
    },
    {
      id: 3,
      companyName: "ABA Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "React Js Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2045",
    },
    {
      id: 4,
      companyName: "J Trust Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "Mobile app Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2025",
    },
    {
      id: 5,
      companyName: "ABA Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "React Js Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2045",
    },
    {
      id: 6,
      companyName: "J Trust Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "Mobile app Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2025",
    },
    {
      id: 7,
      companyName: "ABA Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "React Js Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2045",
    },
    {
      id: 8,
      companyName: "J Trust Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "Mobile app Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2025",
    },
  ];
  return (
    <>
      <Navbar />
      <Banner />
      {/* <Select />
      <CardTips />
      <Typography
        className="w-[1200px] mx-auto mt-10 text-[#212529] mb-10"
        fontSize="2xl"
      >
        Latest <span className="text-[#4B9960]">Interns</span>
      </Typography>
      <main className="w-[1200px] mx-auto mt-10">
        <div className="grid grid-cols-2 gap-[20px]">
          {Cardinfor.map((job) => (
            <div key={job.id} className="card-container">
              <Card className="w-[60px] h-[60px]" data={job} />
            </div>
          ))}
        </div>
      </main>
      <Promote />
      <Footer /> */}
    </>
  );
}
