import React, { useState } from "react";
import { MdOutlineNightlight,  } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import IMAGES from "../assets/images";
const Navbar: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        
        <nav className="flex items-center justify-between  p-5 gap-4 bg-white shadow-md">
            {/* ini Adalah DarkMode  */}
            <div className="flex-1 relative left-[120px]">
                <div className="w-[108px] h-[48.6px] bg-customRed rounded-[41px] flex justify-end items-center p-2 ">
                    <div className="w-[37.8px] h-[37.8px] bg-white rounded-full  justify-center items-center flex cursor-pointer">
                        <MdOutlineNightlight className="w-[27px] h-[27px] text-customRed" />
                    </div>
                </div>
            </div>
            {/* ini Adalah DashBoard */}
            <div className="flex-1 left-[120px] justify-center relative ">
                <h1 className="font-family: 'Poppins', sans-serif; text-black text-[40px] font-medium gap-4">Dashboard</h1>
            </div>
            {/* ini Adalah Search */}
            <div >
                <div className="w-[340px] h-[54px] border-black border-2 rounded-full  flex items-center justify-end">
                    <div className="w-[42px] h-[42px] bg-customRed rounded-full flex items-center justify-center mr-2 cursor-pointer" >
                    <FaSearch className="w-[27px] h-[27px]   text-white " />
                    </div>
                </div>
            </div>
            {/* ini Adalah Notification */}
            <div>
            <IoIosNotificationsOutline className="w-[37px] h-[37px] text-customRed" />
            </div>
            {/* ini Adalah Profile avatar */}
            <div >
                <img src={IMAGES.picture} alt="" className="w-[62px] h-[62px]  rounded-full object-cover" />
            </div>
        </nav>
    )
}
export default Navbar;