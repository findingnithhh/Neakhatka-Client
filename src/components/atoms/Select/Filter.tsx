import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filter = () => {
  return (
    <div className="container flex justify-center mt-24 mb-4 mx-auto flex-wrap">
      <div className="mx-2 mb-2 w-full md:w-auto">
        <Select>
          <SelectTrigger className="w-full md:w-[250px]">
            <SelectValue placeholder="Occupation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Web Developer">Web Developer</SelectItem>
            <SelectItem value="Mobile Developer">Mobile Developer</SelectItem>
            <SelectItem value="UX/UI Designer">UX/UI Designer</SelectItem>
            <SelectItem value="Software Engineer/Developer">
              Software Engineer/Developer
            </SelectItem>
            <SelectItem value="Network Engineer">Network Engineer</SelectItem>
            <SelectItem value="Database Administrator">
              Database Administrator
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mx-2 mb-2 w-full md:w-auto">
        <Select>
          <SelectTrigger className="w-full md:w-[250px]">
            <SelectValue placeholder="Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="full time">Full Time</SelectItem>
            <SelectItem value="part time">Part Time</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mx-2 mb-2 w-full md:w-auto">
        <Select>
          <SelectTrigger className="w-full md:w-[250px]">
            <SelectValue placeholder="Salary" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="non paid">Non-Paid</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export { Filter };
