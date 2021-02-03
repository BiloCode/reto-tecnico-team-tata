import { FC, useState } from "react";
import "./styles.scss";

import { plan_card } from "./config";

import Description from "components/common/Description";
import Title from "components/common/Title";
import StepLayout , { TStepScreen } from "components/layouts/StepLayout";
import Dropdown from "components/common/Dropdown";
import Button from "components/common/Button";
import PlanCard from "components/common/PlanCard";

type TProps = TStepScreen &{
}

const ProtectionSelect : FC<TProps> = ({ currentStep }) => {
  const [ planCardActive , setPlanCardActive ] = useState<number>(0);

  const ChangePlanCardActive = (id : number) => () => setPlanCardActive(() => id);

  return <StepLayout currentStep={currentStep} >
    <div className="protection-select-screen">
      <div className="protection-select-screen__header">
        <Title>Elige <b>tu proteccíon</b></Title>
        <Description>Valida que los datos sean correctos.</Description>
      </div>
      <div className="protection-select-screen__plan-cards">
        {
          plan_card.map((v,i) => (
            <PlanCard
              key={i}
              title={v.title}
              price={v.price}
              select={i === planCardActive}
              onClick={ChangePlanCardActive(i)}
            />
          ))
        }
      </div>
      <div className="protection-select-screen__footer">
        <Title size="18px">Revisa nuestros <br/><b>servicios y exclusiones</b></Title>
        <Dropdown title="Servicios Brindados" />
        <Dropdown title="Exclusiones" />
      </div>
      <div className="protection-select-screen__buttons">
        <Button text="Enviar cotizacion por correo" ghost />
        <Button text="Comprar Plan" />
      </div>
    </div>
  </StepLayout>
};

export default ProtectionSelect;