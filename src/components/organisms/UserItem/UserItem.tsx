import React from "react";
import Image from "next/image";
const UserItem = () => {
  return (
    <div className="flex items-center justify-center gap-2 p-4 w-full rounded-md">
      <div className="avatar rounded-full h-12 w-12 text-white font-[700] flex items-center justify-center">
        {/* <p>FD</p> */}
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
      </div>
      <div>
        <p className="uppercase font-black">Neakhatka</p>
      </div>
    </div>
  );
};

export {UserItem};
