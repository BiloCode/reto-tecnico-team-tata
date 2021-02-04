import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import "./styles.scss";

import steps_config from './config';

import Background from "components/common/Background";
import RootLayout from "components/layouts/RootLayout";
import StepIndicator from "components/layouts/StepIndicator";

import useStepScreenController from "components/hooks/useStepScreenController";

const Steps : FC<RouteComponentProps> = () => {
  const { NextScreen , PreviousScreen , currentStep } = useStepScreenController();  

  return <RootLayout>
    <Background />
    <div className="steps-screen">
      <div className="steps-screen__content">
        <StepIndicator step={currentStep} onClick={PreviousScreen} />
        <div
          className="steps-screen__steps"
          style={{ gridTemplateColumns : `repeat(${steps_config.length}, 100%)` }}
        >
          {
            steps_config.map(v => (
              <v.Component
                key={v.step}
                step={v.step}
                currentStep={currentStep}
                onNextScreen={NextScreen}
              />
            ))
          }
        </div>  
      </div>
    </div>
  </RootLayout>
};

export default Steps;