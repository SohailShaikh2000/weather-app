import Background from "../../../assets/images/bg-today-large.svg";
import Drizzle from "../../../assets/images/icon-drizzle.webp";
import Sunny from '../../../assets/images/icon-sunny.webp'
import Storm from '../../../assets/images/icon-storm.webp'
import Rain from '../../../assets/images/icon-rain.webp'
import PartlyCloudy from '../../../assets/images/icon-partly-cloudy.webp'
import Fog from '../../../assets/images/icon-fog.webp'
import Snow from '../../../assets/images/icon-snow.webp'

import { countries } from "country-data";

interface dataType {
  base: string;
  main: {
    temp: number;
  };
  name: string;
  sys: { country: string };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}

interface TemperatureProps {
  data: dataType | null;
}

const Temperature = ({ data }: TemperatureProps) => {

  console.log('data from temp', data)

  const today = new Date();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayName = dayNames[today.getDay()];
  const monthName = monthNames[today.getMonth() + 1];

  console.log(today);

  const tempInCelcius = (tempInKelvin: number): number => {
    return Math.round(tempInKelvin - 273.15);
  };
  if (!data) return <p>Loading...</p>;

  const temp = tempInCelcius(data.main?.temp);

  const weatherImg = (weather: string) => {
    switch(weather) {
      case "Clouds":  return PartlyCloudy;
      case "Sunny":  return Sunny;
      case "Snow":  return Snow;
      case "Rain":  return Rain;
      case "Thunderstorm":  return Rain;
      case "Drizzle":  return Drizzle;
      case "Clear":  return Sunny;
      case "Foggy": return Fog;
      case "Storm": return Storm
      default: return Sunny;
    }
  }

  return (
    <div className="relative font-dm pb-6">
      <img src={Background} alt="" className="w-full" />
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full items-center px-6">
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold">
            {data.name}, <span>{countries[data.sys?.country]?.name}</span>
          </p>
          <p className="text-lg text-[hsl(250,6%,84%)]!">
            {dayName},{" "}
            <span>
              {today.getDate()} {monthName} {today.getFullYear()}
            </span>
          </p>
        </div>
        <div className="h-1/2 flex items-center justify-center gap-4">
          <img src={weatherImg(data.weather[0].main)} alt="" className="h-23.75" />
          <h1 className="font-dm-italic text-8xl font-bold">
            {temp}
            <span>&deg;</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
