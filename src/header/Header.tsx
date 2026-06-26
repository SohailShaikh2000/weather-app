import logo from "../../assets/images/logo.svg";
import Dropdown from 'react-bootstrap/Dropdown'
import Unit from '../../assets/images/icon-units.svg'
import Down from '../../assets/images/icon-dropdown.svg'
import { useState } from "react";

const Header = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggle = (toggle: boolean) => {
    setIsOpen(toggle)
    console.log('isOpen', toggle)
  }

  return (
    <div className="flex justify-between py-15">
      <img src={logo} alt="" />
      <Dropdown className="text-white" onToggle={handleToggle}>
        <Dropdown.Toggle className="bg-[hsl(243,23%,30%)]! text-[hsl(250,6%,84%)]! px-4 py-2 rounded cursor-pointer flex gap-2">
          <img src={Unit} alt="" />
          Units
          <img src={Down} alt="" className={`${isOpen ? "rotate-180 transition-transform" : "transition-transform"}`} />

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
