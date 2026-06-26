import "./App.css";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import Elements from "./components/Elements/Elements";
import Search from "./components/Search/Search";
import Temperature from "./components/Temperature/Temperature";
import Header from "./header/Header";
// import Error from "./modals/Error";

function App() {

  return (
    <div className="">
      <Header />
      <Search />
      <Temperature />
      <Elements />
      <DailyForecast />
      {/* <Error /> */}
    </div>
  )
}

export default App;
