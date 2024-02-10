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
  const Cardinfor:DetailCard[]=[
    {
      id: 1,
      companyName: "Wing Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "React Js Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2045",

    },
    {
      id: 2,
      companyName: "Wing Bank",
      companyLogo: "/images.png",
      peopleAmount: "100+ people",
      jobTitle: "React Js Intership",
      salary: "$100-$200",
      location: "Phnom Penh",
      Emploment: "Full-Time",
      DeadLine: "01-08-2045",

    }
  ]     
  return (
    <>
      <Navbar />
      <Banner />
      <Select />
      <CardTips />
      <Typography className="text-[#212529] mb-10" fontSize="2xl">
          Latest <span className="text-[#4B9960]">Interns</span>
      </Typography>
      <div>
      {Cardinfor.map((job) => (
                  <div key={job.id} className="card-container">
                    <Card className="w-[60px] h-[60px]" data={job} />
                  </div>
        ))}
      </div>
      <Promote />
      <Footer />
    </>
  );
}
