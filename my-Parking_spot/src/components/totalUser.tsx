// totalUser.tsx
import React, { useState } from "react";
import CountUp from "react-countup";
import IMAGES from "../assets/images";
const TotalUser = () => {
    const [isaAnimationComplete, setIsAnimationComplete] = useState(true);
  return (
    <div>
      <div>
        <div className="w-[320px] h-[321px] bg-white flex items-center justify-center rounded-[39px] flex-col gap-2">
          <CountUp
            start={0}
            end={500}
            duration={5}
            onEnd={() => setIsAnimationComplete(true)}
            suffix={isaAnimationComplete ? "+" : ""}
            className="text-6xl font-bold text-black text-[96px] font-medium bg-gradient-to-b from-[#FF9A9A] to-[#F90D0D] bg-clip-text text-transparent"
          />
          <h1 className="text-[24px] font-medium">Total User</h1>
          <div className="flex -space-x-4 rtl:space-x-reverse">
            <img src={IMAGES.picture2} alt="" className="w-[78px] h-[78px] border-2 border-white rounded-full dark:border-gray-800 object-cover" />
            <img src={IMAGES.picture3} alt="" className="w-[78px] h-[78px] border-2 border-white rounded-full dark:border-gray-800 object-cover" />
            <img src={IMAGES.picture4} alt="" className="w-[78px] h-[78px] border-2 border-white rounded-full dark:border-gray-800 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalUser;
