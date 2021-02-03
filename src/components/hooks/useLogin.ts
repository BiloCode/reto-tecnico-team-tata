import { useRef } from "react";

export default () => {
  const protection_politics = useRef<HTMLInputElement>(null);
  const comunication_politics = useRef<HTMLInputElement>(null);
  const identificator = useRef<HTMLInputElement>(null);
  const birthday = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);

  return {
    protection_politics,
    comunication_politics,
    birthday,
    identificator,
    phone
  }
}