import Background from "../../../assets/images/bg-today-large.svg";
import TempLogo from "../../../assets/images/icon-drizzle.webp";
const Temperature = () => {
  return (
    <div className="relative font-dm pb-6">
      <img src={Background} alt="" className="w-full" />
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full items-center px-6">
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold">
            City, <span>Country</span>
          </p>
          <p className="text-lg text-[hsl(250,6%,84%)]!">
            Day, <span>Date</span>
          </p>
        </div>
        <div className="h-1/2 flex items-center justify-center gap-4">
          <img src={TempLogo} alt="" className="h-23.75" />
          <h1 className="font-dm-italic text-8xl font-bold">00<span>&deg;</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
