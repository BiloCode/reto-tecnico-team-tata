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
import Spinner from "components/common/Spinner";

const Login : FC<RouteComponentProps> = () => {
  const { refs, onSubmit , isLoading } = useLogin();

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
            <TextInput
              ref={refs.phone}
              maxLength={9}
              placeholder="Celular"
              pattern={{ value : "[0-9]{9}", message : "Numero invalido" }} 
            />
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
        { 
          isLoading ? 
            <div className="login-screen__spinner">
              <Spinner />
            </div> : 
            <Button type="submit" text="Comenzemos" /> 
        }
      </form>
    </div>
  </RootLayout>
};

export default Login;