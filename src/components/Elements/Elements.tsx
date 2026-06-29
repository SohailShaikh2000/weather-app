interface dataType {
  main: {
    feels_like: number | undefined;
    humidity: number;
    temp: number
  };
  wind: {
    speed: number;
  };
}

interface ElementProps {
  data: dataType | null;
}

const Elements = ({ data }: ElementProps) => {
  const tempInCelcius = (tempInKelvin: number | undefined): number => {
    if (tempInKelvin == undefined) {
      return 0;
    }
    return Math.round(tempInKelvin - 273.15);
  };

  const feelsLike = tempInCelcius(data?.main?.feels_like);

  return (
    <div className="flex items-center justify-center gap-[4%] font-dm pb-10">
      <div className="w-[24%] px-6 h-30 py-2 flex flex-col justify-around border border-[#403B5B] bg-[#2A2742]! rounded-lg">
        <p>Feels Like</p>
        <h1 className="text-3xl">
          {feelsLike}
          <span>&deg;</span>
        </h1>
      </div>
      <div className="w-[24%] px-6 h-30 py-2 flex flex-col justify-around border border-[#403B5B] bg-[#2A2742]! rounded-lg">
        <p>Humidity</p>
        <h1 className="text-3xl">
          {data?.main.humidity}
          <span>%</span>
        </h1>
      </div>
      <div className="w-[24%] px-2 h-30 py-2 flex flex-col justify-around border border-[#403B5B] bg-[#2A2742]! rounded-lg">
        <p>Wind</p>
        <h1 className="text-3xl">
          {data?.wind.speed}
          <span> mph</span>
        </h1>
      </div>
      <div className="w-[24%] px-6 h-30 py-2 flex flex-col justify-around border border-[#403B5B] bg-[#2A2742]! rounded-lg">
        <p>Precipitation</p>
        <h1 className="text-3xl">
          0<span> in</span>
        </h1>
      </div>
    </div>
  );
};

export default Elements;
