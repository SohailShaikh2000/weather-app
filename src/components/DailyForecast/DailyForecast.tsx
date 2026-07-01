import TempLogo from "../../../assets/images/icon-drizzle.webp";
import { useEffect } from "react";

interface PropTypes {
  lat: number | undefined;
  lon: number | undefined;
}

const DailyForecast = ({ lat, lon }: PropTypes) => {
  const API_key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      const response =
        await fetch(`${import.meta.env.VITE_BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}`);
      const data = await response.json();
      console.log("data from DailyForecast", data);
    };

    if (lat !== undefined && lon !== undefined) {
      fetchData();
    }
  }, [lat, lon, API_key]);

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
