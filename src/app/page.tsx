import {
  // Button,
  Typography,
  Input,
  InputSearch,
  Icon,
  // Select,
  Card,
  Search,
  Navbar,
  Banner,
  CardReview,
  Footer,
  Filter,
} from "@/components";
import "./globals.css";
import Image from "next/image";
import { DetailCard } from "@/Types/DetailCard";
import { Button } from "@/components/ui/button";
import CardTip from "@/components/molecules/Card/CardTip";
import Nav from "@/components/organisms/Navbar/nav";
import CardList from "@/components/molecules/Card/CardList";

export default function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <Filter />
      <CardTip />
      <CardList />
      <CardReview />
      <Footer />
    </>
  );
}
