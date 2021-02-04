import { FC} from "react";
import "./styles.scss";

import Description from "components/common/Description";
import Title from "components/common/Title";
import StepLayout , { TStepScreen } from "components/layouts/StepLayout";
import Dropdown from "components/common/Dropdown";
import Button from "components/common/Button";
import ProtectionBenefits from "components/layouts/ProtectionBenefits";

type TProps = TStepScreen &{
}

const ProtectionSelect : FC<TProps> = ({ currentStep }) => {
  return <StepLayout currentStep={currentStep} >
    <div className="protection-select-screen">
      <div className="protection-select-screen__header">
        <Title>Elige <b>tu proteccíon</b></Title>
        <Description>Valida que los datos sean correctos.</Description>
      </div>
      <ProtectionBenefits />
      <div className="protection-select-screen__footer">
        <div className="protection-select-screen__footer-title">
          <Title size="20px">Revisa nuestros <br/><b>servicios y exclusiones</b></Title>
        </div>
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