import { FC } from "react";

export type TStepScreen = {
  currentStep : number;
  onNextScreen?() : void;
}

const StepLayout : FC<TStepScreen> = ({ children , currentStep }) => (
  <div
    style={{
      transform : `translateX(-${currentStep * 100}%)`,
      transition: "transform .3s" 
    }}
  >
    {children}
  </div>
)

export default StepLayout;