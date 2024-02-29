import { Icon, Typography } from "@/components/atoms";
import Image from "next/image";
import React from "react";

const CardReview = () => {
  return (
    <>
      <div className="w-full h-[700px] mt-10 bg-[#F8F8F8] font-Poppins">
        <div className="w-[1200px] h-[200px] mx-auto">
          {/* title */}
          <Typography
            className="ml-10 pt-10 font-semibold capitalize tracking-wide"
            fontSize="2xl"
          >
            What our client say?
          </Typography>
          {/* card */}
          <div className="grid grid-cols-2">
            <div className="m-10">
              <div className="w-[340px] h-[100px] shadow-xl flex items-center px-3 rounded-[6px] ml-20 my-16">
                <div className="flex items-center">
                  <Image
                    src="./person.svg"
                    alt="person"
                    width={54}
                    height={54}
                    className="w-[60px] h-[60px] flex items-center rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <Typography>Tieng Kimlang</Typography>
                    <Typography
                      className="text-[#ADB5BD] tracking-wide"
                      fontSize="xs"
                    >
                      UX/UI designer at SabaiCode
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="w-[340px] h-[100px] shadow-xl flex items-center px-3 rounded-[6px]">
                <div className="flex items-center">
                  <Image
                    src="./person.svg"
                    alt="person"
                    width={54}
                    height={54}
                    className="w-[60px] h-[60px] flex items-center rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <Typography>Tieng Kimlang</Typography>
                    <Typography
                      className="text-[#ADB5BD] tracking-wide"
                      fontSize="xs"
                    >
                      UX/UI designer at SabaiCode
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="w-[340px] h-[100px] shadow-xl flex items-center px-3 rounded-[6px] ml-20 my-16">
                <div className="flex items-center">
                  <Image
                    src="./person.svg"
                    alt="person"
                    width={54}
                    height={54}
                    className="w-[60px] h-[60px] flex items-center rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <Typography>Tieng Kimlang</Typography>
                    <Typography
                      className="text-[#ADB5BD] tracking-wide"
                      fontSize="xs"
                    >
                      UX/UI designer at SabaiCode
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-10 flex justify-center items-center">
              <div className="w-[450px]">
                <q>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
                  purus in adipiscing vel dolor donec. In in id ultrices
                  maecenas et. Nibh faucibus neque.
                </q>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CardReview };
