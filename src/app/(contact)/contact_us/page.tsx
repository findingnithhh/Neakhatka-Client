import { Button, Icon, Typography } from "@/components";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="container xl:max-w-[1200px] mb-0 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* left */}
          <div className="w-full">
            <div className="flex justify-center items-center mb-0 md:mb-10">
              <Image
                src="/contact/contact_us.svg"
                alt="contact us"
                width={300}
                height={300}
              />
            </div>
            <div className="flex items-center w-full bg-[#F8F9FA] p-5 rounded-xl mt-5">
              <div className="flex">
                <Icon
                  label="Email"
                  className="p-3 rounded-full w-auto bg-[#DEE2E6]"
                  colorBackground="black"
                />
              </div>
              <div className="ml-5">
                <Typography>Email</Typography>
                <Typography>matchinginternship@gmail.com</Typography>
              </div>
            </div>
            <div className="flex items-center w-full bg-[#F8F9FA] p-5 rounded-xl mt-5">
              <div className="flex">
                <Icon
                  label="BlackPhone"
                  className="p-3 rounded-full w-auto bg-[#DEE2E6]"
                  colorBackground="black"
                />
              </div>
              <div className="ml-5">
                <Typography>Phone number</Typography>
                <Typography>+855 96 57 74 927</Typography>
              </div>
            </div>
            <div className="flex items-center w-full bg-[#F8F9FA] p-5 rounded-xl mt-5">
              <div className="flex">
                <Icon
                  label="BlackMap"
                  className="p-3 rounded-full w-auto bg-[#DEE2E6]"
                  colorBackground="black"
                />
              </div>
              <div className="ml-5">
                <Typography>Address</Typography>
                <Typography>2972 Westheimer Rd. Santa Ana </Typography>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full rounded-xl mt-10 md:mt-0 py-0 px-0 md:py-10 md:px-20">
            <Typography fontSize="2xl" className="text-[#4B9960]">
              Get in touch
            </Typography>
            <Typography fontSize="sm" className="my-2">
              24/7 we will answer your questions and problems
            </Typography>
            <div className="flex flex-col justify-center">
              <Input accept="text" placeholder="Your name" className="mt-4" />
              <Input accept="email" placeholder="Your email" className="mt-4" />
              <textarea
                placeholder="Typing somethig..."
                className="text-[14px] p-2 h-72 rounded-md mt-4 border md:mb-0 mb-10"
              />
              <div className="flex justify-end mt-4">
                <Button colorScheme="primary" className="w-[150px] text-white" rounded="lg">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
