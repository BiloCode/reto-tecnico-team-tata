import { FC } from "react";
import "./styles.scss";

import { selectable_options } from './config';

import Title from "components/common/Title";
import Description from "components/common/Description";
import StepLayout , { TStepScreen } from "components/layouts/StepLayout";
import Button from "components/common/Button";
import TextInput from "components/common/TextInput";
import SelectableOption from "components/layouts/SelectableOption";
import SelectableInput from "components/layouts/SelectableInput";
import useRegisterData from "components/hooks/useRegisterData";

type TProps = TStepScreen & {}

const Register : FC<TProps> = ({ currentStep , onNextScreen , step }) => {
  const { onSubmit , refs } = useRegisterData(onNextScreen);

  return <StepLayout step={step} currentStep={currentStep}>
    <div className="register-step">
      <div className="register-step__header">
        <Title>Hola, <b>Pepito</b></Title>
        <Description>Valida que los datos sean correctos.</Description>
      </div>
      <form onSubmit={onSubmit} className="register-step__form">
        <div className="register-step__inputs">
          <div className="register-step__normal-inputs">
            <span className="register-step__form-title">
              Datos personales del titular
            </span>
            <div className="register-step__form-inputs">
              <SelectableInput reference={refs.identificator} />
              <TextInput ref={refs.names} placeholder="Nombres" type="text" />
              <TextInput ref={refs.lastname_a} placeholder="Apellido Paterno" type="text" />
              <TextInput ref={refs.lastname_b} placeholder="Apellido Materno" type="text" />
              <TextInput ref={refs.birthday} placeholder="Fecha de Nacimiento" type="date" />
            </div>
          </div>
          <div className="register-step__selectable-inputs">
            {
              selectable_options.map(v => (
                <SelectableOption
                  key={v.id}
                  title={v.title}
                  inputRadioKey={v.inputRadioKey}
                  options={v.options}
                />
              ))
            }
          </div>
        </div>
        <div className="register-step__buttons">
          <Button type="submit" text="Continuar" ghost />
        </div>
      </form>
    </div>
  </StepLayout> 
};

export default Register;