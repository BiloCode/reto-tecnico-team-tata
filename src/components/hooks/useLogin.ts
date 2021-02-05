import { FormEvent, useRef, useState } from "react";
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

  const _isInputsOk = () => {
    if(!protection_politics.current?.checked || !comunication_politics.current?.checked ||
      !identificator.current?.value || !birthday.current?.value || !phone.current?.value
    ){
      return false;
    }

    let isNumber = /[0-9]{8}/g
    if(!isNumber.test(identificator.current.value)){
      identificator.current.focus();
      return false;
    }

    let isNumberPhone = /[0-9]{9}/g
    if(!isNumberPhone.test(phone.current.value)){
      phone.current.focus();
      return false;
    }

    return true;
  }

  const onSubmit = async (ev : FormEvent) => {
    ev.preventDefault();

    if(!_isInputsOk()){
      alert("Existen campos invalidos");
      return;
    }
      
    setIsLoading(() => true);
    const data = {
      id : { value : identificator.current!.value },
      dob : { date : birthday.current!.value }
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