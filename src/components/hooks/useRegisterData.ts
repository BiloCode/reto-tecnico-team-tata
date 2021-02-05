import { FormEvent, useRef } from "react";
import { useStepContext } from "context/Step/context";

export default (onNextScreen? : () => void) => {
  const { secureDataMutateStepRegister } = useStepContext();

  const identificator = useRef<HTMLInputElement>(null);
  const names = useRef<HTMLInputElement>(null);
  const lastname_a = useRef<HTMLInputElement>(null);
  const lastname_b = useRef<HTMLInputElement>(null);
  const birthday = useRef<HTMLInputElement>(null);
  const gender = useRef<HTMLInputElement>(null);
  const person_protected = useRef<HTMLInputElement>(null);

  const onSubmit = (ev : FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if(!identificator.current?.value || !names.current?.value ||
      !lastname_a.current?.value || !lastname_b.current?.value ||
      !birthday.current?.value || !person_protected.current?.value || 
      !gender.current?.value){
      return;
    }

    secureDataMutateStepRegister({
      birthday : birthday.current.value,
      gender : gender.current.value,
      dni : identificator.current.value,
      entity_secure : person_protected.current.value,
      lastname_p : lastname_a.current.value,
      lastname_m : lastname_b.current.value,
      names : names.current.value
    });

    window.scrollTo({ top : 0 , behavior : "smooth" });
    onNextScreen && onNextScreen();
  }

  return {
    refs : {
      identificator,
      names,
      lastname_a,
      lastname_b,
      birthday,
      gender,
      person_protected
    },
    onSubmit
  }
}