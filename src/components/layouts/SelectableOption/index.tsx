import { FC, forwardRef, useState } from "react";
import "./styles.scss";

import RadioInput from "components/common/RadioInput";

type TSelectableOption = {
  id : number;
  text : string;
}

type TProps = {
  title : string;
  inputRadioKey : string;
  options : TSelectableOption[];
}

const SelectableOption = forwardRef<HTMLInputElement, TProps>(
  ({ title , options , inputRadioKey }, ref) => (
    <div className="selectable-options">
      <span className="selectable-options__title">{title}</span>
      <div className="selectable-options__options">
        {
          options.map((v) => (
            <RadioInput
              key={v.id}
              ref={ref}
              title={v.text}
              name={inputRadioKey}
            />
          ))
        }
      </div>  
    </div>
  )
);

export default SelectableOption;