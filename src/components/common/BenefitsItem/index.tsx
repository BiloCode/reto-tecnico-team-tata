import { AiFillHeart } from 'react-icons/ai';
import classnames from 'classnames';
import "./styles.scss";
import { FC, memo } from 'react';

type TProps = {
  title : string;
  subtitle? : string;
  bold? : boolean;
  active? : boolean;
}

const BenefitsItem : FC<TProps> = ({ title, subtitle, active, bold }) => (
  <div className={classnames("benefits-item",{ "benefits-item--active" : active })}>
    <div className="benefits-item__icon">
      <AiFillHeart />
    </div>
    <div className="benefits-item__text">
      <span
        className={classnames(
          "benefits-item__title",
          { "benefits-item--bold-title" : bold }
        )}
      >
        {title}
      </span>
      { subtitle && <span className="benefits-item__subtitle">{subtitle}</span> }
    </div>
  </div>
);

export default memo(BenefitsItem, (prev,next) => prev.active == next.active);