import { memo, forwardRef } from "react";
import classnames from 'classnames';
import "./styles.scss";

import { InputType , InputPatternType } from 'types';

import useFocusInput from "components/hooks/useFocusInput";

export type TProps = {
  pattern? : InputPatternType;
  maxLength? : number;
  placeholder : string;
  borderLeftHide? : boolean;
  type? : InputType
}

const TextInput = forwardRef<HTMLInputElement, TProps>(
  ({ type, placeholder , borderLeftHide , pattern , maxLength }, ref) => {
    const { focus, onBlur , onFocus } = useFocusInput();  

    const input = classnames("input",{ "input--left-border-none" : borderLeftHide });
    const input__placeholder = classnames("input__placeholder",{ focus });
    const input__input = classnames("input__input",{ focus });
    
    return <div className={input}>
      <span className={input__placeholder}>{placeholder}</span>
      <input
        type={type}
        ref={ref}
        required
        title={pattern?.message}
        pattern={pattern?.value}
        className={input__input}
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={maxLength}
      />
    </div>
  }
);

TextInput.defaultProps = {
  type : "text"
}

export default memo(TextInput);