import { FormEvent, useRef } from "react";
import { useAuthenticationContext } from "context/Authentication/context";

import GetUserRandom from "utils/GetUserRandom";

export default () => {
  const { userDataMutate } = useAuthenticationContext();

  const protection_politics = useRef<HTMLInputElement>(null);
  const comunication_politics = useRef<HTMLInputElement>(null);
  const identificator = useRef<HTMLInputElement>(null);
  const birthday = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);

  const onSubmit = async (ev : FormEvent) => {
    ev.preventDefault();

    if(!protection_politics.current?.checked || !comunication_politics.current?.checked ||
      !identificator.current?.value || !birthday.current?.value || !phone.current?.value
    ){
      return;
    }

    const GetUser = new GetUserRandom();
    const user_random = await GetUser.__invoke();
    userDataMutate(user_random);
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