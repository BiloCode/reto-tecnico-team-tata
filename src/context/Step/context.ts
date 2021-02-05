import { createContext, useContext } from "react";
import { ISecureData , IStepScreenRegisterData , IStepScreenProtectionData } from "types";

interface IContext {
  secureData : ISecureData,
  secureDataMutateStepRegister(data : IStepScreenRegisterData) : void;
  secureDataMutateStepProtection(data : IStepScreenProtectionData) : void;
}

export const initial_secure_data : ISecureData = {
  birthday : "",
  dni : "",
  entity_secure : "",
  gender : "",
  lastname_p : "",
  lastname_m : "",
  names : "",
  protection_id : -1
};

export const initial_state : IContext = {
  secureData : initial_secure_data,
  secureDataMutateStepRegister(){},
  secureDataMutateStepProtection(){}
}


const StepContext = createContext<IContext>(initial_state);

export const useStepContext = () => useContext(StepContext);

export default StepContext;