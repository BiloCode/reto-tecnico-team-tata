import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import "./styles.scss";

import Background from "components/common/Background";
import Title from "components/common/Title";
import Description from "components/common/Description";
import Button from "components/common/Button";
import RootLayout from "components/layouts/RootLayout";

import useLogout from "components/hooks/useLogout";

const Thanks : FC<RouteComponentProps> = () => {
  const Logout = useLogout();

  return <RootLayout>
    <Background />
    <div className="thanks-screen">
      <div className="thanks-screen__text">
        <div className="thanks-screen__text-container">
          <Title>
            ¡Gracias por <b>confiar en nosotros!</b>
          </Title>
          <Description>
            Queremos conocer mejor la salud de los asegurados.
            Un asesor <b>se pondra en contacto</b> contigo en las siguientes <b>48 horas.</b>
          </Description>
        </div>
        <div className="thanks-screen__button-container">
          <Button onClick={Logout}>Ir a salud</Button>
        </div>
      </div>
    </div>
  </RootLayout>
};

export default Thanks;