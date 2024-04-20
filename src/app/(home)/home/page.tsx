'use client'
import {
  Typography,
  Icon,
  Card,
  Search,
  Navbar,
  Banner,
  CardReview,
  Footer,
  Filter,
  Button,
} from "@/components";
import "../../globals.css";
import CardTip from "@/components/molecules/Card/CardTip";
import CardList from "@/components/molecules/Card/CardList";

export default function Home() {
  return (
    <>
      <Banner />
      <Filter />
      <CardTip />
      <CardList />
      <CardReview />
    </>
  );
}
