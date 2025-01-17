import { IoCodeSlashOutline } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";

const Choice = () =>{
    return(
        <div className=" flex gap-4 items-center cursor-pointer">
            <div className="w-[140px] h-[45px] bg-black rounded-full flex items-center justify-start p-4 gap-3">
                <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center bg-white">
                    <IoCodeSlashOutline className="text-xl"/>
                </div>
                <h1 className="text-white text-md">Coding</h1>
            </div>

            <div className="w-[140px] h-[45px] bg-black rounded-full flex items-center justify-start p-4 gap-3">
                <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center bg-white">
                    <MdDesignServices className="text-xl"/>
                </div>
                <h1 className="text-white text-md">Design</h1>
            </div>

            <div className="w-[160px] h-[45px] bg-black rounded-full flex items-center justify-start p-4 gap-3">
                <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center bg-white">
                    <FaChartPie className="text-xl"/>
                </div>
                <h1 className="text-white text-md">Marketing</h1>
            </div>

            <div className="w-[160px] h-[45px] bg-black rounded-full flex items-center justify-start p-4 gap-3">
                <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center bg-white">
                    <RiBankFill className="text-xl"/>
                </div>
                <h1 className="text-white text-md">Accounting</h1>
            </div>

            <h1 className=" px-3 underline">See all</h1>

        </div>
    )
}
export default Choice;