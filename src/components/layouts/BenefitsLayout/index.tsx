import { FC } from "react";
import "./styles.scss";

import { benefits } from "config/benefits";

import BenefitsItem from "components/common/BenefitsItem";

type TProps = {
  price : number;
  plan_name : string;
  image : string;
  benefits_active : number[];
}

const BenefitsLayout : FC<TProps> = ({ price , plan_name, image , benefits_active }) => (
  <div className="benefits-layout">
    <div className="benefits-layout__header">
      <span className="benefits-layout__title-header">Cuentas con estos beneficios:</span>
    </div>
    <div className="benefits-layout__detail">
      <div className="benefits-layout__information">
        <span className="benefits-layout__subtitle">Cobertura maxima</span>
        <span className="benefits-layout__price">S/{price}MM</span>
        <span className="benefits-layout__plan">Plan {plan_name}</span>
      </div>
      <div className="benefits-layout__container-image">
        <img src={image} className="benefits-layout__image" alt="benefits-image"/>
      </div>
    </div>
    <div className="benefits-layout__items">
      {
        benefits.map(v => (
          <BenefitsItem
            key={v.id}
            title={v.title}
            subtitle={v.subtitle}
            bold={v.bold}
            active={benefits_active.includes(v.id)}
          />    
        ))
      }
    </div>
  </div>
);

export default BenefitsLayout;