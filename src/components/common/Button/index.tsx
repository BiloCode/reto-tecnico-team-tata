import { FC } from "react";
import classnames from 'classnames';
import "./styles.scss";

type TProps = {
  text : string;
  ghost? : boolean;
  onClick?() : void;
  type? : "button" | "submit";
}

const Button : FC<TProps> = ({ text , ghost , type , onClick }) => (
  <button
    type={type}
    onClick={onClick}
    className={classnames("button",{ "button--ghost" : ghost })}
  >
    {text}
  </button>
);

Button.defaultProps = {
  type : "button"
}

export default Button;