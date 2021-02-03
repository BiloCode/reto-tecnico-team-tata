import { FC } from 'react';
import { IconType } from 'react-icons';
import "./styles.scss";

type TProps = {
  Icon : IconType;
  text : string;
}

const InsuraceItem : FC<TProps> = ({ Icon , text }) => (
  <li className="insurace-item">
    <span className="insurace-item__icon">
      <Icon />
    </span>
    <span className="insurace-item__text">
      {text}
    </span>
  </li>
);

export default InsuraceItem;