import { Poppins } from "next/font/google";
import Nav from "@/components/organisms/Navbar/nav";
import { Footer } from "@/components";
import '../globals.css'
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const Favorite = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav />
        <section>{children}</section>
        <Footer />
      </body>
    </html>
  );
};

export default Favorite;
