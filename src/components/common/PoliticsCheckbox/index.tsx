import { forwardRef } from 'react';
import { BsCheck } from 'react-icons/bs';
import "./styles.scss";

type TProps = {
  text : string;
  link? : string;
}

const PoliticCheckbox = forwardRef<HTMLInputElement, TProps>((props, ref) => (
  <label className="politic-checkbox">
    <input ref={ref} type="checkbox" required className="politic-checkbox__input" />
    <div className="politic-checkbox__box">
      <div className="politic-checkbox__icon">
        <BsCheck />
      </div>
    </div>
    <span className="politic-checkbox__text">
      Acepto la <a href={props.link}>{props.text}</a>
    </span>
  </label>
));

PoliticCheckbox.defaultProps = {
  link : "#"
}

export default PoliticCheckbox;