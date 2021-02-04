import { useState } from "react";
import { navigate } from "@reach/router";

export default () => {
  const [ currentStep , setCurrentStep ] = useState<number>(0);

  const NextScreen = () => setCurrentStep(step => step + 1);
  const PreviousScreen = () => {
    if (currentStep < 1){
      navigate("/");
      return;
    }

    setCurrentStep(step => step - 1);
  }

  return {
    currentStep,
    NextScreen,
    PreviousScreen
  }
}