import SearchIcon from '../../../assets/images/icon-search.svg'


interface weatherData {
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


interface Props {
  data: weatherData | null;
}

const Search = ({data}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-14 font-custom text-4xl font-bold pb-10">
      <h1>How's the sky looking today?</h1>
      <div className="flex items-center justify-center gap-3 relative text-[17px]">
        <img src={SearchIcon} alt="" className='absolute left-5 h-4' />
        <input
          type="text"
          placeholder='Search for a place'
          className="bg-[hsl(243,23%,30%)]! text-[hsl(250,6%,84%)]! rounded-md placeholder:text-[17px] px-50 py-2.5 font-medium placeholder:absolute placeholder:top-[25%] placeholder:left-13 cursor-auto outline-none border-none ps-13"
          
        />
        <button className="text-sm font-medium bg-blue-500 px-5 py-2.5 rounded-md cursor-pointer">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
