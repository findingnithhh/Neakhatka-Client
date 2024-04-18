import { Button, Icon, Typography } from "@/components/atoms";
import Image from "next/legacy/image";
import React from "react";
const BackUp = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-12">
        <Button colorOutline="primary" size="md" rounded="lg">
          See more
        </Button>
      </div>
      <div className="w-full h-auto mt-10 bg-[#efefef] font-Poppins">
        <div className="w-[1200px] h-auto mx-auto">
          {/* title */}
          <Typography
            className="ml-10 pt-10 font-semibold capitalize tracking-wide"
            fontSize="2xl"
          >
            What our client say?
          </Typography>
          {/* card */}
          <div className="grid grid-cols-2">
            <div className="mx-10">
              <div className="w-[340px] h-[100px] shadow-xl flex items-center px-3 rounded-[6px] ml-20 my-16">
                <div className="flex items-center">
                  <Image
                    src="/userProfile/user.svg"
                    alt="person"
                    width={54}
                    height={54}
                    className="w-[60px] h-[60px] flex items-center rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <Typography>Tang Sapho</Typography>
                    <Typography
                      className="text-[#ADB5BD] tracking-wide"
                      fontSize="xs"
                    >
                      React Js at Cellcard
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="w-[340px] h-[100px] shadow-xl flex items-center px-3 rounded-[6px]">
                <div className="flex items-center">
                  <Image
                    src="./userProfile/user1.svg"
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
          {/* card */}
          <div className="grid grid-cols-2 grid-container">
            <div className="m-10 flex justify-center items-center">
              <div className="w-[450px]">
                <q>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
                  purus in adipiscing vel dolor donec. In in id ultrices
                  maecenas et. Nibh faucibus neque.
                </q>
              </div>
            </div>
            <div className="mx-10 float-right">
              <div className="w-[340px] h-[100px] shadow-xl flex items-center px-3 rounded-[6px] mr-20 my-16 float-right">
                <div className="flex items-center">
                  <Image
                    src="./userProfile/user1.svg"
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
              <div className="w-[340px] h-[100px] shadow-xl flex items-center px-3 rounded-[6px] float-right">
                <div className="flex items-center">
                  <Image
                    src="/userProfile/user.svg"
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
              <div className="w-[340px] h-[100px] shadow-xl flex items-center px-3 rounded-[6px] mr-20 my-16 float-right">
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
          </div>
        </div>

        {/* new */}
        {/* card */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-end">
            <div className="w-[450px] h-[500px] flex justify-center items-center">
              <div className="w-[450px]">
                <q>{selectedDescription}</q>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            {user.map((items, index) => (
              <div
                key={items.id}
                className={`w-[340px] h-[100px] shadow-xl flex items-center px-3 rounded-[6px] my-16 ${
                  expanded === items.id ? "bg-gray-50" : ""
                } ${index === 1 ? "ml-20" : ""}`}
                onClick={() => handleToggle(items.id, items.description)}
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center">
                  <Image
                    src={items.image}
                    alt="person"
                    width={54}
                    height={54}
                    className="w-[60px] h-[60px] flex items-center rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <Typography>{items.name}</Typography>
                    <Typography
                      className="text-[#ADB5BD] tracking-wide"
                      fontSize="xs"
                    >
                      {items.position}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BackUp;
