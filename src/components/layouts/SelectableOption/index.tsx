import { forwardRef } from "react";
import "./styles.scss";

import RadioInput from "components/common/RadioInput";

type TProps = {
  title : string;
  inputRadioKey : string;
  options : string[];
}

const SelectableOption = forwardRef<HTMLInputElement, TProps>(
  ({ title , options , inputRadioKey }, ref) => (
    <div className="selectable-options">
      <span className="selectable-options__title">{title}</span>
      <div className="selectable-options__options">
        {
          options.map((text, i) => (
            <RadioInput
              key={i}
              ref={ref}
              title={text}
              name={inputRadioKey}
            />
          ))
        }
      </div>  
    </div>
  )
);

export default SelectableOption;