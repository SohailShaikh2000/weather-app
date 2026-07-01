import { useEffect, useState } from "react";
import "./App.css";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import Elements from "./components/Elements/Elements";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import Search from "./components/Search/Search";
import Temperature from "./components/Temperature/Temperature";
import Header from "./header/Header";
// import Error from "./modals/Error";

interface weatherData {
  base: string;
  main: {
    temp: number;
    feels_like: number | undefined;
    humidity: number;
  };
  name: string;
  sys: { country: string };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

function App() {
  const [data, setData] = useState<weatherData | null>(null);
  const [lat, setLat] = useState<number>();
  const [lon, setLon] = useState<number>();

  const API_key = import.meta.env.VITE_API_KEY;

  const successCallback = (position: GeolocationPosition) => {
    console.log("position", position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLat(latitude);
    setLon(longitude);
  };

  function errorCallback(error: GeolocationPositionError) {
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
      console.error("Geolocation is not supported");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`,
        );
        const data = await response.json();
        setData(data)
        console.log('data from App', data);
      } catch (err) {
        console.error(err);
      }
    };
    if (lat !== undefined && lon !== undefined) {
      fetchData();
    }
  }, [lat, lon, API_key]);

  return (
    <>
      <Header />
      <Search/>
      <div className="flex justify-between max-w-5xl gap-5">
        <div className="w-[70%]">
          <Temperature data={data}/>
          <Elements data={data}/>
          <DailyForecast lat={lat} lon={lon} />
        </div>
        <div className="bg-[#2A2742] px-4 py-6 rounded-2xl w-[30%]">
          <HourlyForecast />
        </div>
      </div>
      {/* <Error /> */}
    </>
  );
}

export default App;
