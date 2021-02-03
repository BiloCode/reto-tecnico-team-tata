import { useState , FocusEvent, FC, ChangeEvent } from "react";
import classnames from 'classnames';
import "./styles.scss";

type IProps = {
  placeholder : string;
  icon?() : JSX.Element;
  type? : "text" | "numeric" | "date";
  onChange?(ev : ChangeEvent<HTMLInputElement>) : void;
}

const Basic : FC<IProps> = ({ type , icon, onChange, placeholder }) => {
  const [ focus , setFocus ] = useState<boolean>();

  const onFocus = (ev : FocusEvent<HTMLInputElement>) => {
    if(!ev.currentTarget.value){
      setFocus(() => true);  
    }
  }
  const onBlur = (ev : FocusEvent<HTMLInputElement>) => {
    if(!ev.currentTarget.value){
      setFocus(() => false);
    }
  }

  const input__placeholder = classnames("input__placeholder",{ focus });
  const input__input = classnames("input__input",{ focus });
  
  return <div className="input">
     <span className={input__placeholder}>{placeholder}</span>
    <input
      type={type}
      className={input__input}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    />
  </div>
};

Basic.defaultProps = {
  type : "text"
}

export default Basic;