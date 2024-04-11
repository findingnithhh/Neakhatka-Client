import { Poppins } from "next/font/google";
import Nav from "@/components/organisms/Navbar/nav";
import { Footer } from "@/components";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const DatailLayout = ({ children }: { children: React.ReactNode }) => {
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

export default DatailLayout;
