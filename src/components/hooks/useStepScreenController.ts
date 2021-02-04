import { useState } from "react";
import { useAuthenticationContext } from "context/Authentication/context";

export default () => {
  const { userDataMutate } = useAuthenticationContext();
  const [ currentStep , setCurrentStep ] = useState<number>(0);

  const NextScreen = () => setCurrentStep(step => step + 1);
  const PreviousScreen = () => {
    if (currentStep < 1){
      userDataMutate(null);
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