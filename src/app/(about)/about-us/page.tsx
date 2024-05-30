import { Button, Typography } from "@/components";
import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutUs = () => {
  return (
    <>
      <div className="container xl:max-w-[1200px]">
        <div>
          <div className="flex justify-center items-center pt-0 lg:pt-10">
            <div>About Us</div>
          </div>
          <div className="mx-0 md:mx-12 mt-10">
            <Typography fontSize="3xl">
              Why <span className="text-[#4B9960] font-bold">Neakhatka</span>?
            </Typography>
          </div>
          <div className="mt-10 px-0 md:px-12">
            <Typography className="text-justify md:text-center text-gray-500">
              Neakhatka is dedicated to connecting students and recent graduates
              with valuable internship experiences across Cambodia. Our
              user-friendly website offers a comprehensive database of
              internship opportunities in various industries, helping you
              kickstart your career and gain practical experience. Start your
              journey towards a successful career today with Neakhatka!
            </Typography>
          </div>
          <div className="mt-10 px-0 md:px-16">
            <Image
              src="/about/banner.svg"
              alt="About us image"
              width={200}
              height={200}
              className="w-full rounded-2xl"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-5 md:py-10 px-5 md:px-10">
          <div className="flex justify-center items-center flex-col">
            <Typography fontSize="xl" className="mb-4">
              Our vision
            </Typography>
            <Typography className="text-center p-0 md:px-20 text-gray-500">
              Change the way companies and internship seekers connect, make it
              easier and more effective.
            </Typography>
          </div>

          <div className="flex justify-center items-center flex-col">
            <Typography fontSize="xl" className="mb-4 mt-10 md:mt-0">
              Our mission
            </Typography>
            <Typography className="text-center p-0 md:px-20 text-gray-500">
              Built a simplify platform that help both companies and seekers
              that matching requirement and seeker’s skill
            </Typography>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div>
            <Typography fontSize="xl" className="mb-8 mt-5 md:mt-0">
              Our Exclusive Team
            </Typography>
          </div>
          <div className="mx-0 xl:mx-36 text-center text-gray-500">
            Welcome to the team! We are a group of passionate individuals
            working together to achieve our goals. Get to know the faces behind
            our success.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mx-0 md:mx-20 mt-10">
          <div className="flex justify-center items-center flex-col gap-2">
            <Image
              src="/about/user1.svg"
              alt="user"
              width={100}
              height={100}
              className="w-[300px] rounded-xl"
            />
            <Typography>Svat Manith</Typography>
            <Typography className="text-gray-500">UX/UI designer</Typography>
          </div>
          <div className="flex justify-center items-center flex-col gap-2">
            <Image
              src="/about/user1.svg"
              alt="user"
              width={100}
              height={100}
              className="w-[300px] rounded-xl"
            />
            <Typography>Chhun Rathna</Typography>
            <Typography className="text-gray-500">
              Frontend Developer
            </Typography>
          </div>
          <div className="flex justify-center items-center flex-col gap-2">
            <Image
              src="/about/user1.svg"
              alt="user"
              width={100}
              height={100}
              className="w-[300px] rounded-xl"
            />
            <Typography>San Visal</Typography>
            <Typography className="text-gray-500">Backend Developer</Typography>
          </div>
        </div>
        <div className="flex justify-center items-center my-16">
          <Typography fontSize="xl">Frequently Asked Question</Typography>
        </div>
        <div className="mx-0 md:mx-20 mb-20">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is an internship and why should I consider doing one?
              </AccordionTrigger>
              <AccordionContent>
                An internship is a short-term work experience offered by
                companies to provide practical exposure to students and recent
                graduates. By doing an internship, you can gain valuable
                real-world experience, develop essential skills, explore career
                options, and build a professional network.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How can I find internships relevant to my field of study or
                career interests?
              </AccordionTrigger>
              <AccordionContent>
                Our website offers a comprehensive database of internships
                across various industries and sectors. You can search for
                internships based on your field of study, time, and preferred
                industry. We regularly update our listings to provide you with
                the latest internship opportunities.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Do I need previous work experience to apply for an internship?
              </AccordionTrigger>
              <AccordionContent>
                While some internships may require previous work experience,
                many are designed for students and recent graduates with little
                to no prior experience. Employers understand that internships
                are meant to provide you with hands-on learning opportunities,
                so do not hesitate to apply even if you have not had previous work
                experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Are internships paid or unpaid?
              </AccordionTrigger>
              <AccordionContent>
                Internships can be paid or unpaid, depending on the company and
                the nature of the internship. While some internships offer a
                stipend or hourly wage, others may provide academic credit or
                valuable experience without monetary compensation. We encourage
                you to carefully review the internship listing for details
                regarding compensation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
