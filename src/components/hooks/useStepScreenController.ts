import { useState } from "react";
import useLogout from "./useLogout";

export default () => {
  const Logout = useLogout();
  const [ currentStep , setCurrentStep ] = useState<number>(0);

  const NextScreen = () => setCurrentStep(step => step + 1);
  const PreviousScreen = () => {
    if (currentStep < 1){
      Logout();
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