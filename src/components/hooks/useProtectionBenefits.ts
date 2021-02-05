import { useStepContext } from "context/Step/context";
import { useState } from "react";

export default () => {
  const { secureDataMutateStepProtection } = useStepContext();
  const [ planCardActive , setPlanCardActive ] = useState<number>(0);

  const ChangePlanCardActive = (id : number) => () => {
    setPlanCardActive(() => id);
    secureDataMutateStepProtection({ protection_id : id });
  }
  
  return {
    planCardActive,
    ChangePlanCardActive
  }
}