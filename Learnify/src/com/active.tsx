import IMAGE from "../assets/IMAGE";
const Active = () => {
  return (
    <div className="flex gap-3">
      <div className="w-[537px] h-[378px] bg-black rounded-[30px] relative">
        <img
          src={IMAGE.picture}
          alt=""
          className="rounded-t-[30px] h-[271px] w-full"
        />
        <div className="w-[54px] h-[18px] bg-white rounded-full flex items-center justify-center absolute z-[9999] top-2 left-2">
          <h1 className=" text-xs">featured</h1>
        </div>
        <div className="w-[54px] h-[18px] bg-white rounded-full flex items-center justify-center absolute z-[9999] top-2 right-2 px-10">
          <h1 className=" text-xs">Marketing</h1>
        </div>
        <div className="p-2 flex flex-col gap-2 pt-5">
          <h1 className="text-xl text-white ">
            Social Media Content and Strategy
          </h1>
          <div className=" flex items-center gap-2">
            <img
              src={IMAGE.picture}
              alt=""
              className="w-[34px] h-[34px] rounded-full object-cover"
            />
            <h1 className=" font-normal text-white text-md">Sledge Hammer</h1>
          </div>
        </div>
      </div>

      <div className="w-[256px] h-[378px] bg-black rounded-[30px] relative">
        <img src={IMAGE.picture} alt="" className="rounded-t-[30px] h-[271px] object-cover w-full" />
        <div className="w-[54px] h-[18px] bg-white rounded-full flex items-center justify-center absolute z-[9999] top-2 left-2">
          <h1 className=" text-xs">featured</h1>
        </div>
        <div className="w-[54px] h-[18px] bg-white rounded-full flex items-center justify-center absolute z-[9999] top-2 right-2">
          <h1 className=" text-xs">Math</h1>
        </div>
        <div className="p-2 flex flex-col gap-2 pt-5">
          <h1 className="text-xl text-white ">Medical Billing and Coding</h1>
          <div className=" flex items-center gap-2">
            <img
              src={IMAGE.picture}
              alt=""
              className="w-[34px] h-[34px] rounded-full object-cover"
            />
            <h1 className=" font-normal text-white text-sm">April Curtis</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Active;
