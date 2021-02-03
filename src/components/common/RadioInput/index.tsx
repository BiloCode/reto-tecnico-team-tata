import { FC } from "react";
import classnames from 'classnames';
import "./styles.scss";

type TProps = {
  title : string;
  select? : boolean;
  onClick?() : void;
}

const RadioInput : FC<TProps> = ({ title , select , onClick }) => (
  <div className="radio-input" onClick={onClick}>
    <div className={classnames("radio-input__border", { select })}>
      { select && <div className="radio-input__circle"></div> }
    </div>
    <span className="radio-input__title">{title}</span>
  </div>
);

export default RadioInput;