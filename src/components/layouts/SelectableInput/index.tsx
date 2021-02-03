import { BsChevronDown } from 'react-icons/bs'
import "./styles.scss";

import TextInput from "components/common/TextInput";
import useActive from 'components/hooks/useActive';
import { FC, RefObject, useState } from 'react';

const dropdown_options = [
  {
    text : "dni",
    placeholder : "Nro. de documento"
  },
  {
    text : "carnet",
    placeholder : "Nro. de carnet"
  }
]

type TProps = {
  reference : RefObject<HTMLInputElement>
}

const SelectableInput : FC<TProps> = ({ reference }) => {
  const { active , toggleActive } = useActive();
  const [ optionSelect , setOptionSelect ] = useState<number>(0);

  const SelectOption = (id : number) => () => {
    if(!reference.current) return;

    toggleActive();
    setOptionSelect(() => id);

    reference.current.value = "";
    reference.current.focus();
  }

  var current_option = dropdown_options[optionSelect];

  return <div className="selectable-input">
    <div className="selectable-input__container">
      <div className="selectable-input__content" onClick={toggleActive}>
        <span className="selectable-input__text">{current_option.text}</span>
        <span className="selectable-input__icon">
          <BsChevronDown />
        </span>
      </div>
      {
        active && (
          <div className="selectable-input__dropdown">
            {
              dropdown_options.map((v,i) => (
                <span
                  key={i}
                  className="selectable-input__dropdown-option"
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
    <TextInput ref={reference} type="text" placeholder={current_option.placeholder} />
  </div>
};

export default SelectableInput;