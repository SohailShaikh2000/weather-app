import "./App.css";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import Elements from "./components/Elements/Elements";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import Search from "./components/Search/Search";
import Temperature from "./components/Temperature/Temperature";
import Header from "./header/Header";
// import Error from "./modals/Error";

function App() {
  return (
    <>
      <Header />
      <Search />
      <div className="flex justify-between max-w-5xl gap-5">
        <div className="w-[70%]">
          <Temperature />
          <Elements />
          <DailyForecast />
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
