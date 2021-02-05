import { forwardRef } from "react";
import "./styles.scss";

type TProps = {
  title : string;
  name : string;
  defaultValue : string;
  defaultChecked? : boolean;
}

const RadioInput = forwardRef<HTMLInputElement, TProps>(
  ({ title , name, defaultChecked ,defaultValue }, ref) => (
    <label className="radio-input">
      <input
        ref={ref}
        name={name}
        type="radio"
        required
        defaultValue={defaultValue}
        defaultChecked={defaultChecked} 
        className="radio-input__input"
      />
      <div className="radio-input__border">
        <div className="radio-input__circle"></div>
      </div>
      <span className="radio-input__title">{title}</span>
    </label>
  )
);

export default RadioInput;