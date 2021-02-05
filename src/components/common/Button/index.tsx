import { FC } from "react";
import classnames from 'classnames';
import "./styles.scss";

type TProps = {
  ghost? : boolean;
  onClick?() : void;
  type? : "button" | "submit";
}

const Button : FC<TProps> = ({ children , ghost , type , onClick }) => (
  <button
    type={type}
    onClick={onClick}
    className={classnames("button",{ "button--ghost" : ghost })}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type : "button"
}

export default Button;