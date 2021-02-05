import { FC, useState } from "react";
import { ISecureData, IStepScreenProtectionData, IStepScreenRegisterData } from "types";

import StepContext , { initial_secure_data } from "./context";

const StepProvider : FC = ({ children }) => {
  const [ secureData , setSecureData ] = useState<ISecureData>(initial_secure_data);

  const secureDataMutateStepRegister = (register_data : IStepScreenRegisterData) => (
    setSecureData(data => ({...data, ...register_data}))
  );

  const secureDataMutateStepProtection = (protection_data : IStepScreenProtectionData) => (
    setSecureData(data => ({ ...data, ...protection_data }))
  );
  
  return <StepContext.Provider value={{ 
    secureData,
    secureDataMutateStepRegister,
    secureDataMutateStepProtection
  }} >
    {children}
  </StepContext.Provider>
};

export default StepProvider;