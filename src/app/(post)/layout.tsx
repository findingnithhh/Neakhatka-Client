import { Poppins } from "next/font/google";
import Nav from "@/components/organisms/Navbar/Nav";
import { Footer } from "@/components";
import "../globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const Postlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <section>{children}</section>
      </body>
    </html>
  );
};

export default Postlayout;
