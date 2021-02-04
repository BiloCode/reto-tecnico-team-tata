import { FormEvent, useRef } from "react";

export default (onNextScreen? : () => void) => {
  const identificator = useRef<HTMLInputElement>(null);
  const names = useRef<HTMLInputElement>(null);
  const lastname_a = useRef<HTMLInputElement>(null);
  const lastname_b = useRef<HTMLInputElement>(null);
  const birthday = useRef<HTMLInputElement>(null);

  const onSubmit = (ev : FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if(!identificator.current?.value || !names.current?.value ||
      !lastname_a.current?.value || !lastname_b.current?.value ||
      !birthday.current?.value){
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
      birthday
    },
    onSubmit
  }
}