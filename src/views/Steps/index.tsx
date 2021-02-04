import { FC, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import "./styles.scss";

import steps_config from './config';

import Background from "components/common/Background";
import RootLayout from "components/layouts/RootLayout";

const Steps : FC<RouteComponentProps> = () => {
  const [ currentStep , setCurrentStep ] = useState<number>(0);

  const ChangeScreen = () => setCurrentStep(step => step + 1);

  return <RootLayout>
    <Background />
    <div className="steps-screen">
      <div
        className="steps-screen__content"
        style={{ gridTemplateColumns : `repeat(${steps_config.length}, 100%)` }}
      >
        {
          steps_config.map(v => (
            <v.Component
              key={v.step}
              currentStep={currentStep}
              onNextScreen={ChangeScreen}
            />
          ))
        }
      </div>
    </div>
  </RootLayout>
};

export default Steps;