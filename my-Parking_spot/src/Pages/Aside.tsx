// src/Aside.tsx
import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaParking, FaRegCalendarAlt, FaQuestionCircle } from "react-icons/fa";
import { RiServiceFill, RiDashboardHorizontalFill } from "react-icons/ri";
import { AiFillCreditCard } from "react-icons/ai";
import { IoLogOutSharp } from "react-icons/io5";
import Main from "./Main";


const Aside: React.FC = () => {
  return (
    <div className=" flex ">
      <div className=" flex flex-col gap-[112px] py-20 px-10">
        <MdDashboard className="text-4xl text-customRed" />
        <FaParking className="text-4xl text-slate-200" />
        <RiServiceFill className="text-4xl text-slate-200" />
        <FaRegCalendarAlt className="text-4xl text-slate-200" />
        <RiDashboardHorizontalFill className="text-4xl text-slate-200" />
        <AiFillCreditCard className="text-4xl text-slate-200" />
        <FaQuestionCircle className="text-4xl text-slate-200" />
        <IoLogOutSharp className="text-4xl text-slate-200" />
      </div>
      <Main />
    
    </div>
  );
};
export default Aside;
