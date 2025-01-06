// src/revenueDayRatio.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CountUp from 'react-countup';
import { increment, decrement, setCount } from '../features/revenueDayRatioSlice';
import { GoGraph } from 'react-icons/go';
const RevenueDay = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.revenueDayRatio.count);

  return (
    <div>
      <div className="w-[310px] h-[321px] bg-white rounded-[39px] flex items-center justify-center flex-col gap-5">
        <CountUp
          start={0}
          end={count}
          duration={5}
          className="text-6xl font-bold text-[96px] font-medium bg-gradient-to-b from-[#FF9A9A] to-[#F90D0D] bg-clip-text text-transparent"
        />
        <div className="w-[280px] h-[69px] rounded-[34.5px] bg-black bg-opacity-[4%] border border-[#FC5454] flex justify-center items-center gap-2">
          <GoGraph className='w-[27px] h-[27px] text-[#FC5454]' />
          <h1 className="text-[24px]">Revenue Day Ratio</h1>
        </div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );

};

export default RevenueDay;
