import { FC } from "react";

export type TStepScreen = {
  step : number;
  currentStep : number;
  onNextScreen?() : void;
}

const StepLayout : FC<TStepScreen> = ({ children , currentStep , step }) => (
  <div
    style={{
      height: step === currentStep ? "auto" : 0,
      overflow : "hidden",
      transform : `translateX(-${currentStep * 100}%)`,
      transition: "transform .3s" 
    }}
  >
    {children}
  </div>
)

export default StepLayout;