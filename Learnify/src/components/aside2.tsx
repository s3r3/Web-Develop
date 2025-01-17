import IMAGE from "../assets/IMAGE";

const Side = () => {
  const tanggal = new Date();
  const hari = tanggal.toLocaleDateString("id-ID", { weekday: "long" });
  const tanggalString = tanggal.toLocaleDateString("id-ID");
  return (
    <div className="flex flex-col gap-5">
      <div className="w-[296px] h-[164px] bg-black flex flex-col justify-center gap-2 rounded-3xl py-2 ">
        <h1 className="text-white text-xl font-bold flex justify-center ">
          {hari}, {tanggalString}
        </h1>
        <div className="flex items-center gap-2 justify-start px-5 ">
          <img
            src={IMAGE.picture}
            className="w-[51px] h-[51px] rounded-full object-cover"
          />
          <h1 className="text-white text-md font-bold px-3">Muhammad Rizky</h1>
        </div>
      </div>
      <div className="  h-[60px] sticky top-0 left-0  bottom-10 ">
        <div className="w-[296px] max-h-screen bg-black rounded-3xl p-3 flex flex-col gap-3">
          <img
            src={IMAGE.picture}
            alt=""
            className="rounded-3xl  h-[213px] w-screen object-cover"
          />
          <h1 className="text-white text-md">Introduction to Calculus</h1>
          <p className="text-white text-sm text-justify">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.{" "}
          </p>
          <h1 className="text-white text-md">Intructions</h1>
          <div className="flex gap-2 group">
            <img
              src={IMAGE.picture}
              alt=""
              className="rounded-full w-[44px] h-[44px] object-cover"
            />
            <img
              src={IMAGE.picture}
              alt=""
              className="rounded-full w-[44px] h-[44px] object-cover"
            />
            <img
              src={IMAGE.picture}
              alt=""
              className="rounded-full w-[44px] h-[44px] object-cover"
            />
          </div>
          <div className="flex items-center justify-center gap-8 text-lg">
            <div className="flex flex-col gap-1 text-white items-center justify-center">
              <h1>32h</h1>
              <h1>Theory</h1>
            </div>
            <div className="w-[2px] bg-white h-[80px]  " />
            <div className="flex flex-col gap-1 text-white items-center justify-center">
              <h1>50h</h1>
              <h1>Practice</h1>
            </div>
          </div>
          <div className="bg-white rounded-full h-[43px] text-xl flex items-center justify-center font-medium">
            <h1>View Course</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
