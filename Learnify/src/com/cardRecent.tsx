import IMAGE from "../assets/IMAGE";
const Recent = () => {
  return (
    <div className=" flex gap-5">
      <div className="w-[256px] h-[222px] bg-black rounded-[30px] relative">
        <img src={IMAGE.picture} alt="" className="rounded-t-[30px]" />
        <div className="w-[54px] h-[18px] bg-white rounded-full flex items-center justify-center absolute z-[9999] top-2 left-2">
          <h1 className=" text-xs">featured</h1>
        </div>
        <div className="w-[54px] h-[18px] bg-white rounded-full flex items-center justify-center absolute z-[9999] top-2 right-2">
          <h1 className=" text-xs">Coding</h1>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <h1 className="text-sm text-white ">Medical Billing and Coding</h1>
          <div className=" flex items-center gap-2">
            <img
              src={IMAGE.picture}
              alt=""
              className="w-[34px] h-[34px] rounded-full object-cover"
            />
            <h1 className=" font-normal text-white text-xs">April Curtis</h1>
          </div>
        </div>
      </div>

      <div className="w-[256px] h-[222px] bg-black rounded-[30px] relative">
        <img src={IMAGE.picture} alt="" className="rounded-t-[30px]" />
        <div className="w-[54px] h-[18px] bg-white rounded-full flex items-center justify-center absolute z-[9999] top-2 left-2">
          <h1 className=" text-xs">New</h1>
        </div>
        <div className="w-[54px] h-[18px] bg-white rounded-full flex items-center justify-center absolute z-[9999] top-2 right-2">
          <h1 className=" text-xs">Design</h1>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <h1 className="text-sm text-white ">Graphic Design Specialization</h1>
          <div className=" flex items-center gap-2">
            <img
              src={IMAGE.picture}
              alt=""
              className="w-[34px] h-[34px] rounded-full object-cover"
            />
            <h1 className=" font-normal text-white text-xs">Mike Torello</h1>
          </div>
        </div>
      </div>

      <div className="w-[256px] h-[222px] bg-black rounded-[30px] relative">
        <img src={IMAGE.picture} alt="" className="rounded-t-[30px]" />
        
        <div className="w-max first-letter: h-[18px] bg-white rounded-full flex items-center justify-center absolute z-[9999] top-2 right-2">
          <h1 className=" text-xs px-2">Accounting</h1>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <h1 className="text-sm text-white ">Financial Accounting</h1>
          <div className=" flex items-center gap-2">
            <img
              src={IMAGE.picture}
              alt=""
              className="w-[34px] h-[34px] rounded-full object-cover"
            />
            <h1 className=" font-normal text-white text-xs">April Curtis</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
