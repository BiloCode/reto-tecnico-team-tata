import { FormEvent, useRef } from "react";

export default () => {
  const protection_politics = useRef<HTMLInputElement>(null);
  const comunication_politics = useRef<HTMLInputElement>(null);
  const identificator = useRef<HTMLInputElement>(null);
  const birthday = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);

  const onSubmit = (ev : FormEvent) => {
    ev.preventDefault();

    if(!protection_politics.current?.checked || !comunication_politics.current?.checked ||
      !identificator.current?.value || !birthday.current?.value || !phone.current?.value
    ){
      return;
    }

    console.log("Ok");
  }

  return {
    refs : {
      protection_politics,
      comunication_politics,
      birthday,
      identificator,
      phone
    },
    onSubmit
  }
}