import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Nav from "@/components/organisms/Navbar/Nav";
import { Footer } from "@/components";
import CardContext from "@/contexts/CardInfoContext";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Neakhatka",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.svg" />
      <body className={poppins.className}>
        <Nav />
        <CardContext>{children}</CardContext>
        <Footer />
      </body>
    </html>
  );
}
