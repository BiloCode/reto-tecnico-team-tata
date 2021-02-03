import { FC, useState } from "react";
import { BsChevronDown } from 'react-icons/bs';
import "./styles.scss";

type TProps = {
  title : string;
}

const Dropdown : FC<TProps> = ({ title }) => {
  const [ active , setActive ] = useState<boolean>();
  
  const toggleDropdown = () => setActive(active => !active);

  return <div className="dropdown">
    <div className="dropdown__content" onClick={toggleDropdown} >
      <span className="dropdown__title">{title}</span>
      <span className="dropdown__icon">
        <BsChevronDown />
      </span>
    </div>
    {
      active && (
        <div className="dropdown__content-hide">
        </div>
      )
    }
  </div>
};

export default Dropdown;