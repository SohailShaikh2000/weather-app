const Elements = () => {
  return (
    <div className="flex items-center justify-center gap-[4%] font-dm pb-10">
      <div className="w-[24%] px-6 h-30 py-2 flex flex-col justify-around border border-[#403B5B] bg-[#2A2742]! rounded-lg">
        <p>Feels Like</p>
        <h1 className="text-3xl">
          00<span>&deg;</span>
        </h1>
      </div>
      <div className="w-[24%] px-6 h-30 py-2 flex flex-col justify-around border border-[#403B5B] bg-[#2A2742]! rounded-lg">
        <p>Humidity</p>
        <h1 className="text-3xl">
          00<span>%</span>
        </h1>
      </div>
      <div className="w-[24%] px-6 h-30 py-2 flex flex-col justify-around border border-[#403B5B] bg-[#2A2742]! rounded-lg">
        <p>Wind</p>
        <h1 className="text-3xl">
          0<span> mph</span>
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
