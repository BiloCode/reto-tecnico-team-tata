import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import "./styles.scss";

import InsuraceInformation from "components/layouts/InsuraceInformation";
import Button from "components/common/Button";
import TextInput from "components/common/TextInput";
import Title from "components/common/Title";
import Description from "components/common/Description";
import SelectableInput from "components/layouts/SelectableInput";
import PoliticsCheckbox from "components/common/PoliticsCheckbox";
import useLogin from "components/hooks/useLogin";
import RootLayout from "components/layouts/RootLayout";

const Login : FC<RouteComponentProps> = () => {
  const { refs, onSubmit } = useLogin();

  return <RootLayout>
    <InsuraceInformation />
    <div className="login-screen">
      <form onSubmit={onSubmit} className="login-screen__form">
        <div className="login-screen__form-main-content">
          <div className="login-screen__form-title">
            <Title size="2em">Obten tu <b>seguro ahora</b></Title>
            <Description>Ingresa los datos para comenzar</Description>
          </div>
          <div className="login-screen__form-content">
            <SelectableInput reference={refs.identificator} />
            <TextInput ref={refs.birthday} placeholder="Fecha de nacimiento" type="date" />
            <TextInput ref={refs.phone} placeholder="Celular" type="number" />
          </div>
          <div className="login-screen__form-politics">
            <PoliticsCheckbox
              ref={refs.comunication_politics}
              inputName="protection"
              text="Politica de envio de Comunicaciones Comerciales"  
            />
            <PoliticsCheckbox
              ref={refs.protection_politics}
              inputName="comunication"
              text="Politica de proteccion de datos personales y los terminos y condiciones"  
            />
          </div>  
        </div> 
        <Button type="submit" text="Comenzemos" />
      </form>
    </div>
  </RootLayout>
};

export default Login;