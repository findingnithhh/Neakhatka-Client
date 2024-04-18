import { Poppins } from "next/font/google";
import Nav from "@/components/organisms/Navbar/nav";
import { Footer } from "@/components";
import CardContext from "@/contexts/CardInfoContext";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const DatailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav />
        <CardContext><section>{children}</section></CardContext>
        <Footer />
      </body>
    </html>
  );
};

export default DatailLayout;
