import { FormEvent, useRef } from "react";

export default (onNextScreen? : () => void) => {
  const identificator = useRef<HTMLInputElement>(null);
  const names = useRef<HTMLInputElement>(null);
  const lastname_a = useRef<HTMLInputElement>(null);
  const lastname_b = useRef<HTMLInputElement>(null);
  const birthday = useRef<HTMLInputElement>(null);
  const gender = useRef<HTMLInputElement>(null);
  const person_protected = useRef<HTMLInputElement>(null);

  const onSubmit = (ev : FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    console.log(gender.current?.checked, person_protected.current?.checked);

    if(!identificator.current?.value || !names.current?.value ||
      !lastname_a.current?.value || !lastname_b.current?.value ||
      !birthday.current?.value || !person_protected.current?.checked || !gender.current?.checked
    ){
      return;
    }

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