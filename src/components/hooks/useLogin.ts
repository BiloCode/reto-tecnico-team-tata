import { FormEvent, useRef, useState } from "react";
import faker from "faker";
import { useAuthenticationContext } from "context/Authentication/context";

import GetUserRandom from "utils/GetUserRandom";
import GetUserRandomWithFaker from "utils/GetUserRandomWithFaker";

export default () => {
  const { userDataMutate } = useAuthenticationContext();

  const [ isLoading , setIsLoading ] = useState<boolean>(false);

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

    setIsLoading(() => true);

    const data = {
      id : { value : identificator.current.value },
      dob : { date : birthday.current.value }
    }

    try {
      const GetUser = new GetUserRandom();
      const user_random = await GetUser.__invoke();
      if(user_random){
        userDataMutate({ ...user_random, ...data });
      }
    } catch (error) {
      const GetUserFake= new GetUserRandomWithFaker();
      const fake_user = GetUserFake.__invoke();
      userDataMutate({ ...fake_user, ...data });
    } finally {
      setIsLoading(() => false);
    }
  }

  return {
    refs : {
      protection_politics,
      comunication_politics,
      birthday,
      identificator,
      phone
    },
    onSubmit,
    isLoading
  }
}