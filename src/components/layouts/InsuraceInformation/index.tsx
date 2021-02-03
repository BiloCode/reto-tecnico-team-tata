import { memo } from 'react';
import "./styles.scss";

import Background from "components/common/Background";
import InsuraceItem from "components/common/InsuraceItem";

import item_config from './config';

const InsuraceInformation = () => (
  <Background>
    <div className="insurance-information">
      <div className="insurance-information__text">
        <div className="insurance-information__text-container">
          <span className="insurance-information__title">
            Seguro de <br /><b>Salud</b>
          </span>
          <ul className="insurance-information__list">
            {
              item_config.map((v,i) => (
                <InsuraceItem
                  key={i}
                  text={v.text}
                  Icon={v.icon}
                />
              ))
            }
          </ul>
        </div>
        <span className="insurance-information__bottom-message">
        &copy; 2020 RIMAC Seguros y Reaseguros.
        </span>
      </div>
    </div>
  </Background>
);

export default memo(InsuraceInformation);