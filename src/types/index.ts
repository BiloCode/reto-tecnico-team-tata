export type InputType = "text" | "date" | "email" | "number";

export type InputPatternType = {
  value : string;
  message : string;
}

export type IStepScreenRegisterData = {
  dni : string;
  names : string;
  lastname_p : string;
  lastname_m : string;
  birthday : string;
  gender : string;
  entity_secure : string;
}

export type IStepScreenProtectionData = {
  protection_id : number;
}

export type ISecureData = IStepScreenRegisterData & IStepScreenProtectionData & {
}