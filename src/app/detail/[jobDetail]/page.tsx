"use client";
import React from "react";
import { useContext } from "react";
import { Icon, Typography } from "@/components";
import { Button } from "@nextui-org/react";
import Image from "next/legacy/image";
import '../../globals.css'
import { MyContext } from "@/contexts/CardInfoContext";
import { useParams } from "next/navigation";
import Modal from "@/components/molecules/Modal/Modal";
import { useState } from "react";
import { PiWarningCircleFill } from "react-icons/pi";

const Detail = () => {
  const { CardInfo } = useContext(MyContext);
  const route = useParams();
  const card= route.jobDetail;
  const CardDetail = CardInfo.find((data)=>data.id == card);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full md:container mx-auto p-2 lg:p-0">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-5">
          <div className="col-span-7 p-2 lg:py-8 lg:px-14 border rounded-lg">
            <div className="flex justify-between mt-5">
              <div>
                {/* intern title */}
                <Typography className="text-[#4B9960] text-[18px] md:text-[24px]">
                  {`${CardDetail?.jobTitle}`}
                </Typography>
                {/* salary */}
                <Typography>{`${CardDetail?.salary}`}</Typography>
              </div>
              <div className="flex justify-center items-center">
                <Icon className="mr-5" label="Star" size="md" />
                <Button
                  onClick={() => setIsOpen(true)}
                  className="bg-[#4B9960] outline-none text-white text-[14px] md:text-[16px]"
                >
                  Apply now
                </Button>
                <Modal
                  isOpen={isOpen}
                  onClose={() => setIsOpen(false)}
                  size="lg"
                  corner="2xl"
                >
                  <div className="bg-white p-8">
                    <h1 className="flex justify-center flex-col items-center">
                      <label
                        htmlFor="uploadFile1"
                        className="bg-white text-black text-base rounded w-full py-20 flex flex-col items-center justify-center gap-2 cursor-pointer border-2 border-gray-300 border-dashed mx-auto"
                      >
                        <Icon label="FileUpload" />
                        <input
                          type="file"
                          id="uploadFile1"
                          className="hidden"
                        />
                        <p className="text-base text-gray-900 mt-2">
                          Drag and drop file here
                        </p>
                        <p>or</p>
                        <p className="text-blue-600">Brow your file here</p>
                      </label>
                    </h1>
                    <div className="flex flex-col text-white">
                      <Button className="mt-6 bg-[#4B9960] text-white">
                        Upload Now
                      </Button>
                      <Button
                        onClick={() => setIsOpen(false)}
                        className="mt-3 bg-white text-black border border-red-500"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
            {/* table */}
            <div className="mt-10 overflow-x-auto">
              {/* row */}
              <div className="grid grid-cols-2 lg:grid-cols-4">
                <div className="col-span-2">
                  <table className="w-full border-collapse border border-slate-500">
                    <tbody>
                      <tr>
                        <td className="w-1/2 border bg-[#F2F2F2] py-2 px-2">
                          Duration
                        </td>
                        <td className="w-1/2 border text-gray-500 py-2 px-2">
                          3 months
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-span-2">
                  <table className="w-full border-collapse border">
                    <tbody>
                      <tr>
                        <td className="w-1/2 border border-l-0 outline-none bg-[#F2F2F2] py-2 px-2">
                          Location
                        </td>
                        <td className="w-1/2 border text-gray-500 py-2 px-2">
                          {`${CardDetail?.location}`}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* row */}
              <div className="grid grid-cols-2 lg:grid-cols-4">
                <div className="col-span-2">
                  <table className="w-full border-collapse border border-slate-500">
                    <tbody>
                      <tr>
                        <td className="w-1/2 border bg-[#F2F2F2] py-2 px-2">
                          Duration
                        </td>
                        <td className="w-1/2 border text-gray-500 py-2 px-2">
                          3 months
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-span-2">
                  <table className="w-full border-collapse border">
                    <tbody>
                      <tr>
                        <td className="w-1/2 border border-l-0 outline-none bg-[#F2F2F2] py-2 px-2">
                          Deadline
                        </td>
                        <td className="w-1/2 border text-gray-500 py-2 px-2">
                          {`${CardDetail?.DeadLine}`}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-8">
              {/* description */}
              <Typography fontSize="lg">Job Descriptions</Typography>
              <Typography fontSize="sm" className="text-gray-600 mt-1">
                We are currently looking for a talented and team player to join
                with us!
              </Typography>
            </div>
            <div className="mt-8">
              {/* responsibilities */}
              <Typography fontSize="lg">Job Responsibilities</Typography>
              <Typography fontSize="sm" className="text-gray-600 mt-1">
                <ul className="leading-10">
                  <li className="list-disc ml-4">
                    Follow the software development while applying internal
                    coding standards and provide detailed project estimates and
                    work plan.
                  </li>
                  <li className="list-disc ml-4">
                    Interact with project leaders and business on assigned
                    projects.
                  </li>
                  <li className="list-disc ml-4">
                    Complete assigned tasks in a timely manner with high quality
                    and documentation.
                  </li>
                  <li className="list-disc ml-4">
                    Collaborate with a team to define, design, and completely
                    new features.
                  </li>
                  <li className="list-disc ml-4">
                    Identify and correct bottlenecks and fix bugs.
                  </li>
                  <li className="list-disc ml-4">
                    Help maintain code quality, organization, and
                    automatization.
                  </li>
                  <li className="list-disc ml-4">
                    Take smart risks and champion new ideas.
                  </li>
                </ul>
              </Typography>
            </div>
            <div className="mt-8">
              {/* requirements */}
              <Typography fontSize="lg">Job Requirements</Typography>
              <Typography fontSize="sm" className="text-gray-600 mt-1">
                <ul className="leading-10">
                  <li className="list-disc ml-4">
                    Honest, responsible, hard-working with positive attitude and
                    drive for self-improvement.
                  </li>
                  <li className="list-disc ml-4">
                    1 years+ experience in web development.
                  </li>
                  <li className="list-disc ml-4">
                    Fluency in Python or Go or C++.
                  </li>
                  <li className="list-disc ml-4">
                    Experience REST/RESTful API and web service.
                  </li>
                  <li className="list-disc ml-4">
                    Experience in HTML5, JavaScript, CSS, or SCSS/SASS.
                  </li>
                  <li className="list-disc ml-4">
                    Help maintain code quality, organization, and
                    automatization.
                  </li>
                  <li className="list-disc ml-4">
                    Fluency in ASP.Net, JQuery, PHP and/or NodeJS is a plus
                  </li>
                </ul>
              </Typography>
            </div>
          </div>
          <div className="col-span-7 lg:col-span-3 rounded-lg py-10 px-5 border h-[500px] ">
            <div className="flex justify-center items-center flex-col">
              <Image
                src="/company.svg"
                alt="company logo"
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
              <Typography
                fontSize="lg"
                className="mt-5"
              >{`${CardDetail?.companyName}`}</Typography>
            </div>
            <div className="mt-10">
              <Typography className="leading-10 truncate">San Visal</Typography>
              <Typography className="leading-10 truncate">
                smilecomputertechnology@gmail.com
              </Typography>
              <Typography className="leading-10 truncate">
                +855 984 383 330
              </Typography>
              <Typography className="leading-10 truncate">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
