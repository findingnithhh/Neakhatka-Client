import React from "react";
import {
  Button,
  Typography,
  Input,
  InputSearch,
  Icon,
  Select,
  Search,
  Banner,
  Promote,
} from "@/components";
import Image from "next/legacy/image";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#212529] py-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0 pr-8 text-white font-Poppins text-[14px]">
            <Image src="/logo.svg" alt="next" width={50} height={50} />
            <p className="my-5">
              Matching Internship is a platform that focuses only on internships
              in Cambodia.
            </p>
            <span>Copyright © 2024 All Rights Reserved.</span>
          </div>

          <div className="w-full sm:w-1/3 mb-8 sm:mb-0 pr-8 text-white ">
            <p>Contact Us</p>
            <div className="my-5 flex font-Poppins text-[14px]">
              <Icon label="Map" className="mr-2" />
              <span>
                #12, Street 2001, Phum Paprak Khang Tboung, Sangkat Kakab, Khan
                Porsenchey, Phnom Penh, Cambodia
              </span>
            </div>
            <div className="my-5 flex font-Poppins text-[14px]">
              <Icon label="Phone" className="mr-2" />
              <span>+855 96 57 74 927</span>
            </div>
            <div className="mb-3 flex font-Poppins text-[14px]">
              <Icon label="Mail" className="mr-2" />
              <span>matchinginternshipinfo@gmail.com</span>
            </div>
          </div>

          <div className="w-full sm:w-auto text-white ">
            <div className="">
              <p>Our Social Media</p>
            </div>
            <div className="py-5 flex gap-4 font-Poppins text-[14px]">
              <a href="https://www.facebook.com/profile.php?id=61550779933720">
                <Icon label="Facebook" />
              </a>
              <a href="https://t.me/MaNith_Svat" target="_blank">
                <Icon label="Telegram" />
              </a>
              <a href="https://twitter.com/neakhatka">
                <Icon label="X" />
              </a>
              <a href="">
                <Icon label="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
