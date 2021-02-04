import { memo, forwardRef } from "react";
import classnames from 'classnames';
import "./styles.scss";

import { InputType , InputPatternType } from 'types';

export type TProps = {
  pattern? : InputPatternType;
  maxLength? : number;
  placeholder : string;
  borderLeftHide? : boolean;
  defaultValue? : string;
  type? : InputType
}

const TextInput = forwardRef<HTMLInputElement, TProps>(
  ({ type, placeholder , borderLeftHide , maxLength , defaultValue }, ref) => {
    const input = classnames("input",{ "input--left-border-none" : borderLeftHide });
    const input__placeholder = classnames("input__placeholder");
    const input__input = classnames("input__input");
    
    return <div className={input}>
      <input
        type={type}
        ref={ref}
        required
        defaultValue={defaultValue}
        className={input__input}
        maxLength={maxLength}
      />
      <span className={input__placeholder}>{placeholder}</span>
    </div>
  }
);

TextInput.defaultProps = {
  type : "text"
}

export default memo(TextInput);