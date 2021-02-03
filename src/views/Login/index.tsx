import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import "./styles.scss";

import InsuraceInformation from "components/layouts/InsuraceInformation";
import Button from "components/common/Button";
import TextInput from "components/common/TextInput";
import Title from "components/common/Title";
import Description from "components/common/Description";
import SelectTextInput from "components/common/SelectTextInput";

const Login : FC<RouteComponentProps> = () => (
  <div className="login-screen">
    <InsuraceInformation />
    <div className="login-screen__form">
      <div className="login-screen__form-title">
        <Title size="2em">Obten tu <b>seguro ahora</b></Title>
        <Description>Ingresa los datos para comenzar</Description>
      </div>
      <div className="login-screen__form-content">
        <SelectTextInput />
        <TextInput placeholder="Fecha de nacimiento" type="date" />
        <TextInput placeholder="Celular" type="numeric" />
      </div>
      <div className="login-screen__form-politics"></div>
      <Button text="Comenzemos" />
    </div>
  </div>
);

export default Login;