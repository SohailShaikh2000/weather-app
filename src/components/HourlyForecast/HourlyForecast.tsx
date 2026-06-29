import Dropdown from "../../../assets/images/icon-dropdown.svg";
import Weather from "../../../assets/images/icon-snow.webp";
import { useState } from "react";

const forecast = [
  {
    id: 1,
    img: Weather,
    time: 1,
    temperature: 68,
  },
  {
    id: 2,
    img: Weather,
    time: 1,
    temperature: 68,
  },
  {
    id: 3,
    img: Weather,
    time: 1,
    temperature: 68,
  },
  {
    id: 4,
    img: Weather,
    time: 1,
    temperature: 68,
  },
  {
    id: 5,
    img: Weather,
    time: 1,
    temperature: 68,
  },
  {
    id: 6,
    img: Weather,
    time: 1,
    temperature: 68,
  },
  {
    id: 7,
    img: Weather,
    time: 1,
    temperature: 68,
  },
  {
    id: 8,
    img: Weather,
    time: 1,
    temperature: 68,
  },
];


const HourlyForecast = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  }

    return (
      <div className="font-dm flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h1>Hourly forecast</h1>
          <button
            className="text-white flex gap-3 bg-[#403B5B] py-2 px-4"
            onClick={handleToggle}
          >
            day
            <img
              src={Dropdown}
              alt=""
              className={`${isOpen ? "rotate-180 transition-transform" : "transition-transform"}`}
            />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {forecast.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-[#403B5B] py-2 px-4 rounded-md"
            >
              <div className="flex items-center">
                <img src={item.img} alt="" className="h-10" />
                <p>{item.time} PM</p>
              </div>
              <p>{item.temperature}°</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default HourlyForecast;
