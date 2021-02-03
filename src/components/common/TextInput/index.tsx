import { useState , FocusEvent, FC, ChangeEvent, memo, forwardRef } from "react";
import classnames from 'classnames';
import "./styles.scss";

export type TProps = {
  placeholder : string;
  type : "text" | "number" | "date";
  borderLeftHide? : boolean;
}

const TextInput = forwardRef<HTMLInputElement, TProps>(({ type, placeholder , borderLeftHide }, ref) => {
  const [ focus , setFocus ] = useState<boolean>();

  const onFocus = (ev : FocusEvent<HTMLInputElement>) => {
    if(ev.currentTarget.value) return;

    setFocus(() => true);
  }
  const onBlur = (ev : FocusEvent<HTMLInputElement>) => {
    if(ev.currentTarget.value) return;

    setFocus(() => false);
  }

  const input = classnames("input",{ "input--left-border-none" : borderLeftHide });
  const input__placeholder = classnames("input__placeholder",{ focus });
  const input__input = classnames("input__input",{ focus });
  
  return <div className={input}>
    <span className={input__placeholder}>{placeholder}</span>
    <input
      type={type}
      ref={ref}
      required
      className={input__input}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </div>
});

export default memo(TextInput);