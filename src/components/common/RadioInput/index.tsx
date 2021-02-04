import { forwardRef } from "react";
import "./styles.scss";

type TProps = {
  title : string;
  name : string;
}

const RadioInput = forwardRef<HTMLInputElement, TProps>(({ title , name }, ref) => (
  <label className="radio-input">
    <input ref={ref} type="radio" name={name} className="radio-input__input" />
    <div className="radio-input__border">
      <div className="radio-input__circle"></div>
    </div>
    <span className="radio-input__title">{title}</span>
  </label>
));

export default RadioInput;