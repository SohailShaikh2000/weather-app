import { useEffect, useState } from "react";
import Background from "../../../assets/images/bg-today-large.svg";
import TempLogo from "../../../assets/images/icon-drizzle.webp";
import { countries } from "country-data";

const Temperature = () => {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [data, setData] = useState({});

  const API_key = import.meta.env.VITE_API_KEY;

  const today = new Date()
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", 'Dec']

  const dayName = dayNames[today.getDay()]
  const monthName = monthNames[today.getMonth() + 1]
  
  console.log(today)

  function successCallback(position: any) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // console.log('latitude', latitude)
    // console.log('longitude', longitude)

    setLat(latitude);
    setLon(longitude);
  }

  console.log("lat", lat);
  console.log("lon", lon);

  function errorCallback(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.error("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.error("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.error("The request to get user location timed out.");
        break;
      default:
        console.error("An unknown error occurred.");
    }
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.error("Geolocation is not supported.");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${API_key}`,
        );
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (lat !== undefined && lon !== undefined) {
      fetchData();
    }
  }, [lat, lon, API_key]);

  return (
    <div className="relative font-dm pb-6">
      <img src={Background} alt="" className="w-full" />
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full items-center px-6">
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold">
            {data.name}, <span>{countries[data.sys?.country]?.name}</span>
          </p>
          <p className="text-lg text-[hsl(250,6%,84%)]!">
            {dayName}, <span>{today.getDate()} {monthName} {today.getFullYear()}</span>
          </p>
        </div>
        <div className="h-1/2 flex items-center justify-center gap-4">
          <img src={TempLogo} alt="" className="h-23.75" />
          <h1 className="font-dm-italic text-8xl font-bold">
            00<span>&deg;</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
