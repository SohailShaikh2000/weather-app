import TempLogo from "../../../assets/images/icon-drizzle.webp";


const DailyForecast = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="text-lg text-[#D6D5DB]">Daily forecast</div>
      <div className="flex items-center justify-center gap-1.5 w-full">
        <div className="bg-[#2A2742]! border border-[#403B5B] rounded-2xl p-1 flex flex-col items-center px-1 py-4">
          <p>Day</p>
          <img src={TempLogo} alt="" className="h-16" />
          <div className="flex items-center justify-between gap-10 ">
            <p>
              00<span>&deg;</span>
            </p>
            <p>
              00<span>&deg;</span>
            </p>
          </div>
        </div>
        <div className="bg-[#2A2742]! border border-[#403B5B] rounded-2xl p-1 flex flex-col items-center px-1 py-4">
          <p>Day</p>
          <img src={TempLogo} alt="" className="h-16" />
          <div className="flex items-center justify-between gap-10 ">
            <p>
              00<span>&deg;</span>
            </p>
            <p>
              00<span>&deg;</span>
            </p>
          </div>
        </div>
        <div className="bg-[#2A2742]! border border-[#403B5B] rounded-2xl p-1 flex flex-col items-center px-1 py-4">
          <p>Day</p>
          <img src={TempLogo} alt="" className="h-16" />
          <div className="flex items-center justify-between gap-10 ">
            <p>
              00<span>&deg;</span>
            </p>
            <p>
              00<span>&deg;</span>
            </p>
          </div>
        </div>
        <div className="bg-[#2A2742]! border border-[#403B5B] rounded-2xl p-1 flex flex-col items-center px-1 py-4">
          <p>Day</p>
          <img src={TempLogo} alt="" className="h-16" />
          <div className="flex items-center justify-between gap-10 ">
            <p>
              00<span>&deg;</span>
            </p>
            <p>
              00<span>&deg;</span>
            </p>
          </div>
        </div>
        <div className="bg-[#2A2742]! border border-[#403B5B] rounded-2xl p-1 flex flex-col items-center px-1 py-4">
          <p>Day</p>
          <img src={TempLogo} alt="" className="h-16" />
          <div className="flex items-center justify-between gap-10 ">
            <p>
              00<span>&deg;</span>
            </p>
            <p>
              00<span>&deg;</span>
            </p>
          </div>
        </div>
        <div className="bg-[#2A2742]! border border-[#403B5B] rounded-2xl p-1 flex flex-col items-center px-1 py-4">
          <p>Day</p>
          <img src={TempLogo} alt="" className="h-16" />
          <div className="flex items-center justify-between gap-10 ">
            <p>
              00<span>&deg;</span>
            </p>
            <p>
              00<span>&deg;</span>
            </p>
          </div>
        </div>
        <div className="bg-[#2A2742]! border border-[#403B5B] rounded-2xl p-1 flex flex-col items-center px-1 py-4">
          <p>Day</p>
          <img src={TempLogo} alt="" className="h-16" />
          <div className="flex items-center justify-between gap-10 ">
            <p>
              00<span>&deg;</span>
            </p>
            <p>
              00<span>&deg;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
