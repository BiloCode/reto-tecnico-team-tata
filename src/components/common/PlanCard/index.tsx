import { FC } from 'react';
import classnames from 'classnames';
import CorrectIcon from 'assets/icons/gl_correct.png';
import "./styles.scss";

type TProps = {
  title : string;
  price : number;
  select? : boolean;
  onClick?() : void;
}

const PlanCard : FC<TProps> = ({ title , price, select , onClick }) => {
  const plan_card = classnames("plan-card",{ "plan-card--select" : select });

  return <div className={plan_card} onClick={onClick}>
    <span className="plan-card__title">{title}</span>
    <div className="plan-card__price">
      <span className="plan-card__price_symbol">S/</span>
      <span className="plan-card__price_value">{price}</span>
    </div>
    <div className="plan-card__time">mensual</div>
    {
      select && (
        <div className="plan-card__indicator">
          <img
            src={CorrectIcon}
            alt="correct-icon"
            className="plan-card__indicator_image"
          />
        </div>
      )
    }
  </div>
};

export default PlanCard;