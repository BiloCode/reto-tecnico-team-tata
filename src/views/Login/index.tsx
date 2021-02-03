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

const Login : FC<RouteComponentProps> = () => {
  const { comunication_politics , protection_politics , birthday, phone , identificator } = useLogin();

  return <div className="login-screen">
    <InsuraceInformation />
    <div className="login-screen__content">
      <form className="login-screen__form">
        <div className="login-screen__form-main-content">
          <div className="login-screen__form-title">
            <Title size="2em">Obten tu <b>seguro ahora</b></Title>
            <Description>Ingresa los datos para comenzar</Description>
          </div>
          <div className="login-screen__form-content">
            <SelectableInput reference={identificator} />
            <TextInput ref={birthday} placeholder="Fecha de nacimiento" type="date" />
            <TextInput ref={phone} placeholder="Celular" type="number" />
          </div>
          <div className="login-screen__form-politics">
            <PoliticsCheckbox
              ref={comunication_politics}
              text="Politica de proteccion de datos personales y los terminos y condiciones"  
            />
            <PoliticsCheckbox
              ref={protection_politics}
              text="Politica de envio de Comunicaciones Comerciales"  
            />
          </div>  
        </div> 
        <Button text="Comenzemos" />
      </form>
    </div>
  </div>
};

export default Login;