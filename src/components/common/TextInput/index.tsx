import { useState , FocusEvent, FC, ChangeEvent } from "react";
import classnames from 'classnames';
import "./styles.scss";

type IProps = {
  placeholder : string;
  type? : "text" | "numeric" | "date";
  onChange?(ev : ChangeEvent<HTMLInputElement>) : void;
}

const TextInput : FC<IProps> = ({ type, onChange, placeholder }) => {
  const [ focus , setFocus ] = useState<boolean>();

  const onFocus = (ev : FocusEvent<HTMLInputElement>) => {
    if(ev.currentTarget.value) return;

    setFocus(() => true);
  }
  const onBlur = (ev : FocusEvent<HTMLInputElement>) => {
    if(ev.currentTarget.value) return;

    setFocus(() => false);
  }

  const input__placeholder = classnames("input__placeholder",{ focus });
  const input__input = classnames("input__input",{ focus });
  
  return <div className="input">
    <span className={input__placeholder}>{placeholder}</span>
    <input
      type={type}
      required
      className={input__input}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    />
  </div>
};

TextInput.defaultProps = {
  type : "text"
}

export default TextInput;