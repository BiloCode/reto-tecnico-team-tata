import { FC } from "react";
import "./styles.scss";

import { selectable_options } from './config';

import Title from "components/common/Title";
import Description from "components/common/Description";
import StepLayout , { TStepScreen } from "components/layouts/StepLayout";
import Button from "components/common/Button";
import TextInput from "components/common/TextInput";
import SelectableOption from "components/layouts/SelectableOption";

type TProps = TStepScreen & {
}

const Register : FC<TProps> = ({ currentStep , onNextScreen }) => (
  <StepLayout currentStep={currentStep}>
    <div className="register-step">
      <div className="register-step__header">
        <Title>Hola, <b>Pepito</b></Title>
        <Description>Valida que los datos sean correctos.</Description>
      </div>
      <form className="register-step__form">
        <div className="register-step__form-content">
          <TextInput placeholder="Nombres" type="text" />
          <TextInput placeholder="Apellido Paterno" type="text" />
          <TextInput placeholder="Apellido Materno" type="text" />
          <TextInput placeholder="Fecha de Nacimiento" type="date" />
        </div>
        {
          selectable_options.map(v => (
            <SelectableOption
              key={v.id}
              title={v.title}
              options={v.options}
            />
          ))
        }
        <Button onClick={onNextScreen} text="Continuar" ghost />
      </form>
    </div>
  </StepLayout>
);

export default Register;