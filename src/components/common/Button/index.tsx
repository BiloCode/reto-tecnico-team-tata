import { FC } from "react";
import classnames from 'classnames';
import "./styles.scss";

type TProps = {
  text : string;
  ghost? : boolean;
}

const Button : FC<TProps> = ({ text , ghost }) => (
  <button className={classnames("button",{ "button--ghost" : ghost })}>
    {text}
  </button>
);

export default Button;