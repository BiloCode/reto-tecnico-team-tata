import { useState } from "react";
import "./styles.scss";

import RadioInput from "components/common/RadioInput";

const options = [
  {
    id : 0,
    text : "Option 1"
  },
  {
    id : 1,
    text : "Option 2"
  }
]

const SelectableOption = () => {
  const [ optionActive , setOptionActive ] = useState<number>(-1);

  const ClickRadioInput = (id : number) => () => setOptionActive(() => id);

  return <div className="selectable-options">
    <span className="selectable-options__title">¿A quien vamos a asegurar?</span>
    <div className="selectable-options__options">
      {
        options.map((v) => (
          <RadioInput
            key={v.id}
            title={v.text}
            select={v.id === optionActive}
            onClick={ClickRadioInput(v.id)}
          />
        ))
      }
    </div>
  </div>
};

export default SelectableOption;