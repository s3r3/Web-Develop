import { FaFacebook, FaFolderOpen, FaHeart } from "react-icons/fa";
import { IoMdHome, IoIosSettings } from "react-icons/io";
import { IoCalendarNumber } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";

const Aside = () => {
  const menuItems = [
    { icon: <IoMdHome className="w-6 h-6" />, label: "Home" },
    { icon: <FaFolderOpen className="w-6 h-6" />, label: "Projects" },
    { icon: <IoCalendarNumber className="w-6 h-6" />, label: "Calendar" },
    { icon: <FaHeart className="w-6 h-6" />, label: "Favorites" },
    { icon: <IoIosSettings className="w-6 h-6" />, label: "Settings" },
    { icon: <RiLogoutBoxRFill className="w-6 h-6" />, label: "Logout" },
  ];

  return (
    <div className="h-[70px] sticky top-6 left-0   ">
      <nav className="  w-[94px]  bg-red-500 rounded-md flex flex-col items-center p-3 gap-10 shadow-md ">
        <div className="relative group cursor-pointer p-2 rounded-md transition-all duration-300 ">
          <FaFacebook className="w-[45px] h-[45px] text-white" />
        </div>

        <ul className="flex flex-col items-center  gap-6  ">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative w-[55px] p-3 flex justify-center text-white rounded-md cursor-pointer transition-all duration-300 hover:bg-white hover:text-red-500 hover:rounded-l-full hover:rounded-r-md hover:w-[78px] hover:ml-10 hover:flex hover:justify-center hover:items-center hover:pr-10 "
            >
              {item.icon}
            </li>
          ))}
        </ul>
      </nav>
      {/* isi konten lainnya */}
    </div>
  );
};

export default Aside;
