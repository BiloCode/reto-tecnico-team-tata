import { AiFillHeart } from 'react-icons/ai';
import classnames from 'classnames';
import "./styles.scss";
import { FC, memo } from 'react';

type TProps = {
  title : string;
  subtitle? : string;
  active? : boolean;
}

const BenefitsItem : FC<TProps> = ({ title, subtitle, active }) => (
  <div className={classnames("benefits-item",{ active })}>
    <div className="benefits-item__icon">
      <AiFillHeart />
    </div>
    <div className="benefits-item__text">
      <span className="benefits-item__title">{title}</span>
      { subtitle && <span className="benefits-item__subtitle">{subtitle}</span> }
    </div>
  </div>
);

export default memo(BenefitsItem, (prev,next) => prev.active == next.active);