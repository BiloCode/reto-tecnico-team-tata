import { InputPatternType, InputType } from "types"

type TDropdown = {
  text : string;
  placeholder : string;
  type : InputType;
  pattern : InputPatternType,
  maxLength : number;
}

const dropdown_options : TDropdown[] = [
  {
    text : "dni",
    placeholder : "Nro. de documento",
    type : "text",
    pattern : {
      value : "[0-9]{8}",
      message : "DNI invalido"
    },
    maxLength : 8
  },
  {
    text : "carnet",
    placeholder : "Nro. de carnet",
    type : "text",
    pattern : {
      value : "[0-9]{6}",
      message : "N° de carnet invalido"
    },
    maxLength : 8
  }
];

export default dropdown_options;