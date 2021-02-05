import { forwardRef } from "react";
import "./styles.scss";

import RadioInput from "components/common/RadioInput";

type TOptions = {
  title : string;
  defaultValue : string;
  default? : boolean;
}

type TProps = {
  title : string;
  inputRadioKey : string;
  options : TOptions[];
}

const SelectableOption = forwardRef<HTMLInputElement, TProps>(
  ({ title , options , inputRadioKey }, ref) => (
    <div className="selectable-options">
      <span className="selectable-options__title">{title}</span>
      <div className="selectable-options__options">
        {
          options.map((v, i) => (
            <RadioInput
              key={i}
              ref={ref}
              title={v.title}
              defaultValue={v.defaultValue}
              defaultChecked={v.default}
              name={inputRadioKey}
            />
          ))
        }
      </div>  
    </div>
  )
);

export default SelectableOption;