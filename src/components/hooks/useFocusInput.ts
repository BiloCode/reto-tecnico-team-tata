import { FocusEvent, useState } from "react";

export default () => {
  const [ focus , setFocus ] = useState<boolean>();

  const onFocus = (ev : FocusEvent<HTMLInputElement>) => {
    if(ev.currentTarget.value) return;

    setFocus(() => true);
  }
  const onBlur = (ev : FocusEvent<HTMLInputElement>) => {
    if(ev.currentTarget.value) return;

    setFocus(() => false);
  }

  return {
    focus,
    onFocus,
    onBlur
  }
}