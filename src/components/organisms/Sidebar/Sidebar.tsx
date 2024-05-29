import React from "react";
import { UserItem } from "../UserItem";
// import { IoHomeOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { PiSignOut } from "react-icons/pi";
import { TbEdit } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[300px] min-w-[300px] border-r ">
      <UserItem />
      <div className="mt-5 text-sm flex flex-col gap-2 px-2">
        <div className="w-full px-4 py-3 flex items-center rounded-lg">
          <MdDashboard className="mx-2" />
          <a href="/dashboard" className="ml-2">
            Dashboard
          </a>
        </div>
        <div className="w-full px-4 py-3 flex items-center rounded-lg">
          <FaRegUser className="mx-2" />
          <a href="/dashboard/profile" className="ml-2">
            Profile
          </a>
        </div>
        <div className="w-full px-4 py-3 flex items-center rounded-lg">
          <TbEdit className="mx-2" />
          <a href="/dashboard/" className="ml-2">
            Post Job
          </a>
        </div>
        <div className="w-full px-4 py-3 flex items-center rounded-lg">
          <TbEdit className="mx-2" />
          <a href="/dashboard/candidates" className="ml-2">
            Candidates
          </a>
        </div>
        <div className="w-full px-4 py-3 flex items-center rounded-lg ">
          <PiSignOut className="mx-2" />
          <a href="/dashboard/" className="ml-2">
            Sign Out
          </a>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
