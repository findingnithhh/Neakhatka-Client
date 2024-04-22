import { Poppins } from "next/font/google";
import Nav from "@/components/organisms/Navbar/Nav";
import { Footer } from "@/components";
import "../globals.css";
import { Metadata } from "next";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Contact Us, Neakhatka.com",
  description: "Generated by create next app",
};
const ContactUs = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.svg" />
      <body className={poppins.className}>
        <Nav />
        <section>{children}</section>
        <Footer />
      </body>
    </html>
  );
};

export default ContactUs;
