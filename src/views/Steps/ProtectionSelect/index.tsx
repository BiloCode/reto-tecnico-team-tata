import { FC} from "react";
import "./styles.scss";

import Description from "components/common/Description";
import Title from "components/common/Title";
import StepLayout , { TStepScreen } from "components/layouts/StepLayout";
import Dropdown from "components/common/Dropdown";
import Button from "components/common/Button";
import ProtectionBenefits from "components/layouts/ProtectionBenefits";
import { navigate } from "@reach/router";

type TProps = TStepScreen &{
}

const ProtectionSelect : FC<TProps> = ({ currentStep , step }) => {
  const NavigateToThanks = () => navigate("/thanks");

  return <StepLayout step={step} currentStep={currentStep} >
    <div className="protection-select-screen">
      <div className="protection-select-screen__header">
        <Title>Elige <b>tu proteccíon</b></Title>
        <Description>Seleccion tu plan de salud ideal.</Description>
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
        <Button text="Comprar Plan" onClick={NavigateToThanks} />
      </div>
    </div>
  </StepLayout>
};

export default ProtectionSelect;