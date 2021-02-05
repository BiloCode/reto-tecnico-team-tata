import { useState } from "react"

export default () => {
  const [ display , setDisplay ] = useState<boolean>(false);
  const toggleDisplay = () => setDisplay(display => !display);

  return {
    display,
    toggleDisplay
  }
}