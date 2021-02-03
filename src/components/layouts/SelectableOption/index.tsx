import { FC, useState } from "react";
import "./styles.scss";

import RadioInput from "components/common/RadioInput";

type TSelectableOption = {
  id : number;
  text : string;
}

type TProps = {
  title : string;
  options : TSelectableOption[];
}

const SelectableOption : FC<TProps> = ({ title , options }) => {
  const [ optionActive , setOptionActive ] = useState<number>(-1);

  const ClickRadioInput = (id : number) => () => setOptionActive(() => id);

  return <div className="selectable-options">
    <span className="selectable-options__title">{title}</span>
    <div className="selectable-options__options">
      {
        options.map((v) => (
          <RadioInput
            key={v.id}
            title={v.text}
            select={v.id === optionActive}
            onClick={ClickRadioInput(v.id)}
          />
        ))
      }
    </div>
  </div>
};

export default SelectableOption;