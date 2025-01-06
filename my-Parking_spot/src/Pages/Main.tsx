import { IoMdArrowDropdown } from "react-icons/io";
import LineChart from "../components/chart";
import TotalUser from "../components/totalUser";
import TodayBooking from "../components/todayBooking";
import Spaces from "../components/availableSpaces";
import RevenueDay from "../components/revenueDayRatio";
import CustomizedTables from "../components/table";
const Main = () => {
  return (
    <div>
      <div className="w-[1120px] h-[1656px] bg-red-200 rounded-[44px] p-10">
        <div className="flex flex-col gap-5">
          <div className="flex  gap-10">
            <div className="w-[650px] h-[316px] bg-white rounded-[39px]">
              <div className="flex flex-col p-5">
                <div className="flex gap-5 justify-between items-center px-5">
                  <h1 className="font-bold capitalize">Revenue</h1>
                  <div className="w-[102px] h-[26px] border-2 border-black border-opacity-[50%] rounded-[7px] flex items-center justify-center text-sm opacity-[60%]">
                    Monthly
                    <IoMdArrowDropdown className="text-2xl" />
                  </div>
                  <div className="flex-1 flex justify-end">
                    <div className="w-[108px] h-[76px] absolute rounded-[8px] border-2 border-black border-opacity-[10%] top-40 flex justify-center items-start flex-col p-2">
                      <h1 className="text-sm font-medium py-[2px]">June 2023</h1>
                      <div className="flex flex-col gap-[5px]">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <h1 className="text-[10px] font-medium">Income 140K</h1>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                          <h1 className="text-[10px] font-medium">Expenses 95K</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <LineChart />
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <TotalUser />
            </div>
          </div>
          <div className="flex gap-10">
            <TodayBooking />
            <Spaces />
            <RevenueDay />
          </div>
          <div className="flex">
            <CustomizedTables />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
