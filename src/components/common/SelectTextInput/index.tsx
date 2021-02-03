import { BsChevronDown } from 'react-icons/bs'
import "./styles.scss";

import TextInput from "../TextInput";
import useActive from 'components/hooks/useActive';
import { useState } from 'react';

const dropdown_options = [
  {
    text : "dni",
    placeholder : "Nro. de documento"
  },
  {
    text : "carnet",
    placeholder : "Nro de carnet"
  }
]

const SelectTextInput = () => {
  const { active , toggleActive } = useActive();
  const [ optionSelect , setOptionSelect ] = useState<number>(0);

  const SelectOption = (id : number) => () => {
    toggleActive();
    setOptionSelect(() => id);
  }

  var current_option = dropdown_options[optionSelect];

  return <div className="select-text-input">
    <div className="select-text-input__container">
      <div className="select-text-input__content" onClick={toggleActive}>
        <span className="select-text-input__text">{current_option.text}</span>
        <span className="select-text-input__icon">
          <BsChevronDown />
        </span>
      </div>
      {
        active && (
          <div className="select-text-input__dropdown">
            {
              dropdown_options.map((v,i) => (
                <span
                  key={i}
                  className="select-text-input__dropdown-option"
                  onClick={SelectOption(i)}
                > 
                  {v.text}
                </span>
              ))
            }
          </div>
        )
      }
    </div>
    <TextInput
      placeholder={current_option.placeholder}
    />
  </div>
};

export default SelectTextInput;