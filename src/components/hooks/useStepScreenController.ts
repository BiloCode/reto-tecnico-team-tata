import { useState } from "react";

export default () => {
  const [ currentStep , setCurrentStep ] = useState<number>(0);

  const NextScreen = () => setCurrentStep(step => step + 1);
  const PreviousScreen = () => {
    if (currentStep < 1) return;

    setCurrentStep(step => step - 1);
  }

  return {
    currentStep,
    NextScreen,
    PreviousScreen
  }
}