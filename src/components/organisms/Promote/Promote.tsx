import React from "react";
import {
  Button,
  Typography,
  Input,
  InputSearch,
  Icon,
  Select,
  CardTips,
  Search,
  Navbar,
  Banner,
} from "@/components";
const Promote = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <Button colorOutline="primary" size="md" >
          See more
        </Button>
      </div>
      <div className="w-[1200px] h-[131px] shadow-lg mx-auto my-10 rounded-xl flex justify-between items-center px-20">
        <div>
          <Typography
            fontSize="2xl"
            variant="bold"
            className="text-[#4B9960] text-center"
          >
            500+
          </Typography>
          <Typography fontSize="sm" className="text-[#4B9960]">
            Post dreams internship
          </Typography>
        </div>
        <div className="mr-16">
          <Typography
            fontSize="2xl"
            variant="bold"
            className="text-[#4B9960] text-center"
          >
            50+
          </Typography>
          <Typography fontSize="sm" className="text-[#4B9960]">
            Companies
          </Typography>
        </div>
        <div>
          <Typography
            fontSize="2xl"
            variant="bold"
            className="text-[#4B9960] text-center"
          >
            1200+
          </Typography>
          <Typography fontSize="sm" className="text-[#4B9960]">
            Seekers
          </Typography>
        </div>
      </div>
    </>
  );
};

export { Promote };
