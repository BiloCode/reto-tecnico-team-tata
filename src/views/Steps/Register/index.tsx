import { FC } from "react";
import { AiOutlineRight } from 'react-icons/ai'
import "./styles.scss";

import Title from "components/common/Title";
import Description from "components/common/Description";
import StepLayout , { TStepScreen } from "components/layouts/StepLayout";
import Button from "components/common/Button";
import TextInput from "components/common/TextInput";
import SelectableOption from "components/layouts/SelectableOption";
import SelectableInput from "components/layouts/SelectableInput";
import useRegisterData from "components/hooks/useRegisterData";

import { useAuthenticationContext } from "context/Authentication/context";

type TProps = TStepScreen & {}

const Register : FC<TProps> = ({ currentStep , onNextScreen , step }) => {
  const { userData } = useAuthenticationContext();
  const { onSubmit , refs } = useRegisterData(onNextScreen);
  const { birthday, names, lastname_a, lastname_b,person_protected, gender , identificator } = refs;

  return <StepLayout step={step} currentStep={currentStep}>
    <div className="register-step">
      <div className="register-step__header">
        <Title>Hola, <b>{userData?.name.first}</b></Title>
        <Description>Valida que los datos sean correctos.</Description>
      </div>
      <form onSubmit={onSubmit} className="register-step__form">
        <div className="register-step__inputs">
          <div className="register-step__normal-inputs">
            <span className="register-step__form-title">
              Datos personales del titular
            </span>
            <div className="register-step__form-inputs">
              <SelectableInput reference={identificator} defaultValue={userData?.id.value} />
              <TextInput ref={names} placeholder="Nombres" defaultValue={userData?.name.first} />
              <TextInput ref={lastname_a} placeholder="Apellido Paterno" defaultValue={userData?.name.last} />
              <TextInput ref={lastname_b} placeholder="Apellido Materno" defaultValue={userData?.name.last} />
              <TextInput ref={birthday} placeholder="Fecha de Nacimiento" type="date" defaultValue={userData?.dob.date} />
            </div>
          </div>
          <div className="register-step__selectable-inputs">
            <SelectableOption
              ref={gender}
              title="Genero"
              inputRadioKey="gender"
              options={[
                { title : "Masculino", default : userData?.gender === "male" , defaultValue : "male" },
                { title : "Femenino", default : userData?.gender === "female", defaultValue : "female" }
              ]}
            />
            <SelectableOption
              ref={person_protected}
              title="¿A quien vamos a asegurar?"
              inputRadioKey="person"
              options={[
                { title : "Solo a mi", defaultValue : "iam" },
                { title : "A mi y a mi familia", defaultValue : "all" }
              ]}
            />
          </div>
        </div>
        <div className="register-step__buttons">
          <Button type="submit" ghost>
            <span>Continuar</span>
            <span className="register-step__icon-button">
              <AiOutlineRight />
            </span>
          </Button>
        </div>
      </form>
    </div>
  </StepLayout> 
};

export default Register;