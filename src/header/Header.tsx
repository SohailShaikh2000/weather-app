import logo from "../../assets/images/logo.svg";
import Dropdown from 'react-bootstrap/Dropdown'

const Header = () => {
  return (
    <div className="flex justify-between pb-10">
      <img src={logo} alt="" />
      <Dropdown className="text-white">
        <Dropdown.Toggle className="bg-[hsl(240,6%,70%)]! text-black px-4 py-2 rounded cursor-pointer">
          Units
        </Dropdown.Toggle>
        <Dropdown.Menu className="flex flex-col gap-2 bg-amber-50!">
            <Dropdown.Item href="#/action1" className="text-black px-4 py-2 rounded cursor-pointer">Action 1</Dropdown.Item>
            <Dropdown.Item href="#/action2" className="text-black px-4 py-2 rounded cursor-pointer">Action 2</Dropdown.Item>
            <Dropdown.Item href="#/action3" className="text-black px-4 py-2 rounded cursor-pointer">Action 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Header;
