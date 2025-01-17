import { IoArrowBackCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoIosChatbubbles, IoIosNotifications } from "react-icons/io";
import Choice from "../com/choice";
import Recent from "../com/cardRecent";
import Active from "../com/active";
import Newest from "../com/newest";
const Navbar = () => {
  return (
    <div className="flex gap-3 flex-col ">
      <div className="flex gap-3">
        <IoArrowBackCircleOutline className="w-[44px] h-[44px]" />
        <div className="w-[568px] h-[44px] bg-red-500 text-white rounded-[34px] flex justify-start items-center gap-3 px-2">
          <CiSearch className="w-[24px] h-[24px]" />
          <input
            type="text"
            className="border-none outline-none bg-transparent w-full "
          />
        </div>
        <div className="w-[44px] h-[44px] bg-red-500 text-white rounded-full items-center justify-center flex">
          <IoIosChatbubbles className="w-[24px] h-[24px]" />
        </div>
        <div className="w-[44px] h-[44px]  bg-red-500 text-white rounded-full items-center justify-center flex">
          <IoIosNotifications className="w-[24px] h-[24px]" />
        </div>
      </div>
      
      <div className="flex flex-col gap-3">
        <Choice/>
        <h1>Recent Search</h1>
        <Recent/>
        <div className="flex gap-2">
          <h1 className="text-xl underline">Active</h1>
          <h1 className="text-xl">Complete</h1>
        </div>
        <Active/>
        <h1 className="text-xl ">Newest Class</h1>
        <Newest/>

      </div>
    </div>
  );
};
export default Navbar;
