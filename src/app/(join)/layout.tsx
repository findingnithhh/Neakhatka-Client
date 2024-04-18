import { Poppins } from "next/font/google";
import Nav from "@/components/organisms/Navbar/nav";
import { Footer } from "@/components";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const JoinLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <section>{children}</section>
      </body>
    </html>
  );
};

export default JoinLayout;
