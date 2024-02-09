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
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Select />
      <CardTips />
      <Card />
      <Promote />
      <Footer />
    </>
  );
}
