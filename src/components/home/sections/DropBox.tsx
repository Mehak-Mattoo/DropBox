import React from "react";
import logo from "../../../../public/images/dropboxwhite.png";
import Image from "next/image";

const DropBox = () => {
  return (
    <div className="bg-[#0061fe] md:p-2 lg:p-6 flex h-16 w-18 absolute left-1/2 top-[19.8rem] md:top-[21.5rem] md:w-28 lg:h-26 lg:w-28  sm:w-32 sm:h-17 items-center justify-center lg:left-[37rem] lg:top-[13.5rem] ">
      <Image src={logo} alt="DropBox Logo"className=" lg:w-40 sm:w-14 w-10   "/>
    </div>
  );
};

export default DropBox;
